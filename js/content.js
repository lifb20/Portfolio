import Project from "./htmlPopulator.js"
import hover from "./hover.js"

const content = [];

for(var i=0; i < 9; i++){
    content.push({
        // Unique project ID
        "id": `${i}`,
    
        // Box content
        "title": `Project ${i}`,
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
    
        "description": ["Hello this is my first project", " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "five"],
    
        "info-list-one-toggle": false,
        "info-list-one-title": 'Info Title one',
        "info-list-one-items": ["item1", "item2", "item3"],
    
        "info-list-two-toggle": false,
        "info-list-two-title": 'Info Title two',
        "info-list-two-items": ["item1", "item2", "item3"],
    
        "info-list-three-toggle": true,
        "info-list-three-title": 'Info Title three',
        "info-list-three-items": ["item1", "item2", "item3"],
    })
}
// const project1 = {
//     // Unique project ID
//     "id": "1",

//     // Box content
//     "title": "JSON Project TESTING",
//     "tags": ["CPP", "FRONTEND", "ALL", "FEATURED", "INDIV"],
//     "img-source": 'img/bluebell.jpeg',

//     // Modal content
//     "setting": "Setting",
//     "date": "Date",
//     "type": "Type",

//     "gitHub": true,
//     "gitHub-link": "Report-Link",
//     "report": true,
//     "report-link": "Report-Link",
//     "website": true,
//     "website-link": "Website-Link",

//     "img-src": "Img-src",

//     "description": ["Hello this is my first project", " lorem ipsum two", "lorem ipsum three", "five"],

//     "info-list-one-toggle": true,
//     "info-list-one-title": 'Info Title one',
//     "info-list-one-items": ["item1", "item2", "item3"],

//     "info-list-two-toggle": true,
//     "info-list-two-title": 'Info Title two',
//     "info-list-two-items": ["item1", "item2", "item3"],

//     "info-list-three-toggle": true,
//     "info-list-three-title": 'Info Title three',
//     "info-list-three-items": ["item1", "item2", "item3"],
// }


const contentObjects = content.map( contentItem => 
    new Project(contentItem)
);

hover();