let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newbtn = document.querySelector(".new");
let win = document.querySelector(".win");
let msg = document.querySelector("#msg");

let turnO = true;

let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO===true){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});



const checkWinner =() =>{
    for(let pattern of winPatterns){
        let pos1Val =boxes[pattern[0]].innerText;
        let pos2Val =boxes[pattern[1]].innerText;
        let pos3Val =boxes[pattern[2]].innerText;
        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}


const showWinner = (winner) =>{
    msg.innerText =`Congratulations, Winner is ${winner}`;
    win.classList.remove("hide");
    win.style.display='flex';
    disabledBoxes();
}


const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabledBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const reSet = () =>{
    turnO = true;
    enabledBoxes();
    win.classList.add("hide");
    win.style.display='none';
}


reset.addEventListener('click', reSet);
newbtn.addEventListener('click', reSet);