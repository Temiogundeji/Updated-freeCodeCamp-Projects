
function randomQuotes() {
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function( response ) {
          $("#text").html(response.quoteText);
          $("#author").html(response.quoteAuthor);
            
        }
    });
  }
  
  
function animateColor(){
  //This is for color animation
var colors = ["#FF3334", "#F2777A", "#FFCC66",
"#F99157", "#9EC400", "#99CC99",
 "#82CBCB", "#54CED6", "#5780A9",
 "#6699CC", "#CC99CC", "#B777E0"];
  
let randomColor = Math.floor(Math.random() * colors.length);
  let color = colors[randomColor];
  // container.style.backgroundColor = color;
  // newQuote.style.color = color;
  // text.style.color = color;
  // author.style.color = color;
  // shareQuote.style.color = color;
  document.body.style.backgroundColor=color;
  document.body.style.color=color;
    author.style.color=color;
    text.style.color=color;
   newQuote.style.backgroundColor=color;
  shareQuote.style.backgroundColor=color;
  doubleQuote.style.color=color;
  footerText.style.color = color;
 
	const twitterLink = "https://twitter.com/intent/tweet?text=",
		codepenLink = "https://codepen.io/letwitch/pen/aNWaEx";
}

$(function() {
   randomQuotes();
   animateColor();
});

$("#newQuote").click(function(){
  randomQuotes();
   animateColor();
});
$("#shareQuoute").click(function(){
  $("#shareQuote").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
          ' (' + response.quoteAuthor + ')');
});

  