
module.exports.getDate = getDate;

function getDate(){
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  var currentDay = today.toLocaleDateString("en-US", options);

  return currentDay;
}


module.exports.getDay = getDay;

function getDay(){
  var today = new Date();
  var options = {
    weekday: "long"
  };
  var currentDay = today.toLocaleDateString("en-US", options);

  return currentDay;
}
