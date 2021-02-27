$(document).ready(() =>{

    // Btn rede social
    $('#social-links-open').on('click', () =>{
        $('.social-link').fadeToggle(1000)
    })

    $('#resumo').on('click', e =>{
        $(e.target).addClass('active')
        removeActive(['#projetos', '#contato'])
        
    })

    $('#projetos').on('click', e =>{
        $(e.target).addClass('active')
        removeActive(['#resumo', '#contato'])
    })

    $('#contato').on('click', e =>{
        $(e.target).addClass('active')
        removeActive(['#projetos', '#resumo'])
    })

    //Fuction remove class active
    function removeActive(classes = [], className = 'active'){
        for(i = 0; i < 2; i++){
            if($(classes[i]).hasClass(className)){
                $(classes[i]).removeClass(className)
            }
        }
    }
})