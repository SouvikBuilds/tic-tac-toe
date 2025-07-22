console.log("Welcome to tic tac toe")

let music = new Audio('music.mp3')

let audioTurn = new Audio('tingsound.mp3')
let gameOver = new Audio('gameover.wav')

let turn = "X"

let isgameOver = false

const resetButton = document.getElementById("reset")
resetButton.addEventListener("click", function () {
    location.reload()
})

//function to check turn

const changeTurn = () => {
    if (turn === 'X') {
        return turn = '0'
    } else {
        return turn = 'X'
    }
}

//function to check for a win

const checkWin = () => {
    let boxText = document.getElementsByClassName("boxText")
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    let someoneWon = false
    wins.forEach(e => {
        if (
            (boxText[e[0]].innerText === boxText[e[1]].innerText) &&
            (boxText[e[1]].innerText === boxText[e[2]].innerText) &&
            (boxText[e[0]].innerText !== "")
        ) {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " Won";
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "200px";
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.transition = "1s all ease-in-out";
            gameOver.play()
            isgameOver = true
            someoneWon = true
        }
    });

    if (!someoneWon) {
        let filledBoxes = Array.from(boxText).filter(box => box.innerText !== "");
        if (filledBoxes.length === 9) {
            document.querySelector('.info').innerText = "It's a Draw!";
            isgameOver = true;
            gameOver.play()
        }
    }


}


//game Logic

let boxes = document.getElementsByClassName("box")

Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxText")
    element.addEventListener("click", () => {
        if (boxText.innerText === '' && !isgameOver) {
            boxText.innerText = turn
            changeTurn()
            audioTurn.play()
            checkWin()
            if (!isgameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn For " + turn
            }
        }
    })
});
