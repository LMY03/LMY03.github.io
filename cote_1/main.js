// References to DOM elements
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const book = document.querySelector('#book');

// Event listeners
prevBtn.addEventListener("click", goPrevious);
nextBtn.addEventListener("click", goNext);

// Business Logic
let currentState = 1;
let numOfPapers = 162;
let maxState = numOfPapers + 1;

const papers = new Array();
for (let i = 0; i < maxState; i++) {
    papers[i] = document.querySelector('#p' + (i + 1) +'')
    papers[i].style.zIndex = numOfPapers - i;
}

function displayPaper() {
    document.write ('<div id="book" class="book">');
    for(let i = 1; i < maxState; i++) {
        document.write (
            '<div id="p' + i + '" class="paper">' +
                '<div class="front">' + 
                    '<div id="f' + i + '" class="front-content">' +
                        '<img class="img" src="./img/cote_1-0' + (i * 2 - 1) +'.png" alt="p' + (i * 2 - 1) + '" width="100%" height="100%">' +
                    '</div>' +
                '</div>' +
                '<div class="back">' + 
                    '<div id="b' + i + '" class="back-content">' +
                        '<img class="img" src="./img/cote_1-0' + (i * 2) +'.png" alt="p' + (i * 2) + '" width="100%" height="100%">' +
                    '</div>' +
                '</div>' +
            '</div>'
        );
    }
    document.write ('</div>');
}

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-500px)";
    nextBtn.style.transform = "translateX(500px)";
}

function closeBook(isFirstPage) {
    if(isFirstPage) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNext() {
    if(currentState < maxState) { 
        switch(currentState) {
            case 1:
                openBook();
                papers[0].classList.add("flipped");
                papers[0].style.zIndex = 1;
                break;
            case 2:
                papers[1].classList.add("flipped");
                papers[1].style.zIndex = 2;
                break;
            case 3:
                papers[2].classList.add("flipped");
                papers[2].style.zIndex = 3;
                break;
            case 4:
                papers[3].classList.add("flipped");
                papers[3].style.zIndex = 4;
                break;
            case 5:
                papers[4].classList.add("flipped");
                papers[4].style.zIndex = 5;
                break;
            case 6:
                papers[5].classList.add("flipped");
                papers[5].style.zIndex = 6;
                break;
            case 7:
                closeBook(false);
                papers[6].classList.add("flipped");
                papers[6].style.zIndex = 7;
                break;
            default: 
                throw new Error("unkown state");    
        }
        currentState++;
    }
}

function goNext() {
    if(currentState < maxState) {
        for (let i = 0; i < maxState; i++) {
            if (currentState == 1) {
                openBook();
            }
            if (currentState == numOfPapers) {
                closeBook(false);
            }
            if (currentState - i == 1) {
                papers[i].classList.add("flipped");
                papers[i].style.zIndex = currentState;
            }
        }
        currentState++;
    }
}

function goPrevious() {
    if(currentState > 1) {
        for (let i = 0; i < maxState; i++) {
            if (currentState == 2) {
                closeBook(true);
            }
            if (currentState == maxState) {
                openBook();
            }
            if (currentState - i == 2) {
                papers[i].classList.remove("flipped");
                papers[i].style.zIndex = numOfPapers - i;
            }
        }
        currentState--;
    }
}