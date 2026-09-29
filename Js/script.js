let value = "";
let first = "";
let operator="";

function fun(element) {
    let n = element.innerHTML
    if (n== "=") {
        if (operator == "+") {
            value = Number(first) + Number(value);
        }
        else if (operator == "-") {
            value = Number(first) - Number(value);
        }
        else if (operator == "*") {
            value = Number(first) * Number(value);
        }
        else if (operator == "/") {
            value = Number(first) / Number(value);
        }
 
        document.getElementById('opt').innerHTML = value;
    }
    else if(n=="+" || n=="-" || n=="/" || n=="*"){
        first=value;
        operator=n;
        value="";
        document.getElementById('opt').innerHTML = first+operator+value;

    }
    else {
        value = value + n;
        document.getElementById('opt').innerHTML = first+operator+value;
    }

    
}