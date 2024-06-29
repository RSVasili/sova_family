import {src, dest} from "gulp";
import plumber from "gulp-plumber";
import fileInclude from "gulp-file-include";


import {paths} from "../config/paths.js";
import notify from "gulp-notify";
import browserSync from "browser-sync";

export function htmlInclude() {
    return src(paths.src.srcHtml)
        .pipe(plumber(
            notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(fileInclude({
            prefix: '@',
            basepath: '@file',
            maxRecursion: 100
        }))
        .pipe(dest(paths.base.dist))
        .pipe(browserSync.stream());
}
