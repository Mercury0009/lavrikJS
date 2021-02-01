window.onload = function(){
    document.querySelector('.btnStart').onclick = function(){
        training();
    }


}




function mathOp(a, b, op){
    var res;

    if(op == '+'){
        res = a + b;
    }
    else if(op == '-'){
        res = a - b;
    }
    else if(op == '*'){
        res = a * b;
    }
    else{
        if(b == 0){
            res = false;
        }
        else{
        res = a / b;
        }
    }

    return res;
}

function randomInt(min, max){
    var lenght = max - min + 1;
    var rand = Math.floor(Math.random() * lenght) + min;
    return rand;
}

function training(){
    var x, y, code, op, res, answer, answerStr, good = 0, error = 0, errors= [];
    var variants = ['+', '-', '*', '/'];

    for(var i = 0; i < 6; i++){
        x = randomInt(3, 15);
        y = randomInt(3, 15);
        code = randomInt(0, 3);
        op = variants[code];
        res = mathOp(x, y, op);

        do{
            answerStr = prompt(x + ' ' + op + ' ' + y + ' = ?');
            answer = +answerStr
        }
        while(answerStr == '' || isNaN(answer));

        if(res.toFixed(1) == answer.toFixed(1)){
            //console.log('Ok');
            good++
        }
        else{
            errors.push(x + ' ' + op + ' ' + y + ' = ' + res.toFixed(1) + ' , а Ваш ответ ' + answer);
            error++
        }
    }

    document.querySelector('.good').innerHTML = good;
    document.querySelector('.bad').innerHTML = error;

    var divErrors = document.querySelector('.errors');
    divErrors.innerHTML = '';
    //console.log('Right response: ' + good);
    //console.log('Error: ' + error);
    for(var i = 0; i < errors.length; i++){
        divErrors.innerHTML += ('<p>' + errors[i] + '</p>');
    }
}