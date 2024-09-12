const about = document.getElementById('about');
const projects = document.getElementById('projects');
const movingBorder = document.getElementById('moving_border');
const aboutPage = document.getElementById('about_page');
const projectsPage = document.getElementById('projects_page');
const navPage = document.getElementById('nav_page_container');
const filterBar = document.getElementById('filter_container');

let toggle = 0;
let transitioning = false;
projectsPage.style.display = 'none';


// projectsPage.style.transition = 'transform 1s ease';


console.log(toggle);



about.addEventListener('click', () => {
    console.log(transitioning);
    if(toggle === 1 && !transitioning){
        toggle = 0;
        transitioning = true;

        movingBorder.style.left = '3px';

        aboutPage.style.transform = 'translateX(0%)'


        projectsPage.style.transform = 'translateX(100%)';

        const projectsFadeOut = new Promise((resolve, reject) => {
            setTimeout(() => {
                projectsPage.style.display = 'none';
                projectsPage.style.transition = 'none';
                console.log('timeout');
                resolve();
            }, 1000);

        });

        projectsFadeOut.then(() => {
            setTimeout(() => {
                transitioning = false;
            }, 200);
        });
        
        filterBar.style.opacity = '0';
        filterBar.style.pointerEvents = 'none';
    }
});

projects.addEventListener('click', () => {
    console.log(transitioning);
    if(toggle === 0 && !transitioning){
        toggle = 1;
        transitioning = true;
        

        const projectsFadeIn = new Promise((resolve, reject) => {
                projectsPage.style.display = 'flex';
                projectsPage.style.transform = 'translateX(100%)';
                console.log('timeout 2');
                resolve();
        });

        projectsFadeIn
    .then(() => {
        // Wait a bit before starting the transition
        return new Promise((resolve) => {
            setTimeout(() => {
                projectsPage.style.transition = 'transform 1s ease';
                projectsPage.style.transform = 'translateX(0%)'; // Move into view
                movingBorder.style.left = '133px';
                aboutPage.style.transform = 'translateX(-100%)';
                console.log('timeout 3');
                resolve();
            }, 20); // Small delay to ensure styles are applied correctly
        });
    })
    .then(() => {
        // Wait for a bit after the transition ends before allowing further actions
        return new Promise((resolve) => {
            setTimeout(() => {
                transitioning = false;
                console.log('Transition complete, flag reset');
                resolve();
            }, 200); // Adjust the delay as needed for your specific use case
        });
    });


        // projectsPage.style.display = 'flex';
        // projectsPage.style.transform = 'translateX(100%)';
        // movingBorder.style.left = '133px';
        // aboutPage.style.transform = 'translateX(-100%)';
        
        // projectsPage.style.transition = 'transform 1s ease';
        // projectsPage.style.transform = 'translateX(0%)';


        

        filterBar.style.opacity = '1';
        filterBar.style.pointerEvents = 'none';

    }
});