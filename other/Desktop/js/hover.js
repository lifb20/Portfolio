

const hover = function hover(){


    //Hover for grid boxes
    const gridBoxes = document.getElementsByClassName('grid-box');

    console.log(gridBoxes);
    console.log(gridBoxes.length);

    for(let i=0; i < gridBoxes.length; i++){
        gridBoxes[i].addEventListener('mouseover', function() {
            this.style.cursor = 'pointer'; // Change color on hover
            var boxTitle = this.querySelector('.box-title');
            var gridBoxBackground = this.querySelector('.grid-box-background');
            var gridBoxOverlay = this.querySelector('.grid-box-background-overlay');
            console.log(boxTitle);
            boxTitle.style.color = '#E3EFF8';

            gridBoxBackground.style.transform = 'scale(1.05)';
            gridBoxBackground.style.cursor = 'pointer';

            gridBoxOverlay.style.backgroundColor = 'rgba(91, 155, 213, 0.5)';

        });
        
        gridBoxes[i].addEventListener('mouseout', function() {
            this.style.cursor = 'default'; // Change color on hover
            var boxTitle = this.querySelector('.box-title');
            var gridBoxBackground = this.querySelector('.grid-box-background');
            var gridBoxOverlay = this.querySelector('.grid-box-background-overlay');

            boxTitle.style.color = '#4D4D4D';

            gridBoxBackground.style.transform = 'scale(1)';
            gridBoxBackground.style.cursor = 'default';

            gridBoxOverlay.style.backgroundColor = 'rgba(227, 239, 248, 0.5)';
        });
    }

    //Hover for modals text
    const modalTextsRight = document.getElementsByClassName('extra-text-right-cont');

    for(let i=0; i < modalTextsRight.length; i++){
        modalTextsRight[i].addEventListener('mouseover', function() {
            var text = this.querySelector('.extra-text-right');
            text.style.color = "rgb(47, 114, 177)";


        });
        
        modalTextsRight[i].addEventListener('mouseout', function() {
            var text = this.querySelector('.extra-text-right');

            text.style.color = "black";


        });
    }


}

export default hover;