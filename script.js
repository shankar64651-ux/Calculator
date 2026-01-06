let inputField = document.getElementById('input');

document.getElementById('seven').addEventListener('click', function(){
    document.getElementById('input').innerHTML += 7;
})
document.getElementById('eight').addEventListener('click', function(){
    document.getElementById('input').innerHTML += 8;
})
document.getElementById('nine').addEventListener('click', function(){
    document.getElementById('input').innerHTML += 9;
})

document.getElementById('one').addEventListener('click', function(){
    document.getElementById('input').innerHTML += 1;
})
document.getElementById('two').addEventListener('click', function(){
    document.getElementById('input').innerHTML += 2;
})
document.getElementById('three').addEventListener('click', function(){
    document.getElementById('input').innerHTML += 3;
})

document.getElementById('four').addEventListener('click', function(){
    document.getElementById('input').innerHTML += 4;
})
document.getElementById('five').addEventListener('click', function(){
    document.getElementById('input').innerHTML += 5;
})
document.getElementById('six').addEventListener('click', function(){
    document.getElementById('input').innerHTML += 6;
})

document.getElementById('zero').addEventListener('click', function(){
    document.getElementById('input').innerHTML += 0;
})
document.getElementById('sum').addEventListener('click', function(){
    document.getElementById('input').innerHTML += "+";
})
document.getElementById('minus').addEventListener('click', function(){
    document.getElementById('input').innerHTML += "-";
})
document.getElementById('mul').addEventListener('click', function(){
    document.getElementById('input').innerHTML += "*";
})
document.getElementById('divi').addEventListener('click', function(){
    document.getElementById('input').innerHTML += "/";
})
document.getElementById('dec').addEventListener('click', function(){
    document.getElementById('input').innerHTML += ".";
})
document.getElementById('clear').addEventListener('click', function(){
    document.getElementById('input').innerHTML = "";
})

document.getElementById("result").addEventListener('click', function () {
    try {
        inputField.innerHTML = eval(inputField.innerHTML);
    } catch (error) {
        inputField.innerHTML = "Error";
    }
});
