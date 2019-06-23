## Wordpress Gutenberg ES6 React JSX

ES6 BABEL core and BABEL cli Installation:

``` npm install --save-dev @babel/core @babel/cli ```

---


INSTALL BABEL CLI GLOBAL if you don't have babel cli in your node.

``` npm install -g babel-cli ```

---


INSTALL transform react JSX

``` npm install --save-dev @babel/plugin-transform-react-jsx ```

---


CONFIG in .babelrc file

description: pragma is the variable comes from wp.element


``` 
{
    "presets": ["@babel/preset-env"],
    "plugins": [
        ["@babel/plugin-transform-react-jsx", { "pragma": "createElement" }]
    ]
} 
```

---


Install BABEL Module preset-ennv

``` npm install --save-dev @babel/preset-env ```

---


COMPILING CONFIG

``` "dev": "babel \"input.js\" \"-o\" \"output.js\"" ```
