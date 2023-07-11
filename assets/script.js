$(function () {
  $(".saveBtn").on("click", function() {
      var hour = $(this).parent().attr('id');
      var input = $(this).parent().children('textarea').val();
      
      localStorage.setItem(hour, input);
      $('#saveState').text("Save Successful!✅");
      var time = 2;
      var remove = 0;
      setInterval(function() {
        time--;
        if(time == remove){
          $('#saveState').text(" ")
        }
      }, 1000)
  })

  $('.time-block').each( function() {
    var compareTime = $(this).attr('id');
    var currentTime = dayjs().format('H');
    if(compareTime < currentTime ) {
      $(this).addClass("past")
    } else if(compareTime > currentTime) {
      $(this).addClass("future")
    } else {
      $(this).addClass("present")
    }
  })

  $('.time-block').each( function() {
    var hour = $(this).attr('id');
    var temp = localStorage.getItem(hour);
    console.log(temp);
    if(temp != null){
      $(this).children('textarea').val(temp)
    }
    })

    var currentDate = dayjs().format('MMM DD, YYYY');
    $('#currentDay').text(currentDate);
});
