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
});