var cards = [
    ["Question0","Answer0",false],
    ["Question1","Answer1",false],
    ["Question2","Answer2",false],
    ["Question3","Answer3",false],
    ["Question4","Answer4",false],
    ["Question5","Answer5",false]
]

function allowDrop(ev) {
    ev.preventDefault();
}

function printing(ev) {
    console.log(ev.target)
}

function drag(ev) {
    const img = new Image();
    img.src = "img/card.png";
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.setDragImage(img, 0, 0)
}

function drop(ev) {
    ev.preventDefault();
    var target = ev.target
    var data = ev.dataTransfer.getData("text");
    if (ev.target.className != "draggableBox") {
        while (target.className != "draggableBox") {
            target = target.parentElement
            console.log(target)
        }
        target.appendChild(document.getElementById(data));
    }
    else {
        var target = ev.target
        console.log(ev.target)
        ev.target.appendChild(document.getElementById(data));
    }
  }

  document.getElementById("card0").addEventListener('click', printing);