// Bugs I am trying to fix:

// 1. When toggling comments on and off, I am able to show and unshow the inputs and button to submit a comment, but when I do the same for the actual comment it doesn't work. Not sure if it's a scope issue. I've moved things around and couldn't get it to show/unshow still.

// 2. When I create 1 post with comments everything submits and removes fine, but when I add a second post I am unable to submit a comment directly from the comment input section associated with the 2nd post. I can see it is reading the input from the 1st post's comment inputs but submitting with the 2nd post's 'submit comment' button. This one is really tripping me up because I can see the issue and why it is happening but I have no idea how to tell it to associate the 2nd post's comment input with the 2nd post's 'submit' button.

// 3. I wanted to make a command when 'remove post' is clicked that all associated comments would also be removed. I tried inserting the commands in the 'remove comment' command to the 'remove post' command but it wasn't working. I also tried calling the 'remove comment' button directly in the 'remove post' command but that didn't work either.

// 4. This is more for a cleaner look not as much functionality but I wanted the comments to insert above the comment input section. I tried using insertBefore() but it wouldn't move it above. Maybe I am calling it in the wrong part of the function or maybe there is a better way to do this but I did my research and didn't find a better way.


var button = document.getElementsByClassName('btn-submit')[0];

button.addEventListener('click', function () {
  // defined variables to create post
  var userInputText = document.getElementsByClassName('post')[0].value;
  var userInputName = document.getElementsByClassName('names')[0].value;
  var textLi = document.createElement('li');
  var nameLi = document.createElement('li');
  nameLi.classList.add('name-li');
  var userInputTextElement = document.createTextNode(userInputText);
  var userInputNameElement = document.createTextNode(userInputName);
  var postedBy = document.createElement('string')
  postedBy.classList.add('posted-by');
  postedBy.innerHTML = 'Posted By: ';
  var commentDiv = document.createElement('hr')
  commentDiv.classList.add('comment-div');
  var postDiv = document.createElement('hr')
  postDiv.classList.add('post-div')

  // defined variables to create comment
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
  var submitCommentButton = document.createElement('button');
  submitCommentButton.classList.add('btn-submit-comment');
  submitCommentButton.innerHTML = "Submit Comment";
  submitCommentButton.style.visibility = 'hidden';
  var removeCommentButton = document.createElement('button');
  removeCommentButton.classList.add('btn-remove-comment');
  removeCommentButton.innerHTML = 'Remove Comment';
 
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
  document.getElementsByClassName('posts')[0].append(textLi, postedBy, nameLi, removeButton, commentButton, commentBox, nameBox, submitCommentButton, commentDiv);

  // clear post input fields
  let output = document.getElementById("output");
   function clearAllInputs(event) {
     var allInputs = document.querySelectorAll("input");
     allInputs.forEach((singleInput) => (singleInput.value = ""));
     output.innerHTML;
   }
  var allInputs = document.querySelectorAll('input');
  allInputs.forEach(singleInput => singleInput.value = '');

  

   // toggle comments
  commentButton.addEventListener('click', function () {
    if (commentBox.style.visibility === 'hidden' && nameBox.style.visibility === 'hidden') {
      commentBox.style.visibility = 'visible', nameBox.style.visibility = 'visible';
  } else {
      commentBox.style.visibility = 'hidden', nameBox.style.visibility = 'hidden';
  }
  if (submitCommentButton.style.visibility === 'hidden') {
    submitCommentButton.style.visibility = 'visible';
  } else {
    submitCommentButton.style.visibility = 'hidden';
  }
  if (commentLi.style.visibility === 'visible') {
    commentLi.style.visibility = 'hidden';
  } else {
    commentLi.style.visibility = 'visible';
  } return
  })

   // submit comment
  submitCommentButton.addEventListener('click', function () {
    var userInputComment = document.getElementsByClassName('comment-box')[0].value;
    var commentLi = document.createElement('li');
    var userInputCommentElement = document.createTextNode(userInputComment);
    var userInputCommentName = document.getElementsByClassName('name-box')[0].value;
    var commentNameLi = document.createElement('li');
    commentNameLi.classList.add('comment-name-li');
    var userInputCommentNameElement = document.createTextNode(userInputCommentName);
    var commentPostedBy = document.createElement('string')
    commentPostedBy.innerHTML = 'Posted By: ';
    commentPostedBy.classList.add('comment-posted-by');

    // check if fields are all filled
    if (userInputComment == '' || userInputCommentName == '') {
      alert('Please fill all required fields');
      return;
    }

    commentLi.appendChild(userInputCommentElement);
    commentNameLi.appendChild(userInputCommentNameElement); 
    document.getElementsByClassName('posts')[0].append(commentLi, commentPostedBy, commentNameLi, removeCommentButton, postDiv);

 // remove comment
  removeCommentButton.addEventListener('click', function () {
    commentLi.removeChild(userInputCommentElement);
    commentNameLi.removeChild(userInputCommentNameElement);
    commentPostedBy.remove();
    removeCommentButton.remove();
    postDiv.remove();
  });

    // clear comment input fields
    let output = document.getElementById("output");
    function clearAllInputs(event) {
      var allInputs = document.querySelectorAll("input");
      allInputs.forEach((singleInput) => (singleInput.value = ""));
      output.innerHTML;
  }
     
 var allInputs = document.querySelectorAll('input');
 allInputs.forEach(singleInput => singleInput.value = '');
  }); 
  
  // remove post
  removeButton.addEventListener('click', function () {
    textLi.removeChild(userInputTextElement);
    nameLi.removeChild(userInputNameElement);
    postedBy.remove();
    removeButton.remove();
    commentButton.remove();
    commentDiv.remove();
    commentBox.remove();
    nameBox.remove();
    submitCommentButton.remove();
   }) 
});