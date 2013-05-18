$(document).delegate("#checkout_address_page", "pageinit", function () {

    setTimeout(function () {        
        InitTapEvent_ForNewAddressButton();
    }, 100);

});

function InitTapEvent_ForNewAddressButton() {    
    $(".bg-buttonCreateAddress").tap(function () {
        
        pageUrl = "checkout_address_new.html";
        //alert(pageUrl);
        $.mobile.changePage(pageUrl, { transition: "fade" });
    });
}


$(document).delegate("#checkout_address_new_page", "pageinit", function () {

    setTimeout(function () {
        InitTapEvent_ForSaveAddressButton();
    }, 100);

});

function InitTapEvent_ForSaveAddressButton() {
    $(".bg-buttonSaveAddress").tap(function () {

        pageUrl = "checkout_paymentmethod.html";
        //alert(pageUrl);
        $.mobile.changePage(pageUrl, { transition: "fade" });
    });
}