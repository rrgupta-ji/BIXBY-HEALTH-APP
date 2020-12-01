module.exports.function = function calculation (weight,height) {
var bmi=0
var cat=[]
if(weight > 0 && height > 0){	
var bmi = Math.round((weight/(height/100*height/100)*100))/100
if(bmi <=18){
cat = " you are under weight.";
image="/images/uw.jpeg";
}
else if(18<bmi && 24>=bmi){
cat = "you are normal.";
image="/images/nw.jpeg";
}
else if(24<bmi && 29>=bmi){
cat = "you are overweight.";
image="/images/ow.jpeg";
}
else if(29<bmi && 34>=bmi){
cat = "you are obese.";
image="/images/ob1w.jpeg";
}
else if(34<bmi && 39>=bmi){
cat = "you are highly obese.";
image="/images/ob2.jpeg";
}
else if(bmi>39){
cat = "you are extremely obese.";
image="/images/ob3.jpeg";
}
}
else{
alert("Please Fill in everything correctly");
}
 return {
    bmivalue:bmi,
    category:cat,
    imag:image
    }
} 
