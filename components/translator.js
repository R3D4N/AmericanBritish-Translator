const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    americanToBritishTranslator(text) {
        let textArray = [text.toLowerCase()]
        let dictionaryWord = { ...americanToBritishTitles, ...americanToBritishSpelling }
        textArray[0] = this.translate(textArray, dictionaryWord, americanOnly, 'american')
        if (textArray[0] === text) {
            return {translation: 'Everything looks good to me!'}
        }
        return {translation: textArray[0]}
    }

    britishToAmericanTranslator(text) {
        let textArray = [text.toLowerCase()]
        // reverse dictionaries
        let britishToAmericanTitles = this.reversingDict(americanToBritishTitles)
        let britishToAmericanSpelling = this.reversingDict(americanToBritishSpelling)

        let dictionaryWord = { ...britishToAmericanTitles, ...britishToAmericanSpelling }
        textArray[0] = this.translate(textArray, dictionaryWord, britishOnly, 'british')
        if (textArray[0] === text) {
            return {translation: 'Everything looks good to me!'}
        }
        return {translation: textArray[0]}
    }

    translate(text, dictionary, onlyDictionary, time) {
        let replaceDict = {}
        let entrieValues = Object.entries(onlyDictionary)
        for (const [key, value] of entrieValues) {
            if (text[0].includes(key)) {
                replaceDict[key] = value
            }
        }

        let wordRegex = /[a-z]{2,4}\.|[a-z]+/ig
        let titleRegex = /(mr|mrs|ms|mx|dr|prof)\.?/g
        let ocurrencias = new Set(text[0].match(wordRegex))
        for (const ocurrencia of ocurrencias) {
            if (dictionary[ocurrencia]) {
                let value = dictionary[ocurrencia]
                if(titleRegex.test(ocurrencia)){
                    value = this.capitalizeFirstLetter(value)
                }
                replaceDict[ocurrencia] = value
            }
        }

        if (time == 'american') {
            let timeRegex = /\d{1,2}:\d{1,2}/g
            let ocurrencias = text[0].match(timeRegex)
            if (ocurrencias) {
                for (const ocurrencia of ocurrencias) {
                    replaceDict[ocurrencia] = ocurrencia.replace(':', '.')
                }
            }
        } else {
            let timeRegex = /\d{1,2}\.\d{1,2}/g
            let ocurrencias = text[0].match(timeRegex)
            if (ocurrencias) {
                for (const ocurrencia of ocurrencias) {
                    replaceDict[ocurrencia] = ocurrencia.replace('.', ':')
                }
            }
        }
        if (Object.keys(replaceDict).length === 0) {
            return this.capitalizeFirstLetter(text[0])
        }
        return this.replaceWord(text[0], replaceDict)
    }

    capitalizeFirstLetter(text){
        let letterRegex = /^[a-z]/
        if(letterRegex.test(text)){
            return text.charAt(0).toUpperCase() + text.slice(1)
        }
        return text
    }

    reversingDict(dictionary) {
        let reversedDict = {}
        for (const [key, value] of Object.entries(dictionary)) {
            reversedDict[value] = key
        }
        return reversedDict
    }

    replaceWord(text, replaceDict) {
        let entrieValues = Object.entries(replaceDict)
        entrieValues.forEach(([key, value]) => {
            let span = `<span class="highlight">${value}</span>`
            text = text.replaceAll(key, span)
        })
        text = this.capitalizeFirstLetter(text)
        return text
    }
}

module.exports = Translator;