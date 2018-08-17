function animateColor(){
    let colors = ["#FF3334", "#F2777A", "#FFCC66","#F99157", "#9EC400", "#99CC99","#82CBCB", 
    "#54CED6", "#5780A9","#6699CC", "#CC99CC", "#B777E0"];

    let randomColor = Math.floor(Math.random() * colors.length);
    let color = colors[randomColor];

    document.body.style.backgroundColor=color;
    wrapper.style.backgroundColor=color;
    newQuote.style.backgroundColor=color;
}
$(function() {
     animateColor();
});
$("#newQuote").click(function(){
     animateColor();
  });