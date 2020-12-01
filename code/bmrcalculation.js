module.exports.function = function bmrcalculation (weight,height,age,gender) {
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
  return {
    bmrvalue:bmr
    }
}
