import {src, dest} from 'gulp';
import plumber from "gulp-plumber";
import notify from "gulp-notify";


import gulpHtmlmin from 'gulp-htmlmin';
import {paths} from "../config/paths.js";

export function htmlmin() {
    return src(paths.src.srcHtml)
        .pipe(plumber(
            notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(dest(paths.build.buildHtml));
}