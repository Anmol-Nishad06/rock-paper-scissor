const rps=document.querySelectorAll(".rps");
let user=0;
let comp=0;
const option=["rock","paper","scissors","paper","scissors","rock","scissors","paper"];
let result=document.querySelector(".result");
let suser=document.querySelector(".user");
let scomp=document.querySelector(".comp");
let bot=document.querySelector(".bot");
let ran=document.querySelector(".random");
let game=document.querySelector(".game");

console.dir(suser);
console.dir(scomp);
console.dir(game);
console.dir(ran);


const back=(ids)=>{
    if(ids==="Rock"){
        game.classList.add("rock");
        game.classList.remove("background");
        game.classList.remove("paper");
        game.classList.remove("scissor");
    }

    else if(ids==="paper"){
        game.classList.add("paper");
        game.classList.remove("background");
        game.classList.remove("rock");
        game.classList.remove("scissor");
    }

    else if(ids==="Scissors"){
        game.classList.add("scissor");
        game.classList.remove("backgroundbot");
        game.classList.remove("rockbot");
        game.classList.remove("paperbot");
    }
    else{
        console.log("nothing")
    }
}

const backbot=(compChoice)=>{
    if(compChoice==="rock"){
        bot.classList.add("rockbot");
        bot.classList.remove("backgroundbot");
        bot.classList.remove("paperbot");
        bot.classList.remove("scissorbot");
    }

    else if(compChoice==="paper"){
        bot.classList.add("paperbot");
        bot.classList.remove("backgroundbot");
        bot.classList.remove("rockbot");
        bot.classList.remove("scissorbot");
    }

    else if(compChoice==="scissors"){
        bot.classList.add("scissorbot");
        bot.classList.remove("backgroundbot");
        bot.classList.remove("rockbot");
        bot.classList.remove("paperbot");}

    else{
        console.log("nothig");
    }

}

const gen=()=>{
    let random = Math.floor(Math.random()*8);
    compChoice=option[random];
    console.log(compChoice);
    console.log(random);
    console.log(Math.random());

}

const outcome=(ids)=>{
    if(compChoice==="rock"&& ids==="paper"){
        result.innerHTML="You Won";
        result.classList.add(".select");
        user++;
    }

    else if(compChoice==="rock"&& ids==="Scissors"){
        result.innerHTML="computer Won";
        result.classList.add(".select");
        comp++;
    }

    else if(compChoice==="rock"&& ids==="Rock"){
        result.innerHTML="Its a draw";
        result.classList.add(".select");
    }

    else if(compChoice==="paper"&& ids==="Scissors"){
        result.innerHTML="You Won";
        result.classList.add(".select");
        user++;
    }

    else if(compChoice==="paper"&& ids==="Rock"){
        result.innerHTML="computer Won";
        result.classList.add(".select");
        comp++;
    }

    else if(compChoice==="paper"&& ids==="paper"){
        result.innerHTML="Its a draw";
        result.classList.add(".select");
    }

    else if(compChoice==="scissors"&& ids==="paper"){
        result.innerHTML="computer won";
        result.classList.add(".select");
        comp++;
    }

    else if(compChoice==="scissors" && ids==="Rock"){
        result.innerHTML="You won";
        result.classList.add(".select");
        user++;
    }

    else if(compChoice==="scissors"&& ids==="Scissors"){
        result.innerHTML="Its a draw";
        result.classList.add(".select");
    }

    else{
        result.innerHTML="Select a choice";
        result.classList.add(".select");
    }

    return(user,comp);
}



rps.forEach((choice)=>{
    console.log(rps);
    choice.addEventListener("click",()=>{
        const ids= choice.getAttribute("id");
        console.log(choice.getAttribute("id"));
        gen();
        outcome(ids);
        back(ids);
        backbot(compChoice);
        console.log(user);
        suser.innerHTML=user;
        scomp.innerHTML=comp;

    })
})