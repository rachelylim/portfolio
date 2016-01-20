$(function(){

    function setImg(src, id){
      var path = "writings/"+ id + ".html"
      $.get(path, function(data) {
        console.log(data);
        $("#details").html(data);
      });
    };

  $("#portfolio img").click(function(){
    event.preventDefault();
    
    var src = $(this).attr("src");
    var id = $(this).attr("id");
    $("#frame img").attr("src", src);
    $("#overlay").fadeIn();

    setImg(src, id);

    $("#frame").fadeIn();

  });

  $('#overlay').click(function(){
    $(this).fadeOut('slow');
    $('#frame').fadeOut('slow')
  })

});