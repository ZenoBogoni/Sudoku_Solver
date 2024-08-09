let table = [];
let quadrant = [];
const max = 9;

class slot_t {
  constructor() {
    this.value = 0;
    this.notes = new Array(9).fill(1);
    this.possibleValue = 0;
  }
}

class quadrant_t {
  constructor() {
    this.slot = [];
    for (let i = 0; i < 3; i++) {
      this.slot[i] = [];
      for (let j = 0; j < 3; j++) {
        this.slot[i][j] = null;
      }
    }
  }
}
/*----------  INITIALIZATION  ----------*/

// i = row from 1 to 9,   j = column from 1 to 9,   n = value from 1 to 9
const setCell = (i, j, n) => {
  table[i - 1][j - 1].value = n;
  document.getElementById(`${i},${j}`).innerHTML = `${n}`;

  // highlight the starting cells
  const tdElements = document.getElementsByTagName("td");
  for (const td of tdElements) {
    if (td.innerText !== "") {
      td.classList.add("filled");
    }
  }
};

const initializeTable = () => {
  for (i = 0; i < max; i++) {
    for (j = 0; j < max; j++) {
      let value = document.getElementById(`${i + 1},${j + 1}`)?.innerHTML;
      if (value !== "") {
        setCell(i + 1, j + 1, parseInt(value));
        document.getElementById("text").value += `setCell(${i + 1},${j + 1},${parseInt(value)})\n`;
        console.log(`setCell(${i + 1},${j + 1},${parseInt(value)})`);
      }
    }
  }
  document.getElementById("copy-button").removeAttribute("disabled");
};

