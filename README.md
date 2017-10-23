# starter-template
Starter template to bootstrap a new project. Uses the Express framework to serve files using the EJS (embedded JS) templating language. CSS files are processed with PostCSS, with plugins for imports, autoprefixes, minification, etc. By running a single script (npm run dev), a BrowserSync session starts and watches for any changes in the CSS files to auto-reload upon changes after the postcss processing takes place. 


# npm scripts

clean: deletes everything in the dist/ directory and recreates a blank directory

css: collection of postcss scripts to run postcss-import, cssnext, and cssnano while adding external sourcemaps. Outputs minified version to dist/css 

watch:css: same as css, but watches the directory for changes

browser-sync: sets up browser-sync to use a proxy for Express. This script is essentially useless on its own, unless run in conjunction with 'node index.js' as that's what sets up the proxy site. 

dev: compilation script to start index.js, watch for css file changes, and run browser-sync