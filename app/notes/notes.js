angular.module('meganote.notes', [
  'ui.router'
])

.config(function($stateProvider) {
  $stateProvider

  .state('notes', {
      url: '/notes',
      templateUrl: 'notes/notes.html',
      controller: 'NotesController'
    })

  .state('notes.form', {
    url: '/:noteId',
    templateUrl: 'notes/notes-form.html'
  });
})

.controller('NotesController', function() {
});
