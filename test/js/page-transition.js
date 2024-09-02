const about = document.getElementById('about');
const projects = document.getElementById('projects');
const movingBorder = document.getElementById('moving_border');
const aboutPage = document.getElementById('about_page');
const projectsPage = document.getElementById('projects_page');
const navPage = document.getElementById('nav_page_container');

let toggle = 0;
projectsPage.style.transform = 'translateX(100%)';
console.log(toggle);



about.addEventListener('click', () => {
    if(toggle === 1){
        toggle = 0;

        movingBorder.style.left = '3px';
        aboutPage.style.transform = 'translateX(0%)'
        projectsPage.style.transform = 'translateX(100%)';
        // aboutPage.style.display = 'flex';
        // projectsPage.style.display = 'none';

    }
});

projects.addEventListener('click', () => {
    if(toggle === 0){
        toggle = 1;

        movingBorder.style.left = '133px';
        aboutPage.style.transform = 'translateX(-100%)';
        projectsPage.style.transform = 'translateX(0%)';
        // setTimeout(() => {
        //     aboutPage.style.display = 'none';
        //   }, 1000);
        projectsPage.style.display = 'flex';

    }
});