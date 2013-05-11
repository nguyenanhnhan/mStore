$(document).delegate("#home_page", "pageinit", function () {

    setTimeout(function () {
        InitTapEvent_ForProductList();
    }, 100);

});

function InitTapEvent_ForProductList() {
    $(".product").tap(function () {        
        var id = $(this).attr("id");
        id = id.replace('product_', '');

        pageUrl = "resultsearch.html";
        //alert(pageUrl + "|" + id);
        $.mobile.changePage(pageUrl, { transition: "fade" });
    });
}