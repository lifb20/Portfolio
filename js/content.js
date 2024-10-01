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
    "demo": false,
    "demo-link": "demo-link",

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
    "tags": ["ALL", "FEATURED", "INDIV", "DD"],
    "img-source": 'img/id_1.png',

    // Modal content
    "setting": "Setting: Imperial College London",
    "date": "Date: 01/21 – 02/21",
    "type": "Type: Individual",

    "gitHub": false,
    "gitHub-link": "Report-Link",
    "report": true,
    "report-link": "documents/id_1.pdf",
    "website": false,
    "website-link": "Website-Link",
    "demo": false,
    "demo-link": "demo-link",

    "img-src": "img/id_1.png",

    "description": ["The objective of this project was to design a CPU from scratch on a Register-Transfer Level. The processor can run 11 unique instructions, including basic arithmetic, jump instructions, as well as load and store instructions. Although the CPU was design on in-house Imperial College software, namely ISSIE, the skills learned and techniques applied are transferable to any RTL design environment.",
         "The design involved 3 states, controlled by the finite-state machine. However, not all instructions required that many states. Hence, the design was optimised by reducing the number of states used by certain instructions, resulting in these instructions running 33% faster.",
          "One of the challenges faced included figuring out how to convert top-level design specifications into functional RTL logic. This was overcome by breaking down the top-level design into components with distinct functionality, determining how these components would communicate each other and then using reasoning to design its internal logic."],

    "info-list-one-toggle": false,
    "info-list-one-title": 'Features:',
    "info-list-one-items": ["Optimised instructions", "item2", "item3"],

    "info-list-two-toggle": false,
    "info-list-two-title": 'Challenges:',
    "info-list-two-items": ["item1", "item2", "item3"],

    "info-list-three-toggle": false,
    "info-list-three-title": 'Info Title three',
    "info-list-three-items": ["item1", "item2", "item3"],
}

const project2 = {
    // Unique project ID
    "id": "2",

    // Box content
    "title": "FPGA Hardware Accelerator",
    "tags": ["ALL", "FEATURED", "INDIV", "FPGA", "VERILOG", "MATLAB", "CPP"],
    "img-source": 'img/id_2.png',

    // Modal content
    "setting": "Setting: Imperial College London",
    "date": "Date: 01/24 – 03/24",
    "type": "Type: Individual",

    "gitHub": true,
    "gitHub-link": "https://github.com/lifb20/CORDIC-Hardware-Accelerator/tree/master",
    "report": true,
    "report-link": "documents/id_2.pdf",
    "website": false,
    "website-link": "Website-Link",
    "demo": false,
    "demo-link": "demo-link",

    "img-src": "img/id_2.png",

    "description": ["This project’s objective was to implement custom accelerator hardware on an FPGA to maximise the throughput for the calculation of the Cosine function. To achieve this, there task was broken down into 3 main parts across 3 different programming languages, namely Verilog, C and MATLAB. The first part involved instantiating a NIOS II processor on an Intel DE10-MAX FPGA from Quartus Prime, followed by executing test cases, written in C, on the processor. Furthermore, running these tests provided insights into the differences of the data cache and instruction cache, as well as how to determine the optimal size of said caches with respect to the task at hand.",
         "The calculation of Cosine was to be achieved without the use of a LUT. Instead, we used the CORDIC algorithm, which uses a fixed number of iterations to converge to a Cosine value within a given error range. MATLAB was used to simulate the CORDIC design before it was implemented in Verilog. This allowed one to determine the optimal word length and number of iterations to achieve a precision of 10-6 with a 95% confidence. To ascertain these, Monte Carlo simulations were run several 100 thousands of times.", 
         "Once testing was completed on the MATLAB design of CORDIC, the design was implemented in Verilog. Modular design techniques were utilised to allow for reusable code. Furthermore, throughput was maximised by having the same number of CORDIC blocks as iterations required to complete a Cosine calculation. A challenge was faced was using Intel’s IP for floating point to fixed-point conversions. Thus, I implemented my own converter, which could convert floating point values to fixed-point ones in 1iteration, compared to Intel’s IP’s 7 iterations. This was accomplished due to the tighter constraints on floating point input values. "],

    "info-list-one-toggle": false,
    "info-list-one-title": 'Features:',
    "info-list-one-items": ["Floating point converter 85% faster than Intel IP", ""],

    "info-list-two-toggle": true,
    "info-list-two-title": 'Languages used:',
    "info-list-two-items": ["Verilog", "MATLAB", "C"],

    "info-list-three-toggle": false,
    "info-list-three-title": 'Info Title three',
    "info-list-three-items": ["item1", "item2", "item3"],
}

