let input = document.querySelector("#input");
const calInput = (number) => {
  if (number === "AC") {
    input.value = "";
    return;
  }
  input.value += number;
};

const calculation = () => {
  let result = Function(`return ${input.value}`)();

  input.value = result;
};
