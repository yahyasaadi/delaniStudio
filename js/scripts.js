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
    });

    
});