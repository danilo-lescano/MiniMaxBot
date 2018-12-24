const { NlpManager } = require('node-nlp');
 
const manager = new NlpManager({ languages: ['pt'] });
// Adds the utterances and intents for the NLP
manager.addDocument('pt', 'ate mais', 'greetings.bye');
manager.addDocument('pt', 'tchau e se cuida', 'greetings.bye');
manager.addDocument('pt', 'ta bom te vejo mais tarde', 'greetings.bye');
manager.addDocument('pt', 'Ate logo', 'greetings.bye');
manager.addDocument('pt', 'eu preciso ir', 'greetings.bye');
manager.addDocument('pt', 'ola', 'greetings.hello');
manager.addDocument('pt', 'oi', 'greetings.hello');
manager.addDocument('pt', 'eae', 'greetings.hello');
 
// Train also the NLG
manager.addAnswer('pt', 'greetings.bye', 'ate a proxima');
manager.addAnswer('pt', 'greetings.bye', 'te vejo mais tarde!');
manager.addAnswer('pt', 'greetings.hello', 'ola!');
manager.addAnswer('pt', 'greetings.hello', 'saudacoes!');
 
// Train and save the model.
(async() => {
    await manager.train();
    manager.save();
    const response = await manager.process('pt', 'eu tenho que ir');
    console.log(response);
})();