const srcPath = './src';
const distPath = './dist';

export const paths = {
    base: {
        src: srcPath,
        dist: distPath
    },
    src: {
        srcHtml: srcPath + '/*.html',
        srcScss: srcPath + '/scss/**/*.+(scss|sass)',
        srcResources: srcPath + '/resources/**',
        srcFonts: srcPath + '/resources/fonts/**/*.ttf',
        srcImages: srcPath + '/images/**/*.{jpg,jpeg,png,webp,gif}',
        srcScripts: srcPath + '/js/**/*.js',
        srcPartials: srcPath + '/partials'

    },
    build: {
        buildHtml: distPath,
        buildCss: distPath + '/css',
        buildResources: distPath + '/resources',
        buildFonts: distPath + '/resources/fonts',
        buildImages: distPath + '/images',
        buildScripts: distPath + '/scripts'

    }
}
