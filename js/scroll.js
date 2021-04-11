// 1. when we scroll, we want to run a function
// 2. we want to figure out how far down the page we have scrolled
// 3. we want to display the pixels we've scrolled inside of our .progress div

// document is a javascript keyword that refers to the entire html page
$(document).on('scroll', function() {
  
  // the scrollTop method gives us back a pixel value for how far
  // it is to the top of the page (from our current scroll position)
  var pixelsFromTop = $(document).scrollTop()
  
  if (pixelsFromTop > 50) {
    $('header').addClass('hidden')
  } else {
    $('header').removeClass('hidden')
  }
  
  if (pixelsFromTop < 600) {
    $('body').css('background-color', '#fff')
  } else if (pixelsFromTop < 1400) {
  	$('body').css('background-color', '#a29c97')
 	} else if (pixelsFromTop < 2200) {
    $('body').css('background-color', "#d9dfe4")
  } else if (pixelsFromTop < 3000) {
    $('body').css('background-color', "#fff0f0")
  } else {
    $('body').css('background-color', '#cdccc7')
  }
  
  // 1. make some variables for our documentHeight and windowHeight
  // 2. make a variable to work out the difference between the two (as we are comparing this to our 
  // scrollTop position which goes from the top of the window). so it will be documentHeight - windowHeight
  // 3. using the difference and hte scriollPosition, divide them into each other to make a percentage
  // 4. multiply by 100 to get back a % value
  
  var documentHeight = $(document).height()
  var windowHeight = $(window).height()
  
  var difference = documentHeight - windowHeight
  
  var percentage = 100 * pixelsFromTop / difference
  
  console.log(percentage)
  
  // by concatenating number with '%', it changes the value of the
  // css property as percentage, otherwise it is interpreated as pixels
  $('.bar').css('width', percentage + '%')
  
  
})
