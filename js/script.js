$(function(){
    $('.nav-mobile').click(function(){
        var lista = $('.nav-mobile ul');

        if(lista.is(':hidden') == true){
            lista.slideToggle();
        }else{
            lista.slideToggle();
        }
    })
})

