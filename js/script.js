function buttonPress() {
    setWords(getLexicon())
}

function getLexicon() {
    const lexiconByVal = {
        "all": allWords,
        "common": answerList,
        "test": testWords
    };
    var radioOptions = document.getElementsByName('lexicon')

    for (i = 0; i < radioOptions.length; i++) {
        if (radioOptions[i].checked) {
            return lexiconByVal[radioOptions[i].value]
        }
    }
    return ["None"]

}

function setWords(words) {
    var table = document.getElementById("words");
    table.innerHTML = "";
    for (index in words) {
        if (newRow(index,words)) {
            var row = table.insertRow()
        }

        var cell = row.insertCell();
        cell.innerHTML = words[index];
    }
}

function newRow(index, words) {
    return index % 15 == 0
}