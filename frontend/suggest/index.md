---
layout: page
title: Suggest place
css: ["/css/getture.css", "/css/jquery.gridder.min.css", "/css/jquery.gridder.min.css.map"]
js: ["/js/restfulapi_getture.js", /js/jquery-1.11.2.min.js", "/js/bootstrap.js", "/js/jquery.gridder.min.js", "/js/getture.js"]
---

<div name="search" class="">
    <label for="suggest_search">Enter a place or activity you would like to recomment to other people visiting: </label><br>
    <input type="text" name="search" id="suggest_search" placeholder="Search place..">
</div>
<br>

<!-- Gridder navigation -->
<ul class="gridder" id="grider_results">

     <!-- You can load specify which content is loaded by specifying the #ID of the div where the content is  -->
    <lu class="gridder-list" data-griddercontent="#gridder-content-1">
        <img src="http://placehold.it/200x100" />
    </lu>
    <lu class="gridder-list" data-griddercontent="#content2">
        <img src="http://placehold.it/200x100" />
    </lu>
    <lu class="gridder-list" data-griddercontent="#content3">
        <img src="http://placehold.it/200x100" />
    </lu>

</ul>


<div id="results-query">
</div>

<div id="gridder-content-1" class="gridder-content">
                <div class="row">
                    <div class="col-sm-6">
                        <img src="http://placehold.it/600x600" class="img-responsive" />
                    </div>
                    <div class="col-sm-6">
                        <h2>Item 1</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex augue, hendrerit sed gravida ut, mattis vel tortor. Duis hendrerit sagittis bibendum. Fusce massa risus, hendrerit et est vitae, convallis accumsan ipsum.</p>
                    </div>
                </div>
</div>

<!-- Gridder content -->
<div id="content1" class="gridder-content"> Content goes here... </div>
<div id="content2" class="gridder-content"> Content goes here... </div>
<div id="content3" class="gridder-content"> Content goes here... </div>