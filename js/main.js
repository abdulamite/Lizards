
const options = document.querySelectorAll('select');
const submit = document.querySelector('#submit');
let attempts = 0;

options.forEach(option =>{

  function enableSubmit(){

      // Grab selected value
      const color = this.value;
      // get parent container node
      const box = this.parentElement;
      // set path to lizard images
      const img = `../acessible_lizards/imgs/${color}.png`;
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


// check users answers
function checkAnswer(){
  const answers = []
  options.forEach(option =>{
    answers.push(option.value);
  });

  points = 0;
  // Check for correct answers
  if(answers[0] == "Red"){
    points++;
  }
  if(answers[1] == "Orange"){
    points++;
  }
  if(answers[2] == "Yellow"){
    points++;
  }
  if(answers[3] == "Green"){
    points++;
  }
  if(answers[4] == "Blue"){
    points++;
  }
  if(answers[5] == "Purple"){
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
      feedbackText = `You are ${((points/6)*100).toFixed(2)}% correct. More than 2 attempts`;
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
