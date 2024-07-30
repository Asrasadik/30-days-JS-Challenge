const changeBtn = document.getElementById("changeBtnId");
const img = document.querySelector("img");
const h1 = document.querySelector("h1");

changeBtn.addEventListener("click", () => {
  const p = document.getElementById("changePara");
  p.innerHTML = "Changed Paragraph after clicking on 'Change' Button";
});
img.addEventListener("dblclick", () => {
  img.hidden = !img.hidden;
});
h1.addEventListener("mouseover", () => {
  h1.style.backgroundColor = "#EBF2FA";
});
h1.addEventListener("mouseout", () => {
  h1.style.backgroundColor = "#EBF2FA";
});
document.getElementById("input").addEventListener("keydown", (event) => {
  console.log(event.key);
});
document.getElementById("input").addEventListener("keyup", (event) => {
  document.getElementById("displayText").innerHTML = event.target.value;
});
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  // const name = document.getElementById("name").value;
  // const email = document.getElementById("email").value;
  //console.log(name,email);
  const formData = new FormData(this);
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  console.log(formObject);
});

document.getElementById("selectId").addEventListener("change", (event) => {
  document.getElementById("displayFormValue").textContent = event.target.value;
});
document.getElementById("list").addEventListener("click", (event) => {
  if (event.target && event.target.nodeName === "LI") {
    document.getElementById("displayListValue").textContent =
      event.target.textContent;
  }
});
/*---------------------------------------------*/
// Select the parent element
const parentElement = document.getElementById("parent");
const addButton = document.getElementById("addButton");

// Add an event listener to the parent element
parentElement.addEventListener("click", function (event) {
  // Check if the clicked element is a child of the parent
  if (event.target && event.target.matches(".child")) {
    document.getElementById("displayChild").textContent =
      "Child element clicked: " + event.target.textContent;
  }
});

let childCount = 1;
// Add child elements dynamically
addButton.addEventListener("click", function () {
  const newChild = document.createElement("div");
  newChild.className = "child";
  newChild.textContent = "I am a new child " + childCount++;
  parentElement.appendChild(newChild);
});
