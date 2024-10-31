const createListElem = (_list) => {
  let listElem = "";
  let countElem = 0;
  _list.map((el, i) => {
    listElem += `<div class="box"><div class="p1">${el}</div> <button onclick="removeElem('${i}')" class="cls-btn">
    <img src="./Group 1.png" style="margin-top: 5px;"></button></div>`;
    countElem++;
  });
  document.getElementById("list").innerHTML = listElem;
  document.getElementById("count").innerHTML = countElem;
};

let list = [
  "Hello this is my first Todo",
  "Hello this is my second Todo.",
  "Hello this is my 3th Todo.",
];
createListElem(list);

document.getElementById("z").addEventListener("click", () => {
  let inputValue = document.getElementById("input").value;
  if (inputValue.trim() !== "") {
    list.push(inputValue);
    createListElem(list);
  }
});

document.getElementById("x").addEventListener("click", () => {
  let inputValue = document.getElementById("input").value;
  list.push(inputValue);
  createListElem(list);
});

const removeElem = (index) => {
  list.splice(index, 1);
  createListElem(list);
};
