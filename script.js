// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = $('#currentDay');
var currentTime = $('#currentTime');
var button9 = $('#button9');
var button10 = $('#button10');
var button11 = $('#button11');
var button12 = $('#button12');
var button13 = $('#button13');
var button14 = $('#button14');
var button15 = $('#button15');
var button16 = $('#button16');
var button17 = $('#button17');


var textArea9 = $('#text9');
var textArea10 =$('#text10')
var textArea11 =$('#text11')
var textArea12 =$('#text12')
var textArea13 =$('#text13')
var textArea14 =$('#text14')
var textArea15 =$('#text15')
var textArea16 =$('#text16')
var textArea17 =$('#text17')



var data = ""; //empty string to hold data. may not be used in final due to the need for an array

var row = $('.time-block'); //assigns a variable to the in the to later assign a color class to them based on the current time

var currentHour = dayjs().hour(); //gets the current hour

var textArray =[
  {box: 9, text: ""},
  {box: 10, text: ""},
  {box: 11, text: ""},
  {box: 12, text: ""},
  {box: 13, text: ""},
  {box: 14, text: ""},
  {box: 15, text: ""},
  {box: 16, text: ""},
  {box: 17, text: ""},
];


//Function that sets the current time. 
setInterval(function () {
  var dateInterval = dayjs(); //js constructor to create a new date object.
  currentTime.text(dateInterval.format('MMM,DD YYYY hh:mm:ss a'));
}, 1000);


console.log("the current hour:", currentHour);

//function to check the hours for comparison against the hours on the scheduler
function setColor() {
  row.each(function () {
    console.log("inside of loop before hour is set");
    var hour = parseInt($(this).attr("id").split("-")[1]);
    console.log('hour inside of function loop is:', hour);

    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  })

}




function getInput(){
var inputValue = textArea9.val();
console.log("the text capture in 9 is:", inputValue);

return inputValue;
}

function getInput2(areaNumber) {
  var inputSelector = "textArea" + areaNumber;
  var inputValue = textArea+areaNumber.val();
  console.log("the inputSelector is", inputSelector)
  console.log("the text captured is:", inputValue);

  return inputValue;
}


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  function compareCurrentHour() {


  }




  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});



//Start of the program
setColor(); //runs code to set the color of the text area based on the hour


button9.click(function () {
  console.log("button9 was clicked");
  textArray[0].text = textArea9.val();
  console.log('the array says', textArray);
});

button10.click(function () {
  console.log("button9 was clicked");
  textArray[1].text = textArea10.val();
  console.log('the array says', textArray);
});

button11.click(function () {
  console.log("button11 was clicked");
  textArray[2].text = textArea11.val();
  console.log('the array says', textArray);
  
});

button12.click(function () {
  console.log("button12 was clicked");
  textArray[3].text = textArea12.val();
  console.log('the array says', textArray);

});

button13.click(function () {
  console.log("button13 was clicked");
  textArray[4].text = textArea13.val();
  console.log('the array says', textArray);
});

button14.click(function () {
  console.log("button14 was clicked");
  textArray[5].text = textArea14.val();
  console.log('the array says', textArray);
});

button15.click(function () {
  console.log("button15 was clicked");
  textArray[6].text = textArea15.val();
  console.log('the array says', textArray);
});

button16.click(function () {
  console.log("button16 was clicked");
  textArray[7].text = textArea16.val();
  console.log('the array says', textArray);
});

button17.click(function () {
  console.log("button17 was clicked");
  textArray[8].text = textArea17.val();
  console.log('the array says', textArray);
});

