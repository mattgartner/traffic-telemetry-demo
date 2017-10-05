# starter-template
Starter template to bootstrap a new project

# npm Install commands

npm install --save-dev concurrently

[needs updating] npm install --save-dev gulp gulp-autoprefixer gulp-cached gulp-clean-css gulp-concat gulp-remember gulp-rename gulp-sass

npm install --save-dev lite-server

# npm scripts in package.json

start: runs gulp, gulp-watch and lite-server concurrently

lite: start a lite-server with browsersync

gulp: runs gulp

gulp-watch: runs gulp-watch

# npm Dependencies 

## minififiers 

cssnano: takes formatted CSS and optimizes it for production. Powered by PostCSS [http://cssnano.co/]

gulp-clean-css: gulp wrapper for clean-css [https://github.com/jakubpawlowicz/clean-css]

gulp-htmlmin: gulp wrapper for HTMLMinifier [https://github.com/kangax/html-minifier]

gulp-imagemin: minifies PNG, JPEG, GIF and SVG images [https://www.npmjs.com/package/gulp-imagemin]

gulp-svgmin: SVG minifier [https://www.npmjs.com/package/gulp-svgmin]

gulp-uglify: JS minifier [https://www.npmjs.com/package/gulp-uglify]

## extensions
autoprefixer: PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use. [https://github.com/postcss/autoprefixer]

gulp-sourcemaps: adds source map support to gulp [https://github.com/gulp-sourcemaps/gulp-sourcemaps]

postcss-cssnext: helps you to use the latest CSS syntax today. It transforms CSS specs into more compatible CSS so you don’t need to wait for browser support. [https://www.npmjs.com/package/postcss-cssnext] **may include autoprefixer already - consider removing**

postcss-scss: **may be unnecessary if moving just to PostCSS altogether - consider removing** main use case of this plugin is to apply PostCSS transformations directly to SCSS source code. For example, if you ship a theme written in SCSS and need Autoprefixer to add the appropriate vendor prefixes to it; or you need to lint SCSS with a plugin such as Stylelint [https://github.com/postcss/postcss-scss] 

postcss-sorting: PostCSS plugin to keep rules and at-rules content in order [https://github.com/hudochenkov/postcss-sorting]

postcss-utilities: includes the most commonly used mixins, shortcuts and helpers. It's as easy as specifying @util utility-name in your stylesheet [https://github.com/ismamz/postcss-utilities] 
precss: PreCSS is a tool that allows you to use Sass-like markup in your CSS files. [https://github.com/jonathantneal/precss]

## miscellaneous 

lite-server: lightweight development only node server that serves a web app, opens it in the browser, refreshes when html or javascript change, injects CSS changes using sockets, and has a fallback page when a route is not found. Includes BrowserSync [https://www.npmjs.com/package/lite-server]

## build tools

concurrently: run multiple commands concurrently [https://www.npmjs.com/package/concurrently]

gulp: build automation toolkit [https://www.npmjs.com/package/gulp]

gulp-cached: keeps an in-memory cache of files (and their contents) that have passed through it. If a file has already passed through on the last run it will not be passed downstream. This means you only process what you need and save time + resources. [https://www.npmjs.com/package/gulp-cached]

gulp-changed: only passes through changed files. By default, it's only able to detect whether files in the stream changed. [https://www.npmjs.com/package/gulp-changed]

gulp-concat: simple file concatenation [https://www.npmjs.com/package/gulp-concat]

gulp-newer: passes through only those source files that are newer than corresponding destination files.

gulp-postcss: pipe CSS through several plugins, but parse CSS only once [https://www.npmjs.com/package/gulp-postcss]

gulp-remember: remembers files that have passed through it. gulp-remember adds all the files it has ever seen back into the stream. gulp-remember pairs nicely with gulp-cached when you want to only rebuild the files that changed, but still need to operate on all files in the set [https://www.npmjs.com/package/gulp-remember]

gulp-rename: simple plugin to rename files [https://www.npmjs.com/package/gulp-rename]

gulp-size: logs out the total size of files in the stream and optionally the individual file-sizes.

gulp-stylelint: gulp wrapper for stylelint [https://github.com/stylelint/stylelint] [https://www.npmjs.com/package/gulp-stylelint]

gulp-util: group of gulp utilities, such as logging [https://www.npmjs.com/package/gulp-util]

