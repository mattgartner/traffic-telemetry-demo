# starter-template
Starter template to bootstrap a new project

# key
&#x1F535; - actively used

&#x1F534; - needs updating/investigation

&#x1F536; - still to be implemented 

# npm scripts in package.json

start: runs gulp, gulp-watch and lite-server concurrently

lite: start a lite-server with browsersync

gulp: runs gulp

gulp-watch: runs gulp-watch

# npm Dependencies 

## minififiers 

* &#x1F535; &nbsp; cssnano: takes formatted CSS and optimizes it for production. Powered by PostCSS [http://cssnano.co/]

* &#x1F534; &nbsp; gulp-clean-css: gulp wrapper for clean-css [https://github.com/jakubpawlowicz/clean-css]

* &#x1F535; &nbsp; gulp-htmlmin: gulp wrapper for HTMLMinifier [https://github.com/kangax/html-minifier]

* &#x1F536; &nbsp; gulp-imagemin: minifies PNG, JPEG, GIF and SVG images [https://www.npmjs.com/package/gulp-imagemin]

* &#x1F536; &nbsp; gulp-svgmin: SVG minifier [https://www.npmjs.com/package/gulp-svgmin]

* &#x1F535; &nbsp; gulp-uglify: JS minifier [https://www.npmjs.com/package/gulp-uglify]

## extensions
* &#x1F536; &nbsp; autoprefixer: PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use. [https://github.com/postcss/autoprefixer]

* &#x1F536; &nbsp; gulp-sourcemaps: adds source map support to gulp [https://github.com/gulp-sourcemaps/gulp-sourcemaps]

* &#x1F536; &nbsp; postcss-cssnext: helps you to use the latest CSS syntax today. It transforms CSS specs into more compatible CSS so you don’t need to wait for browser support. [https://www.npmjs.com/package/postcss-cssnext] **may include autoprefixer already - consider removing**

* &#x1F534; &nbsp; postcss-scss: **may be unnecessary if moving just to PostCSS altogether - consider removing** main use case of this plugin is to apply PostCSS transformations directly to SCSS source code. For example, if you ship a theme written in SCSS and need Autoprefixer to add the appropriate vendor prefixes to it; or you need to lint SCSS with a plugin such as Stylelint [https://github.com/postcss/postcss-scss] 

* &#x1F536; &nbsp; postcss-sorting: PostCSS plugin to keep rules and at-rules content in order [https://github.com/hudochenkov/postcss-sorting]

* &#x1F536; &nbsp; postcss-utilities: includes the most commonly used mixins, shortcuts and helpers. It's as easy as specifying @util utility-name in your stylesheet [https://github.com/ismamz/postcss-utilities] 

* &#x1F536; &nbsp; precss: PreCSS is a tool that allows you to use Sass-like markup in your CSS files. [https://github.com/jonathantneal/precss]

## miscellaneous 

* &#x1F535; &nbsp; lite-server: lightweight development only node server that serves a web app, opens it in the browser, refreshes when html or javascript change, injects CSS changes using sockets, and has a fallback page when a route is not found. Includes BrowserSync [https://www.npmjs.com/package/lite-server]

## build tools

* &#x1F535; &nbsp; concurrently: run multiple commands concurrently [https://www.npmjs.com/package/concurrently]

* &#x1F536; &nbsp; del: deletes files and folders [https://www.npmjs.com/package/del]

* &#x1F535; &nbsp; gulp: build automation toolkit [https://www.npmjs.com/package/gulp]

* &#x1F536; &nbsp; gulp-cached: keeps an in-memory cache of files (and their contents) that have passed through it. If a file has already passed through on the last run it will not be passed downstream. This means you only process what you need and save time + resources. [https://www.npmjs.com/package/gulp-cached]

* &#x1F536; &nbsp; gulp-changed: only passes through changed files. By default, it's only able to detect whether files in the stream changed. [https://www.npmjs.com/package/gulp-changed]

* &#x1F535; &nbsp; gulp-concat: simple file concatenation [https://www.npmjs.com/package/gulp-concat]

* &#x1F535; &nbsp; gulp-dest: easily defining destination paths using path variables [https://www.npmjs.com/package/gulp-dest]

* &#x1F535; &nbsp; gulp-inject: a stylesheet, javascript and webcomponent reference injection plugin for gulp [https://www.npmjs.com/package/gulp-inject]

* &#x1F536; &nbsp; gulp-newer: passes through only those source files that are newer than corresponding destination files.

* &#x1F536; &nbsp; gulp-postcss: pipe CSS through several plugins, but parse CSS only once [https://www.npmjs.com/package/gulp-postcss]

* &#x1F536; &nbsp; gulp-remember: remembers files that have passed through it. gulp-remember adds all the files it has ever seen back into the stream. gulp-remember pairs nicely with gulp-cached when you want to only rebuild the files that changed, but still need to operate on all files in the set [https://www.npmjs.com/package/gulp-remember]

* &#x1F536; &nbsp; gulp-rename: simple plugin to rename files [https://www.npmjs.com/package/gulp-rename]

* &#x1F535; &nbsp; gulp-size: logs out the total size of files in the stream and optionally the individual file-sizes.

* &#x1F536; &nbsp; gulp-stylelint: gulp wrapper for stylelint [https://github.com/stylelint/stylelint] [https://www.npmjs.com/package/gulp-stylelint]

* &#x1F534; &nbsp; gulp-util: group of gulp utilities, such as logging [https://www.npmjs.com/package/gulp-util]

