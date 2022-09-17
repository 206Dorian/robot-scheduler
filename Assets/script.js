//var to disply the current day when pulled up
var currentDay = $("#currentDay");
currentDay.text(moment().format('MMM DD, YYYY [at] hh:mm:ss a'))

var currentHour = moment().format("HH")
//each texr area color coded depending on the hour 
var textAreas = $("textarea")
console.log(textAreas)

//iterate thru all the text areas and compare their id value to moments current time
for (let index = 0; index < textAreas.length; index++) {
  var id = textAreas[index].id;
  console.log(id)
}

//if else statement to compare id to current hour 


if (id > currentHour){
$(textAreas).addClass("past");
// if current hour is past then make the textArea =class.past
}

if (id = currentHour){
  $(textAreas).addClass("present");
}

if (id < currentHour){
  $(textAreas).addClass("future");
}
// then what ??

//add a background color to each 

//




