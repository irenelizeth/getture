

$(document).ready(function() {

    // Call Gridder
    $('.gridder').gridderExpander({
//        scroll: true,
//        scrollOffset: 30,
//        scrollTo: "panel",                  // panel or listitem
//        animationSpeed: 400,
//        animationEasing: "easeInOutExpo",
//        showNav: true,                      // Show Navigation
          nextText: "Next",                   // Next button text
          prevText: "Previous",               // Previous button text
          closeText: "Close",                 // Close button text
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
    
    // getting current page
    var cpage = getCurrentPage();
    
    // registering events specific for each page
    registerPageEvents(cpage);

});



/****************************************
 * Javascript utility functions
 ****************************************/

// Get the current page by querying page_id property
// version: 0
function getCurrentPage() {
    var url = jQuery(location).attr('href');
    var current_page = jQuery("meta[property='current_page']").prop('content');
    
    console.log("currentPage: " + current_page + "(" + url + ")");
    return current_page;
}

// Register the events for the page
// version: 0
function registerPageEvents(cpage) {
    
    // registering the events depending on the page
    switch (cpage) {
        case "suggest":
            console.log("hey current_page: suggest");
            
            // submit event
            $('#suggest_search').submit(function(event) {
                event.preventDefault();
                
                var suggest_query = $(this).value;
                
                console.info("searching for: "+value);
                
                getAllActivities(function(data) {
                    
                    console.info("received data for suggestion query");
                    
                    // removing current results
                    $("#grider_results > lu").remove();
                    $('#results-query > div').remove();

                    // adding
                    for(var i = 0; i < data.length; i++) {
                        var suggestion = $("<lu class='gridder-list'" 
                                  + " data-griddercontent='#gridder-content" 
                                  + i + "'>" + " <img src='" + data[i].urlImg +"'/></lu>");
                        $("#grider_results").append(suggestion);
                        
                        createDivForSuggestionDetails(data[i], i);
                    }
                }, suggest_query);
            });
            
            break;
            
        case "new_activity": {
            console.log("current_page: new activity");
            break;
        }
        default:
            console.log("Sorry, the page is not recognized");
    }
}


/*
*
* Prepare div to show details of a given suggestion (place or activity)
*/
function createDivForSuggestionDetails(data, index){
    
    
    console.info("creating div for suggestion "+ index, ", data name: "+ data.name);
    
    var imgDiv = $('<div class="col-sm-6"><img src="'+ data.urlImg 
                    + '" class="img-responsive" /></div>');
    var infoDiv = $('<div class="col-sm-6"> <h2>' + data.name + '</h2> '
                    + '<p>' + data.summary + '</p> </div>');
    var divRow = $('<div class="row"></div>');
    var parentDiv = $('<div id="gridder-content'+index+'" class="gridder-content"></div>');
    
    divRow.append(imgDiv);
    divRow.append(infoDiv);
    parentDiv.append(divRow);
    
    parentDiv.appendTo("#results-query");
    
}
