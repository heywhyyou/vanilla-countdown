import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  differenceInYears,
} from "date-fns";

const input = document.querySelector(".input");
const button = document.querySelector(".count");
const countdown = document.querySelector(".countdown");

function calculateDifference(targetDate, currentDate) {
  const diffInYears = differenceInYears(targetDate, currentDate);
  const diffInDays =
    differenceInDays(targetDate, currentDate) - diffInYears * 365;
  const diffInHours =
    differenceInHours(targetDate, currentDate) -
    differenceInDays(targetDate, currentDate) * 24;
  const diffInMinutes =
    differenceInMinutes(targetDate, currentDate) -
    differenceInHours(targetDate, currentDate) * 60;
  const diffInSeconds =
    differenceInSeconds(targetDate, currentDate) -
    differenceInMinutes(targetDate, currentDate) * 60;

  return { diffInYears, diffInDays, diffInHours, diffInMinutes, diffInSeconds };
}

const isValidInput = (value) => {
  return Boolean(value);
};

const updateUI = () => {
  countdown.replaceChildren();
  try {
    if (!isValidInput(input.value)) {
      throw new Error("Введите дату");
    }
    const result = calculateDifference(input.value, Date.now());
    const html = `<p>${
      result.diffInYears > 0 ? `${result.diffInYears} лет` : ""
    }  ${result.diffInDays > 0 ? `${result.diffInDays} дней` : ""} ${
      result.diffInHours > 0 ? `${result.diffInHours} часов` : ""
    } ${result.diffInMinutes > 0 ? `${result.diffInMinutes} минут` : ""} ${
      result.diffInSeconds
    } секунд`;

    if (result.diffInSeconds < 0) {
      throw new Error("Введите дату из будущего");
    }

    countdown.insertAdjacentHTML("beforeend", html);
  } catch (error) {
    countdown.insertAdjacentHTML("beforeend", error.message);
  }
};

const buttonClickHandler = () => {
  setInterval(updateUI, 1000);
};

button.addEventListener("click", buttonClickHandler);
