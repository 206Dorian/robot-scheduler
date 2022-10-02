//var to disply the current day when pulled up
var currentDay = $("#currentDay");
currentDay.text(moment().format('MMM DD, YYYY [at] hh:mm:ss a'))

var currentHour = parseInt(moment().format("HH"))

//each text area color coded depending on the hour 
var textAreas = $("textarea")
console.log(textAreas)

//changed the for loop to a for each loop, to grab each box. Added 
// Did ParseInt to change strings to numbers. 

function updateBlox() {
  $(textAreas).each(function () {
    var id = parseInt($(this).attr("id"));

    if (id < currentHour) {
      $(this).addClass("past");
      // if current hour is past then make the textArea =class.past
    }

    if (id == currentHour) {
      $(this).addClass("present");
    }

    if (id > currentHour) {
      $(this).addClass("future");
    }

  })
}
updateBlox()

$(".saveBtn").on("click", function(){
var hour = $(this).siblings("textarea").attr("id")

var text = $(this).siblings("textarea").val()
console.log(text)
console.log(hour)

localStorage.setItem(hour, text)
})

//getting item from localstorage, persisting upon reload
$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
