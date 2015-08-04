module.exports = function (grunt) {

    grunt.initConfig({
        responsive_images: {
            myTask: {
                options: {
                    engine: 'im',
                    sizes: [
                        {
                            width: 100,
                            height: 75,
                            suffix: '_sm',
                            quality: 75
                        }
                    ]
                },

                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png,jpeg}'],
                    cwd: 'views/images/',
                    custom_dest: 'views/images/min'
}]
            }
        },
        cssmin: {
   dist: {
      files: {
         'css/min/style.min.css': ['css/**/*.css']
      }
  }
}

    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('img', ['responsive_images']);
    grunt.registerTask('default', ['cssmin']);
};