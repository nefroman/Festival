const { src, dest, watch } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber')

function css(cd){
    src('src/scss/**/*.scss')    //Identificar el archivo SASS
        .pipe(plumber())    
        .pipe( sass() )    //Compilarlo
        .pipe(dest("build/css"))    //Almacenar en disco duro

    cd();
}

function dev(cd){
    watch('src/scss/**/*.scss', css)

    cd();
}

exports.css = css;
exports.dev = dev;