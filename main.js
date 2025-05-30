// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const prevBtn2 = document.querySelector("#prev-btn2");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");
const content = document.querySelector("#content");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");

const f1 = document.querySelector("#f1");
const f2 = document.querySelector("#f2");
const f3 = document.querySelector("#f3");
const f4 = document.querySelector("#f4");

const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");
const b4 = document.querySelector("#b4");

const link1 = document.querySelector("#link1");
const link2 = document.querySelector("#link2");
const link3 = document.querySelector("#link3");





// Event Listener
window.addEventListener('resize',responcive);

prevBtn.style.display="none";
prevBtn.addEventListener("click", goPrevPage);
prevBtn2.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);
link1.addEventListener("click", linkPress);
link2.addEventListener("click", linkPress);
link3.addEventListener("click", linkPress);
p4.addEventListener("click", goPrevPage);





// Business Logic
let currentLocation = 1;
let numOfPapers = 4;
let maxLocation = numOfPapers + 1;

let linkCounter = 0;

let open =false;
responcive();
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
    responcive()
    
}

function goNextPage() {
    
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 4;
                f2.style.zIndex=5;
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
        if(currentLocation == 5){
            prevBtn.style.display="none";
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
                    if(linkCounter!=0)
                        {
                            linkCounter=0;
                            

                        }
                        else{
                            openBook();
                            paper4.classList.remove("flipped");
                            paper4.style.zIndex = 4;
                        }
                    
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
        if(currentLocation != 1){
            prevBtn.style.display="block";
        }
    }
}

function responcive(){
    if(open==true){
        nextBtn.style.width = "50%";
        nextBtn.style.width = "50%";
    }
    
    if(open==false){
        nextBtn.style.width = "100%";
        nextBtn.style.width = "100%";
    }
}
function linkPress() {
    linkCounter=1;
    
}