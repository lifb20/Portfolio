import Project from "./htmlPopulator.js"
import hover from "./hover.js"


// for(var i=0; i < 9; i++){
//     content.push({
//         // Unique project ID
//         "id": `${i}`,
    
//         // Box content
//         "title": `Project ${i}`,
//         "tags": ["FEATURED", "ALL", "ALL", "FEATURED", "INDIV"],
//         "img-source": 'img/id_1.png',
    
//         // Modal content
//         "setting": "Setting",
//         "date": "Date",
//         "type": "Type",
    
//         "gitHub": true,
//         "gitHub-link": "Report-Link",
//         "report": true,
//         "report-link": "Report-Link",
//         "website": true,
//         "website-link": "Website-Link",
    
//         "img-src": "img/id_1.png",
    
//         "description": ["Hello this is my first project", "daskjd", "five"],
    
//         "info-list-one-toggle": false,
//         "info-list-one-title": 'Info Title one',
//         "info-list-one-items": ["item1", "item2", "item3"],
    
//         "info-list-two-toggle": false,
//         "info-list-two-title": 'Info Title two',
//         "info-list-two-items": ["item1", "item2", "item3"],
    
//         "info-list-three-toggle": true,
//         "info-list-three-title": 'Info Title three',
//         "info-list-three-items": ["item1", "item2", "item3"],
//     })
// }
const project0 = {
    // Unique project ID
    "id": "0",

    // Box content
    "title": "JSON Project TESTING",
    "tags": ["CPP", "FRONTEND", "ALL", "FEATURED", "INDIV"],
    "img-source": 'img/bluebell.jpeg',

    // Modal content
    "setting": "Setting",
    "date": "Date",
    "type": "Type",

    "gitHub": true,
    "gitHub-link": "Report-Link",
    "report": true,
    "report-link": "Report-Link",
    "website": true,
    "website-link": "Website-Link",

    "img-src": "Img-src",

    "description": ["Hello this is my first project", " lorem ipsum two", "lorem ipsum three", "five"],

    "info-list-one-toggle": true,
    "info-list-one-title": 'Info Title one',
    "info-list-one-items": ["item1", "item2", "item3"],

    "info-list-two-toggle": true,
    "info-list-two-title": 'Info Title two',
    "info-list-two-items": ["item1", "item2", "item3"],

    "info-list-three-toggle": true,
    "info-list-three-title": 'Info Title three',
    "info-list-three-items": ["item1", "item2", "item3"],
}

const project1 = {
    // Unique project ID
    "id": "1",

    // Box content
    "title": "CPU Design Project",
    "tags": ["ALL", "FEATURED", "DD"],
    "img-source": 'img/id_1.png',

    // Modal content
    "setting": "Setting: Imperial College London",
    "date": "Date: 01/21–02/21",
    "type": "Type: Individual",

    "gitHub": false,
    "gitHub-link": "Report-Link",
    "report": true,
    "report-link": "documents/id_1.pdf",
    "website": false,
    "website-link": "Website-Link",

    "img-src": "img/id_1.png",

    "description": ["Hello this is my first project", " lorem ipsum two", "lorem ipsum three", "five"],

    "info-list-one-toggle": false,
    "info-list-one-title": 'Info Title one',
    "info-list-one-items": ["item1", "item2", "item3"],

    "info-list-two-toggle": false,
    "info-list-two-title": 'Info Title two',
    "info-list-two-items": ["item1", "item2", "item3"],

    "info-list-three-toggle": false,
    "info-list-three-title": 'Info Title three',
    "info-list-three-items": ["item1", "item2", "item3"],
}

const project2 = {
    // Unique project ID
    "id": "2",

    // Box content
    "title": "Hardware Acceleration on FPGA for NIOS II Processor",
    "tags": ["ALL", "FEATURED", "FPGA", "VERILOG", "MATLAB", "C"],
    "img-source": 'img/id_2.png',

    // Modal content
    "setting": "Setting: Imperial College London",
    "date": "Date: 01/24–03/24",
    "type": "Type: Individual",

    "gitHub": false,
    "gitHub-link": "Report-Link",
    "report": true,
    "report-link": "documents/id_2.pdf",
    "website": false,
    "website-link": "Website-Link",

    "img-src": "img/id_2.png",

    "description": ["Hello this is my first project", " lorem ipsum two", "lorem ipsum three", "five"],

    "info-list-one-toggle": false,
    "info-list-one-title": 'Info Title one',
    "info-list-one-items": ["item1", "item2", "item3"],

    "info-list-two-toggle": false,
    "info-list-two-title": 'Info Title two',
    "info-list-two-items": ["item1", "item2", "item3"],

    "info-list-three-toggle": false,
    "info-list-three-title": 'Info Title three',
    "info-list-three-items": ["item1", "item2", "item3"],
}

const project3 = {
    // Unique project ID
    "id": "3",

    // Box content
    "title": "Portfolio Website",
    "tags": ["ALL", "FEATURED", "JS", "FULLS", "FRONTEND"],
    "img-source": 'img/id_3.png',

    // Modal content
    "setting": "Setting: Personal Project",
    "date": "Date: 09/24",
    "type": "Type: Individual",

    "gitHub": true,
    "gitHub-link": "https://github.com/lifb20/Portfolio",
    "report": false,
    "report-link": "documents/id_2.pdf",
    "website": true,
    "website-link": "https://lifb20.github.io/Portfolio/",

    "img-src": "img/id_3.png",

    "description": ["Hello this is my first project", " lorem ipsum two", "lorem ipsum three", "five"],

    "info-list-one-toggle": false,
    "info-list-one-title": 'Info Title one',
    "info-list-one-items": ["item1", "item2", "item3"],

    "info-list-two-toggle": false,
    "info-list-two-title": 'Info Title two',
    "info-list-two-items": ["item1", "item2", "item3"],

    "info-list-three-toggle": false,
    "info-list-three-title": 'Info Title three',
    "info-list-three-items": ["item1", "item2", "item3"],
}



const content = [project1, project2, project3];

const contentObjects = content.map( contentItem => 
    new Project(contentItem)
);

hover();