dragElement(documnet.getElementById("plant1"));
dragElement(documnet.getElementById("plant2"));
dragElement(documnet.getElementById("plant3"));
dragElement(documnet.getElementById("plant4"));
dragElement(documnet.getElementById("plant5"));
dragElement(documnet.getElementById("plant6"));
dragElement(documnet.getElementById("plant7"));
dragElement(documnet.getElementById("plant8"));
dragElement(documnet.getElementById("plant9"));
dragElement(documnet.getElementById("plant10"));
dragElement(documnet.getElementById("plant11"));
dragElement(documnet.getElementById("plant12"));
dragElement(documnet.getElementById("plant13"));
dragElement(documnet.getElementById("plant14"));

function dragElement(terrariumElement){
    let pos1 = 0;
    pos2 = 0;
    pos3 = 0;
    pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;
    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }
}