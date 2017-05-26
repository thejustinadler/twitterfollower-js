a = setInterval(function () {
  window.scrollTo(0,document.body.scrollHeight);
  $('.following .user-actions-follow-button.js-follow-btn').click();
}, 1000);
