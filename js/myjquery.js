
//-------------------------------DOM ACCESS METHODS
  //--------------------------get element by id
$('#select-by-id').click(function() {
  $('#giveMeAText').text("Hello there! Did you notice I wasn't here before?");
});

  //--------------------------get element by class
$('#select-by-class').click(function() {
  $('.text-info').text('spans with class "text-info" changed text');
  //using objects to change multiple properties
  $('.text-info').css({
    textDecoration: 'none',
    fontSize: '2rem'
  });
});

  //--------------------------get element by tag name
$('#select-by-tag').click(function() {
  $('h4').text('there');
});

  //--------------------------other selectors
$('#other-selector').click(function() {
  var styles = {
    listStyleType: 'none',
    backgroundColor: '#04ae20',
    textShadow: 'none'
  };

  $('li.grabme:first-of-type').text('Told you I was the FIRST');
  //using an object stored in a variable to style multiple properties at once
  $('li.grabme:first-of-type').css(styles);
});


  //--------------------------select all header types
$('#header-jq-selector').click(function() {
  $(':header').css('color', '#04ae20');
});

  //--------------------------select all elements containing a string
$('#contains-jq-selector').click(function() {
  $('button:contains("code")').css('text-decoration', 'line-through');
});

  //manipulation
      //---------------------------change attribute
$('#change-attribute').click(function() {
  $('#change-my-src').attr('src', 'https://millburyreflector.com/wp-content/uploads/2018/09/candy-900x516.jpg');
});

      //--------------------------------change value
$("#change-value").click(function(){
  $("#changeMyValue").val("Glenn Quagmire");
  $('#showValue').text($("#changeMyValue").val());
});

$("#seeSelected").click(function(){
  $('#showSelected').text($("#animals").val());
});

$("#changeSelected").click(function(){
  $("#animals").val("turtle");
});

      //-------------------------------toggle class
$("#checkList").click(function(){
  $("#haveIDoneIt li").first().toggleClass("done");
});

      //-------------------------------slide elements up and down
$("#slideItUp").click(function(){
  $('#slideMe').slideUp();
});

$("#slideItDown").click(function(){
  $("#slideMe").slideDown();
});

$("#toggleSlide").click(function(){
  $("#slideMe").slideToggle();
});

      //----------------------------fade effects
$("#fadeOutButton").click(function(){
  $("#fadeMe").fadeOut(1500);
});

$("#fadeInButton").click(function(){
  $('#fadeMe').fadeIn(1500);
});

$("#fadeToButton").click(function(){
  $('#fadeMe').fadeTo(1500, 0.5, function() {
    $(this).css('background-color', '#675199');
  });
});

      //-------------------------------hide and show elements
$("#hideButton").click(function(){
  $('#hideAndShowMe').hide();
});

$("#showButton").click(function(){
  $("#hideAndShowMe").show();
});

//--------------------------------------------EVENTS
  //multiple events
$('.sameEvent').click(function() {
  $(this).removeClass('btn-lilac');
  $(this).addClass('btn-danger');
});

  //on events
$('#doubleClickMe').on("dblclick", function() {
  alert("You've clicked me, I've got it already!");
});

  //on events
$('.scrollme').on("scroll", function() {
  $(this).css({backgroundColor: '#280014', color: '#c199ad'});
});

  //mouse
    //-------------------------------------hover
$('#hoverEffect').hover(function() {       //hover in
  $(this).removeClass('btn-lilac');
  $(this).addClass('btn-danger');
}, function() {                            // hover out
  $(this).removeClass('btn-danger');
  $(this).addClass('btn-lilac');
});

  //----------------------------------------blur (lose focus)
$('#onBlurEvent').blur(function() {
  $('#showInputText').text($(this).val());
});

  //----------------------------------------keydown (lose focus)
$('#onKeydownEvent').keydown(function(event) {
  $('#showInputKeydownText').html("Key: " + event.which + ' Char: ' + event.key);
});

  //----------------------------------------keypress (char result)
$('#onKeypressEvent').keypress(function(event) {
  $('#showInputKeypressText').html("Key: " + event.which + ' Char: ' + event.key);
});


// if ($(var).val() !== '') {

// }

//---------------------------------------CHAINING METHODS
  //--------------------------select all elements containing a string
$('#chainingMethods').click(function() {
  $('#notification-bar').delay(500).slideDown().delay(1000).fadeOut();
}); 

//---------------------------------------ANIMATIONS
$('#left').click(function() {
  $('#animatedBox').animate({
    left: '-=40px',
    backgroundColor: randomColor()
  }, function() {

  });
});

$('#up').click(function() {
  $('#animatedBox').animate({
    top: '-=40px',
    backgroundColor: randomColor()
  }, function() {

  });
});

$('#right').click(function() {
  $('#animatedBox').animate({
    left: '+=40px',
    backgroundColor: randomColor()
  }, function() {

  });
});

$('#down').click(function() {
  $('#animatedBox').animate({
    top: '+=40px',
    backgroundColor: randomColor()
  }, function() {

  });
});


