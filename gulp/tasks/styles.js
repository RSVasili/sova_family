import {dest, src} from "gulp";
import browserSync from "browser-sync";

import {paths} from "../config/paths.js";

//Plugins
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import gulpAutoprefixer from "gulp-autoprefixer";
import sourcemaps from "gulp-sourcemaps";
import cleanCss from "gulp-clean-css";
import rename from "gulp-rename";

const sass = gulpSass(dartSass);

export function styles() {
    return src(paths.src.srcScss)
        .pipe(plumber(
            notify.onError({
                title: "SCSS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(sass.sync({
            outputStyle: "expanded",
        }))
        .pipe(sourcemaps.init())
        .pipe(gulpAutoprefixer({
            cascade: false,
            grid: true
        }))
        .pipe(dest(paths.build.buildCss))
        .pipe(cleanCss({
            level: 2
        }))
        .pipe(rename({suffix: '.min', prefix: ''}))
        // .pipe(sourcemaps.write('.'))
        .pipe(dest(paths.build.buildCss, {sourcemaps: '.'}))
        .pipe(browserSync.stream());
}
