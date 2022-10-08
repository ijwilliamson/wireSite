//Scripts for the wire website Template
//Author: Ian Williamson - ian@4of.uk
//Date: 05 / 10 / 2022

setInterval(myTimer, 1000);

function myTimer() {
    addArticleWires();
}

const addArticleWires = ()=>{
       // populate each articles graphicElement with one wire block every 56px in height
        let allGraphicBoxes = Array.from(document.getElementsByClassName('graphicElement'));
        
        allGraphicBoxes.forEach(element => {

            let articleHeight = element.offsetHeight;
            let wiresRequired = articleHeight / 56;
            let lastWires = ["", ""];
            element.innerHTML = "";
            for(i=1;i<=wiresRequired;i++)
            {
                let img = document.createElement('img');
                let block = randomBlock(lastWires);
                img.src = block;
                
                element.appendChild(img);
                lastWires[0] = lastWires[1];
                lastWires[1] = block;
            }

        }) 

}

// return a random wire Block
const randomBlock = (lastWires)=>{
let rand="";
do{
    rand = (Math.floor(Math.random()*5)+1).toString();
} while (lastWires.includes(`/graphics/blocks/block${rand}.svg`))
    
    return `/graphics/blocks/block${rand}.svg`;
}




