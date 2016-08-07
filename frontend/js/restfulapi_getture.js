/*!
* getture Javascript Library v 0.1.0
* Date: 2016-08-06
*/

/*
* Constant definitions
*/

// Server:

var protocol = "http";
var host = "localhost";
var port = "4000";

// url of the base web client:
var baseURL = protocol + "://" + host + ":" + port + "/";
// url of the base restful webservice api:
var baseAPIURL = baseURL + "api/";

/*************************************************
 * RESTful api functions
 *************************************************/

// ********* Suggest (places, activities)
// version: 0

var suggestSearch = 'suggestion/search';
/*
* get all places, activities in the local area
*/
    function getAllActivities(lambdaFnc, query){
        
        console.info('Getting all places and activities for local area');
    
        $.ajax({
            type: 'GET',
            url: baseAPIURL + suggestSearch + "/" + query,
            dataType: 'json',
            success: function(data){
                console.info("got all places activities");
                lambdaFnc(data);
            },
            error: showErrors
        });
    }

// UTIL FUNCTIONS

// show errors using the notification plugin
//version: 0
function showErrors(msg) {
    console.error(msg);
    alert("Error!! : "+ msg);
}