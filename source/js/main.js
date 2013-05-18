$(document).delegate("#home_page", "pageinit", function () {

    setTimeout(function () {
        InitTapEvent_ForProductList();

        $("#homesearchProduct").enterKey(function () {            
            var keysearch = $(this).val();
            pageUrl = "resultsearch.html";            
            $.mobile.changePage(pageUrl, { transition: "fade" });
        })

    }, 100);

});

function InitTapEvent_ForProductList() {
    $(".product").tap(function () {        
        var id = $(this).attr("id");
        id = id.replace('product_', '');

        pageUrl = "productdetail.html";
        //alert(pageUrl + "|" + id);
        $.mobile.changePage(pageUrl, { transition: "fade" });
    });
}

// Catch enter key function
$.fn.enterKey = function (fnc) {
    return this.each(function () {
        $(this).keypress(function (ev) {
            var keycode = (ev.keyCode ? ev.keyCode : ev.which);
            if (keycode == '13') {
                fnc.call(this, ev);
            }
        })
    })
}