function randomColor() {
  //red
  var r = Math.floor(Math.random() * 256);
  //green
  var g = Math.floor(Math.random() * 256);  
  //blue
  var b = Math.floor(Math.random() * 256);
  //compose the color
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

  //slideshow without bootstrap
// $('#img1').animate({
//   $(this).css('border', '3px solid yellow')
// }, 2000, function() {
  
// });

$('#link1').click(function() {
  $('#img1').show();
  $('#img2').hide();
  $('#img3').hide();
  $('#img4').hide();
});

$('#link2').click(function() {
  $('#img1').hide();
  $('#img2').show();
  $('#img3').hide();
  $('#img4').hide();
});

$('#link3').click(function() {
  $('#img1').hide();
  $('#img2').hide();
  $('#img3').show();
  $('#img4').hide();
});

$('#link4').click(function() {
  $('#img1').hide();
  $('#img2').hide();
  $('#img3').hide();
  $('#img4').show();
});


//-----------------------------BUILDING APPLICATIONS
  //boring racecar game
$('#go').click(function() {
  var car1Height = $('#car1').height();
  var raceTrackHeight = $('#racetrack').height() - 40; //40px = posição do carro
  var trackWidth = raceTrackHeight - car1Height;
  var raceTime1 = Math.floor((Math.random() * 5000) + 1);
  var raceTime2 = Math.floor((Math.random() * 5000) + 1);

  function checkIfcomplete() {
    if (isComplete == false) {
      isComplete = true;
    } else {
      place = 'second';
    }
  }
  //flag variable to check completion
  var isComplete = false;
  //flag variable to first place
  var place = 'first';

  $('#car1').animate({
    top: trackWidth
  }, raceTime1, function() {
    checkIfcomplete();
    $('#raceInfo1 span').text('Finished in ' + place + ' place and clocked in at ' + raceTime1 + ' milliseconds!');
  });

  $('#car2').animate({
    top: trackWidth
  }, raceTime2, function() {
    checkIfcomplete();
    $('#raceInfo2 span').text('Finished in ' + place + ' place and clocked in at ' + raceTime2 + ' milliseconds!');
  });
});

$('#reset').click(function() {
  $('.cars').css('top', '40px');
  $('.raceInfo span').text("");
});

  //to-do app
$('#addToDo').click(function() {
  var newItem = prompt("type a new 'to do' item:");
  $('#nothingYet').remove();
  $("#to-do-applist").append('<li class="list-group-item">' + newItem + "</li>");
  $('.list-group-item').click(function() {      //RESOLVER BUG
    $(this).addClass('checked');
  });
});

$('#deleteToDo').click(function() {
  $(".list-group-item.checked").remove();
});

  //PROFESSIONAL TODO
$('#todoApp #todoListItems').on('click', 'li', function() {      //RESOLVER BUG
  $(this).toggleClass('checked');
});

$('#addToDoButton').click(function() {
  $('#newToDo').css('display', 'block').keypress(function(event) {
    if (event.which === 13) {
      var newItem = $(this).val();
      $(this).val('');
      if (newItem !== '') {
        $("#todoListItems").append('<div class="row"><span class="deleteMe"><i class="fas fa-trash-alt"></i></span><li class="pl-3">' + newItem + '</li></div>');
      }
      
    }
  }); 
});

$('#todoListItems').on('click', '.deleteMe', function() {
  $(this).parent().remove();
});

//event.stopPropagation();        PREVENTS BUBBLING EVENTS

//---------------------------------------TEMPLATE
var previewBtn = $('#previewBtn');

if (previewBtn != null) {
  var template = $('#template').html(),
    form = $('#form'),
    preview = $('#preview'),
    templateCard = $('.card');


  previewBtn.click(function() {
    var data = getFormData(),
        html = Mustache.render(template, data);
  
    preview.html(html);
  });

  fillForm();

  function getFormData() {
    return {
      title: getValue('#title'),
      firstName: getValue('#firstName'),
      lastName: getValue('#lastName'),
      address: getValue('#address'),
      address2: getValue('#address2'),
      city: getValue('#city'),
      state: getValue('#state'),
      zip: getValue('#zip'),
      email: getValue('#email'),
      website: getValue('#website'),
      interests: getValue('#interests'),
      experience: getValue('#experience'),
      style: getValue('#style')
    }
  }

  function getValue(id) {
    return $(id).val();
  }

  function setValue(id, value) {
   $(id).val(value);
  }

  function fillForm() {
    setValue('title', 'Mr.');
    setValue('firstName', 'Bob');
    setValue('lastName', 'Smith');
    setValue('address', '123 Main St.');
    setValue('address2', 'Apt. 2');
    setValue('city', 'Boston');
    setValue('state', 'MA');
    setValue('zip', '02115');
    setValue('email', 'bsmith@example.com');
    setValue('website', 'www.example.com');
    setValue('interests', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.');
    setValue('experience', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.');
  }
}

//---------------------------------PAPER.JS








