function getValue(btn){
    document.getElementById('output').innerHTML += btn.value;
    let operations = document.getElementsByClassName('operation');
    if(btn.className == 'operation'){
        for(let i = 0; i < operations.length; i++){
            operations[i].setAttribute('disabled', '');
        };
    }
    if(btn.className == 'numbers'){
        for(let i = 0; i < operations.length; i++){
            operations[i].removeAttribute('disabled', '');
        };
    }
}

function calculate(){
    let x = document.getElementById('output').textContent;
    if(x.includes('=')){
        let arr = x.split('=');
        x = arr[arr.length -1];
    }
    let result = eval(x);
    output.innerHTML += '=' + result;
   
}

function clearAll(){
    let x = document.getElementById('output');
    x.innerHTML = 'Output: ';
}