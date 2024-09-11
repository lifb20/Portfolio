const about = document.getElementById('about');
const projects = document.getElementById('projects');
const movingBorder = document.getElementById('moving_border');
const aboutPage = document.getElementById('about_page');
const projectsPage = document.getElementById('projects_page');
const navPage = document.getElementById('nav_page_container');
const filterBar = document.getElementById('filter_container');

let toggle = 0;



projectsPage.style.transition = 'transform 1s ease';


console.log(toggle);



about.addEventListener('click', () => {
    if(toggle === 1){
        toggle = 0;

        movingBorder.style.left = '3px';

        aboutPage.style.transform = 'translateX(0%)'

        projectsPage.style.transform = 'translateX(100%)';

        filterBar.style.opacity = '0';
        filterBar.style.pointerEvents = 'none';

    }
});

projects.addEventListener('click', () => {
    if(toggle === 0){
        toggle = 1;

        movingBorder.style.left = '133px';

        aboutPage.style.transform = 'translateX(-100%)';

        projectsPage.style.transform = 'translateX(0%)';
        projectsPage.style.display = 'flex';
        

        filterBar.style.opacity = '1';
        filterBar.style.pointerEvents = 'auto';

    }
});