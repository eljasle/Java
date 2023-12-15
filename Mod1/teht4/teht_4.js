
var studentName = prompt("Welcome to Hogwarts! Tell us your name: ");

if (studentName) {
    var randomHouse = Math.floor(Math.random() * 4) + 1;

    var houseName;

    switch (randomHouse) {
        case 1:
            houseName = "Gryffindor";
            break;
        case 2:
            houseName = "Slytherin";
            break;
        case 3:
            houseName = "Hufflepuff";
            break;
        case 4:
            houseName = "Ravenclaw";
            break;
    }

    var resultMessage = studentName + ", you are in " + houseName + "!";
    var paragraph = document.createElement("p");
    paragraph.textContent = resultMessage;
    document.body.appendChild(paragraph);
} else {
    var errorMessage = "Please enter your name to be sorted into a house.";
    var errorParagraph = document.createElement("p");
    errorParagraph.textContent = errorMessage
    document.body.appendChild(errorParagraph);
}