const initializeFromCode = () => {
  // === SUPER EZ ===
  // setCell(1, 3, 2);
  // setCell(1, 5, 4);
  // setCell(1, 6, 1);
  // setCell(1, 8, 7);
  // setCell(2, 1, 6);
  // setCell(2, 4, 7);
  // setCell(2, 9, 1);
  // setCell(3, 2, 3);
  // setCell(3, 5, 2);
  // setCell(4, 1, 8);
  // setCell(4, 4, 5);
  // setCell(4, 7, 2);
  // setCell(5, 4, 8);
  // setCell(5, 6, 7);
  // setCell(6, 7, 7);
  // setCell(6, 9, 3);
  // setCell(7, 8, 9);
  // setCell(8, 5, 1);
  // setCell(8, 6, 5);
  // setCell(8, 7, 6);
  // setCell(9, 1, 5);
  // setCell(9, 3, 3);
  // setCell(9, 4, 4);

  // === MEDIUM ===
  // setCell(1, 5, 5);
  // setCell(2, 1, 9);
  // setCell(2, 2, 4);
  // setCell(2, 6, 6);
  // setCell(2, 7, 7);
  // setCell(2, 9, 5);
  // setCell(3, 6, 4);
  // setCell(3, 7, 1);
  // setCell(3, 9, 2);
  // setCell(4, 3, 8);
  // setCell(4, 8, 2);
  // setCell(4, 9, 7);
  // setCell(5, 4, 9);
  // setCell(5, 6, 5);
  // setCell(6, 1, 6);
  // setCell(6, 2, 1);
  // setCell(6, 7, 9);
  // setCell(7, 1, 2);
  // setCell(7, 3, 7);
  // setCell(7, 4, 6);
  // setCell(8, 1, 8);
  // setCell(8, 3, 4);
  // setCell(8, 4, 2);
  // setCell(8, 8, 7);
  // setCell(8, 9, 6);
  // setCell(9, 5, 4);

  // === HARD? ===
  // setCell(1, 1, 6);
  // setCell(1, 2, 4);
  // setCell(1, 6, 5);
  // setCell(1, 9, 2);
  // setCell(2, 3, 2);
  // setCell(2, 5, 7);
  // setCell(2, 6, 3);
  // setCell(2, 7, 6);
  // setCell(2, 8, 5);
  // setCell(2, 9, 8);
  // setCell(3, 2, 7);
  // setCell(3, 4, 8);
  // setCell(3, 8, 9);
  // setCell(3, 9, 4);
  // setCell(4, 1, 9);
  // setCell(4, 6, 4);
  // setCell(4, 7, 8);
  // setCell(5, 1, 4);
  // setCell(5, 2, 5);
  // setCell(5, 3, 6);
  // setCell(5, 7, 3);
  // setCell(5, 8, 1);
  // setCell(5, 9, 9);
  // setCell(6, 3, 7);
  // setCell(6, 4, 9);
  // setCell(6, 9, 5);
  // setCell(7, 1, 7);
  // setCell(7, 2, 1);
  // setCell(7, 6, 8);
  // setCell(7, 8, 6);
  // setCell(8, 1, 2);
  // setCell(8, 2, 3);
  // setCell(8, 3, 4);
  // setCell(8, 4, 6);
  // setCell(8, 5, 1);
  // setCell(8, 7, 5);
  // setCell(9, 1, 8);
  // setCell(9, 4, 5);
  // setCell(9, 8, 2);
  // setCell(9, 9, 1);

  //=== MASTER ===
  // setCell(1, 1, 7);
  // setCell(1, 2, 4);
  // setCell(1, 3, 5);
  // setCell(2, 8, 9);
  // setCell(3, 2, 9);
  // setCell(3, 3, 6);
  // setCell(3, 5, 8);
  // setCell(3, 6, 4);
  // setCell(3, 7, 7);
  // setCell(4, 2, 6);
  // setCell(4, 3, 1);
  // setCell(4, 6, 8);
  // setCell(4, 9, 4);
  // setCell(5, 3, 9);
  // setCell(5, 4, 7);
  // setCell(5, 6, 3);
  // setCell(5, 7, 1);
  // setCell(5, 8, 8);
  // setCell(6, 1, 3);
  // setCell(6, 5, 1);
  // setCell(6, 9, 2);
  // setCell(7, 2, 8);
  // setCell(8, 5, 3);
  // setCell(8, 6, 1);
  // setCell(8, 9, 9);
  // setCell(9, 7, 8);
  // setCell(9, 8, 2);
  // setCell(9, 9, 7);

  // === EXTREME ===
  // setCell(1, 2, 4);
  // setCell(1, 4, 8);
  // setCell(2, 1, 5);
  // setCell(2, 3, 1);
  // setCell(2, 9, 4);
  // setCell(3, 1, 8);
  // setCell(3, 6, 9);
  // setCell(3, 8, 6);
  // setCell(5, 1, 2);
  // setCell(5, 6, 6);
  // setCell(5, 7, 4);
  // setCell(5, 9, 5);
  // setCell(6, 2, 9);
  // setCell(6, 6, 7);
  // setCell(6, 8, 8);
  // setCell(7, 5, 1);
  // setCell(7, 7, 7);
  // setCell(8, 5, 6);
  // setCell(8, 7, 2);
  // setCell(9, 1, 3);
  // setCell(9, 3, 4);
  // setCell(9, 4, 9);
  // setCell(9, 9, 1);

  setCell(1, 2, 4);
  setCell(1, 4, 8);
  setCell(2, 1, 5);
  setCell(2, 3, 1);
  setCell(2, 9, 4);
  setCell(3, 1, 8);
  setCell(3, 6, 9);
  setCell(3, 8, 6);
  setCell(5, 1, 2);
  setCell(5, 6, 6);
  setCell(5, 7, 4);
  setCell(5, 9, 5);
  setCell(6, 2, 9);
  setCell(6, 6, 7);
  setCell(6, 8, 8);
  setCell(7, 5, 1);
  setCell(7, 7, 7);
  setCell(8, 5, 6);
  setCell(8, 7, 2);
  setCell(9, 1, 3);
  setCell(9, 3, 4);
  setCell(9, 4, 9);
  setCell(9, 9, 1);
};

/*----------  solving methods  ----------*/
const writeDownNotes = (i, j) => {
  let text = "";
  for (k = 0; k < 9; k++) {
    if (table[i][j].notes[k] == 1) text += `${k + 1} `;
  }

  document.getElementById(`${i + 1},${j + 1}`).setAttribute("notes", text);
};

const countNotes = (i, j) => {
  return table[i][j].notes.filter((note, index) => {
    if (note == 1) {
      table[i][j].possibleValue = index + 1;
      return true;
    }
    return false;
  }).length;
};

const addFinalValue = (i, j) => {
  document.getElementById(`${i + 1},${j + 1}`).innerHTML = `${table[i][j].value}`;
  document.getElementById(`${i + 1},${j + 1}`).removeAttribute("notes");
};

