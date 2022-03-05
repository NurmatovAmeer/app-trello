let board = [];


let selectedIndex = -1;

function showCard() {
    // document.getElementById("card").classList.remove("d-none");
    // document.getElementById("card").classList.add("nimadir");

    document.getElementById("card").classList.toggle("d-none");
}

function addBoard() {
    let boardTitle = document.getElementById("board-title").value;

    if (boardTitle.length > 0){

        document.getElementById("board-title").value = "";

        let newBoard = {
            title: boardTitle,
            tasks: []
        };

        if (selectedIndex >= 0){
            board[selectedIndex] =  newBoard;
            selectedIndex = -1
        }else {
            board.push( newBoard)
        }
        drawPage();
    } else {
        alert("Ma'lumot to'ldiring!!!");
    }

}

function drawPage() {
    let result = "";

    let result2 = "";

    for (let i = 0; i < board.length; i++){

        for (let j = 0; j < board[i].tasks.length; j++){

            result2 += "<div class='task'><span >"+ board[i].tasks[j] +"</span><div class='task-close' onclick='deleteTask("+ i +")'>&times;</div></div>";
        }

        result +=
            "<div class='col-4 mt-2'>" +
            "<div class='card'> " +
            "<div class='card-header'><h6>"+ board[i].title +"</h6><div><button type='button' class='btn btn-success' onclick='editBoard("+ i +")'>Edit</button></div><div class='task-close' onclick='deleteBoard()'>&times;</div></div>" +
            "<div class='card-body'>"+ result2 +"</div>" +
            "<div class='card-footer'>" +
            "<textarea class='form-control' id='task-title"+ i +"' placeholder='Type here'></textarea>" +
            "<button type='button' class='btn btn-success ml-auto mt-3 d-block' onclick='addTask("+ i +")'>Add</button>" +
            "</div>" +
            "</div>" +
            "</div>"

    }
    document.getElementById("result").innerHTML = result;
}

function addTask(index) {
    let taskTitle = document.getElementById("task-title" + index).value;

    board[index].tasks.push(taskTitle);
    drawPage();
}

function deleteTask(index,item) {

    board[index].tasks.splice(item,1);
    drawPage()
}

function deleteBoard(index) {
    board.splice(index, 1);
    drawPage()
}

function  editBoard(index) {

    document.getElementById("board-title").value = board[index].title;

    selectedIndex = index;
}
