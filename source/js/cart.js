$(document).delegate("#cart_page", "pageinit", function () {

    setTimeout(function () {
        InitTapEvent_ForPaymentButton();
    }, 100);

});

function InitTapEvent_ForPaymentButton() {
    $(".bg-buttonPayment").tap(function () {
        
        pageUrl = "checkout_address.html";
        //alert(pageUrl + "|" + id);
        $.mobile.changePage(pageUrl, { transition: "fade" });
    });
}