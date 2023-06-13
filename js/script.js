/*menu toggle*/
$(document).ready(function(){
    $('#menuToggle').click(function(){
        $('#mainNav').stop(true, true).slideToggle()
    })
})

/*envoi d'email*/
function SendMail() {
    var params = {
        from_name : document.querySelectorAll("#fName, #lName").value,
        email_id : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }
}

/*eviter les spams*/
$(document).ready(function() {
    $('form').submit(function() { 
      if ($('input[type="text"]#fill-me-in').val().length > 0) {
        return false; // submitted by bot, field is not empty, so do nothing
      }
    });
  });