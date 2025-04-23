// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");
const content = document.querySelector("#content");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");





// Event Listener
window.addEventListener('resize',responcive);

prevBtn.style.display="none";
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);



// Business Logic
let currentLocation = 1;
let numOfPapers = 4;
let maxLocation = numOfPapers + 1;

let open =false;

let escala =1;

function openBook() {
    book.style.transform = "translateX(50%)";
    open = true;
    responcive();
    
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
    open =false;
}

function goNextPage() {
    
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 4;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper1.style.zIndex = 3;
                paper2.style.zIndex = 4;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper1.style.zIndex = 2;
                paper2.style.zIndex = 3;
                paper3.style.zIndex = 4;
                break;
                case 4:
                paper4.classList.add("flipped");
                paper1.style.zIndex = 1;
                paper2.style.zIndex = 2;
                paper3.style.zIndex = 3;
                paper4.style.zIndex = 4;
                closeBook(false);
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;

        if(currentLocation == maxLocation){
            nextBtn.style.display="none";
        }
        if(currentLocation != 1){
            prevBtn.style.display="block";
        }
        
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper4.style.zIndex = 1;
                paper3.style.zIndex = 2;
                paper2.style.zIndex = 3;    
                paper1.style.zIndex = 4;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper4.style.zIndex = 2;
                paper3.style.zIndex = 3;
                paper2.style.zIndex = 4;
                break;
            case 4:
                openBook();
                paper3.classList.remove("flipped");
                paper4.style.zIndex = 3;
                paper3.style.zIndex = 4;
                break;
                case 5:
                    openBook();
                    paper4.classList.remove("flipped");
                    paper4.style.zIndex = 4;
                    break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
        if(currentLocation != maxLocation){
            nextBtn.style.display="block";
        }
        if(currentLocation == 1){
            prevBtn.style.display="none";
        }
    }
}

function responcive(){
    if(window.innerWidth<850 && open==true){
        prevBtn.style.transform = "translateX(-100px)";
        nextBtn.style.transform = "translateX(100px)";
    }
    if(window.innerWidth<480 && open==true)
    {
        prevBtn.style.transform = "translateX(-50px)";
        nextBtn.style.transform = "translateX(50px)";
    }
    if(window.innerWidth>=850 && open==true){
        prevBtn.style.transform = "translateX(-180px)";
        nextBtn.style.transform = "translateX(180px)";
    }
    if(open==false){
        prevBtn.style.transform = "translateX(0px)";
        nextBtn.style.transform = "translateX(0px)";
    }
}