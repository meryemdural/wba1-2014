/**
 * @version		$Id: k2tags.js 1812 2013-01-14 18:45:06Z lefteris.kavadas $
 * @package		K2
 * @author		JoomlaWorks http://www.joomlaworks.net
 * @copyright	Copyright (c) 2006 - 2013 JoomlaWorks Ltd. All rights reserved.
 * @license		GNU/GPL license: http://www.gnu.org/copyleft/gpl.html
 */

$K2(document).ready(function() {

  $K2('.tagRemove').click(function(event) {
    event.preventDefault();
    $K2(this).parent().remove();
  });
  $K2('ul.tags').click(function() {
    //$K2('#search-field').focus();
  });
  $K2('.k2-search-field').keypress(function(event) {
    if (event.which == '13') {
      if ($K2(this).val() != '') {
        $K2('<li id="' + this.attributes['rel'].value + '_tagAdd" class="addedTag">' + $K2(this).val() + '<span class="tagRemove" onclick="Josetta.itemChanged('+this.id+');$K2(this).parent().remove();">x</span><input type="hidden" value="' + $K2(this).val() + '" name="'+this.attributes['rel'].value + '[tags][]"></li>').insertBefore('.tags #' + this.attributes['rel'].value + '_tagAdd.tagAdd');
        Josetta.itemChanged(this);
        $K2(this).val('');
      }
    }
  });
  $K2('.k2-search-field').autocomplete({
    source : function(request, response) {
      var target = this.element[0];
      $K2.ajax({
        type : 'post',
        url : K2SitePath + 'index.php?option=com_k2&view=item&task=tags',
        data : 'q=' + request.term,
        dataType : 'json',
        success : function(data) {
          target.removeClass('tagsLoading');
          response($K2.map(data, function(item) {
            return item;
          }));
        }
      });
    },
    minLength : 3,
    select : function(event, ui) {
      $K2('<li id="' + this.attributes['rel'].value + '_tagAdd" class="addedTag">' + ui.item.label + '<span class="tagRemove" onclick="Josetta.itemChanged('+this.id+');$K2(this).parent().remove();">x</span><input type="hidden" value="' + ui.item.value + '" name="'+this.attributes['rel'].value + '[tags][]"></li>').insertBefore('.tags #' + this.attributes['rel'].value + '_tagAdd.tagAdd');
      Josetta.itemChanged(this);
      this.value = '';
      return false;
    },
    search : function(event, ui) {
      event.target.addClass('tagsLoading');
    }
  });

});