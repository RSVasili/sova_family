import {dest, src} from "gulp";
// import ttf2woff from 'gulp-ttf2woff';
// import ttf2woff2 from 'gulp-ttf2woff2';

import {paths} from "../config/paths.js";

export function resources() {
    return src(paths.src.srcResources, { encoding: false })
        // .pipe(ttf2woff(
        //     src(paths.src.srcFonts, { encoding: false })
        //         .pipe(dest(paths.build.buildFonts))
        // ))
        // .pipe(ttf2woff2(
        //     src(paths.src.srcFonts, { encoding: false })
        //         .pipe(dest(paths.build.buildFonts))
        // ))
        .pipe(dest(paths.build.buildResources));
}
