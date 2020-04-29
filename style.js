let persent = 0;

$('.buttons').children('#button').click(function(){

    
function plus(x){
    return persent + x;
}

        
        let pressed = $(this)[0].text;
        let progress = $('#progress')[0].attributes[6].value;
    
    
        if(pressed == '+1%'){
             progress = plus(1) + "%";
            $('#progress').css('width', progress);
            persent = plus(1);
        } else if(pressed == '+3%'){
             progress = plus(3) + "%";
            $('#progress').css('width', progress);
            persent = plus(3);
        } else if(pressed == '+7%'){ 
            progress = plus(7) + "%";
            $('#progress').css('width', progress);
            persent = plus(7);
        } else {
            persent = 0;
            $('#progress').css('width', 0);
        }
    
})




