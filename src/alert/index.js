const Alert = {
  alert(message) {
    const alertBox = document.getElementById('app-alert');
    alertBox.innerText = message;
    alertBox.classList.add('active');

    setTimeout(function(){
      alertBox.classList.remove('active');
    }, 2000);
  }
};

export default Alert;
