


// let randomNum = Math.random() * 100;
// let randomNumInt = Math.ceil(randomNum);

// console.log(randomNumInt);

//random number generetor
const myBtn = document.getElementById("myBtn");
const myLabel = document.getElementById("myLabel");
let myH2 = document.getElementById("myH2");
let count = document.getElementById("count")

count.textContent = 0;
const min = 1;
const max = 100;

// transition style for the button:
myBtn.style.transition = "background-color 0.25s ease-in-out";

// function
myBtn.addEventListener(`click`, function(){
  let randomNum = Math.random() * max;
  let randomNumInt = Math.ceil(randomNum);  

  myLabel.textContent = randomNumInt
  
  if(randomNumInt == max){
    myBtn.style.backgroundColor = "green";
    count.textContent = Number(count.textContent) + 1;

    setTimeout(() => {
      myBtn.style.backgroundColor = "white";
    }, 200);
  }
  console.log(randomNumInt);
})



