$(document).ready(function(){
    $('#signUp').validate({
        Messages:{
            email:{
                email:"not correct"
            }
        }
    });
});