

//SET UP EVENT LISTENER - when the page is loaded
//GRAB ELEMENTS/NODES - to refer to later
//HANDLE SUBMIT BUTTON - grab the user action
//OVERRIDE THE DEFAULT SUBMIT - append submission to DOM
document.addEventListener("DOMContentLoaded", () => {
  //NODES (i think?)
  const userInput = document.getElementById('new-task-description');
  const userTasks = document.getElementById("tasks");
  const userSubmit = document.querySelector('form');
  
  //INTERCEPT EVENT ON FORM ELEMENT
  userSubmit.addEventListener("submit", event => {
    event.preventDefault()

    //APPEND DATA TO DOM
    userTasks.innerHTML += `<br>${userInput.value}`;
  });
  
});
