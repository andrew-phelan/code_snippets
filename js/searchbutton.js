$(document).ready(function(){
        $('#button').click(function(event){
                event.preventDefault();
                window.location = "{% url%}?match=" + $('#search').val();
        });
});
