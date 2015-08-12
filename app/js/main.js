$('[data-event]').on('click', function() {
  _gs('event', $(this).data('event'));
});
