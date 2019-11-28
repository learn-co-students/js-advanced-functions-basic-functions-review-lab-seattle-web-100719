// Your code here
function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
 
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
    return (adjective = "special") => `You are ${flair}${adjective}${flair}!`;
}

let Calculator = {
    add: (x, y) => {return x + y},
    subtract: (x, y) => {return x - y},
    multiply: (x, y) => {return x * y},
    divide: (x, y) => {return x / y}
}

function actionApplyer(start, arrayFunctions) {
    if (arrayFunctions.length === 0) return start;
    let result = start
    for (let i = 0; i < arrayFunctions.length; i++) {
        result = arrayFunctions[i](result)
        console.log(result)
    }
    return result
}