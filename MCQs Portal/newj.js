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
      // remove current quiz
      // Change Style
      
      quizContainer.style.display='none';
      submitButton.style.display='none';
     // for time 
      document.getElementById('display_div_id').style.display='none';
      
      document.getElementById('previous').style.display='none';
      document.getElementById('chartContainer').style.transform='translate(400px,-170px)';
      resultsContainer.style.transform=`translate(10px,-250px)`;
      infoVar.style.transform=`translate(10px,-230px)`;
      quizAnalysis.style.transform=`translate(10px,-180px)`;
      


         let perCent = (numCorrect/myQuestions.length)*100;
      // show number of correct answers out of total
      resultsContainer.innerHTML = `<span style="font-weight:bold;">Number of Right Answers :</span> ${numCorrect} out of ${myQuestions.length}`;
      
      // Condition for pass or fail 
      if (perCent>=70)
      {  
      
        infoVar.innerHTML=`<span style="font-weight:bold;">Result :</span><span style="font-weight: bold; font-size: 25px; color : #00ff80;"> Pass </span> (${perCent} %)<br> Great Work!`;
      }
      else{
        
        infoVar.innerHTML=`<span style="font-weight:bold;">Result :</span><span style="font-weight: bold; font-size: 25px; color : red;"> Fail </span>(${perCent} %)<br>You need to work hard!`;
      }
      quizAnalysis.innerHTML=`<span style="font-weight: bold; font-size: 25px;"> Analysis </span>`;
     // Question Analysis
     var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "light1",
      title:{
        text: "Result Analysis"
      },
      axisY: {
        title: "Number Of Question"
      },
      data: [{        
        type: "column",  
        showInLegend: true, 
        legendMarkerColor: "grey",
        dataPoints: [      
          { y:numCorrect, label: "Right Answers" },
          { y:(myQuestions.length-numCorrect),  label: "Wrong Answers" },
          {  },
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
      },
      {
        question: "Which transmission allows data to travel in both directions but only one direction at a time?",
        answers: {
            a: "Simplex",
            b: "Full duplex",
            c: "Half duplex",
            d: "Reverse",
        },
        correctAnswer: "b"
      },
      {
        question: "A small high speed memory inside CPU is",
        answers: {
            a: "RAM",
            b: "ROM",
            c: "Cache",
            d: "Register",
        },
        correctAnswer: "d"
      },
      {
        question: " Another name for free software is?",
        answers: {
            a: "Encrypted Software",
            b: "Copy Protected Software",
            c: "Shareware",
            d: "Public Domain Software",
        },
        correctAnswer: "d"
      },
      {
        question: "Which of the following is used to input the entry and give the result in a variable in a procedure?",
        answers: {
            a: "Put and get",
            b: "Get and put",
            c: "Out and In",
            d: "In and out",
        },
        correctAnswer: "d"
      },
      {
        question: "What is the term used to indicate the variable and constants of a class?",
        answers: {
            a: "Data members",
            b: "Variables of class",
            c: "Data characters",
            d: "Constants",
        },
        correctAnswer: "a"
      },
      {
        question: "Data members ________________ (C++)",
        answers: {
            a: "Can be initialized with declaration in classes",
            b: "Can be initialized only with help of constructors",
            c: "Can be initialized either in declaration or by constructor",
            d: "Can’t be initialized",
        },
        correctAnswer: "b"
      },
      {
        question: "What should be done for data member to be of user defined structure type?",
        answers: {
            a: "The structure must have been defined before class.",
            b: "The structure must have been defined after the class definition",
            c: "The structure must be predefined",
            d: "The structure type data members can’t be used",
        },
        correctAnswer: "a"
      },
      {
        question: "How many data members can a class contain?",
        answers: {
            a: "27",
            b: "255",
            c: "1024",
            d: "As many as required",
        },
        correctAnswer: "d"
      },
      {
        question: "How to access data members of a class?",
        answers: {
            a: "Dot operator",
            b: "Arrow operator",
            c: "1024",
            d: "As many as required",
        },
        correctAnswer: "d"
      },
      {
        question: "Which among the following is true for use of setter() and getter() function?",
        answers: {
            a: "Considered best for manipulating data values",
            b: "Considered the only proper way to manipulate the values",
            c: "Considered specially for private members manipulation",
            d: "Considered a red flag, and not recommended for large scale use",
        },
        correctAnswer: "d"
      },
      {
        question: "A class can have self-referential data members.",
        answers: {
            a: "True",
            b: "False",
            
        },
        correctAnswer: "b"
      },
      {
        question: "The static member functions can only use",
        answers: {
            a: "Static data members",
            b: "Private data members",
            c: "Protected data members",
            d: "Constant data members",
        },
        correctAnswer: "a"
      },
      {
        question: "Which data members can be inherited but are private to a class?",
        answers: {
            a: "Private",
            b: "Protected",
            c: "Protected and Static",
            d: "Privately inherited",
        },
        correctAnswer: "b"
      },
      {
        question: "The arguments passed to member functions by reference are considered as data members of class.",
        answers: {
            a: "True",
            b: "False",
            
        },
        correctAnswer: "b"
      },
      {
        question: "Which among the following is not allowed for data member declaration?",
        answers: {
            a: "int a;",
            b: "static int a;",
            c: "abstract a;",
            d: "Boolean a;",
        },
        correctAnswer: "c"
      },
      {
        question: "How many types of member functions are generally there in C++",
        answers: {
            a: "2",
            b: "3",
            c: "4",
            d: "5",
        },
        correctAnswer: "d"
      },
      {
        question: "How can a static member function be called in the main function?",
        answers: {
            a: "Using dot operator",
            b: "Using arrow operator",
            c: "Using dot or arrow operator",
            d: "Using dot, arrow or using scope resolution operator with class name",
        },
        correctAnswer: "d"
      },
      {
        question: "What happens if non static members are used in static member function?",
        answers: {
            a: "Compile time error",
            b: "Runtime error",
            c: "Executes fine",
            d: "Executes if that member function is not used",
        },
        correctAnswer: "a"
      },
      {
        question: "Member functions of a generic class are ",
        answers: {
            a: "Not generic",
            b: "Automatically generic",
            c: "To be made generic explicitly",
            d: "Given default type as double",
        },
        correctAnswer: "b"
      },
      {
        question: "Which member function doesn’t require any return type? ",
        answers: {
            a: "Static",
            b: "Constructor",
            c: "Const",
            d: "Constructor and destructor",
        },
        correctAnswer: "d"
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
  