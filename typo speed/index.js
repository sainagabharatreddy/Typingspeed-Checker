const typing_ground = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const score = document.querySelector('#score');
const show_sentence = document.querySelector('#showSentence');

let startTime, endTime, totalTimeTaken;


const sentences = ['A woman finds a pot of treasure on the road while she is returning from work.',
    'Delighted  with her luck, she decides to keep it. As she is taking it home, it keeps changing.',
    'The old lady in this story is one of the most cheerful characters anyone can encounter in English fiction.',
'What Is Great About Humans have been living without cities or villages for most of history.',
'Until one day he sees a girl selling fruit and he is unable to forget her.',
'This story is about our attachment to strangers and why we cherish them even though we do not meet them ever again.',
'The robots and the machines continue to function and serve human beings who have long ago died. ',
'But in this story, we see that nature plays a supporting role and the machines are the ones who have taken its place']



const calculateTypingSpeed = (time_taken) => {
    let  totalWords = typing_ground.value.trim();
    let actualWords = totalWords === '' ? 0 : totalWords.split(" ").length;

    if(actualWords !== 0) {
        let typing_speed  =  (actualWords / time_taken) * 60;
        typing_speed = Math.round(typing_speed);
        score.innerHTML = `Your typing speed is ${typing_speed} words per minutes & you wrote ${actualWords} words & time taken ${time_taken} sec`;
    }else{
        score.innerHTML = `Your typing speed is 0 words per minutes & time taken ${time_taken} sec`;
    }
}


const endTypingTest = () => {
    btn.innerText = "Start";

    let date = new Date();
    endTime = date.getTime();

    totalTimeTaken = (endTime -startTime) / 1000;


    calculateTypingSpeed(totalTimeTaken);

    show_sentence.innerHTML = "";
    typing_ground.value = "";
}



const startTyping = () => {
    let randomNumber = Math.floor(Math.random() * sentences.length);

    show_sentence.innerHTML = sentences[randomNumber];

    let date = new Date();
    startTime = date.getTime();

    btn.innerText = "Done";
}





btn.addEventListener('click', () => {
    switch (btn.innerText.toLowerCase()) {
        case "start":
            typing_ground.removeAttribute('disabled');
            startTyping();
            break;

        case "done":
            typing_ground.setAttribute('disabled' , 'true');
            endTypingTest();
            break;
    }
})