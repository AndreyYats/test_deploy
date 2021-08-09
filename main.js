function callValidation(){

    if(grecaptcha.getResponse().length == 0){
        alert('Please click the reCAPTCHA checkbox');
        return false;
    } else {
        return true;
    }
}

function checkParams() {

    var emailValid = $.trim($('#email').val());
    var phoneValid = $.trim($('#phone').val());


    var company = $.trim($('#company').val());
    var firstName = $.trim($('#first_name').val());
    var lastName = $.trim($('#last_name').val());
    var email = $.trim($('#email').val());
    var phone = $.trim($('#phone').val());
    var product = $.trim($('#00N5g00000FibvW').val());
   
    if (company.length > 0 && email.length > 0 && phone.length > 0 && firstName.length > 0 && lastName.length > 0 && product.length > 0) {
      $('#submit').prop('disabled', false);
    } else {
      $('#submit').prop('disabled', true);
    }

    if(!emailValid.validity.valid || !phoneValid.validity.valid) {
        $('#submit').prop('disabled', true);
    }
  }
