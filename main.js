let brackets = document.getElementById("brackets");
let button = document.getElementById("btn")

button.addEventListener("click", () => {
  const value = brackets.value.split("");
  let open = 0;
  let close = 0;
  for (arr of value) {
    if (arr === "(") {
      open++;
    } else if (arr === ")") {
      close++;
    }
  }
  alert(`ochilgan qavslar soni ${open} ta`);
  alert(`Yopilgan qavsllar soni ${close} ta`);
});