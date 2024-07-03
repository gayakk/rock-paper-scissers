let choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        // console.log(choice.id);
        playGame(choice.id);
    });
});
const playGame=(uc)=>{
    let cc=compChoice();
    let scr=0;
    if(uc===cc){
        console.log("draw");
        let z= document.querySelector("#msg");
            z.textContent="its a draw";
            z.style.backgroundColor="#081b21"
    }
    if(uc==="rock"){
        if(cc==="paper"){
            console.log("computer win");
            let p= document.querySelector("#computer-score");
            console.log(p.textContent);
            p.textContent=parseInt(p.textContent)+1;
            let z= document.querySelector("#msg");
            z.textContent="computer win, choosed paper";
            z.style.backgroundColor="red";
        }
        else if(cc==="scissors"){
            console.log("user win");
            let p= document.querySelector("#user-score");
            console.log(p.textContent);
            p.textContent=parseInt(p.textContent)+1;
            let z= document.querySelector("#msg");
            z.textContent="user win, choosed scossprs";
            z.style.backgroundColor="green";
        }
    }
    else if(uc==="paper"){
        if(cc==="rock"){
            console.log("user win");
            let p= document.querySelector("#user-score");
            console.log(p.textContent);
            p.textContent=parseInt(p.textContent)+1;
            let z= document.querySelector("#msg");
            z.textContent="user win, choosed rock";
            z.style.backgroundColor="green";
        }
        else if(cc==="scissors"){
            console.log("computer win");
            let p= document.querySelector("#computer-score");
            console.log(p.textContent);
            p.textContent=parseInt(p.textContent)+1;
            let z= document.querySelector("#msg");
            z.textContent="computer win, choosed scissors";
            z.style.backgroundColor="red";
        }
    }
    else if(uc==="scissors"){
        if(cc==="rock"){
            console.log("conputer win");
            let p= document.querySelector("#computer-score");
            console.log(p.textContent);
            p.textContent=parseInt(p.textContent)+1;
            let z= document.querySelector("#msg");
            z.textContent=`computer win, choosed rock`;
            z.style.backgroundColor="red";
        }
        else if(cc==="paper"){
            console.log("user win");
            let p= document.querySelector("#user-score");
            console.log(p.textContent);
            p.textContent=parseInt(p.textContent)+1;
            let z= document.querySelector("#msg");
            z.textContent="computer win, choosed scissors";
            z.style.backgroundColor="green";
        }

    }
}
const compChoice=()=>{
    const options=["rock","paper","scissors"];
    let cmp=Math.floor(Math.random()*3);
    return options[cmp];
    // console.log(`computer choice:- ${options[cmp]}`);
}