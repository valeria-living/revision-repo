var cards = [
    ["What is the difference between Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS)? ",
    "IaaS: Rent virtual machines and resources online. PaaS: Build apps without managing infrastructure. SaaS: Access software via subscription online.",
    0,false,false], // Ref: Question, Answer, Deck, Card in hand?, Showing answer?
    ["Public vs Private vs Hybrid Clouds","Public: Low cost, scalable, less secure. Private: High cost, secure, less scalable. Hybrid: Balanced cost, security, scalability.",0,false,false],
    ["Public Cloud Pros/Cons","Pros: Low cost, scalable, flexible, advanced tech. Cons: Less control, security risks, privacy issues.",0,false,false],
    ["Question3","Answer3",0,false,false],
    ["Question4","Answer4",0,false,false],
    ["Whats the chillest guy you know","alex (biological man)",0,false,false]
]

var num = 0


function createCard(questionNum) {
    var newDiv = document.createElement("div");
    newDiv.id = "card" + questionNum
    newDiv.className = "card"
    newDiv.draggable = true
    newDiv.setAttribute("ondragstart", "drag(event)");
    newDiv.setAttribute("onclick", "printing(this.id)");
    
    newDiv.innerHTML = (`<img src="img/card.png" draggable="false" pointer-events="false">
        <p class="centered" id="cardValue` + questionNum + `">` + cards[questionNum][0] + `</p>`)
    document.body.appendChild(newDiv);
    document.getElementById("cardValue" + questionNum).style.color = "#FF0000"
    return newDiv
}

function allowDrop(ev) {
    ev.preventDefault();
}

function printing(id) {
    var card = document.getElementById("cardValue" + getCardNum(id))
    if (cards[getCardNum(id)][4] == false) {
        card.innerHTML = cards[getCardNum(id)][1]
        cards[getCardNum(id)][4] = true
        card.style.color = "#008080"
    }
    else {
        card.innerHTML = cards[getCardNum(id)][0]
        cards[getCardNum(id)][4] = false
        card.style.color = "#FF0000"
    }
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
    ev.dataTransfer.setData("text", createCard(randomAvailableCard()).id);
    ev.dataTransfer.setDragImage(img, 0, 0)
}

function drop(ev) {
    ev.preventDefault();
    var target = ev.target
    var data = ev.dataTransfer.getData("text");
    if (ev.target.className != "draggableBox") {
        while (target.className != "draggableBox") {
            target = target.parentElement
        }
        document.getElementById(data).style.display = "inline";
        target.appendChild(document.getElementById(data));
        cards[getCardNum(data)][3] = true
    }
    else {
        var target = ev.target
        document.getElementById(data).style.display = "inline";
        ev.target.appendChild(document.getElementById(data));
        cards[getCardNum(data)][3] = true
    }
  }

function deleteCard(ev) {
    var data = ev.dataTransfer.getData("text");
    document.getElementById(data).remove()
    cards[getCardNum(data)][3] = false
}

function getCardNum(text) {
    text = text.slice(4,text.length);
    return text
}

function randomAvailableCard() {
    var availableArray = []
    for (let x = 0; x < cards.length; x++) {
        if (cards[x][3] == false) {
            availableArray.push([cards[x], x])
        }
    }
    var debug = availableArray[Math.floor((Math.random() * availableArray.length))][1]
    console.log(debug)
    return debug
}