import gulp, {src, dest, series, watch} from "gulp";
import browserSync from "browser-sync";

//import paths
import {paths} from "./gulp/config/paths.js";

//import tasks
import {html} from "./gulp/tasks/html.js";
import {styles} from "./gulp/tasks/styles.js";
import {resources} from "./gulp/tasks/resources.js";
import {images} from "./gulp/tasks/images.js";
import {scripts} from "./gulp/tasks/scripts.js";
import {clean} from "./gulp/tasks/clean.js";
import {htmlInclude} from "./gulp/tasks/html-Include.js";
import {htmlmin} from "./gulp/tasks/htmlmin.js";
// import {htmlmin} from "./gulp/tasks/htmlmin.js";


function watcher() {
    browserSync.init({
        server: {
            baseDir: paths.base.dist,
        },
        notify: false,
        port: 3000
    });

    // watch(paths.src.srcHtml, html);
    watch(`${paths.src.srcPartials}/*.html`, htmlInclude);
    watch(`${paths.base.src}/*.html`, htmlInclude);
    watch(paths.src.srcScss, styles);
    watch(paths.src.srcScripts, scripts);
    watch(paths.src.srcImages, images);
    watch(paths.src.srcResources, resources);
}


export const dev = series(clean, htmlInclude, scripts, styles, resources, images, watcher);


gulp.task('default', dev);
