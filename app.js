// let btn = document.getElementById("btn");
// const h1= document.querySelector("h1");

// function TimeTo(){

//     const date = new Date("2025-08-05T17:00:00");
//     const present = new Date();
//     const gap= date - present;  


//     if(gap <=0){
//         h1.innerHTML = "The Trip has started";
//     }else{
//         const second = 1000;
//         const minute = second * 60;
//         const hour = minute * 60;
//         const day = hour * 24;

//         const days = Math.floor(gap / day);
//         const hours = Math.floor((gap % day) / hour);
//         const minutes = Math.floor((gap % hour) / minute);
//         const seconds = Math.floor((gap % minute) / second);

//         h1.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
//         setTimeout(TimeTo, 1000);
//     }
        
// }
// btn.addEventListener("click", TimeTo());
var h1 = document.querySelector("h1");
function Remaining(){
    const date = new Date("2025-08-05T17:00:00");
    const now = new Date();
    const rem= date - now;


     const second = 1000;
         const minute = second * 60;
         const hour = minute * 60;
         const day = hour * 24;
    
    const days = Math.floor(rem/day);
    const hours = Math.floor((rem % day) / hour);
    const minutes = Math.floor((rem % hour) / minute);
    const seconds = Math.floor((rem % minute) / second);
    h1.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
         setTimeout(Remaining, 1000);
}
Remaining();
