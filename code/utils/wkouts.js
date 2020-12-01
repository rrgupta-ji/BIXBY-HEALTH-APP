// array of pet which refers  o workouts objects. Hardcoded data to display in the capsule.
const wkouts = [
  {
    name: "Dumbbells",
    species: "Reduce",
    gender: "Female ♀",
    image: "/images/work1.jpg",
    images: [{url:"/images/moxie.jpg"}, {url:"/images/moxie-1.png"}, {url:"/images/moxie-2.png"}, {url:"/images/moxie-3.png"}],
    time: "2 hours perday",
    weight: "1 kg/week",
    age: '25-35 yrs',
    bio:
    "Dumbbells are often used for joint-isolation exercises such as biceps curls, chest flyes or shoulder raises. Using dumbbells for full-body, multiplanar movements, however, can provide a variety of different strength outcomes. It also offers many benefits for cardiorespiratory fitness and flexibility.",
    interests: [
      "Muscle Building",
      "Cardio Health",
      "Weight loss 🎓",
      "Muscular Endurance 😻",
      "Bone Health",
    ],
    link: "https://www.stylecraze.com/articles/exercises-that-help-you-gain-weight/#gref",
    linkDescription: "Gain Weight"
  },
  {
    name: "TreadMill",
    species: "Reduce",
    gender: "Female ♀",
    image: "/images/threadmill.jpg",
    time: "2 hours perday",
    weight: "1 kg/week",
    age: '20-30 yrs',
    bio:
    "If getting in shape and/or losing weight are primary concerns, treadmills might be the best machine to accomplish these objectives. In a recent study comparing exercise, users who felt that they had exercised equally strenuously on bikes and treadmills actually spent 25% more calories on the treadmill.",
    interests: [
      "relatively easy piece of exercise equipment to use",
      "Easily Track Your Progress",
      "Loose Weight Faster",
      "Workouts Don’t Have to be a Chore",
      "Improves Muscle Tone",
    ],
  },
  {
    name: "Pushup",
    species: "Gain",
    gender: "Male ♂",
    image: "/images/work2.jpg",
    time: "2 hours perday",
    weight: "1 kg/week",
    age: '15-28 years',
    bio:
    "the standard push up activates nearly every muscle in your body, which yields far more than toned muscles and increased endurance.",
    interests: [
      "Muscle Stretching for Health and Vitality",
      " Enhance Your Cardiovascular System",
      "Protect Your Shoulders from Injury",
      "Improve Your Posture",
    ],
  },
  {
    name: "Cycling",
    species: "Gain",
    gender: "Female ♀",
    image: "/images/cycling.jpg",
    time: "2 hours perday",
    weight: "1 kg/week",
    age: '3-60 yrs',
    bio:
    "Cycling is an endurance sport. Whether you’re a mountain biker or a road cyclist, to get better you’ll need to spend most of your training time improving your aerobic capacity. To improve your endurance, you should ride for at least one hour. If you’re serious about your performance and plan to train for an organized ride or race, aim to ride for 2 hours or more. The intensity for these rides should be low in Zone 2, which is about 60–70% of your maximum heart rate.",
    interests: [
      "increased cardiovascular fitness.",
      "increased muscle strength and flexibility",
      "improved joint mobility",
      "decreased stress levels",
      "strengthened bones",
    ],
  },
  {
    name: "Walking",
    species: "Reduce",
    gender: "Male ♂",
    image: "/images/gain1.jpg",
    time: "2 hours perday",
    weight: "1 kg/week",
    age: '4-70 yrs',
    bio:
    "Walking for 30 minutes a day or more on most days of the week is a great way to improve or maintain your overall health.",
    interests: ["reduced risk of heart disease and stroke", "stronger bones and improved balance.", "increased cardiovascular and pulmonary (heart and lung) fitness", "reduced body fat."],
  },
  {
    name: "Chest Gain",
    species: "Gain",
    gender: "Female ♀",
    image: "/images/chaest.jpg",
    time: "2 hours perday",
    weight: "1 kg/week",
    age: '16-28yrs',
    bio:
    "All women have a large, fan-shaped pectoralis major muscle on either side of the chest, directly beneath the breast tissue. A smaller muscle, known as the pectoralis minor, is located in the upper part of the chest, beneath the pec major. Collectively, these muscles are known as the pecs, and they cover the entirety of your chest. ",
    interests: [
      "You'll Improve Your Posture",
      "You'll Breathe Easier",
      " You'll Get Great Bang For Your Buck",
      "No respiratory issues",
    ],
  },
  {
    name: "Exercise ball crunch",
    species: "Waist",
    gender: "Female ♀",
    image: "/images/waist1.jpg",
    time: "2 hours perday",
    weight: "0.8 kg/week",
    age: '16-28yrs',
    bio:
    "The exercise ball crunch is a popular gym exercise targeting the abdominals. Unlike crunches on the floor or a bench, by using a ball, you can increase the range of motion and both stretch and contract the abs on every rep. The ball crunch can be performed for low reps with a slower tempo, focusing on a hard contraction, or for higher reps ",
    interests: [
      "Targets the rectus abdominus or six-pack muscles",
      "Stabilizing on the ball works the entire core",
      " Increased range of motion compared to the floor or a bench",
      "The better you get at it, the harder you can make every rep",
    ],
  },
  {
    name: "Reverse crunch",
    species: "Waist",
    gender: "Female ♀",
    image: "/images/waist2.jpg",
    time: "1.5 hours perday",
    weight: "1 kg/week",
    age: '10-40yrs',
    bio:
    "The reverse crunch is a popular exercise targeting the abdominals, particularly the lower half. It’s easy to perform on either the floor or a flat bench. Many lifters think of this as a companion to the crunch, which targets the upper abdominals more than the lower.",
    interests: [
      "Suitable for beginners",
      "Great high-rep burnout move for abs",
      " Targets the lower abdominals",
      "The better you get at it, the harder you can make every rep",
    ],
  },
   {
    name: "Lunge Twist",
    species: "Waist",
    gender: "Female ♀",
    image: "/images/waist3.jpg",
    time: "1 hours perday",
    weight: "0.5 kg/week",
    age: '10-40yrs',
    bio:
    "As you lunge,keep the weight in front heel,squeeze your glutes and keep your core Tight.Make sure both legs make 90 degree angle and that your hip is in allignment.Twist your Torso to the same side of your leg",
    interests: [
      "Strengthens glutes and legs",
      "Flexibility of hips",
      " Targets the lower abdominals",
      "The better you get at it, the harder you can make every rep",
    ],
  },

  {
    name: "Bench Press",
    species: "Gain",
    gender: "Female ♀",
    image: "/images/bench.jpg",
    images: [{url:"/images/doge.jpg"}, {url:"/images/doge-meme-1.jpg"}, {url:"/images/doge-meme-2.jpg"}, {url:"/images/doge-meme-3.jpg"}],
    time: "2 hours perday",
    weight:"1 kg/week",
    age: '16-25yrs',
    bio:
    "Bench presses are an exercise that can be used to tone the muscles of the upper body, including the pectorals, arms, and shoulders.",
    interests: [
      "Crazy Strong Triceps",
      "Iron Forged Delts",
      "Predictor of Upper Body Strength",
    ],
  },
];

module.exports = {
  wkouts:wkouts,
}