console.log("Hello World");

//Descrizione:
//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//Bonus:
//Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: 'Muchachos!',
      coro: 'Da quand’ero piccolino',
      coro2: 'Io mi innamorai di te',
      coro3: 'Il mio cuore che batteva',
      coro4: 'Non mi chiedere perché',
      coro5: 'Non te lo posso spiegar',
      coro6: 'Non potrai capire mai',
      coro7: 'Quanto è bello l’AC MILAN',
      coro8: 'Quanto è bello essere NOI',
      coro9: 'Io per sempre ci sarò',
      coro10: 'Quando il Milan giocherà',
      coro11: 'Come quando da bambino',
      coro12: 'La guardavo con papà',
      coro13: 'Bandito',
      coro14: 'Una vita accanto al diavolo',
      coro15: 'E la sciarpa rossonera',
      coro16: 'Con orgoglio indosserò',
      coro17: 'E fiero',
      coro18: 'Di aver scelto sempre e solo te',
      coro19: 'Ogni giorno nella vita',
      coro20: 'Cosa più bella non c’è',
      imageSrc: 'milan.png',
    };
  },
}).mount('#app');
