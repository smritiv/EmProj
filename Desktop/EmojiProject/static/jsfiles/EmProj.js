document.getElementById('hf').addEventListener('click',addhf);
document.getElementById('nf').addEventListener('click',addnf);
document.getElementById('sf').addEventListener('click',addsf);
showresult();
//getting the element by the id you stated in the html, and then the addEventListener "notices" when its clicked, and adds to "add()f"

function moodcount(){
    var mcountarr = new Array; //taking localstorage and making it into an array so you can easily refer to certain numbers, initially comes a string = not useful
    var mcount = localStorage.getItem('result'); //getting "result" from html (referred there) bc that is how its stored in the localstorage (need html to display)
    if (mcount !== null){
        mcountarr=JSON.parse(mcount); //parses the string from localstorage and makes it into an array
    }
    return mcountarr; //gets array back
}

function showresult(){
    var mcount=moodcount(); //mcount = moodcount functions results, does not have anything to do with mcount in function moodcount
    var html='<ul>'; //creating html unordered list
    for(var i=0; i<mcount.length;i++){ //initially i = 0, but then if i is less than mcount's length - at the end, adds one to i
        html+='<li>'+mcount[i]+'</li>';
    }; //listing three values, hf mf & sf
    html += '</ul>';
    document.getElementById('result').innerHTML=html; //innerHTML prints to html file
}

function addhf(){
    var currcount = moodcount(); //taking the return from the moodcount function which is an array
    currcount[0]=currcount[0]+1; //first the currcount is 0, and then every time it is clicked, the currcount is increased by one
    localStorage.setItem('result',JSON.stringify(currcount)); //updates localstorage
    showresult();
}

function addnf(){
    var currcount = moodcount(); //taking the return from the moodcount function which is an array
    currcount[1]=currcount[1]+1; //first the currcount is 0, and then every time it is clicked, the currcount is increased by one
    localStorage.setItem('result',JSON.stringify(currcount)); //updates localstorage
    showresult();
}

function addsf(){
    var currcount = moodcount(); //taking the return from the moodcount function which is an array
    currcount[2]=currcount[2]+1; //first the currcount is 0, and then every time it is clicked, the currcount is increased by one
    localStorage.setItem('result',JSON.stringify(currcount)); //updates localstorage
    showresult();
}