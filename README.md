# html.ntdlabs

app - файлы для верстки<br/>
build - собраннная верстка

# Устрановка  

    ...
    npm i
    ...
    
# Работа 
    ...
    gulp watch
    запуск работы с файлами папки app (pug,scss, ...)
    ...
    gulp build 
    сборка и оптимизация верстки с папки app (при каждой сборке папка build удаляется и создается заново. 
    при билде сжимаются картинки
    ...
    
# Работа с JS 
    библиотеки подключаются и минифицируются в gulpfile.js 
    ...
    gulp.task('scripts', function(done) {
        return gulp.src([ // Берем все необходимые библиотеки
            'app/js/scripts/jquery-1.10.2.min.js',
            'app/js/scripts/bootstrap.js',
            'app/js/scripts/jquery.inputmask.js',
            'app/js/scripts/select2.min.js',
            'app/js/scripts/perfect-scrollbar.jquery.js',
            'app/js/scripts/owl.carousel.js',
            'app/js/scripts/svgxuse.js',
            'app/js/scripts/common.js'
        ])
            .pipe(concat('scrips.min.js')) // Собираем их в кучу в новом файле libs.min.js
            .pipe(uglify()) // Сжимаем JS файл
            .pipe(gulp.dest('app/js')) // Выгружаем в папку app/js
        done()
    });
    
    ...
    свои скрипты в файле common.js
    ...

# Работа с SVG спрайтами 
    ```
    +icon('05_create-shop','newclass')
    ```
    
    svg для спрайта находятся в app/svg/
    сам спрайт лежит в app/img/sprite/


верстку брать с папки build, если верстаем - работаем с файлами jade с папки app 