// this for clock
function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}
//end for clock

// making time on
setInterval(updateClock, 1000);
updateClock();
// end of making time on
// liste of city using api better the write the whole country of the word
fetch(
  "https://raw.githubusercontent.com/lukes/ISO-3166-Countries-with-Regional-Codes/master/all/all.json"
)
  .then((res) => res.json())
  .then((countries) => {
    const select = document.getElementById("country");
    countries.forEach((c) => {
      const option = document.createElement("option");
      option.value = c.name;
      option.textContent = c.name;
      select.appendChild(option);
    });
  });
//end of country filling function
