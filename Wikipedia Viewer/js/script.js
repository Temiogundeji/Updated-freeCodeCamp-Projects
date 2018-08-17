$(document).ready(function(){
    $('#results').hide();
    var random = $('#btn-random');
    var search = $('#btn-search');

   
    
    // var callback = "&callback=JSON_CALLBACK"

    random.click(function(){
        $('#btn-random').attr("href", "https://en.wikipedia.org/wiki/Special:Random");
    });

    search.click(function(){
        $('#app-main').fadeOut(1000);
        $('#results').fadeIn(1000);
       var searchKey = $('input[type="text"]').val();
        var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&origin=*&gsrnamespace=0&gsrlimit=13&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+ searchKey;
        
        $.ajax({
            url: url,
            type:'GET',
            success: function(response){
                $.each(response.query.pages, function(i){
                    $('#results').append("<a id='result-link' href='https://en.wikipedia.org/?curid=" + response.query.pages[i].pageid + "'>" + "<h3 id='result-title'>" + response.query.pages[i].title + "</h3>" + "<p id='result-content'>" + response.query.pages[i].extract + "</p></a><br>");
                    // $('#results').append(`<a id='result-link' target='_blank' href='https://en.wikipedia.org/?curid=' + response.query.pages[i].pageid>" + "<h3 id='result-title'>" + response.query.pages[i].title + "</h3>"  +"<p id='result-content'>" + response.query.pages[i].extract + "</a><br>"`);
                   // $('#results').append(`<a id='result-link' target='_blank' href='https://en.wikipedia.org/?curid=' response.query.pages[i].pageid>" + "<h3 id='result-title'>"response.query.pages[i].title</h3><p id='result-content'>response.query.pages[i].extract</a><br>`);
                 });
            }
        });
    });
});