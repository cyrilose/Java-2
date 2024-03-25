let userName = prompt('Enter your username');
document.getElementById('username').innerHTML = ("username: " + userName);
let cohort = prompt('Enter your cohort');
document.getElementById('cohort').innerHTML =("cohort: " + cohort);
let pass_Code = prompt('Enter your Passcode');
document.getElementById('passcode').innerHTML = ("passcode: " + pass_Code);

let score = 30;

let firstQuestion = prompt('what is the birth year of olusegun obasanjo')
switch(firstQuestion){
   
    case '1937':
     score = score + 5;   
    confirm('you are right')
    break;

   default:
    score = score - 5;   
    confirm('you are wrong')
    break;
}

let secondQuestion = prompt('what is the birth year of president Bola Tinubu')
switch(secondQuestion){
    case '1952':
        score = score + 5; 
        confirm('you are right')
        break;
    
       default:
        score = score - 5; 
        confirm('you are wrong')
        break;
}

let thirdQuestion = prompt('what is the birth year of Umaru Musa Yar’Adua')
switch(thirdQuestion){
    case '1951':
        score = score + 5; 
        confirm('you are right')
        break;
    
       default:
        score = score - 5; 
        confirm('you are wrong')
        break;
}

let fourthQuestion = prompt('what is the birth year of Umaru Musa Yar’Adua')
switch(fourthQuestion){
    case '1951':
        score = score + 5; 
        confirm('you are right')
        break;
    
       default:
        score = score - 5; 
        confirm('you are wrong')
        break;
}


let fifthQuestion = prompt('what is the birth year of Goodluck Ebele Azikiwe Jonathan')
switch(fifthQuestion){
    case '1957':
        score = score + 5; 
        confirm('you are right')
        break;
    
       default:
        score = score - 5; 
        confirm('you are wrong')
        break;
}

let sixthQuestion = prompt('who is the best politician in nigeria?')
switch(sixthQuestion){
    case 'peter obi':
        score = score + 5; 
        confirm('you are right')
        break;
    
       default:
        score = score - 5; 
        confirm('you are wrong')
        break;
}

switch(score){
    case 0:
      alert('you lose')
    break;
    case 60:
     alert('congratulations')
        break;
     default:
        alert('try again')
        break;   
}

document.getElementById('score').innerHTML = ("your score is " + score);
