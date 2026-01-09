const input = document.getElementById("input");
const output = document.getElementById("output");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  output.textContent = input.value;
});
