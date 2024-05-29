var button = document.getElementsByClassName('btn-submit')[0];



button.addEventListener('click', function () {
  var userInputText = document.getElementsByClassName('post')[0].value;
  var userInputName = document.getElementsByClassName('names')[0].value;
  var textLi = document.createElement('li');
  var nameLi = document.createElement('li');
  var userInputTextElement = document.createTextNode(userInputText);
  var userInputNameElement = document.createTextNode(userInputName);
  var element = document.createElement('hr');
  
var removeButton = document.createElement('button');
removeButton.classList.add('btn-remove');
removeButton.innerHTML = "Remove";

  if (userInputText == '' || userInputName == '') {
    alert('Please fill all required fields');
    return;
  }

  textLi.appendChild(userInputTextElement);
  nameLi.appendChild(userInputNameElement);
  
  document.getElementsByClassName('posts')[0].append(textLi);
  document.getElementsByClassName('posts')[0].append('Posted By: ', nameLi, removeButton, element,);
  let output = document.getElementById("output");
            function clearAllInputs(event) {
              var allInputs = document.querySelectorAll("input");
              allInputs.forEach((singleInput) => (singleInput.value = ""));
              output.innerHTML;
            }

var allInputs = document.querySelectorAll('input');
allInputs.forEach(singleInput => singleInput.value = '');

removeButton.addEventListener('click', function () {
  alert('you clicked me');
})
});

