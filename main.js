
const numerador = document.querySelector("#contador");
const contenido = document.querySelector("#libro");

const BI = document.querySelector("#BI");
const BIS = document.querySelector("#BIS");

const BD = document.querySelector("#BD");
const BDS = document.querySelector("#BDS");

const BDZS = document.querySelector("#BDZS");
const BDZR = document.querySelector("#BDZR");

const h1 = document.querySelector("#hoja1");
const h2 = document.querySelector("#hoja2");
const h3 = document.querySelector("#hoja3");
const h4 = document.querySelector("#hoja4");
const h5 = document.querySelector("#hoja5");
const h6 = document.querySelector("#hoja6");
const h7 = document.querySelector("#hoja7");
const h8 = document.querySelector("#hoja8");

BIS.addEventListener("click", bis);
BDS.addEventListener("click", bds);
BI.addEventListener("click", bi);
BD.addEventListener("click", bd);
BDZS.addEventListener("click", zoomS);
BDZR.addEventListener("click", zoomR);


let contador = 1;
let contadorZoom = 1;
let max = 8;

    h1.style.display  = "block";
    h2.style.display  = "none";
    h3.style.display  = "none";
    h4.style.display  = "none";
    h5.style.display  = "none";
    h6.style.display  = "none";
    h7.style.display  = "none";
    h8.style.display  = "none";
    
    window.addEventListener('resize', function() {
        pageUpdate()
      });


function bis()
{
    if(contador>1)
    {
        contador--;
        
    }
    pageUpdate()

}
function bds()
{
    if(contador<max)
    {
        contador++;
        
    }
    pageUpdate()

}
function bi()
{
    if(contador==max)
    {
        contador= contador-1;
        
    }
    else if(contador%2!=0 && contador>1)
    {
        contador= contador-2;
        

    }
    if(contador!=max && contador>1 && contador%2==0)
    {
        contador= contador-1;
        

    }
    pageUpdate()

}
function bd()
{
    if(contador==1)
        {
            contador= contador+1;
            
        }
        else if(contador%2==0 && contador<max)
        {
            contador= contador+2;
            
    
        }
        if(contador!=1 && contador<max && contador%2!=0)
        {
            contador= contador+1;
            
    
        }
        pageUpdate()
        
}
function pageUpdate()
{
    if(contador==1)
    {
    h1.style.display  = "block";
    h2.style.display  = "none";
    h3.style.display  = "none";
    h4.style.display  = "none";
    h5.style.display  = "none";
    h6.style.display  = "none";
    h7.style.display  = "none";
    h8.style.display  = "none";
    
    }
    if(contador==max)
    {
    h1.style.display  = "none";
    h2.style.display  = "none";
    h3.style.display  = "none";
    h4.style.display  = "none";
    h5.style.display  = "none";
    h6.style.display  = "none";
    h7.style.display  = "none";
    h8.style.display  = "block";

    }
    
    
        if(contador==2)
            {
            h1.style.display  = "none";
            h2.style.display  = "block";
            if(window.innerWidth > 1200){
                h3.style.display  = "block";
            }else{
                h3.style.display  = "none";
            }
            h4.style.display  = "none";
            h5.style.display  = "none";
            h6.style.display  = "none";
            h7.style.display  = "none";
            h8.style.display  = "none";
        
            }
            if(contador==3)
                {
                h1.style.display  = "none";
                if(window.innerWidth > 1200){
                    h2.style.display  = "block";
                }else{
                    h2.style.display  = "none";
                }
                h3.style.display  = "block";
                h4.style.display  = "none";
                h5.style.display  = "none";
                h6.style.display  = "none";
                h7.style.display  = "none";
                h8.style.display  = "none";
            
                }
                if(contador==4)
                {
                h1.style.display  = "none";
                h2.style.display  = "none";
                h3.style.display  = "none";
                h4.style.display  = "block";
                if(window.innerWidth > 1200){
                    h5.style.display  = "block";
                }else{
                    h5.style.display  = "none";
                }
                h6.style.display  = "none";
                h7.style.display  = "none";
                h8.style.display  = "none";
            
                }
                if(contador==5)
                    {
                    h1.style.display  = "none";
                    h2.style.display  = "none";
                    h3.style.display  = "none";
                    if(window.innerWidth > 1200){
                        h4.style.display  = "block";
                    }else{
                        h4.style.display  = "none";
                    }
                    h5.style.display  = "block";
                    h6.style.display  = "none";
                    h7.style.display  = "none";
                    h8.style.display  = "none";
                
                    }
                    if(contador==6)
                        {
                        h1.style.display  = "none";
                        h2.style.display  = "none";
                        h3.style.display  = "none";
                        h4.style.display  = "none";
                        h5.style.display  = "none";
                        h6.style.display  = "block";
                        if(window.innerWidth > 1200){
                            h7.style.display  = "block";
                        }else{
                            h7.style.display  = "none";
                        }
                        h8.style.display  = "none";
                    
                        }
                        if(contador==7)
                            {
                            h1.style.display  = "none";
                            h2.style.display  = "none";
                            h3.style.display  = "none";
                            h4.style.display  = "none";
                            h5.style.display  = "none";
                            if(window.innerWidth > 1200){
                                h6.style.display  = "block";
                            }else{
                                h6.style.display  = "none";
                            }
                            h7.style.display  = "block";
                            h8.style.display  = "none";
                        
                            }        

    
    

}
function zoomS(){

    if(contadorZoom<2){
        contadorZoom=contadorZoom+0.25;
    }
    
    contenido.style.transform = `scale(${contadorZoom})`;
}
function zoomR(){

    if(contadorZoom>0.25){
        contadorZoom=contadorZoom-0.25;
    }
    
    contenido.style.transform = `scale(${contadorZoom})`;
}
