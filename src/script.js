// write your JavaScript here
$(document).ready(function(){
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
            // $("#next-bttn").hide();
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
            $(".pbs-4").css("background-color", "#BDBDBD");
        }
    });
    // $("#next-bttn").click(function(){

    //     if($("#step1-form").is(":visible")){
    //         var currentStep = 1;
    //     }
        

    //     console.log('step' + currentStep + 'form');
    //     $('#step' + currentStep + '-form').hide();
    //     currentStep++;
    //     $('#step' + currentStep + '-form').show();

    //     if(currentStep > 1){
    //         $("#left-bttns").removeClass('invisible');
    //     }

    // });

    // $("#next-bttn").click(function(){
   
    //     $('step'+ currentStep+'-form').hide();
    //     currentStep++;
    //     $("#step"+currentStep+"-form").show();

    //     if(currentStep > 1){
    //         $("#left-bttns").removeClass('invisible');
    //     }
    //     var progressBarSteps = $('.progress-bar-step');
    //     var currentProgressStep = progressBarSteps.eq(currentStep - 1);
    //     currentProgressStep.addClass('active');
    // });
});