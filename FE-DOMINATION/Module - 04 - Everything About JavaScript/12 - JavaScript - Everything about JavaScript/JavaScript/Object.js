//Objects----

let student = {
  name: "Shahe Alam",
  age: 21,
  email: "alamshahe56659044@gmail.com",
  phone: "9044465653289",
  course: "JavaScript",
};
console.log(student);

console.log(student.name);

student.course = "Java";
console.log(student);

//Add new key-value pair--

student.city = "Barabanki";
console.log(student);

console.log("--------------");

const smartphones = {
  brand: "Samsung",
  model: "Galaxy S24",
  price: 50000,
  color: ["White", "Black", "Blue", "Green", "Red"],
  ram: "8Gb",
  storage: "128Gb",
  camera: "48Mp",
  battery: "5000mAh",
};
console.log(smartphones);
console.log(smartphones.battery);
console.log(smartphones.model);
console.log(smartphones.color[2]);
console.log(smartphones);

console.log("-------------");

//Indexing--
smartphones.color[2] = "SkyBlue";
console.log(smartphones);

console.log("---------------------");

const phones = [
  {
    brand1: "Apple",
    model: "Iphone 11",
    price: 70000,
    color: ["white", "black", "green", "red"],
  },
  {
    brand2: "Samsung",
    model: "Galaxy s23",
    price: 50000,
    color: ["white", "black", "blue", "green", "red"],
  },
  {
    brand3: "Oneplus",
    model: "",
    price: 45000,
    color: ["white", "black", "blue", "red"],
  },
  {
    brand4: "Xiaomi",
    model: "Redmi Note 10 pro",
    price: 40000,
    color: ["white", "black", "blue", "green", "red"],
  },
];

console.log(phones[1].color[2]);

phones[3].color[4] = "Brown";
console.log(phones[3].color[4]);
console.log(phones);
