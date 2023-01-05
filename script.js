const timeContainer = document.getElementById("time-container");
const BIRTH_DAY = "12-10-1";
const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
const intlNumberFormatter = new Intl.NumberFormat("en-US");

setInterval(() => {
  const now = new Date();
  const difference = Math.floor(
    (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
  );

  timeContainer.innerText = intlNumberFormatter.format(difference);
}, 1000);

const changeAboutMe = document.getElementById("change");

const aboutMe = () => {
  return (changeAboutMe.innerText = "THIS IS NOT REALLY ABOUT ME");
};

changeAboutMe.addEventListener("click", aboutMe);
