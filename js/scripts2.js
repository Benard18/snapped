

function myFunction() {
  var dis = Math.floor((Math.random() * 2) + 1)
    if (dis === 1) {
      alert("You Die")
    }
     else {
alert("You Live")
    }


}
 







$(document).ready(function() {
  $("button").click(function() {
    myFunction();
  });
});

///////User INterface///////
$(document).ready(function (){
  $(function(){

    /*
    Add this code to every page.

    We start by hiding the body, and then fading it in.
    */
    $(".marvel-title").hide().fadeIn('.container-fluid');

    /*
    Now we deal with all 'a' tags...
    */
    $('a').click(function(){
        /*
        Get the url from this anchors href
        */
        var link = $(this).attr('href');
        /*
        Fade out the whole page
        */
        $(".marvel-title").fadeOut(".container-fluid", function(){
            /*
            When that's done (on the 'callback') send the browser to the link.
            */
            window.location.href = link;
            $("#death").show()
        });return false;
    });
$("#death").hide()
});

});