const updateNotes = () => {
  for (i = 0; i < max; i++) {
    for (j = 0; j < max; j++) {
      if (table[i][j].value != 0) continue;
      for (s = 0; s < max; s++) {
        let quadRow = Math.floor(i / 3);
        let quadCol = Math.floor(j / 3);
        let slotRow = Math.floor(s / 3);
        let slotCol = s % 3;
        let row = table[i][s].value;
        let col = table[s][j].value;
        let quad = quadrant[quadRow][quadCol].slot[slotRow][slotCol].value;

        if (row != 0 && table[i][j].notes[row - 1] != 0) {
          table[i][j].notes[row - 1] = 0;
          console.log(`  Rimossa nota ${row} da riga ${i + 1} colonna ${j + 1}`);
        }
        if (col != 0 && table[i][j].notes[col - 1] != 0) {
          table[i][j].notes[col - 1] = 0;
          console.log(`  Rimossa nota ${col} da riga ${i + 1} colonna ${j + 1}`);
        }
        if (quad != 0 && table[i][j].notes[quad - 1] != 0) {
          table[i][j].notes[quad - 1] = 0;
          console.log(`  Rimossa nota ${quad} da riga ${i + 1} colonna ${j + 1}`);
        }
        writeDownNotes(i, j);
      }
    }
  }
};
const forcedValues = () => {
  let count = 0;
  for (i = 0; i < 9; i++) {
    for (j = 0; j < 9; j++) {
      if (table[i][j].value == 0 && countNotes(i, j) == 1) {
        table[i][j].value = table[i][j].possibleValue;
        addFinalValue(i, j);
        console.log(`  Aggiunto ${table[i][j].value} in riga ${i + 1} colonna ${j + 1}`);
        count++;
      }
    }
  }
  return count;
};

const forcedInRow = () => {
  let count = 0; // changes made
  for (i = 0; i < max; i++) {
    let freqVector = new Array(9).fill(0);
    let freqPosition = new Array(9).fill;

    for (j = 0; j < max; j++) {
      for (s = 0; s < max; s++) {
        if (table[i][j].value == 0 && table[i][j].notes[s] == 1) {
          freqVector[s]++;
          freqPosition[s] = j;
        }
      }
    }

    for (s = 0; s < 9; s++) {
      if (freqVector[s] == 1) {
        console.log(`  Aggiunto ${s + 1} in riga ${i + 1} colonna ${freqPosition[s] + 1}`);
        table[i][freqPosition[s]].value = s + 1;
        addFinalValue(i, freqPosition[s]);
        count++;
      }
    }
  }
  return count;
};

const forcedInColumn = () => {
  let count = 0; // changes made
  for (j = 0; j < max; j++) {
    let freqVector = new Array(9).fill(0);
    let freqPosition = new Array(9).fill;

    for (i = 0; i < max; i++) {
      for (s = 0; s < max; s++) {
        if (table[i][j].value == 0 && table[i][j].notes[s] == 1) {
          freqVector[s]++;
          freqPosition[s] = i;
        }
      }
    }

    for (s = 0; s < 9; s++) {
      if (freqVector[s] == 1) {
        console.log(`  Aggiunto ${s + 1} in riga ${freqPosition[s] + 1} colonna ${j + 1}`);
        table[freqPosition[s]][j].value = s + 1;
        addFinalValue(freqPosition[s], j);
        count++;
      }
    }
  }
  return count;
};

const forcedInQuadrant = () => {
  let count = 0; // changes made
  for (i = 0; i < max; i++) {
    let freqVector = new Array(9).fill(0);
    let freqPosition = new Array(9).fill;
    let quadRow = Math.floor(i / 3);
    let quadCol = i % 3;
    for (j = 0; j < max; j++) {
      let slotRow = Math.floor(j / 3);
      let slotCol = j % 3;

      for (s = 0; s < max; s++) {
        if (quadrant[quadRow][quadCol].slot[slotRow][slotCol].value == 0 && quadrant[quadRow][quadCol].slot[slotRow][slotCol].notes[s] == 1) {
          freqVector[s]++;
          freqPosition[s] = j;
        }
      }
    }

    for (s = 0; s < 9; s++) {
      if (freqVector[s] == 1) {
        let row = 3 * quadRow + Math.floor(freqPosition[s] / 3);
        let col = 3 * quadCol + (freqPosition[s] % 3);
        // console.log("=====================================================");
        // console.log(`quadrante ${quadRow} ${quadCol} cella ${Math.floor(freqPosition[s] / 3)} ${freqPosition[s] % 3} riga ${row} colonna ${col}`);
        console.log(`  Aggiunto ${s + 1} in riga ${row + 1} colonna ${col + 1}`);
        table[row][col].value = s + 1;
        addFinalValue(row, col);
        count++;
      }
    }
  }
  return count;
};

