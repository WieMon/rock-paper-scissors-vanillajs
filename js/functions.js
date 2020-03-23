function printMessage(msg){  // eslint-disable-line no-unused-vars
  let div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
}

function clearMessages(){  // eslint-disable-line no-unused-vars
  document.getElementById('messages').innerHTML = '';
}