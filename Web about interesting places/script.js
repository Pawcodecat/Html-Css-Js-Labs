function check1(event){
    var elem=document.getElementById('module-content1');
    if(elem.style.visibility=="visible" && elem.style.height=="auto"){
    elem.style.visibility="hidden";
    elem.style.height="0px";
   
    }
    else{
        elem.style.visibility="visible";
        elem.style.height="auto";
       
        }
}function check2(event){
    var elem=document.getElementById('module-content2');
    if(elem.style.visibility=="visible" && elem.style.height=="auto"){
    elem.style.visibility="hidden";
    elem.style.height="0px";
    }
    else{
        elem.style.visibility="visible";
        elem.style.height="auto";
        }
}function check3(event){
    var elem=document.getElementById('module-content3');
    if(elem.style.visibility=="visible" && elem.style.height=="auto"){
    elem.style.visibility="hidden";
    elem.style.height="0px";
    }
    else{
        elem.style.visibility="visible";
        elem.style.height="auto";
        }
}function check4(event){
    var elem=document.getElementById('module-content4');
    if(elem.style.visibility=="visible" && elem.style.height=="auto"){
    elem.style.visibility="hidden";
    elem.style.height="0px";
    }
    else{
        elem.style.visibility="visible";
        elem.style.height="auto";
        }
}
function check5(event){
    var elem=document.getElementById('module-content5');
    if(elem.style.visibility=="visible" && elem.style.height=="auto"){
    elem.style.visibility="hidden";
    elem.style.height="0px";
    }
    else{
        elem.style.visibility="visible";
        elem.style.height="auto";
        }
}

function check6(event){
    var elem=document.getElementById('module-content6');
    if(elem.style.visibility=="visible" && elem.style.height=="auto"){
    elem.style.visibility="hidden";
    elem.style.height="0px";
    }
    else{
        elem.style.visibility="visible";
        elem.style.height="auto";
        }
}

function check6(event){
    var elem=document.getElementById('module-content6');
    if(elem.style.visibility=="visible" && elem.style.height=="auto"){
    elem.style.visibility="hidden";
    elem.style.height="0px";
    }
    else{
        elem.style.visibility="visible";
        elem.style.height="auto";
        }
}

function form(event){
    var form1 = document.getElementsById('new');
        form1.style.feft = "0px";

}

var numberofplaces = 6;

document.getElementById("new").addEventListener("submit", function(e) {    // funkcja dodajaca z formularza miejsce
    e.preventDefault();

    const headInput = document.getElementById("title").value;       // wczytywanie wpisanych wartosci
    const text1Input = document.getElementById("img").value;
    const text2Input = document.getElementById("place").value;
    const place = document.createElement("div");

    place.classList.add("place");
    numberofplaces = numberofplaces+1;
    place.id=numberOfplaces;
    place.addEventListener("click",function(){
        changeVisibilityPlace(place.id);
    });

    const placeinner = document.createElement("div");
    placeinner.classList.add("place-inner");

    const placefront = document.createElement("div");
    placeefront.classList.add("place-front");

    const placeback = document.createElement("div");
    placeback.classList.add("place-back");

    const placebacktext = document.createElement("div");
    placebacktext.classList.add("place-back-text");

    const imgfront = document.createElement("img");
    const imgback = document.createElement("img");
    const title = document.createElement("h1");
    const subtitle1 = document.createElement("h3");
    const text1 = document.createElement("p");
    const subtitle2 = document.createElement("h3");
    const text2 = document.createElement("p");
    const del = document.createElement("button");
  
    title.textContent = headInput;                                  // wpisywanie wklepanych wartosci do utworzonych elementow
    text1.textContent = text1Input;
    subtitle1.textContent = "Description1";
    text2.textContent = text2Input;
    subtitle2.textContent = "Description2";
    imgfront.src = window.URL.createObjectURL(
        document.getElementById("rphotofront").files[0]
    );
    imgback.src = window.URL.createObjectURL(
        document.getElementById("rphotoback").files[0]
    );

    del.textContent = "Usuń";                                     // przycisk usuwajacy miejsce
    del.classList.add("delete-button");

    const placeeBox = document.getElementsByClassName("box");       // wrzuca elementy w odpowiedni sposób
    const box = placeBox[0];
    placebacktext.appendChild(subtitle1);
    placebacktext.appendChild(text1);
    placebacktext.appendChild(subtitle2);
    placebacktext.appendChild(text2);
    placeback.appendChild(imgback);
    placeback.appendChild(placebacktext);
    
    placefront.appendChild(imgfront);
    placefront.appendChild(title);
    placeinner.appendChild(del);
    placeinner.appendChild(placefront);
    placeinner.appendChild(placeback);
    place.appendChild(placeinner);
    box.appendChild(place);

    del.addEventListener("click", function() {                      // dodaje event do przycisku 
        box.removeChild(place);
    });
    clearInput(document.getElementsByTagName("input"));             // czyszczenie
});
 
function clearInput(elements) {                                     // funkcja czyszczaca wpisane wartosci
    for (i = 0; i < elements.length; i++) {
        elements[i].value = "";
    }
}

    