const sameNotesInRow = () => {
  let coupleLength; // how many matches do I need to find?
  for (i = 0; i < 9; i++) {
    for (j = 0; j < 8; j++) {
      let found = 1; // how many matches have I found already?
      let toKeep = new Array(9).fill(0); // which notes should I keep?
      if (table[i][j].value != 0) {
        continue;
      }
      for (t = j + 1; t < 9; t++) {
        if (table[i][t].value != 0 || table[i][j].notes.every((note, index) => note === table[i][t].notes[index]) == false) {
          continue;
        }
        coupleLength = countNotes(i, j);
        found++;
        toKeep[0] = j;
        toKeep[found - 1] = t;
        console.log(`  sono uguali riga ${i + 1} colonna ${j + 1} e colonna ${t + 1}, necessarie ${coupleLength}, trovate ${found}`);

        if (found == coupleLength) {
          let protectCell = 0;

          for (n = 0; n < 9; n++) {
            if (table[i][n].value != 0) continue;
            if (n == toKeep[protectCell]) {
              protectCell++;
              continue;
            }
            // loop through notes
            for (s = 0; s < 9; s++) {
              if (table[i][j].notes[s] == 1 && table[i][n].notes[s] == 1) {
                table[i][n].notes[s] = 0;
                console.log(`  Rimosso ${s + 1} da riga ${i + 1} colonna ${n + 1}`);
              }
            }
          }
        }
      }
    }
  }
};

const sameNotesInColumn = () => {
  let coupleLength; // how many matches do I need to find?
  for (j = 0; j < 9; j++) {
    for (i = 0; i < 8; i++) {
      let found = 1; // how many matches have I found already?
      let toKeep = new Array(9).fill(0); // which notes should I keep
      if (table[i][j].value != 0) {
        continue;
      }
      for (t = i + 1; t < 9; t++) {
        if (table[t][j].value != 0 || table[i][j].notes.every((note, index) => note === table[t][j].notes[index]) == false) {
          continue;
        }
        coupleLength = countNotes(i, j);
        found++;
        toKeep[0] = i;
        toKeep[found - 1] = t;
        console.log(`  sono uguali colonna ${j + 1} riga ${i + 1} e riga ${t + 1}, necessarie ${coupleLength}, trovate ${found}`);
        // printf("sono uguali riga %ld colonna %ld e colonna %ld, lungo %d, found %d \n", i + 1, j + 1, t + 1, coupleLength, found);
        if (found == coupleLength) {
          let protectCell = 0;
          for (n = 0; n < 9; n++) {
            if (table[n][j].value != 0) continue;
            if (n == toKeep[protectCell]) {
              protectCell++;
              continue;
            }
            //loop throgh notes
            for (s = 0; s < 9; s++) {
              if (table[i][j].notes[s] == 1 && table[n][j].notes[s] == 1) {
                table[n][j].notes[s] = 0;
                console.log(`  Rimosso ${s + 1} da riga ${n + 1} colonna ${j + 1}`);
              }
            }
          }
        }
      }
    }
  }
};

