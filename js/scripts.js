$(function () {

    //CONTROLE DO MENU MOBILE
    $('.mobile_action').click(function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.main_header_nav').animate({'left': '0px'}, 500);
        } else {
            $(this).removeClass('active');
            $('.main_header_nav').animate({'left': '-100%'}, 500);
        }
    });

    //HEADER
    $(window).scroll(function () {
          
          if($(this).scrollTop() > 0){
              
              if (!$('.main_header').hasClass('fixed')){
                   $('.main_header').stop().addClass('fixed');
              }
          
          }else{
          
              $('.main_header').removeClass('fixed');
          
          }
    });

    //Scroll Ancora
    /*
     function goTo(element, speed){
            var href = element.attr('href');
            var top = $(href).offset().top;
            $("html,body").animate({scrollTop : top}, speed);
    }

    $(function(){
       $("#top a").click(function(e){
          e.preventDefault();
          goTo($(this), 500);
        });

     });
     */

    var $doc = $('html, body');
     $('.scrollSuave').click(function() {
        $doc.animate({
            scrollTop:$($.attr(this,'href')).offset().top -100
        }, 500);        
        return false;
    });
    //Scroll Ancora
    
    //Menu Ativo
    $(function(){

        var links  = $("#top a");

        $(window).scroll(function(){
            var topScroll = $(window).scrollTop();
            links.each(function(){
               var href       = $(this).attr('href');
               var el         = $(href);
               var posSection = el.offset().top -101 ;
               var hSection   = el.height();

                if(posSection <= topScroll && (posSection + hSection) > topScroll){
                    links.removeClass('menuAtivo')
                    $(this).addClass('menuAtivo');
                }else{
                    $(this).removeClass("menuAtivo");
                }
            });
        });

    });
    //Menu Ativo

    //Magnific Popup
    $('.galeria-academia').magnificPopup({ 
      type: 'image',
      delegate: 'a',
      
      gallery:{enabled:true},
      callbacks: {
        
        buildControls: function() {
         
          this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
        }
        
      }
    });

});







// Função para abrir o popup
function abrirPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    popup.classList.add('aberto'); // Mostra o botão fechar também
  }
  
  // Função para fechar o popup
  function fecharPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    popup.classList.remove('aberto'); // Esconde o botão fechar
  }
  
  // Função para detectar se a seção serviços está na tela
  function checarVisibilidade() {
    const servicos = document.getElementById('modalidades');
    const rect = servicos.getBoundingClientRect();
    
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      if (!popupJaMostrado) {
        setTimeout(abrirPopup, 5000); // Espera 2 segundos depois de entrar
        popupJaMostrado = true; // Para não ficar abrindo toda hora
      }
    }
  }
  
  let popupJaMostrado = false;
  
  // Escutar o scroll da página
  window.addEventListener('scroll', checarVisibilidade);
  