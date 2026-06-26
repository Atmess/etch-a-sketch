  
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
           square.addEventListener('mouseover', (e) => {
    // 1. Check this specific square's personal memory (defaults to 0)
    let count = Number(e.target.dataset.count || 0);

    if (count < 10) {
        count++;
        e.target.dataset.count = count; // Save the new number into the HTML
    }
 const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

 /*e.target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${count*0.1})`; 
 console.log(count*0.1);*/
    // 2. Apply pure black at (count * 10%) opacity
     e.target.style.backgroundColor = `rgba(${r-r*count*10/100}, ${g-g*count*10/100}, ${b-b*count*10/100}, ${1})`;
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

function onhover(){
    hovercount++;

    const alpha = Map(hovercount, 0, 10, 0, 255, true);
}

function getRandomRgba() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b},)`;
}
