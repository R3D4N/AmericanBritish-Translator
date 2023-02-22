const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    // #1
    test('translation with text and locale fields', function(done){
        chai.request(server)
            .post('/api/translate')
            .send({
                text: 'Mangoes are my favorite fruit.',
                locale: 'american-to-british'
            })
            .end(function(err, res){
                assert.property(res.body, 'translation')
                done()
            })
    })
    // #2
    test('translation with text and invalid locale field', function(done){
        chai.request(server)
            .post('/api/translate')
            .send({
                text: 'Mangoes are my favorite fruit.',
                locale: 'american-to-britishfake'
            })
            .end(function(err, res){
                assert.propertyVal(res.body, 'error', 'Invalid value for locale field')
                done()
            })
    })
    // #3
    test('translation with missing text field', function(done){
        chai.request(server)
            .post('/api/translate')
            .send({
                locale: 'american-to-british'
            })
            .end(function(err, res){
                assert.propertyVal(res.body, 'error', 'Required field(s) missing')
                done()
            })
    })
    // #4
    test('translation with missing locale field', function(done){
        chai.request(server)
            .post('/api/translate')
            .send({
                text: 'Mangoes are my favorite fruit.'
            })
            .end(function(err, res){
                assert.propertyVal(res.body, 'error', 'Required field(s) missing')
                done()
            })
    })
    // #5
    test('translation with empty text', function(done){
        chai.request(server)
            .post('/api/translate')
            .send({
                text: '',
                locale: 'american-to-british'
            })
            .end(function(err, res){
                assert.propertyVal(res.body, 'error', 'No text to translate')
                done()
            })
    })
    // #6
    test('translation with text that needs no translation', function(done){
        chai.request(server)
            .post('/api/translate')
            .send({
                text: 'Paracetamol takes up to an hour to work.',
                locale: 'american-to-british'
            })
            .end(function(err, res){
                assert.propertyVal(res.body, 'translation', 'Everything looks good to me!')
                done()
            })
    })
});
