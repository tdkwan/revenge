$(document).ready(function(){
  alert("hey");
  $('.js-dropdown-item').dropdownLayer(
    'elemSelector': "js-dropdown-item",
    'containerClass': "js-dropdown-items",
    'descriptionClass': "js-description",
    'dropdownClass': "js-dropdown",
    'arrowClass': "js-dropdown-arrow",
    'dropdownContentClass': "js-dropdown-content",
    'disableDropdownClass': "js-dropdown-disable",
    'slideUpSpeed': 300,
    'slideDownSpeed': 300,
    'useSlideDown': false,
    'useSlideUp': false,
    'transitionEffect': 'swing',
    'callOnCompleteHide': function() {},
    'callOnCompleteShow': function() {}
  });
});
