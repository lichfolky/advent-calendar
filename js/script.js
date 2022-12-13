let cells = document.querySelectorAll(".cell");
let now = new Date();
if (now.getMonth() == 11) {

    for (cell of cells) {
        let cellDate = new Date(now.getFullYear() + "-12-" + cell.innerText);
        //console.log(cell.innerText + ": " + cellDate.toLocaleDateString());


        if (now.getDate() == cellDate.getDate()) {
            console.log(now.getDate(), cellDate.getDate());

            //cell.classList.add("show");;
            cell.addEventListener("click", (e) => {
                e.target.classList.toggle("show");
            });
        }
        if (now.getDate() > cellDate.getDate()) {
            cell.classList.add("show");;
        }
    }

}