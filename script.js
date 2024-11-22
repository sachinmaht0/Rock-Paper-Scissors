let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomindex = Math.floor(Math.random() * 3);
    return options[randomindex];
}

const drawgame=()=>{
    console.log("game was draw.");
    msg.innerText="Game is draw!";
    msg.style.backgroundColor="#081b31";
}
let usercount=0;
let compcount=0;
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        console.log("you win!");
        msg.innerText=`You win! Your ${userchoice} beats ${compchoice} `;
        msg.style.backgroundColor="green";
        usercount++;
        console.log(usercount);
        document.querySelector("#userscore").innerText=usercount;
    }
    else{
        console.log("you lose!");
        msg.innerText=`You lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
        compcount++;
        console.log(compcount);
        document.querySelector("#compscore").innerText=compcount;
    }
}

const playgame = (userchoice) => {
    console.log("userchoice=", userchoice);
    // generate computer choice;
    const compchoice=gencompchoice();
    console.log("compchoice=", compchoice);

    if(userchoice==compchoice){
        // draw game
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice=="rock"){
            userwin=compchoice=="paper"? false:true;
        }
        else if(userchoice=="paper"){
            userwin=compchoice=="scissors"?false:true;
        
        }
        else{
            userwin=compchoice=="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);

    }


}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);

    })
})