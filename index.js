let input = document.getElementById("starNumbers");
let btn = document.getElementById("btnSubmit");
let rating = document.getElementById("rating");

let lastCount = 0;

btn.addEventListener("click", (e) => {
  for (let i = 1; i <= input.value; i++) {
    const div = document.createElement("div");
    div.innerText = "☆";
    div.style.fontSize = "2rem";
    div.id = `${i}-star`;
    div.addEventListener("click", (e) => {
      let currentCount = parseInt(e.target.id);
      console.log(currentCount);
      // return;
      if (lastCount < currentCount) {
        for (let index = lastCount + 1; index <= currentCount; index++) {
          let ele = document.getElementById(`${index}-star`);
          ele.classList.add("highlight");
        }
      } else {
        for (let index = currentCount + 1; index <= lastCount; index++) {
          let ele = document.getElementById(`${index}-star`);
          ele.classList.remove("highlight");
        }
      }
      lastCount = currentCount;
    });
    rating.appendChild(div);
  }
  input.value = 0;
});
