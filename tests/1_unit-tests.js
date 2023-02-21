const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator()
suite('Unit Tests', () => {
    suite('ToBritishEnglish', () => {
        // #1
        test('>> 1', function(){
            assert.property(translator.americanToBritishTranslator('Mangoes are my favorite fruit.'), 'translation')
        })
        // #2
        test('>> 2', function(){
            assert.property(translator.americanToBritishTranslator('I ate yogurt for breakfast'), 'translation')
        })
        // #3
        test('>> 3', function(){
            assert.property(translator.americanToBritishTranslator("We had a party at my friend's condo."), 'translation')
        })
        // #4
        test('>> 4', function(){
            assert.property(translator.americanToBritishTranslator('Can you toss this in the trashcan for me?'), 'translation')
        })
        // #5
        test('>> 5', function(){
            assert.property(translator.americanToBritishTranslator('The parking lot was full.'), 'translation')
        })
        // #6
        test('>> 6', function(){
            assert.property(translator.americanToBritishTranslator('Like a high tech Rube Goldberg machine.'), 'translation')
        })
        // #7
        test('>> 7', function(){
            assert.property(translator.americanToBritishTranslator('To play hooky means to skip class or work.'), 'translation')
        })
        // #8
        test('>> 8', function(){
            assert.property(translator.americanToBritishTranslator('No Mr. Bond, I expect you to die.'), 'translation')
        })
        // #9
        test('>> 9', function(){
            assert.property(translator.americanToBritishTranslator('Dr. Grosh will see you now.'), 'translation')
        })
        // #10
        test('>> 10', function(){
            assert.property(translator.americanToBritishTranslator('Lunch is at 12:15 today.'), 'translation')
        })
    })

    suite('ToAmericanEnglish', () => {
        // #11
        test('>> 11', function(){
            assert.property(translator.britishToAmericanTranslator('We watched the footie match for a while.'), 'translation')
        })
        // #12
        test('>> 12', function(){
            assert.property(translator.britishToAmericanTranslator('Paracetamol takes up to an hour to work.'), 'translation')
        })
        // #13
        test('>> 13', function(){
            assert.property(translator.britishToAmericanTranslator('First, caramelise the onions.'), 'translation')
        })
        // #14
        test('>> 14', function(){
            assert.property(translator.britishToAmericanTranslator('I spent the bank holiday at the funfair.'), 'translation')
        })
        // #15
        test('>> 15', function(){
            assert.property(translator.britishToAmericanTranslator('I had a bicky then went to the chippy.'), 'translation')
        })
        // #16
        test('>> 16', function(){
            assert.property(translator.britishToAmericanTranslator("I've just got bits and bobs in my bum bag."), 'translation')
        })
        // #17
        test('>> 17', function(){
            assert.property(translator.britishToAmericanTranslator('The car boot sale at Boxted Airfield was called off.'), 'translation')
        })
        // #18
        test('>> 18', function(){
            assert.property(translator.britishToAmericanTranslator('Have you met Mrs Kalyani?'), 'translation')
        })
        // #19
        test('>> 19', function(){
            assert.property(translator.britishToAmericanTranslator("Prof Joyner of King's College, London."), 'translation')
        })
        // #20
        test('>> 20', function(){
            assert.property(translator.britishToAmericanTranslator('Tea time is usually around 4 or 4.30.'), 'translation')
        })
        // #21
        test('>> 21', function(){
            assert.property(translator.americanToBritishTranslator('Mangoes are my favorite fruit.'), 'translation')
        })
        // #22
        test('>> 22', function(){
            assert.property(translator.americanToBritishTranslator('I ate yogurt for breakfast.'), 'translation')
        })
        // #23
        test('>> 23', function(){
            assert.property(translator.britishToAmericanTranslator('We watched the footie match for a while.'), 'translation')
        })
        // #24
        test('>> 24', function(){
            assert.property(translator.britishToAmericanTranslator('Paracetamol takes up to an hour to work.'), 'translation')
        })
    })
});
