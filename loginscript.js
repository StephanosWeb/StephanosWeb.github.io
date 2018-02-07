function login() {
  var entry = prompt('Pleae enter the password provided by your teacher:');
  if (entry.toLowerCase() == '12') {
      console.log("inside");
      window.location='/downloads/TycoonExercise3.rbxl';
  }
}
