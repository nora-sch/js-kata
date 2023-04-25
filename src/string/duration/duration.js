/*
Create a function `convertTime` which converts a time formatted as "hh:mm" in a duration in minuts.

If the argument is not correctly formatted, return null.

* "02:30" -> 150
* "01:45" -> 105
* "01h45m" -> null

Add you own tests.

*/

// TODO add your code here

function convertTime(timeString){
    if (timeString.match(/^[0-9]{2}:[0-9]{2}$/)) {
        timeArray = timeString.split(":");  
        console.log(timeArray);
        return parseInt(timeArray[0]) * 60 + parseInt(timeArray[1]);
    } else {
        return null;
    }
}
// console.log(convertTime("01h45m"));
module.exports = convertTime;
