// this for clock
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const hEl = document.getElementById("hours");
  const mEl = document.getElementById("minutes");
  const sEl = document.getElementById("seconds");

  if (hEl && mEl && sEl) {
    hEl.textContent = hours;
    mEl.textContent = minutes;
    sEl.textContent = seconds;
  }
}

setInterval(updateClock, 1000);
updateClock();

//end for clock

// making time on
setInterval(updateClock, 1000);
updateClock();
// end of making time on
// liste of city(sorted alphabatic) using api better than writing the whole country of the word
fetch(
  "https://raw.githubusercontent.com/lukes/ISO-3166-Countries-with-Regional-Codes/master/all/all.json"
)
  .then((res) => res.json())
  .then((countries) => {
    const select = document.getElementById("countries");
    countries
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach((c) => {
        const option = document.createElement("option");
        option.value = c.name;
        option.textContent = c.name;
        select.appendChild(option);
      });
  });

//end of country filling function

// Function to show the full arabic and english form of date of the current day
async function loadDate() {
  try {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    const dateStr = `${dd}-${mm}-${yyyy}`;

    const res = await fetch(`https://api.aladhan.com/v1/gToH?date=${dateStr}`);
    const json = await res.json();

    const gregorian = today.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const hijri = `${json.data.hijri.day} ${json.data.hijri.month.en} ${json.data.hijri.year}`;

    document.getElementById("dateBox").textContent = `${gregorian} | ${hijri}`;
  } catch (error) {
    console.error("Erreur lors du chargement de la date:", error);
    document.getElementById("dateBox").textContent = "Date unavailable";
  }
}
loadDate();
// end of function date full
