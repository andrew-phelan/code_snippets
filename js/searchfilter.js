$('#search_match').keydown(function(){
        var filter = $(this).val();
        $('a').each(function(event){
                if($(this).text().search(new RegExp(filter, "i")) < 0) {
                        $(this).fadeOut();
                }
                else {
                        $(this).show(), $(this).slideup();
                }
        });
});

