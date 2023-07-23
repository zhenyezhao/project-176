let words=[
  {
    "inputs":5,
    "category":"sports",
    "word":"chess"
  },
    { 
        "inputs":6,
        "category":"europe",
        "word":"france" 
    },
    {
      "inputs":7,
      "category":"jobs",
      "word":"builder"  
    }  
]
var gameOver=false
$(".clickable").click(function(){
    var correctGuess=false;


    let id=$(this.attr(id))

    var life=pardelnt($((".life").text()))

    for (var i=0;i<randomWord.word.length; i++){
        if (randomWord.word.charAt(i).toLowerCase()==id){
            if(life>0&&($(".fillBlanks").eq(i).html)=='.'||$(".fillBlanks").eq(i).html==(id)){
                ($(".fillBlanks").eq(i).html(id)),
                correctGuess=true;

                if ($("#blanks").text()===randomWord.word.toLowerCase()){
                    $('result').text("you win")
                    correctGuess= true;
                    gameOver= true;
                }
            }
        }
    }


})
