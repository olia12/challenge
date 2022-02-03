"use strict";
let lang = prompt("Выбирете язык: ru или en");

if (lang == "ru") {
  console.log(
    "Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье"
  );
} else if (lang == "en") {
  console.log("Monday, tuesday, wednesday, thursday, friday, saturday, sunday");
} else {
  console.log("Неверно выбран язык");
}