const project3 = {
    // Unique project ID
    "id": "3",

    // Box content
    "title": "Portfolio Website",
    "tags": ["ALL", "FEATURED", "INDIV", "JS", "FULLS", "FRONTEND"],
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
    "demo": false,
    "demo-link": "demo-link",

    "img-src": "img/id_3.png",

    "description": ["This Portfolio Website was created to display projects and work I have undertaken using the programming, electronic and maths skills I have been developing over the past decade. As a challenge, as well as to ensure I understand fundamental JavaScript, this website was designed completely from scratch without the use of libraries nor frameworks. Since this website will progressively grow, it was designed to be scalable by using classes, allowing for new projects to be added easily and swiftly.",
        "Some of the challenges faced during development included making the website a single-page application, creating a custom filter from scratch and ensuring the website remained responsive. The key to overcoming these issues was utilising various JavaScript event listeners to dynamically amend certain CSS styles. Furthermore, JavaScript’s lack of static typing resulted in easily losing track of the data types while coding. Hence, a suggested future improvement would be transferring the code to TypeScript, where data types are more explicit."
         ],

    "info-list-one-toggle": true,
    "info-list-one-title": 'Features:',
    "info-list-one-items": ["Seamless responsive design", "OOP-design techniques to ensure scalability", "Single-page application"],

    "info-list-two-toggle": true,
    "info-list-two-title": 'Languages used:',
    "info-list-two-items": ["JavaScript", "HTML/CSS"],

    "info-list-three-toggle": false,
    "info-list-three-title": 'Info Title three',
    "info-list-three-items": ["item1", "item2", "item3"],
}

const project4 = {
    // Unique project ID
    "id": "4",

    // Box content
    "title": "Machine Learning",
    "tags": ["ALL", "FEATURED", "INDIV", "ML", "PYTHON"],
    "img-source": 'img/id_4.png',

    // Modal content
    "setting": "Setting: Imperial College London",
    "date": "Date: 10/23 – 11/23",
    "type": "Type: Individual",

    "gitHub": true,
    "gitHub-link": "https://github.com/lifb20/Machine-Learning-Coursework",
    "report": true,
    "report-link": "documents/id_4.pdf",
    "website": false,
    "website-link": "https://lifb20.github.io/Portfolio/",
    "demo": false,
    "demo-link": "demo-link",

    "img-src": "img/id_4.png",

    "description": ["The following coursework aimed to teach the practical application of, as well as the theory behind, various Machine Learning algorithms. This included both supervised and unsupervised learning techniques, such as PLA, Linear Regression, Non-Linear Feature Transforms, Logistic Regression, Multi-Layer Perceptrons, SVMs, kNNs and K-Means Clustering."
        , "Although focusing on providing one with tools to tackle various ML problems, this coursework also taught invaluable data science skills in Python."
        ],

    "info-list-one-toggle": true,
    "info-list-one-title": 'Language used:',
    "info-list-one-items": ["Python", "LaTeX"],

    "info-list-two-toggle": true,
    "info-list-two-title": 'Python Libraries used:',
    "info-list-two-items": ["Tensorflow/Keras", "Numpy", "Pandas", "Scikit-Learn", "Matplotlib"],

    "info-list-three-toggle": false,
    "info-list-three-title": 'Info Title three',
    "info-list-three-items": ["item1", "item2", "item3"],
}

