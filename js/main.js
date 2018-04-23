
const options = document.querySelectorAll('select');
const submit = document.querySelector('#submit');
let attempts = 0;

let answer_set = ["Red","Orange","Yellow","Green","Blue","Purple"];

options.forEach(option =>{

  //The purpose of this function is to enable the submit button at the bottom of the screen.  
  function enableSubmit(){

      // Grab selected value
      const color = this.value;
      // get parent container node
      const box = this.parentElement;
      // set path to lizard images
      const img = `../accessible_lizards/imgs/${color}.png`;
      // Set the current img to the new lizard image
      box.querySelector('IMG').src = img;


      // declare array to store selections
      let lizards = [];
      // grab all selected values and store them in lizards array
      options.forEach(option =>{
        lizards.push(option.value);
      });
      console.log(lizards)

      // if all selections have been made, enable submit button
      if(!lizards.includes("")){
        submit.classList.add('enable');
        submit.disabled=false;
      }
    }

    option.addEventListener('change',enableSubmit);
});


// Switch between reflected and absorbed answer set ans tab styles
const reflected = document.querySelector('#reflected');
const absorbed = document.querySelector('#absorbed');

reflected.addEventListener('click',() =>{
  console.log('Reflected Answer Set');
  absorbed.style.transform = "translateY(0px)";
  absorbed.style.backgroundColor = "#666666";
  absorbed.style.color = "white";

  reflected.style.transform = "translateY(2px)";
  reflected.style.backgroundColor = "white";
  reflected.style.color = "#666666";
  return answer_set = ["Red","Orange","Yellow","Green","Blue","Purple"];
});

absorbed.addEventListener('click',() =>{
  console.log('Absorbed Answer Set');
  reflected.style.transform = "translateY(0px)";
  reflected.style.backgroundColor = "#666666";
  reflected.style.color = "white";

  absorbed.style.transform = "translateY(2px)";
  absorbed.style.backgroundColor = "white";
  absorbed.style.color = "#666666";
  return answer_set = ["Purple","Blue","Green","Yellow","Orange","Red"];
});

console.log(answer_set);

// check users answers
function checkAnswer(){
  const answers = []
  options.forEach(option =>{
    answers.push(option.value);
  });

  points = 0;
  // Check for correct answers
  if(answers[0] == answer_set[0]){
    points++;
  }
  if(answers[1] == answer_set[1]){
    points++;
  }
  if(answers[2] == answer_set[2]){
    points++;
  }
  if(answers[3] == answer_set[3]){
    points++;
  }
  if(answers[4] == answer_set[4]){
    points++;
  }
  if(answers[5] == answer_set[5]){
    points++;
  }

  let feedbackText = `You have scored ${points} points`
  const feedback = document.querySelector('.feedback');

  if(feedback){
    document.querySelector('.feedback').firstChild.remove();
  }


  if(points === 6){
    feedbackText = `You are ${((points/6)*100).toFixed(2)}% correct!`;
    console.log(submit.innerHTML = 'continue');
    feedback.style.backgroundColor = '#80e27e';
    feedback.style.opacity = 1;
  }else {
    attempts++;
    if(attempts === 1){
      feedbackText = `You are ${((points/6)*100).toFixed(2)}% correct. Remember you are sorting by reflected wavelength!`;
    }
    else if (attempts === 2) {
      feedbackText = `You are ${((points/6)*100).toFixed(2)}% correct. Make sure you are not repeating the same color.`;
    }
    else if (attempts >= 3) {
      feedbackText = `You are ${((points/6)*100).toFixed(2)}% correct. Try again.`;
    }
    // feedbackText = `You are ${((points/6)*100).toFixed(2)}% correct. Keep trying! This is attempt #${attempts}`;
    feedback.style.backgroundColor = '#e27e7e';
    feedback.style.opacity = 1;
  }
    var para = document.createElement("p");
    var node = document.createTextNode(feedbackText);
    para.appendChild(node);

    feedback.appendChild(para);


}

submit.addEventListener('click',checkAnswer);
