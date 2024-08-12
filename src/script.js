// write your JavaScript here
$(document).ready(function(){
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(234|0|\+234)\d{10}$/;

    function validateName(){
        const nameInput = $('#name');
        if (!nameRegex.test(nameInput.val())){
            nameInput.addClass('is-invalid');
        } else{
            nameInput.removeClass('is-invalid');
        }
    }

    function validateEmail(){
        const emailInput = $('#email');
	    if (!emailRegex.test(emailInput.val())){
		    emailInput.addClass('is-invalid');
	    }
	    else{
		    emailInput.removeClass('is-invalid');
	    }
    }

    function validatePhone(){
        const phoneInput = $('#phone');
        if(!phoneRegex.test(phoneInput.val())){
            phoneInput.addClass('is-invalid');
        } else{
            phoneInput.removeClass('is-invalid');
        }
    }


    $("#next-bttn").click(function(){
        if($("#step1-form").is(":visible")){
            $("#step1-form").hide();
            $("#step2-form").show();
            $("#left-bttns").removeClass("invisible");
            $(".pbs-2").css("background-color", "#f7795d");
        } else if($("#step2-form").is(":visible")){
            $("#step2-form").hide();
            $("#step3-form").show();
            $(".pbs-3").css("background-color", "#f7795d");
        } else if($("#step3-form").is(":visible")){
            $("#step3-form").hide();
            $("#step4-form").show();
            $("#next-bttn").hide();
            $("#submit-bttn").show();
            $(".pbs-4").css("background-color", "#f7795d");
        } 
    });

    $("#left-bttns button").click(function(){
        if($("#step2-form").is(":visible")){
            $("#step2-form").hide();
            $("#step1-form").show();
            $("#left-bttns").addClass("invisible");
            $(".pbs-2").css("background-color", "#BDBDBD");
        } else if($("#step3-form").is(":visible")){
            $("#step3-form").hide();
            $("#step2-form").show();
            $("#left-bttns").show();
            $(".pbs-3").css("background-color", "#BDBDBD");
        } else if($("#step4-form").is(":visible")){
            $("#step4-form").hide();
            $("#step3-form").show();
            $("#left-bttns").show();
            $("#submit-bttn").hide();
            $("#next-bttn").show();
            $(".pbs-4").css("background-color", "#BDBDBD");
        }
    });

    $('#name').on("blur", validateName);
    $('#email').on("blur", validateEmail);
    $('#phone').on("blur", validatePhone);
});