$(document).ready(function() {

    // Call Gridder
    $('.gridder').gridderExpander({
//        scroll: true,
//        scrollOffset: 30,
//        scrollTo: "panel",                  // panel or listitem
//        animationSpeed: 400,
//        animationEasing: "easeInOutExpo",
//        showNav: true,                      // Show Navigation
//        nextText: "Next",                   // Next button text
//        prevText: "Previous",               // Previous button text
//        closeText: "Close",                 // Close button text
//        onStart: function(){
//            //Gridder Inititialized
//        },
//        onContent: function(){
//            //Gridder Content Loaded
//        },
//        onClosed: function(){
//            //Gridder Closed
//        }
        scrollOffset: 60,
        scrollTo: "panel", // "panel" or "listitem"
        animationSpeed: 400,
        animationEasing: "easeInOutExpo",
        onStart: function () {
            console.log("Gridder Inititialized");
        },
        onExpanded: function (object) {
            console.log("Gridder Expanded");
            $(".carousel").carousel();
        },
        onChanged: function (object) {
            console.log("Gridder Changed");
        },
        onClosed: function () {
            console.log("Gridder Closed");
        }
    });

});