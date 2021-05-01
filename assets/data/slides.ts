const slides = [
  {
    title: "Save time by tracking your studies",
    text: "Schedule your classes, assignments, quizzes and more",
    image: require("../images/Onboard1.png"),
  },
  {
    title: "Stay on top of your education",
    text: "Reduce your stress, increase your productivity",
    image: require("../images/Onboard2.png"),
  },
  {
    title: "Spend more time doing the things you love",
    text: "Get started within five minutes",
    image: require("../images/Onboard3.png"),
  },
]

export type Slide = typeof slides[0]

export default slides
