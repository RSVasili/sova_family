import {src, dest} from "gulp";
import imagemin, {gifsicle, mozjpeg, optipng, svgo} from "gulp-imagemin";
import newer from 'gulp-newer';
import {paths} from "../config/paths.js";
import plumber from "gulp-plumber";
import notify from "gulp-notify";

export function images() {
    return src(paths.src.srcImages, {encoding: false})
        .pipe(plumber(
            notify.onError({
                title: "Images",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(newer(paths.build.buildImages))
        .pipe(imagemin([
            gifsicle({interlaced: true}),
            mozjpeg({quality:80, progressive: true}),
            optipng({optimizationLevel: 5}),
            svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(dest(paths.build.buildImages));
}