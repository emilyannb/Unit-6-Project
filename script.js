$(".start-button").click(function() {
     $(".title, .firstImage, .users-reply .button1").slideUp();
$(".users-reply").text("double click the photo to see how traffic is looking!");
    $(".start-button").hide();
    $(".late").hide();
    $(".early").show();
    });
  
    $(".clue-container").dblclick(function() {
   $(".notraff").show();
        $(".early").hide();
        $(".users-reply").hide();
        $(".message-4").text("Traffic is moving! Looks like you are making it to school on time!");
   
});

$(".late").click(function() {
    $(".message-2").text("You’re a little tired and want to grab coffee, lets make a pit stop. Click the photo to see what's on the way to school.");
    $(".title, .firstImage, .users-reply, .button1").slideUp();
    $(".latecar").show(); 

       
});
$(".latecar").click(function() {
    $(".coffee").show();
    $(".early").hide();
    $(".latecar").hide();
    $(".message-2").hide();
   
});
$(".coffee").click(function() {
    $(".message-5").show();
   
});






    

