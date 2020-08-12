const dsiplay = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let operation = '';
let ans = '';
// dsiplay.innerHTML = '34'
for(i = 0; i < buttons.length; i++){
    let button = buttons[i];
    // console.log(button)
    button.addEventListener('click',function(){
        if(button.classList.contains('numbers')){
            numOperation(button);
        }else{
            actOperation(button);
        }  
    })
}
function numOperation(button){
    operation += button.value;
    dsiplay.innerHTML = operation;
}
function actOperation(button){
    switch(button.value){
        case 'ac': 
            operation = ''; 
            dsiplay.innerHTML = ''; 
            break;
        case 'del': 
            operation = operation.slice(0,-1); 
            dsiplay.innerHTML = operation; 
            break;
        case '=': 
            operation = eval(operation); 
            ans = operation;
            dsiplay.innerHTML = operation;
            break;    
        case '+':
            operation = operation + '+';
            dsiplay.innerHTML = operation;
            break;
        case '-':
            operation = operation + '-';
            dsiplay.innerHTML = operation;
            break;
        case '*':
            operation = operation + '*';
            dsiplay.innerHTML = operation;
            break;
        case '/':
            operation = operation + '/';
            dsiplay.innerHTML = operation;
            break;
        case 'ans':
            operation = ans;
            console.log(ans)
            dsiplay.innerHTML = operation;
            break;
    }
}
