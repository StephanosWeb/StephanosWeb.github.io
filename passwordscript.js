function encryptionStudent() {
  var encryption_key = "6170706C65333231"
  var passkey = ""
  for(var i=0;i<encryption_key.length;i=i+2){passkey=passkey+'%'+encryption_key.substr(i,2);}
  return unescape(passkey);
}

function loginStudent() {
  var entry = prompt('Please enter the password provided by your teacher:');
  var key = encryptionStudent();
  if (entry.toLowerCase() == key) {
      window.location='/downloads/TycoonExercise4-Finished.rbxl';
  }
}

function encryptionTeacher() {
  var encryption_key = "6B6F6D37323433"
  var passkey = ""
  for(var i=0;i<encryption_key.length;i=i+2){passkey=passkey+'%'+encryption_key.substr(i,2);}
  return unescape(passkey);
}

function loginTeacher() {
  var entry = prompt('Password:');
  var key = encryptionTeacher();
  if (entry.toLowerCase() == key) {
      window.location='/teacher/Roblox-Tycoon4.pptx';
  }
}
