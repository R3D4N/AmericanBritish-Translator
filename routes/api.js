'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let {text, locale} = req.body
      if(!locale || text == undefined) return res.json({error: 'Required field(s) missing'})
      if(text.length == 0) return res.json({error: 'No text to translate'})
      let localeRegex = /american-to-british|british-to-american/
      if(!localeRegex.test(locale)) return res.json({error: 'Invalid value for locale field'})
      let message = {}
      if(locale == 'american-to-british'){
        message = translator.americanToBritishTranslator(text)
      }else{
        message = translator.britishToAmericanTranslator(text)
      }
      res.json(message)
    });
};