const project5 = {
    // Unique project ID
    "id": "5",

    // Box content
    "title": "Analogue Music Synthesiser",
    "tags": ["ALL", "GROUP", "ANAL"],
    "img-source": 'img/id_5.png',

    // Modal content
    "setting": "Setting: Imperial College London",
    "date": "Date: 05/21 – 06/21",
    "type": "Type: Group",

    "gitHub": false,
    "gitHub-link": "https://github.com/lifb20/Machine-Learning-Coursework",
    "report": true,
    "report-link": "documents/id_5.pdf",
    "website": false,
    "website-link": "",
    "demo": true,
    "demo-link": "documents/demo_5.mp4",

    "img-src": "img/id_5.png",

    "description": ["Within this project, we utilised fundamental electronic components to design an analogue music synthesiser. Once completed, it outputted a basic “Happy Birthday” theme song. In addition to designing the synthesiser, we were also tasked with creating various filters that would change how various tones sounds. For instance, changing a square wave into a triangle wave. The reasoning behind this was that such filters are common features among analogue music synthesisers."
        , "Having conducted the project as a group of 3, the project was broken into 3 components. My responsibilities were to design the filter, which was essentially an analogue integrator. One of the main challenges faced was the inconsistent behaviour for different frequencies – a direct result of the high-pass behaviour of capacitors. Another challenge was integration, which necessitated strict input-output design requirements between the main components. This enabled each group member to work on their part, knowing what to expect as an input.",
        ],

    "info-list-one-toggle": true,
    "info-list-one-title": 'Language used:',
    "info-list-one-items": ["LTspice"],

    "info-list-two-toggle": false,
    "info-list-two-title": 'Info Title two',
    "info-list-two-items": ["item1", "item2", "item3"],

    "info-list-three-toggle": false,
    "info-list-three-title": 'Info Title three',
    "info-list-three-items": ["item1", "item2", "item3"],
}

const project6 = {
    // Unique project ID
    "id": "6",

    // Box content
    "title": "Mars Rover Project",
    "tags": ["ALL", "GROUP", "ANAL", "CPP"],
    "img-source": 'img/id_6.jpg',

    // Modal content
    "setting": "Setting: Imperial College London",
    "date": "Date: 05/22 – 06/22",
    "type": "Type: Group",

    "gitHub": false,
    "gitHub-link": "https://github.com/samin50/Wall-EE",
    "report": true,
    "report-link": "documents/id_6.jpg",
    "website": false,
    "website-link": "",
    "demo": false,
    "demo-link": "demo-link",

    "img-src": "img/id_6.jpg",

    "description": ["The Mars Rover Group Project consisted of a group of 7 engineers tasked with creating a multi-functional rover. For instance, being able to detect certain objects, stream its live location to a web-app and automatically return to its solar-panel charging station. My responsibilities involved writing C++ code to ensure the Rover always has enough charge to return to its charging station and maximise the power output of the solar panels by implementing a maximum-power tracking algorithm. Furthermore, I was responsible for implementing a control system on an Switch-Mode Power Supply that ensured the battery received a constant 5V when charging."
        , "Throughout the project, we had to overcome significant obstacles. One of the main obstacles was that the testing of the solar panel algorithm only worked in sunny weather. This issue was circumvented by testing the algorithm indoors by shining a strong light onto the panels."
    ],

    "info-list-one-toggle": false,
    "info-list-one-title": 'Features:',
    "info-list-one-items": ["d"],

    "info-list-two-toggle": true,
    "info-list-two-title": 'Language used:',
    "info-list-two-items": ["C++"],

    "info-list-three-toggle": false,
    "info-list-three-title": 'Info Title three',
    "info-list-three-items": ["item1", "item2", "item3"],
}

