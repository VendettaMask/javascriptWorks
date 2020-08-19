let questions;
let questionCount = 0;
let currentQuestion = 0;
let swarper = document.querySelector('.swarper')
let questionTitle = document.querySelector('.title')
let answerElement = document.querySelector('.answers')
let submitBtn = document.querySelector('#submit_btn')
let nextBtn = document.querySelector('#next_btn')
let score = 0
function getQuestions(){
    let request = new XMLHttpRequest();
    request.onload = function () {
        if(this.readyState == 4 && this.status == 200){
            questions = JSON.parse(this.responseText).questions;
            questionCount = questions.length;
            currentQuestion = 0;
        }
    }
    request.open('GET', 'questions.json',false);
    request.send();
}
function showQuestions(question){
    // this.questions[currentQuestion] = questions[currentQuestion]
    questionTitle.innerHTML = ''
    answerElement.innerHTML = ''
    let title = document.createTextNode(question.title)
    // console.log(title);
    questionTitle.appendChild(title);
    // console.log(question.answers); 
    question.answers.forEach(answer => {
        let label = document.createElement("label");
        let answer_input = document.createElement("input");
        answer_input.setAttribute("type", "radio");
		answer_input.setAttribute("name", "answer");
		answer_input.setAttribute("value", answer.id);
		answer_input.classList.add("answer");

		let answer_title = document.createTextNode(answer.answer);
		label.appendChild(answer_input);
		label.appendChild(answer_title);

		answerElement.appendChild(label);
    });
}
submitBtn.addEventListener('click',function(){
    // if(currentQuestion == questionCount){
    //     submitBtn.classList.add('hide')
    //     swarper.innerHTML=`你的分数是 : ${score} / ${questionCount} 分` 
    //     return
    // }
    
    let currentAnswers = document.querySelectorAll('.answer')
    let rightAnswer = questions[currentQuestion].correct_answer_id
    for (let index = 0; index < currentAnswers.length; index++) {
        const currentAnswer = currentAnswers[index];
        if(currentAnswer.checked && currentAnswer.value == rightAnswer){
            console.log('right!');
            currentAnswer.parentNode.classList.add('correct');
            score++
        }else if(currentAnswer.checked && currentAnswer.value != rightAnswer){
            console.log('wrong!');
            currentAnswer.parentNode.classList.add('incorrect');
        }}
    currentQuestion++
    setTimeout(()=>showQuestions(questions[currentQuestion]),300)
    if(currentQuestion == questionCount){
        submitBtn.classList.add('hide')
        swarper.innerHTML=`你的分数是 : ${score} / ${questionCount} 分` 
        return
    }
    
    // showQuestions(questions[currentQuestion]);
    // nextBtn.classList.remove('hide')
    // submitBtn.classList.add('hide')
})
/*
nextBtn.addEventListener('click',function () {
    if(currentQuestion == questionCount){
        submitBtn.classList.add('hide')
        console.log('你已经过关了')
        swarper.innerHTML=`你的分数是 : ${score} / ${questionCount} 分` 
        return
    }else if(currentQuestion != questionCount){ 
        submitBtn.classList.remove('hide')
        nextBtn.classList.add('hide')
        
    }
    showQuestions(questions[currentQuestion]);
})*/
getQuestions();
showQuestions(questions[currentQuestion]);
