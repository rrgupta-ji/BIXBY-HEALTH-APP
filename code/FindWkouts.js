var { wkouts } = require('./utils/wkouts.js');


//here pets mean workouts
module.exports.function = function findWkouts(weight,height,waistCir) {
  
var bmi=0;
var name;
var species;
if(weight > 0 && height > 0){	
 bmi = Math.round((weight/(height/100*height/100)*100))/100}
  var wkout = null;
  var wkoutsArray = [];
  // find workouts by name if provided
  if(name)
  {
     wkouts.forEach(o=>{
      if(name.toLowerCase() == o.name.toLowerCase()){
        wkoutsArray.push(o);
      }
    })
    if(wkoutsArray.length > 0){
      return wkoutsArray;
  }
  }
  if(species)
  {
    wkouts.forEach(o=>{
      if(species.toLowerCase() == o.name.toLowerCase()){
        wkoutsArray.push(o);
      }
    })
  }
  if(wkoutsArray.length > 0){
      return wkoutsArray;
  }
  
  if(bmi>25){
    
    wkouts.forEach(o=>{
      if("reduce" == o.species.toLowerCase()){
        wkoutsArray.push(o);
      }
    })
    
    }
    if(wkoutsArray.length > 0){
      return wkoutsArray;
  }
  // find workouts based on the bmi  if provided
  if(bmi<18.5){
    wkouts.forEach(o=>{
      if("gain" == o.species.toLowerCase()){
        wkoutsArray.push(o);
      }
    })
    
  }
  if(wkoutsArray.length > 0){
    return wkoutsArray;
  }
   if(bmi>18.5 && bmi<25){
     if(waistCir>35){
    wkouts.forEach(o=>{
      if("waist" == o.species.toLowerCase()){
        wkoutsArray.push(o);
      }
    })
    
  }
  
  
   }
  if(wkoutsArray.length > 0){
    return wkoutsArray;
  }

  // returns all the workouts if neither name or species or bmi return anything
  return wkouts;
};




/*input (WaistCir) {
      type (WaistCir)
      min (Optional) max (One)
    }*/