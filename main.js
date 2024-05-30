var button = document.getElementsByClassName('btn-submit')[0];

button.addEventListener('click', function () {
  // defined variables to create post and comments
  var userInputText = document.getElementsByClassName('post')[0].value;
  var userInputName = document.getElementsByClassName('names')[0].value;
  var textLi = document.createElement('li');
  var nameLi = document.createElement('li');
  var userInputTextElement = document.createTextNode(userInputText);
  var userInputNameElement = document.createTextNode(userInputName);
  var postedBy = document.createElement('string')
  postedBy.innerHTML = 'Posted By: ';
  var element = document.createElement('hr');
  var commentBox = document.createElement('input');
  commentBox.type = 'text';
  commentBox.classList.add('comment-box');
  commentBox.id = 'comment-box';
  commentBox.name = 'comment-box';
  commentBox.placeholder = 'Comment Text'
  commentBox.style.visibility = 'hidden';
  var nameBox = document.createElement('input');
  nameBox.type = 'text';
  nameBox.classList.add('name-box');
  nameBox.id = 'name-box';
  nameBox.name = 'name-box';
  nameBox.placeholder = 'Your Name'
  nameBox.style.visibility = 'hidden';
  
  // check if fields are all filled
  if (userInputText == '' || userInputName == '') {
    alert('Please fill all required fields');
    return;
  }
  // button to remove post
  var removeButton = document.createElement('button');
  removeButton.classList.add('btn-remove');
  removeButton.innerHTML = "Remove";

  // button to toggle comments
  var commentButton = document.createElement('button');
  commentButton.classList.add('btn-comment');
  commentButton.innerHTML = "Comments";

  // create post
  textLi.appendChild(userInputTextElement);
  nameLi.appendChild(userInputNameElement);
  document.getElementsByClassName('posts')[0].append(textLi);
  document.getElementsByClassName('posts')[0].append(postedBy, nameLi, removeButton, commentButton, commentBox, nameBox, element);

  // clear input fields
  let output = document.getElementById("output");
   function clearAllInputs(event) {
     var allInputs = document.querySelectorAll("input");
     allInputs.forEach((singleInput) => (singleInput.value = ""));
     output.innerHTML;
   }
  var allInputs = document.querySelectorAll('input');
  allInputs.forEach(singleInput => singleInput.value = '');

  //  remove post
  removeButton.addEventListener('click', function () {
    textLi.removeChild(userInputTextElement);
    nameLi.removeChild(userInputNameElement);
    postedBy.remove();
    removeButton.remove();
    commentButton.remove();
    element.remove();
  })

// toggle comments
  commentButton.addEventListener('click', function () {
    if (commentBox.style.visibility === 'hidden' && nameBox.style.visibility === 'hidden') {
      commentBox.style.visibility = 'visible', nameBox.style.visibility = 'visible';
  } else {
      commentBox.style.visibility = 'hidden', nameBox.style.visibility = 'hidden';
  } return
  })
  
});

