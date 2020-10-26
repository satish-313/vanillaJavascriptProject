const quizData = [
    {
        question: 'how old is node js',
        a:'10',
        b:'12',
        c:'09',
        d:'none of above',
        ans:'a'
    },
    {
        question:'what is most used programing language in 2020',
        a:'javascript',
        b:'java',
        c:'python',
        d:'c++',
        ans:'a'
    },
    {
        question:'who is prime minister of india in 2020',
        a:'rahul gandhi',
        b:'amit shah',
        c:'narendra modi',
        d:'k l rahul',
        ans:'c',
    },
    {
        question:'latest ut of india in 2020',
        a:'jammu',
        b:'ladakh',
        c:'odisha',
        d:'assam',
        ans:'b'
    }
]

const questionel = document.getElementById('question')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const sumbitbtn = document.getElementById('sumbit');

let currentquestion= 0;
let score = 0

loadQuiz();

function loadQuiz(){
    const currentquiz = quizData[currentquestion];
    questionel.innerText = currentquiz.question;
    a_text.innerText = currentquiz.a;
    b_text.innerText = currentquiz.b;
    c_text.innerText = currentquiz.c;
    d_text.innerText = currentquiz.d;
}

function getSelected(){
    const answerel = document.querySelectorAll('.answer');
    let answer = undefined;
    answerel.forEach((answerel) => {
        if (answerel.checked){
            answer = answerel.id;
        }
    });
    return answer;
}

function deselected(){
    const answerel = document.querySelectorAll('.answer');
    answerel.forEach((answerel) => {
        answerel.checked = false;
    })
}

sumbitbtn.addEventListener('click', () =>{
    const answer = getSelected();
    if (answer){
        if(answer === quizData[currentquestion].ans){
            score++;
        }

        currentquestion++;
        if (currentquestion < quizData.length){
            deselected();
            loadQuiz();
        }else{
            alert('You finished the test \n score : '+score)
            currentquestion = 0;
            score = 0;
            deselected();
            loadQuiz();
        }
    }
    else{
        currentquestion++;
        if (currentquestion<quizData.length){
            deselected();
            loadQuiz();
        }else{
            alert('You finished the test \n score : '+score)
            currentquestion = 0;
            score = 0;
            deselected();
            loadQuiz();
        }
    }
});