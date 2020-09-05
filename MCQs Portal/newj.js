(function(){
    function buildQuiz(){
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // For HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
         let perCent = (numCorrect/myQuestions.length)*100;
      // show number of correct answers out of total
      resultsContainer.innerHTML = `Number of Right Answers: ${numCorrect} out of ${myQuestions.length} `;

      // Condition for pass or fail 
      if (perCent>=70)
      {  
        infoVar.innerHTML=`Result :<span style="font-weight: bold; font-size: 25px; color : #00ff80;"> Pass </span> (${perCent} %)<br> Great Work!`;
      }
      else{
        infoVar.innerHTML=`Result :<span style="font-weight: bold; font-size: 25px; color : red;"> Fail </span>(${perCent} %)<br>You need to work hard!`;
      }
      quizAnalysis.innerHTML=`<span style="font-weight: bold; font-size: 25px;"> Analysis </span>`;
     // Question Analysis
     var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "light2", 
      title:{
        text: "Question Review"
      },
      axisY: {
        title: "Number Of Question"
      },
      data: [{        
        type: "column",  
        showInLegend: true, 
        legendMarkerColor: "grey",
        dataPoints: [      
          { y:2, label: "Easy" },
          { y:1,  label: "Hard" },
          { y: 2,  label: "Medium" },
        ]
      }]
    });
    chart.render();
 
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizAnalysis = document.getElementById('Analysis');
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const infoVar = document.getElementById('info');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "What is not a feature of Interface?",
        answers: {
            a:"Interface",
            b: "Abstract class",
            c: "Support OOPs concept",
            d: "None of the above",
        },
        correctAnswer: "b"
      },
      {
        question: "TyperScript is type of java Script?",
        answers: {
            a: "Yes",
            b: "No",
            c: "Cann't say",
        },
        correctAnswer: "a"
      },
      {
        question: "1 minute and 30 sec is",
        answers: {
          a: "1.3 minute",
          b: "1.30 minute",
          c: "Both option is true",
          d: "1.5 minute",
        },
        correctAnswer: "d"
      },
      {
        question: "2020 is leap year?",
        answers: {
            a: "True",
            b: "False",
            c: "Cann't say",
        },
        correctAnswer: "a"
      },
      {
        question: "If a Indian time is 1:00 PM then what will be time in Redmond?",
        answers: {
            a: "1:00 PM",
            b: "12:30 PM",
            c: "1:30 PM",
            d: "None of the above",
        },
        correctAnswer: "b"
      }
      
    ];
  
    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  