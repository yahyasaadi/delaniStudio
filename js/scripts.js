function clearFields(){
    $("input#name").val("");
    $("input#email").val("");
    $("#message").val("");
}


$().ready(function(){
    // the desing paragraph
    $("#designImg").click(function(){
        $("#pDesign").toggle();
    });

    // the dev paragraph
    $("#devImg").click(function(){
        $("#pDev").toggle();
    });

    // the product paragraph
    $("#proImg").click(function(){
        $("#pProduct").toggle();
    });


    // Code for the user form
    var $newForm = $("#form");
    var $nameInput = $('input:text');

    $newForm.on('submit', function(e){
        e.preventDefault();
        var name = $nameInput.val();
        alert(name + " we have received your message. Thank you for reaching out to us.");
        clearFields();
    });

    /*
    // Tyring hover effect
    // Rpeat this function for the rest of the projects
    $("#workFour").hover(function(){
        // $('#workFourName').toggle();
        $(this).animate({opacity:.1});
        // $('.workThreeName').removeClass('appear');
    }, function(){
        $(this).animate({opacity: 1});
        // $('.workThreeName').addClass('appear');
    });

    */


    // function to add animation to portfolio div
    $("#portfolio").each(function(){
        $("img").hover(function(){
            $(this).animate({opacity: .1});
        }, function(){
            $(this).animate({opacity: 1});
        });
    });
});