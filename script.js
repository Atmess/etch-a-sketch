  
        // Select your parent container
        const gridcontainer = document.getElementById('container');
        const resetbutton = document.getElementById('reset-btn');

        let newsize;


function createdgrid(size){

gridcontainer.innerHTML='';
        // Total number of elements needed for a 16x16 layout
        const totalSquares = size * size; 

        // Dynamically injects: "repeat(32, 1fr)" into the CSS

        // Generate the 256 internal divs dynamically
        for (let i = 0; i < totalSquares; i++) {
            const square = document.createElement('div');
            square.classList.add('grid-item');
square.style.width=`calc(100% / ${size})`;
square.style.height=`calc(100% / ${size})`;
            square.addEventListener('mouseover', function(e){
                e.target.style.backgroundColor= getRandomHexColor();
            });
            gridcontainer.appendChild(square);
        }
    } 

    createdgrid(16);


    resetbutton.addEventListener('click', ()=>{
         newsize= prompt ("enter new size");

newsize=parseInt(newsize);
if (newsize && newsize > 0 && newsize <= 100) {
        createdgrid(newsize); 
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
    });

    function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}