const project7 = {
    // Unique project ID
    "id": "7",

    // Box content
    "title": "Agile/Scrum Essay",
    "tags": ["ALL", "INDIV"],
    "img-source": 'img/id_7.png',

    // Modal content
    "setting": "Setting: Imperial College London",
    "date": "Date: 01/24 – 02/24",
    "type": "Type: Individual",

    "gitHub": false,
    "gitHub-link": "https://github.com/samin50/Wall-EE",
    "report": true,
    "report-link": "documents/id_7.pdf",
    "website": false,
    "website-link": "",
    "demo": false,
    "demo-link": "demo-link",

    "img-src": "img/id_7.png",

    "description": ["This essay is an investigation into the history, development, implementation and pitfalls of the Agile/Scrum project management methodologies. The essay has helped me understand that Scrum is a framework based on Agile principals. Furthermore, despite Scrum’s variability, it was mainly developed for a software development environment."
        , "The essay also discusses the various Scrum roles, responsibilities and implementation. To understand why Scrum was developed, there is also significant comparison to more traditional project management methodologies, such as Waterfall.",
         "Finally, an analysis of various case studies provide an insight into how Scrum can be implemented most effectively in practise, as well as how potential pitfalls can be avoided."
        ],

    "info-list-one-toggle": false,
    "info-list-one-title": 'Language used:',
    "info-list-one-items": ["LTspice"],

    "info-list-two-toggle": false,
    "info-list-two-title": 'Language used:',
    "info-list-two-items": ["C++"],

    "info-list-three-toggle": false,
    "info-list-three-title": 'Info Title three',
    "info-list-three-items": ["item1", "item2", "item3"],
}

const project8 = {
    // Unique project ID
    "id": "8",

    // Box content
    "title": "LingoPal Project",
    "tags": ["ALL", "GROUP"],
    "img-source": 'img/id_8.png',

    // Modal content
    "setting": "Setting: Imperial College London",
    "date": "Date: 02/24 – 03/24",
    "type": "Type: Group",

    "gitHub": false,
    "gitHub-link": "https://github.com/samin50/Wall-EE",
    "report": true,
    "report-link": "documents/id_8.pdf",
    "website": false,
    "website-link": "",
    "demo": false,
    "demo-link": "demo-link",

    "img-src": "img/id_8.png",

    "description": ["LingoPal was a collaborative project management undertaking, detailing the process of taking a product from conception to deployment. The product itself was a language-learning robot, functioning as a buddy that could help children develop their language skills. The project consisted of a report and pitch-style presentation."
        , "My responsibilities involved Change Management, Team/Stakeholder Communication and Progress Documentation. In addition to this, I was in charge of proof-reading and collating the report. One of the key lessons learned was that a single project management technique is not always the most effective. Instead, a combination of techniques, such as Agile and Waterfall methods, could be more effective depending on the project’s nature. Furthermore, when it comes to communication, one should ensure everyone involved in the project feels heard and has a sense of ownership. Also, when considering Change Management, one should have contingency plans to ensure project overshoots, e.g. overspends, delays or unrealistic project scopes, do not jeopardise the entire project."
        ],

    "info-list-one-toggle": false,
    "info-list-one-title": 'Language used:',
    "info-list-one-items": ["LTspice"],

    "info-list-two-toggle": false,
    "info-list-two-title": 'Language used:',
    "info-list-two-items": ["C++"],

    "info-list-three-toggle": false,
    "info-list-three-title": 'Info Title three',
    "info-list-three-items": ["item1", "item2", "item3"],
}

