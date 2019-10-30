// from data.js
var tableData = data;

// YOUR CODE HERE!
var submit = d3.select("#Filter Table");

//complete the click handler for the form
submit.on("click",function(){
//Code in to prevent page from refreshing
d3.event.preventDefault();

//select the input element and get the row HTML Node
var inputElement = d3.select("#datetime");

//Get the value of the input element
var inputValue = inputElement.property("value");

console.log(inputValue);
console.log(tableData);

//Use the form input to filter the value
var filteredData = tabledata.filter(tableData=> tableData.datetime === inputValue);
console.log(filteredData);


});
