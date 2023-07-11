$(function () {
  $(".saveBtn").on("click", function() {
      var hour = $(this).parent().attr('id');
      var input = $(this).parent().children('textarea').val();

      localStorage.setItem(hour, input);
  })

  $('.time-block').each( function() {
    var compareTime = $(this).attr('id');
    // console.log(compareTime)
    var currentTime = dayjs().format('H');
    // console.log(currentTime)
    if(compareTime < currentTime ) {
      $(this).addClass("past")
    } else if(compareTime > currentTime) {
      $(this).addClass("future")
    } else {
      $(this).addClass("present")
    }
  })

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


  // TODO: Add code to display the current date in the header of the page.
    var currentDate = dayjs().format('MMM DD, YYYY');
    $('#currentDay').text(currentDate);
});
