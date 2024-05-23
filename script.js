const checkBtn = document.getElementById("check-btn");
const userInput = document.getElementById("user-input");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const isValidNum = (num) => {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  return regex.test(num);
};

const output = (num) => {
  isValidNum(num)
    ? (result.innerText = `Valid US number: ${num}`)
    : (result.innerText = `Invalid US number: ${num}`);
};

checkBtn.addEventListener("click", () => {
  if (userInput.value === "") {
    window.alert("Please provide a phone number");
  } else {
    output(userInput.value);
  }
});

clearBtn.addEventListener("click", () => {
  result.innerText = "";
  userInput.value = "";
});
