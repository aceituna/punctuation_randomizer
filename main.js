let punctuationMarks = ['.', ',', '!', ':', ';'];

let punctuationRegex = new RegExp('/' + punctuationMarks.join('|'), 'g');

setPunctuationMarksText();

function randomizePunctuation(){
    let inputText = getInput();
    outputText = randomize(inputText);
    setOutput(outputText);
}

function getInput(){
    return document.getElementById('input_text').value;
}

function setOutput(outputText){
    document.getElementById('output_text').value= outputText;
}
function randomize(inputText){
    return inputText.replace(punctuationRegex, getRandomMark);
}

function getRandomMark(){
    return punctuationMarks[Math.floor(Math.random() * punctuationMarks.length)];
}

function setPunctuationMarksText(){
    document.getElementById('punctuation_marks_list').innerText = punctuationMarks.join('');

}