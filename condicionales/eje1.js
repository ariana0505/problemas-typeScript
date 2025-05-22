const age = parseInt(prompt("¿How old are you?: "),10)
if (age >= 18 && age<= 130 ){
    console.log("you are of legal age")
} else if(age>= 0){
    console.log("you are a minor")
}else{
    console.log("invalid value")
}