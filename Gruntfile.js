module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-webfont');

  grunt.initConfig({
    webfont: {
      icons: {
        src: 'src/assets/svg/*.svg',
        dest: 'src/assets/fonts',
        options: {
          syntax: 'bem',
					templateOptions: {
						baseClase: 'zef-icon',
						classPrefix: 'zef-icon-',
						mixinPrefix: 'zef-icon-',
					},
        }
      }
    }
  })
}