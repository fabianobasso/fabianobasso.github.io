$(document).ready(() =>{

    // Btn rede social
    $('#social-links-open').on('click', () =>{
        $('.social-link').fadeToggle(1000)
    })

    $('#resumo').on('click', e =>{
        $(e.target).addClass('active')
        removeActive(['#projetos', '#contato'])
        $('.content-portfolio').load('assets/templates/resumo.html')
    })

    $('#projetos').on('click', e =>{
        $(e.target).addClass('active')
        removeActive(['#resumo', '#contato'])
    })

    $('#contato').on('click', e =>{
        $(e.target).addClass('active')
        removeActive(['#projetos', '#resumo'])
        $('.content-portfolio').load('assets/templates/contato.html')
    })

    // Load pages projects

    $('#web').on('click', e => {
        e.preventDefault()
        $('.content-portfolio').load('assets/templates/Projetos/Web/web-00.html')
    })
    $('#java').on('click', e => {
        e.preventDefault()
        $('.content-portfolio').load('assets/templates/Projetos/Java/java-00.html')
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