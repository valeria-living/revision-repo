var cards = [
    ["Question0","Answer0",false,false],
    ["Question1","Answer1",false,false],
    ["Question2","Answer2",false,false],
    ["Question3","Answer3",false,false],
    ["Question4","Answer4",false,false],
    ["Question5","Answer5",false,false]
]

var num = 0

// document.getElementsByClassName("card").addEventListener('click', printing);

function allowDrop(ev) {
    ev.preventDefault();
}

function printing(ev) {
    console.log(ev)
    createCard(2)
}

function drag(ev) {
    const img = new Image();
    img.src = "img/card.png";
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.setDragImage(img, 0, 0)
}

function dragDeck(ev) {
    const img = new Image();
    img.src = "img/card.png";
    ev.dataTransfer.setData("text", createCard(num).id);
    num += 1
    ev.dataTransfer.setDragImage(img, 0, 0)
}

function drop(ev) {
    ev.preventDefault();
    var target = ev.target
    var data = ev.dataTransfer.getData("text");
    console.log(data)
    if (ev.target.className != "draggableBox") {
        while (target.className != "draggableBox") {
            target = target.parentElement
            console.log(target)
        }
        target.appendChild(document.getElementById(data));
    }
    else {
        var target = ev.target
        console.log(document.getElementById(data))
        ev.target.appendChild(document.getElementById(data));
    }
  }

function createCard(questionNum) {
    var newDiv = document.createElement("div");
    newDiv.id = "card" + questionNum
    newDiv.className = "card"
    newDiv.draggable = true
    newDiv.setAttribute("ondragstart", "drag(event)");
    newDiv.setAttribute("onclick", "printing(this.id)");
    
    newDiv.innerHTML = (`<img src="img/card.png" draggable="false" pointer-events="false">
        <p class="centered">` + cards[questionNum][0] + `</p>`)
    document.body.appendChild(newDiv);
    return newDiv
}