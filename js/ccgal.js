
jQuery(document).ready(function () {
  $.featherlightGallery.prototype.afterContent = function() {
  var caption = this.$currentTarget.find('.ccgal-figcaption').html();
  this.$instance.find('.ccgal-caption').remove();
  $('<div class="ccgal-caption">').text(caption).appendTo(this.$instance.find('.featherlight-content'));
};
});
