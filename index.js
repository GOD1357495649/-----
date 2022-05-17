const frame = document.querySelector(".frame");
const btn = document.querySelector("#btn");
let x1, x2, y1, y2;

document.body.addEventListener("mousedown", (e) => {
  if (e.target != btn) {
    x1 = e.clientX;
    y1 = e.clientY;
    frame.style.left = x1 + "px";
    frame.style.top = y1 + "px";
    frame.style.display = "block";
    document.body.addEventListener("mousemove", mousemove);
    for (checkbox of checkboxes) {
      checkbox.addEventListener("mousemove", checkboxMove);
    }
  }
});

function mousemove(e) {
  x2 = e.clientX;
  y2 = e.clientY;
  x2 > x1 ? (frame.style.left = x1 + "px") : (frame.style.left = x2 + "px");
  y2 > y1 ? (frame.style.top = y1 + "px") : (frame.style.top = y2 + "px");
  frame.style.width = Math.max(x1, x2) - Math.min(x1, x2) + "px";
  frame.style.height = Math.max(y1, y2) - Math.min(y1, y2) + "px";
}

document.body.addEventListener("mouseup", (e) => {
  frame.style.width = 0;
  frame.style.height = 0;
  frame.style.display = "none";
  document.body.removeEventListener("mousemove", mousemove, false);
  for (checkbox of checkboxes) {
    checkbox.removeEventListener("mousemove", checkboxMove, false);
  }
});

btn.addEventListener("click", () => {
  for (checkbox of checkboxes) {
    checkbox.checked = false;
  }
});


let checkboxes = document.querySelectorAll(".checkboxes input");
let start;
let end;
function checkboxMove() {
  if (start == null) {
    start = this.getAttribute("pos").split(",");
    console.log(start);
  } else {
    end = this.getAttribute("pos").split(",");
    // console.log(end);
    const startY = parseInt(start[1]);
    const startX = parseInt(start[0]);
    const endY = parseInt(end[1]);
    const endX = parseInt(end[0]);
    const minY = Math.min(startY, endY);
    const maxY = Math.max(startY, endY);
    const minX = Math.min(startX, endX);
    const maxX = Math.max(startX, endX);
    //   console.log(endX, endY);
    for (let y = minY; y <= maxY; y++) {
      for (let x = minX; x <= maxX; x++) {
        //   console.log(array[y][x]);
        if (!array[y][x].checked) {
          array[y][x].checked = true;
        }
      }
    }
  }
}

checkboxes = Array.of(...checkboxes);

let array = [];
array.push(checkboxes.slice(0, 6));
array.push(checkboxes.slice(6, 12));
array.push(checkboxes.slice(12, 18));
console.log(array);

for (let y = 0; y < array.length; y++) {
  for (let x = 0; x < array[y].length; x++) {
    array[y][x].setAttribute("pos", [x, y]);
  }
}
