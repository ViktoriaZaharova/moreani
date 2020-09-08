
var gulp 		 = require('gulp'),
    pug 		 = require('gulp-pug'),
    sass 		 = require('gulp-sass'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglifyjs'),
    cssnano      = require('gulp-cssnano'),
    rename       = require('gulp-rename'),
    del          = require('del'),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    cache        = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    uncss        = require('gulp-uncss'),

    svgSprite = require('gulp-svg-sprite'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),

    plumber      = require('gulp-plumber'),
    notify       = require('gulp-notify'),
    browserSync  = require('browser-sync');

gulp.task('sass', function(done) {
    return gulp.src('app/sass/main.scss')
        .pipe(sass({
            //errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', notify.onError())
        .pipe(autoprefixer(['last 5 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}));

    done()
});

gulp.task('browser-sync', function(done) {
    browserSync({
        server: {
            baseDir: 'app'
        },
        host:      '192.168.1.243',
        port:      3000,
        notify: false
    });
    done()
});

gulp.task('clean', function(done){
    del.sync('build');
    done()
});

gulp.task('clear', function(done){
    cache.clearAll();
    done()
});


gulp.task('pug', function(){
    return gulp.src('app/pug/*.pug')
        .pipe(pug({
            pretty: true
            }))
    .pipe(gulp.dest('app/'))
    //.pipe(reload({stream: true}))
});


gulp.task('svg', function () {
    return gulp.src('app/svg/*.svg') // svg files for sprite
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        // remove all fill, style and stroke declarations in out shapes
        .pipe(cheerio({
            run: function($) {
                $('[fill]').removeAttr('fill');
                // $('[stroke]').removeAttr('stroke');
                // $('[style]').removeAttr('style');
            },
            parserOptions: {
                xmlMode: true
            }
        }))
        .pipe(svgSprite({
                mode: {
                    stack: {
                        sprite: "../sprite.svg"  //sprite file name
                    }
                },
            }
        ))

        .pipe(gulp.dest('app/img/svg-sprite/'));
});

//'app/js/scripts/select2.min.js',
gulp.task('scripts', function(done) {
    return gulp.src([ // Берем все необходимые библиотеки
        'app/js/scripts/jquery-1.10.2.min.js',
        'app/js/scripts/bootstrap.js',
        'app/js/scripts/jquery.inputmask.js',
        'app/js/scripts/select2.min.js',
        'app/js/scripts/jquery-ui.js',
        'app/js/scripts/perfect-scrollbar.jquery.js',
        'app/js/scripts/owl.carousel.js',
        'app/js/scripts/priority-nav.js',
        'app/js/scripts/svgxuse.js',
        'app/js/scripts/common.js'
    ])
        .pipe(concat('scrips.min.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('app/js')) // Выгружаем в папку app/js
    done()
});

gulp.task('img', function(){
    return gulp.src(['app/img/**/*.jpg', 'app/img/**/*.png'])
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlagins: [
                {removeViewBox: false},
                {cleanupIDs: false}
            ],
            une: [pngquant()]
        })))
        .pipe(gulp.dest('build/img'));
});

gulp.task('watch', gulp.series('browser-sync', 'pug', 'sass', 'svg', 'scripts', function(done) {
    gulp.watch('app/sass/**/*.+(sass|scss)', gulp.series('sass'));
    gulp.watch('app/pug/*.pug', gulp.series('pug'));
    gulp.watch('app/svg/*.svg', gulp.series('svg'));
    gulp.watch('app/js/scripts/**/*.js', gulp.series('scripts'));
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/js/*.js").on('change', browserSync.reload);

    gulp.watch("app/img/svg-sprite/*.svg").on('change', browserSync.reload);

    done()
}));

gulp.task('build', gulp.series('clean', 'img', 'sass', 'pug', 'scripts', function(){
    return gulp.src('app/css/**/*').pipe(gulp.dest('build/css')),
           gulp.src('app/js/*.js').pipe(gulp.dest('build/js')),
           gulp.src('app/*.html').pipe(gulp.dest('build/')),
           gulp.src('app/*.ico').pipe(gulp.dest('build/')),
           gulp.src('app/*.php').pipe(gulp.dest('build/')),
           gulp.src('app/img/**/*.svg').pipe(gulp.dest('build/img/')),
           gulp.src('app/img/**/*.gif').pipe(gulp.dest('build/img/')),
           gulp.src('app/video-bg/**/*').pipe(gulp.dest('build/video-bg/')),
           gulp.src('app/pdf/**/*').pipe(gulp.dest('build/pdf/')),
           gulp.src('app/fonts/**/*').pipe(gulp.dest('build/fonts'));



}));
