//sorting ascending descending

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;

  dir = "asc";

  while (switching) {

    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {

      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {

          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {

      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;

      switchcount ++;
    } else {

      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

//checkbox logic

function selectall(source) {
  let checkboxes = document.getElementsByName('cb');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = source.checked;
  }
}

//submit logic

function submit() {
  let checkboxes = document.getElementsByName('cb');
  let mytable = document.getElementById("myTable");

  let count=0;
  let data =[];
  for(var i=0, n=checkboxes.length;i<n;i++) {
    if(checkboxes[i].checked){
      count++
      let x = mytable.rows[i+1].cells[1].innerHTML
      let y = mytable.rows[i+1].cells[2].innerHTML
      let z = mytable.rows[i+1].cells[3].innerHTML
      data.push({continent:x,area:y,Population:z})
    }
  }
  console.log(count);
  console.log(data);
}
