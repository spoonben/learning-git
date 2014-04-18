$(function () {
  $('.basic-commands li').on('click', function () {
    var command = $(this).text();
    $('.description').val($('.' + command + '-description').text());
  });
});
