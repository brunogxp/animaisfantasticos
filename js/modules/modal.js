export default function initModal(){
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  
  if(botaoAbrir && botaoFechar && containerModal) {
    function toggleModal(Event){
      Event.preventDefault();
      containerModal.classList.toggle('ativo');
    }

    /*
      function abrirModal(Event){
        Event.preventDefault();
        containerModal.classList.add('ativo');
      }

      function fecharModal(Event) {
        Event.preventDefault();
        containerModal.classList.remove('ativo');
    
      }
    */
 
    function cliqueForaModal(Event){
      if(Event.target === this) {
        toggleModal(Event);
      }
    }
  
    botaoAbrir.addEventListener('click', toggleModal);
    botaoFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaModal);
  }
}

