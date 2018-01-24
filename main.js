const allPunctuationMarks =  ['.', ',', '!', ':', ';', '/?',
//'...' //needs some consideration
 ];

let punctuationMarks = ['.', ',', '!', ':', ';', '/?' ];


run()

function run(){
    setPunctuationMarksText();
    clearOutput();
}

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
    let punctuationRegex = new RegExp('/' + punctuationMarks.join('|'), 'g');
    return inputText.replace(punctuationRegex, getRandomMark);
}

function getRandomMark(){
    return punctuationMarks[Math.floor(Math.random() * punctuationMarks.length)];
}

function setPunctuationMarksText(){
//    let punctuationMarksCheckboxList = document.getElementById("punctuation_marks_list");
//    for (let mark of allPunctuationMarks){
//        let newMark = document.createElement("div");
//        let checkboxInput = document.createElement('input');
//        checkboxInput.type= 'checkbox';
//        checkboxInput.id = mark;
//        checkboxInput.class = 'mark-checkbox';
//        let label = document.createTextNode(mark);
//        newMark.appendChild(checkboxInput);
//        newMark.appendChild(label);
//
//        punctuationMarksCheckboxList.appendChild(newMark);
//        setCheckboxValue(mark);
    }




//    document.getElementById('punctuation_marks_list').innerText = punctuationMarks.join('');

}
//function getChecked(){
//    let punctuationMarksCheckboxes = document.getElementByClassName('mark-checkbox');
//    let marksToUseList = [];
//    for (const chb in punctuationMarksCheckboxes){
//        if (chb.checked){
//            marksToUseList.push(chb.id);
//        }
//    }
//}
function setCheckboxValue(identifier){
    let checkboxInput = document.getElementById(identifier);
    checkboxInput.checked = punctuationMarks.includes(identifier);
}
function clearOutput(){
    setOutput('');
}