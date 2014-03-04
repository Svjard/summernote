require.config({
  baseUrl: 'src/js',
  paths: {
    jquery: '//code.jquery.com/jquery-1.9.1.min',
    bootstrap: '//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min'
  },
  shim: {
    bootstrap: ['jquery']
  }
});

require([
  'jquery', 'bootstrap',
  'summernote'
], function ($) {
  // summernote
  $('.summernote').summernote({
    height: 300,                  // set editable area's height
    focus: true,                  // set focus editable area after summernote loaded
    tabsize: 2                    // size of tab
    // disableDragAndDrop: false, // disable drag and drop event
  });
});
