//#1
console.log("---მაგალითი 1---");
let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active",
};

console.log(user.studentstatus);

//#2
console.log("---მაგალითი 2---");
console.log("FOR LOOP");
let friends = ["Ross", "Joey", "Monica", "Rachel", "Chandler", "Phoebe"];

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}

console.log("WHILE LOOP");
let i = 0;

while (i < friends.length) {
  console.log(friends[i]);
  i++;
}

//#3
console.log("---მაგალითი 3---");
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 5) {
    console.log(numbers[i]);
  }
}

//4
console.log("---მაგალითი 4---");
let user1 = {
  name: "giorgi",
  age: 20,
  studentstatus: "active",
};

if (user1.age > 18 && user1.studentstatus == "active") {
  console.log("hello");
} else console.log("error");

if (user1.name == "giorgi") {
  console.log(`hello ${user1.name}`);
} else console.log("error");

if (user1.age < 25 || user1.studentstatus == "active") {
  console.log("hello world");
} else console.log("error");

// 5
console.log("---მაგალითი 5---");
let array = ["watermelon", "pear", 10, 45, 50, "apple", "ananas"];

for (const strings of array) {
  if (typeof strings == "string") {
    console.log(strings);
  }
}

let users = [
  { username: "test1", status: false },
  { username: "test2", status: false },
  { username: "test3", status: true },
];

console.log("---მაგალითი 6---");
for (const u of users) {
  if (u.status) console.log(u.username);
}
