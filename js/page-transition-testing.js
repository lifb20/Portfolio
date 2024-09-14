const about = document.getElementById('about');
const projects = document.getElementById('projects');
const movingBorder = document.getElementById('moving_border');
const aboutPage = document.getElementById('about_page');
const projectsPage = document.getElementById('projects_page');
const navPage = document.getElementById('nav_page_container');
const filterBar = document.getElementById('filter_container');
const navContainer = document.getElementById('nav_container');
const body = document.getElementById('body');

// // projectsPage.style.transition = 'transform 1s ease';
let toggle = 0;
let transitioning = false;
projectsPage.style.display = 'none';

function switchToAbout(event){
    console.log(transitioning);
    if(toggle === 1 && !transitioning){
        toggle = 0;
        transitioning = true;


        movingBorder.style.left = '5px';

        aboutPage.style.transform = 'translateX(0%)'

        projectsPage.style.maxHeight = 'translateX(100%)';
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
}

function switchToProjects(event){
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
        return new Promise((resolve) => {
            setTimeout(() => {
                projectsPage.style.transition = 'transform 1s ease';
                projectsPage.style.transform = 'translateX(0%)'; // Move into view
                movingBorder.style.left = '135px';
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
                filterBar.style.opacity = '1';
                filterBar.style.pointerEvents = 'none';
                transitioning = false;
                console.log('Transition complete, flag reset');
                resolve();
            }, 200);
        });
    });  


    }
}




function myFunction(x) {
    if (x.matches) { // If media query matches
    //   document.body.style.backgroundColor = "lightyellow";
      about.addEventListener('click', switchToAbout);
      projects.addEventListener('click', switchToProjects);
      navContainer.removeEventListener('click', switchToAbout);
      navContainer.removeEventListener('click', switchToProjects);
    } else {
    //   document.body.style.backgroundColor = "lightpink";
      about.removeEventListener('click', switchToAbout);
      projects.removeEventListener('click', switchToProjects);

      navContainer.addEventListener('click', switchToAbout);
      navContainer.addEventListener('click', switchToProjects);
    }
  }
  
  // Create a MediaQueryList object
  var x = window.matchMedia("(min-width: 780px)")
  
  // Call listener function at run time
  myFunction(x);
  
  // Attach listener function on state changes
  x.addEventListener("change", function() {
    myFunction(x);
    console.log('change!');
  }); 
