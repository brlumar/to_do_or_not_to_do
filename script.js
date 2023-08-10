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

var row = $('.time-block'); //assigns a variable to the in the to later assign a color class to them based on the current time
var currentHour = dayjs().hour(); //gets the current hour
var textArray =[]; //array that holds text before it and after it goes to local storage


//Function that sets the current time. 
setInterval(function () {
  var dateInterval = dayjs(); //js constructor to create a new date object.
  currentTime.text(dateInterval.format('MMM,DD YYYY hh:mm:ss a'));
}, 1000);


console.log("the current hour:", currentHour); //test console

//function to check the hours for comparison against the hours on the scheduler
function setColor() {
  row.each(function () {
    console.log("inside of loop before hour is set");
    var hour = parseInt($(this).attr("id").split("-")[1]);
    console.log('hour inside of function loop is:', hour);

    if (hour < currentHour) { //changes the color of the text area based on the condition
      $(this).addClass("past");
    } else if (hour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  })

}

function saveToStorage(arr){ //moves the array of data to localStorage
var jasonVal = JSON.stringify(arr);
localStorage.setItem('todo', jasonVal);

}

function saveToArray(){ //pull data from local storage and save it to an array
  var rawData = localStorage.getItem('todo');
  var parse = JSON.parse(rawData);

  return parse;
}

//Start of the program
setColor(); //runs code to set the color of the text area based on the hour
textArray = saveToArray(); //puts local storage data into array to print to screen
console.log('the initial array is: ', textArray);

if (!textArray){
  textArray =[
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
} else {

textArea9.val(textArray[0].text); //fills each text box with content from array that was taken from local storage
textArea10.val(textArray[1].text); //fills each text box with content from array that was taken from local storage
textArea11.val(textArray[2].text); //fills each text box with content from array that was taken from local storage
textArea12.val(textArray[3].text); //fills each text box with content from array that was taken from local storage
textArea13.val(textArray[4].text); //fills each text box with content from array that was taken from local storage
textArea14.val(textArray[5].text); //fills each text box with content from array that was taken from local storage
textArea15.val(textArray[6].text); //fills each text box with content from array that was taken from local storage
textArea16.val(textArray[7].text); //fills each text box with content from array that was taken from local storage
textArea17.val(textArray[8].text); //fills each text box with content from array that was taken from local storage
}

console.log("after startup esle the array is: ", textArray);

button9.click(function () {  //listens for the button to be clicked
  console.log("button9 was clicked"); //test log
  textArray[0].text = textArea9.val();  //sets the array at first  index to the value in the text area 
  console.log('the array says', textArray);  //test log
  saveToStorage(textArray);   //calls function to say the array to local storage
});

button10.click(function () {
  console.log("button9 was clicked");
  textArray[1].text = textArea10.val();
  console.log('the array says', textArray);
  saveToStorage(textArray);

});

button11.click(function () {
  console.log("button11 was clicked");
  textArray[2].text = textArea11.val();
  console.log('the array says', textArray);
  saveToStorage(textArray);

  
});

button12.click(function () {
  console.log("button12 was clicked");
  textArray[3].text = textArea12.val();
  console.log('the array says', textArray);
  saveToStorage(textArray);

});

button13.click(function () {
  console.log("button13 was clicked");
  textArray[4].text = textArea13.val();
  console.log('the array says', textArray);
  saveToStorage(textArray);

});

button14.click(function () {
  console.log("button14 was clicked");
  textArray[5].text = textArea14.val();
  console.log('the array says', textArray);
  saveToStorage(textArray);

});

button15.click(function () {
  console.log("button15 was clicked");
  textArray[6].text = textArea15.val();
  console.log('the array says', textArray);
  saveToStorage(textArray);

});

button16.click(function () {
  console.log("button16 was clicked");
  textArray[7].text = textArea16.val();
  console.log('the array says', textArray);
  saveToStorage(textArray);

});

button17.click(function () {
  console.log("button17 was clicked");
  textArray[8].text = textArea17.val();
  console.log('the array says', textArray);
  saveToStorage(textArray);

});

