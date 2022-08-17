
function saturdayFun (activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective (stringValue = "*") {
    // let adjective = arguments[0];
    return function (adjective = "special") {
        return `You are ${stringValue}${adjective}${stringValue}!`;
    }
}
