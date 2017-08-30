var box = document.getElementById('display');

function addToScreen(x) {
    box.value += x;
    
    if(x==='c') {
        box.value = '';
    }
}

function cal() {
    box.value = eval(box.value);
}

function backSpace() {
    var val = box.value;
    box.value = val.slice(0, val.length-1);
}

function power() {
    box.value *=  box.value;
}


