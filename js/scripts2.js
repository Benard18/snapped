


dis = Math.floor((Math.random() * 2) + 1)





$(document).ready(function() {
  $("button").click(function() {
    $("#dir").attr("href","index"+dis+".html");
  });
});

// ///////User INterface///////
// $(document).ready(function (){
//   $(function(){
//
//     /*
//     Add this code to every page.
//
//     We start by hiding the body, and then fading it in.
//     */
//     $("body").hide().fadeIn('index1.html');
//     /*
//     Now we deal with all 'a' tags...
//     */
//     $('a').click(function(){
//       myFunction();
//         /*
//         Get the url from this anchors href
//         */
//         var link = $(this).attr('href',"index"+dis+".html");
//         /*
//         Fade out the whole page
//         */
//         $("index4.html").fadeOut("index1.html", function(){
//             /*
//             When that's done (on the 'callback') send the browser to the link.
//             */
//             window.location.href = link;
//             $("link").show()
//         });return false;
//     });
// });
//
// });
