for (let i = 1; i <= 3; i++) {
  document.getElementById(`a${i}`).addEventListener("click", () => {
    document.getElementById(`ad${i}`).classList.toggle("hidden");
  });
}
for (let i = 1; i <= 5; i++) {
  document.getElementById(`dot-${i}`).addEventListener("click", () => {
    document.getElementById(`t${i}`).classList.remove("hidden");
    document.getElementById(`dot-${i}`).classList.add("text-b");
    document.getElementById(`dot-${i}`).classList.remove("text-gray-400");
    let j = 1;
    while (j <= 5) {
      if (i != j) {
        document.getElementById(`dot-${j}`).classList.add("text-gray-400");
        document.getElementById(`dot-${j}`).classList.remove("text-b");
        document.getElementById(`t${j}`).classList.add("hidden");
      }
      j++;
    }
  });
}

for (let i = 1; i <= 5; i++) {
  document.getElementById(`f${i}`).addEventListener("click", () => {
    document.getElementById(`fd${i}`).classList.toggle("hidden");
  });
}

document.getElementById("menubtn").addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("hidden");
  document.getElementById("menu").classList.add("grid");
  document.getElementById("menu").classList.add("grid-cols-1");
});
