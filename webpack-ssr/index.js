const React = require("react");
const ReactDOM = require("react-dom");
const ReactDOMServer = require("react-dom/server");
const vm = require("vm");

const createElement = (tag, text = undefined) => {
    return {
        _tag: tag,
        _text: text,
        className: "",
        id: "",
        children: [],
        get outerHTML() {
            if (this._text !== undefined) return this._text;
            const children = this.children.map((child) => child.outerHTML).join("\n");
            return `<${this._tag}${this.id ? ` id="${this.id}"` : ""}${this.className ? ` class="${this.className}"` : ""}>${children}${this._text ? this._text : ""}</${this._tag}>`;
        },
        get innerHTML() {
            if (this._text !== undefined) return this._text;
            return this.children.map((child) => child.outerHTML).join("");
        },
        get innerText() {
            if (this._text !== undefined) return this._text;
            return this.children.map((child) => child.innerText).join("");
        },
        set innerText(text) {
            this._text = text;
            this.children = [];
        },
        appendChild(child) {
            this.children.push(child);
        },
        removeAttribute(name) {
            // pass
        },
    }
}

class WebpackSSRPlugin {
    constructor (options = {}) {
        const {
            filename = "main.js",
            entrypoint = "app",
        } = options;

        this.filename = filename;
        this.entrypoint = entrypoint;
    }

    apply(compiler) {
        compiler.hooks.thisCompilation.tap("webpack-ssr", (compilation) => {
            compilation.hooks.processAssets.tap("webpack-ssr", (assets) => {
                const head = createElement("head");
                const ctx = vm.createContext({
                    window: {
                        ssr: true
                    },
                    self: {},
                    document: {
                        createElement: (tagName) => {
                            const elt = createElement(tagName);
                            return elt;
                        },
                        querySelector(selector) {
                            if (selector === "head") {
                                return head;
                            }

                            throw new Error("Not set up to select", selector);
                        },
                        createTextNode(text) {
                            return createElement("text-node", text);
                        },
                        head,
                    },
                    console,
                    exports: {},
                    React,
                    ReactDOM,
                    ReactDOMServer,
                    require(mod) {
                        switch (mod) {
                            case "React":
                            case "react":
                                return React;
                            case "ReactDOM":
                            case "react-dom":
                                return ReactDOM;
                            case "ReactDOMServer":
                            case "react-dom/server":
                                return ReactDOMServer;
                        }
                    }
                })

                vm.runInContext(
                    assets[this.filename].source(),
                    ctx,
                );

                ctx["App"] = ctx.exports.hypatia.App;

                compilation.ssr = {};
                compilation.ssr.bodyContents = vm.runInContext(
                    "ReactDOMServer.renderToString(React.createElement(App))",
                    ctx
                )

                compilation.ssr.headContents = head.outerHTML;
            })
        });
    }
}

module.exports.WebpackSSRPlugin = WebpackSSRPlugin;