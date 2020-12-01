module.exports.function = function caloriecalculation(weight,height,age,gender,activity) {
  
  var cal=0;
   var bmr=0

  if(gender.isMale)
  {
    bmr=(10*weight) + (6.25*height) - (5*age)+ 5;
  }
  else if(gender.isFemale)
  {
    bmr=(10*weight) + (6.25*height) - (5*age)-161;
  }
  else{
    alert("Please Fill in everything correctly");
  }
  if(activity.sedentary)
  {
    cal=bmr*1.2
  }
  else if(activity.la)
  {
    cal=bmr*1.375
  }
  else if(activity.ma)
  {
    cal=bmr*1.55
  }
  else if(activity.va)
  {
    cal=bmr*1.725
  }
  else if(activity.ea)
  {
    cal=bmr*1.9
  }
  return {
    calorie:cal
  }
}

