function welcomeGuest(name, greetHandler) {
  //   console.log(name);
  greetHandler(name);
}
const actorName = "Tom Hanks";

function greetMorning(name) {
  console.log("Good Morning", name);
}
function greetEvening(name) {
  console.log("Good Evening", name);
}

welcomeGuest(actorName, greetEvening);
welcomeGuest("Kate Winslet", greetMorning);
welcomeGuest("shakib khan", function (name) {
  console.log("Greetings", name);
});

// function handleClick() {
//   console.log("Someone Clicked me");
// }
// document.getElementById("click").addEventListener("click", handleClick);

// document.getElementById("click2").addEventListener("click", function () {
//   console.log("Someone Clicked me");
// });
