import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInYears,
} from "date-fns";

const input = document.querySelector(".input");
const button = document.querySelector(".count");
const containerWrapper = document.querySelector(".container-wrapper");

const buttonClickHandler = () => {
  const targetDate = input.value;
  const currentDate = Date.now();
  const diffInYears = differenceInYears(targetDate, currentDate);
  const diffInDays = differenceInDays(targetDate, currentDate);
  console.log(diffInDays);
  const diffInHours = differenceInHours(targetDate, currentDate);
  const diffInMinutes = differenceInMinutes(targetDate, currentDate);
  const html = `<p>${diffInYears} лет ${diffInDays - diffInYears * 365} дней ${
    diffInHours - diffInDays * 24
  } часов ${diffInMinutes - diffInHours * 60} минут`;
  containerWrapper.insertAdjacentHTML("beforeend", html);
};

button.addEventListener("click", buttonClickHandler);
