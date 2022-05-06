$(function() {

  /* Switch shadow function in order to select the right shadow with the selected race*/
  var $shadow = $('.attr_shadow');
  var $origine = $('#attr_origine');
  var $arme = $('#attr_arme');
  var $weaponR = $('#attr_right_hand');
 

  $origine.on('change', function() {
    $shadow.attr('src', $origine.val());
  });

  $arme.click(function (e) { 
    e.preventDefault();
    $weaponR.toggle();
  });

  $("#head").click(function (e) { 
    e.preventDefault();
    $("#attr_head").toggle();
  });

});