// Your code here
function saturdayFun(pass = "roller-skate" ){
    return `This Saturday, I want to ${pass}!`
}

function mondayWork(pass="go to the office"){
    return `This Monday, I will ${pass}.`
}

function wrapAdjective(string="*"){
    return function(innerPass= "special"){
        return `You are ${string}${innerPass}${string}!`

    }

}

let Calculator = {}
Calculator.add = function add(a,b){
                 return a+b
                }
Calculator.subtract = function subtract(a,b){
    return a-b
   }   
Calculator.multiply = function subtract(a,b){
    return a*b
   }
Calculator.divide = function subtract(a,b){
    return a/b
   }

function actionApplyer(start,ar){
    let a = start
    for (let i=0; i < ar.length; i++){
        a = ar[i](a)
    }
    return a
}