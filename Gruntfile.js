module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        vers: grunt.template.date(new Date(), "yyyy.mm.dd"),
        //склеивание
        concat: {
            options: {
                stripBanners: true,
                banner: '/** \n' +
                    '* <%= pkg.name %>.js \n' +
                    '* version: <%= vers %> \n' +
                    '* author: <%= pkg.author %> \n' +
                    '* \n' +
                    '* <%= pkg.description %>\n' +
                    '* <%= pkg.subdescription %>\n' +
                    '*/ \n'
            },
            dist: {
                src: ["<%= pkg.sourceDir %>/config.js", "<%= pkg.sourceDir %>/checker.js"],
                dest: "<%= pkg.destinationDir %>/js/<%= pkg.name %>.js"
            }
        },

        //сжатие js
        uglify: {
            options: {
                banner: '/** \n' +
                    '* <%= pkg.name %>.js \n' +
                    '* version: <%= vers %> \n' +
                    '* author: <%= pkg.author %>  \n' +
                    '* <%= pkg.description %>\n' +
                    '*/ \n'
            },
            dist: {
                files: {
                    "<%= pkg.destinationDir %>/js/<%= pkg.name %>.min.js": ["<%= pkg.destinationDir %>/js/<%= pkg.name %>.js"]
                }
            }
        },

        //сжатие png
        imagemin : {
            dynamic : {
                files : [{
                    expand : true,
                    cwd : "<%= pkg.source %>/img",
                    src : "**/*.png",
                    dest: "<%= pkg.destinationDir %>/img"
                }]
            }

        }

    });

    //Модули
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Задания
    grunt.registerTask('default', ['concat', 'uglify']);
};
