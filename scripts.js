$(document).ready(function() {
  //MAGNIFIC POPUP
  $('.parent-container').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      // other options
      //galery
      gallery:{enabled:true},
  });
  $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
  });
});