const sameNotesInQuadrant = () => {
  let coupleLength; // how many matches do I need to find?
  for (i = 0; i < 9; i++) {
    let quadRow = Math.floor(i / 3);
    let quadCol = i % 3;
    for (j = 0; j < 8; j++) {
      let found = 1; // how many matches have I found already?
      let toKeep = new Array(9).fill(0); // which notes should I keep?

      let slotRow = Math.floor(j / 3);
      let slotCol = j % 3;
      let row = 3 * quadRow + Math.floor(j / 3);
      let col = 3 * quadCol + (j % 3);

      if (quadrant[quadRow][quadCol].slot[slotRow][slotCol].value != 0) {
        continue;
      }
      for (t = j + 1; t < 9; t++) {
        if (quadrant[quadRow][quadCol].slot[Math.floor(t / 3)][t % 3].value != 0 || quadrant[quadRow][quadCol].slot[slotRow][slotCol].notes.every((note, index) => note === quadrant[quadRow][quadCol].slot[Math.floor(t / 3)][t % 3].notes[index]) == false) {
          continue;
        }
        coupleLength = countNotes(row, col);
        found++;
        toKeep[0] = j;
        toKeep[found - 1] = t;
        console.log(`  Quadrante ${quadRow + 1} ${quadCol + 1}, cella ${slotRow + 1} ${slotCol + 1} e cella ${Math.floor(t / 3) + 1} ${(t % 3) + 1} sono uguali, necessarie ${coupleLength}, trovate ${found}`);

        if (found == coupleLength) {
          let protectCell = 0;

          for (n = 0; n < 9; n++) {
            if (quadrant[quadRow][quadCol].slot[Math.floor(n / 3)][n % 3].value != 0) continue;
            if (n == toKeep[protectCell]) {
              protectCell++;
              continue;
            }
            // loop through notes
            for (s = 0; s < 9; s++) {
              if (quadrant[quadRow][quadCol].slot[slotRow][slotCol].notes[s] == 1 && quadrant[quadRow][quadCol].slot[Math.floor(n / 3)][n % 3].notes[s] == 1 && quadrant[quadRow][quadCol].slot[Math.floor(n / 3)][n % 3].value == 0) {
                quadrant[quadRow][quadCol].slot[Math.floor(n / 3)][n % 3].notes[s] = 0;
                console.log(`  Rimosso ${s + 1} da quadrante ${quadRow + 1} ${quadCol + 1}, cella ${Math.floor(n / 3) + 1} ${(n % 3) + 1}`);
              }
            }
          }
        }
      }
    }
  }
};

solve = () => {
  //   initializeTable();
  let updatable = 1;
  while (updatable != 0) {
    console.log(`\n%c============== UPDATING NOTES ================`, "color: #ffca2b");
    updateNotes();
    console.log(`\n%c=============== FORCED VALUES ================`, "color: #64cf00");
    updatable = forcedValues();
    console.log(`\n%c============= SAME NOTES IN ROW ==============`, "color: #ffca2b");
    sameNotesInRow();
    console.log(`\n%c=========== SAME NOTES IN COLUMN =============`, "color: #ffca2b");
    sameNotesInColumn();
    updateNotes();
    console.log(`\n%c========== SAME NOTES IN QUADRANT ============`, "color: #ffca2b");
    sameNotesInQuadrant();
    updateNotes();

    if (!updatable) {
      console.log(`\n%c============ FORCED VALUES IN ROW ============`, "color: #64cf00");
      updatable = forcedInRow();
    }
    if (!updatable) {
      console.log(`\n%c========== FORCED VALUES IN COLUMN ===========`, "color: #64cf00");
      updatable = forcedInColumn();
    }
    if (!updatable) {
      console.log(`\n%c========= FORCED VALUES IN QUADRANT ==========`, "color: #64cf00");
      updatable = forcedInQuadrant();
    }
  }
  console.log(`\n%c============== UPDATING NOTES ================`, "color: #ffca2b");
  updateNotes();
};

const copyFromTextarea = () => {
  let copyText = document.getElementById("text");

  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(copyText.value);
};

// on DOM ready initialize sudoku
document.addEventListener("DOMContentLoaded", function (event) {
  for (let i = 0; i < 3; i++) {
    quadrant[i] = [];
    for (let j = 0; j < 3; j++) {
      quadrant[i][j] = new quadrant_t();
    }
  }
  //* idk it works
  for (i = 0; i < max; i++) {
    table[i] = [];
    for (j = 0; j < max; j++) {
      table[i][j] = new slot_t();
    }
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let quadRow = Math.floor(i / 3);
      let quadCol = Math.floor(j / 3);
      let slotRow = i % 3;
      let slotCol = j % 3;
      quadrant[quadRow][quadCol].slot[slotRow][slotCol] = table[i][j];
    }
  }
});
