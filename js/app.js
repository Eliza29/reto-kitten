/*
Funcionalidad 
*/

var container = document.getElementsByTagName('img')[0];

function changeMediaQuery() {
   
    if(large.matches){
    container.setAttribute('src','assets/images/kitten-large.png'); 
    }
    else if(medium.matches) {
    container.setAttribute('src','assets/images/kitten-medium.png');   
    }
    else if (small.matches){
    container.setAttribute('src','assets/images/kitten-small.png');     
    }
}

var large = window.matchMedia("screen and (min-width: 768px)");
var medium = window.matchMedia("screen and (min-width: 450px) and (max-width: 768px)");
var small = window.matchMedia("screen and (max-width: 450px)");

changeMediaQuery();
large.addListener(changeMediaQuery);
medium.addListener(changeMediaQuery);
small.addListener(changeMediaQuery);
