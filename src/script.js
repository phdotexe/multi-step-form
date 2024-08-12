// write your JavaScript here
$(document).ready(function(){
    // $("#next-bttn").on("click", function(){
    //     $("step1-form").hide();
    //     $("step2-form").show();
    // })
    // $("step1-form").hide();
    // var currentStep = 1;
    $("#next-bttn").click(function(){
        if($("#step1-form").is(":visible")){
            $("#step1-form").hide();
            $("#step2-form").show();
        } else if($("#step2-form").is(":visible")){
            $("#step2-form").hide();
            $("#step3-form").show();
            $("#left-bttns").show();
        } else if($("#step3-form").is(":visible")){
            $("#step3-form").hide();
            $("#step4-form").show();
            $("#left-bttns").show();
        }
    });
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