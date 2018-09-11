correctAnswer=0;
var datos ={
     questions:["On which TV show appeared for the first time Ariadna Grande?",
     'What is the name of the high school that Ryan, Marissa, Seth, and Summer attended on “The O.C.”?',
     "Who wasn’t a 2000s Pepsi girl?",
     "Who did Joey Potter end up with at the end of “Dawson’s Creek”?",
     "Which instrument did Ted steal for Robin in the first episode and appears in Robin’s apartment for the rest of the series?",
     "Barney, Ted, and Marshall all worked for GNB at some point. What does GNB stand for?",
     "What were the poison Berries that Katnis and Peeta were going to consume, thus making no winner in the Hunger Games",
     "What do Ron and Hermione use to destroy Helga Hufflepuff's cup?",
    "Who participated in the battle of Isengard?",
    "What were Anakin Skywalker's last words in 'Return of the Jedi'?",
    "Walt’s pre-Heisenberg vehicle, the one he runs over the gangsters in, is a"],
     answers:["Hannah Montana","iCarly", "1Victorious", "Disney Club",
      "1Harbor School","Beverly High","Bayview School","Orange High",
      "Britney Spears","Beyonce","Pink","1Avril Lavigne",
      "Dawson","Charlie","1Pacey","Jack",
        "Trumpet","Tuba","1French Horn","Clarinet",
        "Gigantic National Bank","Global Nutriotional Bank","Grand National Bands","Goliath National Bank",
        "Redoul","Nightshade","Nightblock","Oleander",
        "1A basilik fang","The sword of gryffindor","Fiendfyre","The killing curse",
        "Saurumon's forces versus King Theoden Rohrrimn", "1Saurumon's forces versus the Ents","Orcs versus Galadhrim of Lothlorien", "Sauron forces versus Gondor forces",
        "1You were right about me, tell your sister you were right","I'm sorry","May the force be with you","You are the last jedi, the force runs strong in you, pass on.. what you have learned",
        "Chevy Citation","Ford Explorer","Nissan Cube","1Pontiac Aztek"],
     results:[1,0,3,2,2,3,2,0,1,0,3],
     fillquestion:function(i){
       i=10-i;
       $(".question").html("<h2>"+this.questions[i]+"</h2>");
       $(".answer1").html("<h3>"+this.answers[i*4+0]+"</h3>");
       
       $(".answer2").html("<h3>"+this.answers[i*4+1]+"</h3>");
       
       $(".answer3").html("<h3>"+this.answers[i*4+2]+"</h3>");
       
       $(".answer4").html("<h3>"+this.answers[i*4+3]+"</h3>");
       correctAnswer=this.results[i];
     }
 }
 
 var trivia={
    stage:0,
    number : 5,
    q:10,
    results:[],
    good:0,
    bad:0,
    what:10,
    correct: function(c){
      debugger;
      if (c===correctAnswer){
         this.good++;
         this.what--;
      }
      else {
         this.bad++;
         this.what--;
      }
    },
    start: function(){
      debugger;
       if (this.stage===0){
         $(".question").html('<button type="button" id="start" class="btn btn-outline-secondary">  START  </button>');
       }
    },
    runtimer: function(){
      this.intervalId = setInterval(this.decrement, 1000);
    
    },        
    run:function(){
      $(".question").html("");

      trivia.runtimer();
      trivia.stage=1;
    },  
    
     decrement: function() {
      
      trivia.number--;
      debugger;
      if (trivia.q>0){
            if (trivia.number>0){
            $("#time-remaining").html("<h2>" + trivia.number + "</h2>");
            }
            else {
              $("#time-remaining").html("<h2>" + trivia.number + "</h2>");
              trivia.number=5;
              datos.fillquestion(trivia.q);
              trivia.q--;
            }
     }
      else{
            trivia.q=10;
            clearInterval(trivia.intervalId);
            $(".answer1").html("<h3> Correct answers : "+this.good+"</h3>");
            $(".answer2").html("<h3> Incorrect answers : "+this.bad+"</h3>");   
            $(".answer3").html("<h3> Unanswered : "+this.what+"</h3>");
            alert("juego terminado");
          }
      
    },
    intervalId:null
     };

 
 $(".question").on("click", trivia.run());
 $(".answer1").on("click",trivia.correct(0));
 $(".answer2").on("click",trivia.correct(1));
 $(".answer3").on("click",trivia.correct(2));
 $(".answer4").on("click",trivia.correct(3));
trivia.start();