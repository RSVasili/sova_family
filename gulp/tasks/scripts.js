import {src, dest} from "gulp";
import uglify from "gulp-uglify";
import rename from "gulp-rename";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browserSync from "browser-sync";

import {paths} from "../config/paths.js";

export function scripts() {
    return src(paths.src.srcScripts)
        .pipe(plumber(
            notify.onError({
                title: "Scripts",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(uglify())
        .pipe(rename({suffix: ".min", prefix: ""}))
        .pipe(dest(paths.build.buildScripts))
        .pipe(browserSync.stream());
}