const project9 = {
    // Unique project ID
    "id": "9",

    // Box content
    "title": "Patient Voice AI – Flask App",
    "tags": ["ALL", "FEATURED", "GROUP", "FRONTEND", "BACKEND", "DL", "PYTHON", "JS"],
    "img-source": 'img/id_9.png',

    // Modal content
    "setting": "Setting: Consultancy Project/ Imperial College",
    "date": "Date: 04/24 – 06/24",
    "type": "Type: Group",

    "gitHub": true,
    "gitHub-link": "https://github.com/torpeyl/Group-16-Project-MFTECH-Patient-Voice-AI",
    "report": true,
    "report-link": "documents/id_9.pdf",
    "website": false,
    "website-link": "",
    "demo": true,
    "demo-link": "documents/demo_9.mov",

    "img-src": "img/id_9.png",

    "description": ["Patient Voice AI was a consultancy project for the med-tech company MF-Tech. The aim was to develop an automatic pre-screening process for NHS patients with throat-related complaints. This would be achieved by using Machine Learning techniques to extract crucial information from an audio clip, in which the patient describes their symptoms. The final result consisted of 3 different ML models, each with the task of: sentiment analysis, preliminary disease classification and cough-to-speech analysis. Using the results of these 3 models, the doctor would have information to aid their diagnosis of the patient."
        , "A website interface was created such that the patient would only have to upload a voice recording – everything else would be taken care of on the website’s Back-End, which was my responsibility. The Back-End was built using Python’s Flask framework. Furthermore, I led the integration of the various ML models, such that an audio sample would be sent from the Front-End to the Back-End, transcribed, processed individually by each model and then output the results in the form of a PDF that could be sent to the patient’s and doctor’s email."
        , "Initially, I had trained a CNN model that could classify whether a patient was suffering to a throat infection with 75% accuracy. However, due to project requirement changes surrounding the patient’s voice recording, this model had to be dismissed."
        ],

    "info-list-one-toggle": true,
    "info-list-one-title": 'Features: ',
    "info-list-one-items": ["Semantic Analysis", "Disease Classification", "Cough-sneeze Identification", "Complete Front- and Back-End for seemless user-experience"],

    "info-list-two-toggle": true,
    "info-list-two-title": 'Languages used:',
    "info-list-two-items": ["Python", "JavaScript", "HTML/CSS"],

    "info-list-three-toggle": true,
    "info-list-three-title": 'Libraries/Frameworks used:',
    "info-list-three-items": ["Flask", "Tensorflow/Keras"],
}

const project10 = {
    // Unique project ID
    "id": "10",

    // Box content
    "title": "ASLearn – Hackathon",
    "tags": ["ALL", "FEATURED", "GROUP", "DL", "PYTHON"],
    "img-source": 'img/id_10.jpeg',

    // Modal content
    "setting": "Setting: ICHackathon",
    "date": "Date: 04/02/24",
    "type": "Type: Group",

    "gitHub": false,
    "gitHub-link": "https://github.com/torpeyl/Group-16-Project-MFTECH-Patient-Voice-AI",
    "report": false,
    "report-link": "documents/id_9.pdf",
    "website": true,
    "website-link": "https://devpost.com/software/aslearn-lftr3m",
    "demo": false,
    "demo-link": "documents/demo_9.mov",

    "img-src": "img/id_10.jpeg",

    "description": ["23"],

    "info-list-one-toggle": true,
    "info-list-one-title": 'Features: ',
    "info-list-one-items": ["CNN-based sign language identification", "Gamified for classroom settings"],

    "info-list-two-toggle": true,
    "info-list-two-title": 'Languages/Frameworks used:',
    "info-list-two-items": ["Python", "Tensorflow/Keras"],

    "info-list-three-toggle": false,
    "info-list-three-title": 'Libraries/Frameworks used:',
    "info-list-three-items": ["Tensorflow/Keras"],
}


const content = [project1, project2, project3,
                 project4, project5, project6,
                 project7, project8, project9,
                 project10];

const contentObjects = content.map( contentItem => 
    new Project(contentItem)
);

hover();