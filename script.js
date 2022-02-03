"use strict";
let lang = prompt("Выбирете язык: ru или en");

// if (lang == "ru") {
//   console.log(
//     "Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье"
//   );
// } else if (lang == "en") {
//   console.log("Monday, tuesday, wednesday, thursday, friday, saturday, sunday");
// } else {
//   console.log("Неверно выбран язык");
// }

// switch (true) {
//   case lang == "ru":
//     console.log(
//       "Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье"
//     );
//     break;
//   case lang == "en":
//     console.log(
//       "Monday, tuesday, wednesday, thursday, friday, saturday, sunday"
//     );
//     break;
//   case lang !== "ru" && lang !== "en":
//     console.log("Неверно выбран язык");
// }

let array = {
  ru: "Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье",
  en: "Monday, tuesday, wednesday, thursday, friday, saturday, sunday",
};
console.log(array[lang]);
