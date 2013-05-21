$("#search_page #searchProduct").enterKey(function () {
    var keysearch = $(this).val();

    pageUrl = "resultsearch.html";
    //alert(pageUrl);
    $.mobile.changePage(pageUrl, { transition: "fade" });
})
