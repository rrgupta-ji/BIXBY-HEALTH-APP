
module.exports.function = function calc (weight,height) {
var bmi=0

if(weight > 0 && height > 0){	
 bmi = Math.round((weight/(height/100*height/100)*100))/100;
return {bmival:bmi}

}
}