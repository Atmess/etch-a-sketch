  
        // Select your parent container
        const gridcontainer = document.getElementById('container');

        // Total number of elements needed for a 16x16 layout
        const totalSquares = 16 * 16; 

        // Generate the 256 internal divs dynamically
        for (let i = 0; i < totalSquares; i++) {
            const square = document.createElement('div');
            square.classList.add('grid-item');
            gridcontainer.appendChild(square);
        }
   