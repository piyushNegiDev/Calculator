let input = document.querySelector("#input");
const calInput = (number) => {
  if (number === "AC") {
    input.value = "";
    return;
  }
  input.value += number;
};

const calculation = () => {
  try {
    let expr = input.value.replace(/(\d+(\.\d+)?)%/g, (_, num) => {
      return parseFloat(num) / 100;
    });

    let result = Function(`return ${expr}`)();

    input.value = result;
  } catch (e) {
    input.value = `Invalid Expression: ${expr}`;
  }
};

const backward = () => {
  input.value = input.value.slice(0, -1);
};

document.querySelector(".upperInput").addEventListener("click", () => {
  document.getElementById("input").focus();
});
