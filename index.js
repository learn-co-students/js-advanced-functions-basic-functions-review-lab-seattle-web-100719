// Your code here
function saturdayFun(activity = "roller-skate")
{
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office")
{
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*")
{
    return function(adjNoun) {
        return `You are ${flair}${adjNoun}${flair}!`
      }
}

let Calculator = {
    add: function(num1, num2) {return num1 + num2},
    subtract: function(num1, num2) {return num1 - num2},
    multiply: function(num1, num2) {return num1 * num2},
    divide: function(num1, num2) {return num1/num2}
}

function actionApplyer(startingInt, functionArray)
{
    if (functionArray.length === 0)
        return startingInt;
    else {
        functionArray.forEach(funct => {
            startingInt = funct(startingInt)
            return startingInt
        });
        return startingInt
    }


}