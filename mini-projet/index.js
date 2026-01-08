/*
Codes couleurs

jaune: #efec4f;
orange: #eca45c;
rouge: #e85b69;
violet: #956caf;
bleu: #427cf5;
vert: #4cee7e;
noir: #020e13;

*/

function grid1() {
  let grids = document.querySelectorAll(".grid");
  grids[0].style.backgroundColor = "#020e13";
}

function grid2() {
  let grids = document.querySelectorAll(".grid");
  let cells = grids[1].children;
  for (let i = 0; i < cells.length; i++) {
    if (i % 2 === 0) {
      cells[i].style.backgroundColor = "#4cee7e";
    } else {
      cells[i].style.backgroundColor = "#efec4f";
    }
  }
}

function grid3() {
  let grids = document.querySelectorAll(".grid");
  let cells = grids[2].children;
  cells[0].style.backgroundColor = "#e85b69";
  cells[1].style.backgroundColor = "#eca45c";
  cells[2].style.backgroundColor = "#efec4f";
  cells[3].style.backgroundColor = "#4cee7e";
  cells[4].style.backgroundColor = "#427cf5";
  cells[5].style.backgroundColor = "#956caf";
}

function grid4() {
  let grids = document.querySelectorAll(".grid");
  grids[3].style.backgroundColor = "#020e13";
  let cells = grids[3].children;
  cells[4].style.backgroundColor = "#4cee7e";
}

function grid5() {
  let grids = document.querySelectorAll(".grid");
  let cells = grids[4].children;
  for (let i = 0; i < 3; i++) {
    cells[i].style.backgroundColor = "#427cf5";
  }
  cells[3].style.backgroundColor = "#956caf";
  cells[4].style.backgroundColor = "#e85b69";
  cells[5].style.backgroundColor = "#956caf";
  cells[6].style.backgroundColor = "#eca45c";
  cells[7].style.backgroundColor = "#efec4f";
  cells[8].style.backgroundColor = "#eca45c";
}

function grid6() {
  let grids = document.querySelectorAll(".grid");
  grids[5].style.background = `
    linear-gradient(to bottom, #427cf5, #956caf) 0 0 / 100% 33.33% no-repeat,
    linear-gradient(to bottom, #4cee7e, #efec4f) 0 50% / 100% 33.33% no-repeat,
    linear-gradient(to bottom, #eca45c, #e85b69) 0 100% / 100% 33.33% no-repeat
  `;
}

grid1();
grid2();
grid3();
grid4();
grid5();
grid6();
