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

function drag(ev) {
    const img = new Image();
    img.src = "img/card.png";
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.setDragImage(img, 0, 0)
    console.log(ev.target)
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }