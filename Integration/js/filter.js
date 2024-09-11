const toggleBox = document.getElementById('toggle_box');
const filterContainer = document.getElementById('filter_container');
const optionsContainer = document.getElementById('options_container');

const sheet = document.styleSheets[4];

// Toggle Filter Box

filterContainer.style.transition = 'margin-top 1s ease, opacity 0.5s ease';

toggleBox.addEventListener('mouseenter', () => {
    filterContainer.style.marginTop = '0px';
    optionsContainer.style.boxShadow = '2px 5px 5px rgba(0,0,0, 0.5)';
});

optionsContainer.addEventListener('mouseenter', () => {
    filterContainer.style.marginTop = '0px';
    optionsContainer.style.boxShadow = '2px 5px 5px rgba(0,0,0, 0.5)';
});

toggleBox.addEventListener('mouseleave', () => {
    filterContainer.style.marginTop = '-230px';
    optionsContainer.style.boxShadow = 'none';
});

optionsContainer.addEventListener('mouseleave', () => {
    filterContainer.style.marginTop = '-230px';
    optionsContainer.style.boxShadow = 'none';
});

// Filter Algorithm

// filterSelection("PP")
function selectClass(c) {
  var x, i;
  x = document.getElementsByClassName("grid-box");
  if (c == "all") c = "";
  // Add the "show" class (display: flex) to the filtered elements, and remove the "show" class from the elements that are not selected
  var showID = "show" + c;
  for (i = 0; i < x.length; i++) {
    // w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], showID);
  }
  sheet.insertRule(`.${showID} { display: flex;}`, sheet.cssRules.length);
}

function deselectClass(c) {
    var x, i;
    x = document.getElementsByClassName("grid-box");
    if (c == "all") c = "";
    // Add the "show" class (display: flex) to the filtered elements, and remove the "show" class from the elements that are not selected
    var showID = "show" + c;
    for (i = 0; i < x.length; i++) {
      if (x[i].className.indexOf(c) > -1){
        w3RemoveClass(x[i], showID);
      }
    }
  }

// function deselectClassAndHead(c, head) {
// var x, i;
// x = document.getElementsByClassName("grid-box");
// if (c == "all") c = "";
// // Add the "show" class (display: flex) to the filtered elements, and remove the "show" class from the elements that are not selected
// var showID = "show" + c;
// var showIDHead = "show" + head;
// console.log(showIDHead)
// for (i = 0; i < x.length; i++) {
//     if (x[i].className.indexOf(c) > -1){
//     w3RemoveClass(x[i], showID);
//     w3RemoveClass(x[i], showIDHead);
//     }
// }
// }

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var checkBoxCtn = document.getElementById("checkbox_container");
var checkBoxes = checkBoxCtn.getElementsByClassName("checkbox_");
for (var i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener("click", function() {
        var targetClass = this.id;
        var classHead = this.className.split(" ")[1];
        var checkBoxChildren = checkBoxCtn.getElementsByClassName(classHead);
        if(this.checked == true){
            selectClass(targetClass);
            var allChecked = true;
            for(var j = 0; j < checkBoxChildren.length; j++){
                if(!checkBoxChildren[j].checked){
                    allChecked = false;
                }
            }
            if(allChecked){
                document.getElementById(classHead).checked = true;
            }
        } else {
            deselectClass(targetClass);
            if(classHead != "NOHEAD"){
                if(document.getElementById(classHead).checked){
                    document.getElementById(classHead).checked = false;
                }
            }
        }
    });
}

var checkBoxHeads = checkBoxCtn.getElementsByClassName("checkbox_header");
for (var i = 0; i < checkBoxHeads.length; i++) {
    checkBoxHeads[i].addEventListener("click", function() {
        console.log("Toggled!");
        var targetClass = this.id;
        var checkBoxChildren = checkBoxCtn.getElementsByClassName(targetClass);
        console.log(`The ID is ${targetClass}!`);

        for(var j = 0; j < checkBoxChildren.length; j++){
            var inputId = checkBoxChildren[j].id;
            if(this.checked == true){
                checkBoxChildren[j].checked = true;
                selectClass(inputId);
            } else {
                checkBoxChildren[j].checked = false;
                deselectClass(inputId);
            }
        }
    });
}


function triggerInitialCheckbox(checkbox) {
  var targetClass = checkbox.id;
  var classHead = "NOHEAD";
  var checkBoxChildren = checkBoxCtn.getElementsByClassName(classHead);
  checkbox.checked = true;
  if(checkbox.checked == true){
    selectClass(targetClass);
    var allChecked = true;
    for(var j = 0; j < checkBoxChildren.length; j++){
        if(!checkBoxChildren[j].checked){
            allChecked = false;
        }
    }
    if(allChecked){
        document.getElementById(classHead).checked = true;
    }
    } else {
    deselectClass(targetClass);
    if(classHead != "NOHEAD"){
        if(document.getElementById(classHead).checked){
            document.getElementById(classHead).checked = false;
        }
    }
}
}

triggerInitialCheckbox(checkBoxes[2]);
console.log('filter');