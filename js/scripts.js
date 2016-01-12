$(document).ready(function() {
  $("#catimg").hide();

  $("button#cat").click(function(){
    $("ul#user").prepend("<li>I'm a kitty! meow!</li>");
    $("ul#webpage").prepend("<li>You're silly.</li>");

    $("ul#user").children("li").first().click(function() {
      $("#catimg").show();
    });
  });

  $("#catimg").click(function(){
    $("#catimg").hide();
  });

  $("button#dog").click(function(){
    $("ul#user").prepend("<li>Imma dog! WOOF!</li>");
    $("ul#webpage").prepend("<li>Stop kidding yourself...</li>");

    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
