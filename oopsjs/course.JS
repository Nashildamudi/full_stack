let courses = [
  {title: "java", price: 35000 },
  {title: "python", price: 15000 },
  {title: "fullStack", price: 75000 },
  {title: "ui/ux", price: 5000 },
];

let discount = 1 / 0.27


let updatedcourses = courses.map((course) => ({
  title: course.title,
  price: course.price - (course.price * 0.2)
}));
console.log(updatedcourses);
