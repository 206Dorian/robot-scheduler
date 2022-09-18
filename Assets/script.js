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




