$(document).foundation()

// when the page loads, hide all panels except for the one with the id 'one'
$('.panel').not('#one').hide();

// on click, hide the currently active panel and show the one selected
$('nav').on('click','a',function(e){
  // don't jump to the panel (the default action)
  e.preventDefault();
  // get the id of the selected panel
  var curr = $(this).attr('href');
  // hide all the panels
  $('.panel').hide();
  // show the selected panel
  $(curr).show();
});
