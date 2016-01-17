// Function to create image array
var addImage = function(src, altText) {
  var img   = new Image();
  img.src   = src;
  img.alt   = altText;

  return img;
};

// Function to create audio array
var addSound = function(src, altText) {
  var sound   = new Audio();
  sound.src   = src;
  sound.alt   = altText;

  return sound;
};

// Array of images
var chordsToShow = [];
var chordsNoName = [];
var chordsDefault = [];
var chordQuestion = [];

// Array of chords names
var chordNames = ["A", "Am", "A7", "B", "Bm", "B7", "C", "Cm", "C7", "D", "Dm", "D7", "E", "Em", "E7", "F", "Fm", "F7", "G", "Gm"];

// Array of sounds
var chordsAudio = [];

// Add all image to chords default array
chordsDefault.push(addImage("img/musicnotes.png", "musicnotes"));
chordsDefault.push(addImage("img/musicnotes.png", "musicnotes"));
chordsDefault.push(addImage("img/musicnotes.png", "musicnotes"));
chordsDefault.push(addImage("img/musicnotes.png", "musicnotes"));
chordsDefault.push(addImage("img/musicnotes.png", "musicnotes"));

// Add image to chords question array
chordQuestion.push(addImage("img/question.jpg", "question"));

// Add all images to chords to show array
chordsToShow.push(addImage("img/A.png", "A"));
chordsToShow.push(addImage("img/Am.png", "Am"));
chordsToShow.push(addImage("img/A7.png", "A7"));
chordsToShow.push(addImage("img/B.png", "B"));
chordsToShow.push(addImage("img/Bm.png", "Bm"));
chordsToShow.push(addImage("img/B7.png", "B7"));
chordsToShow.push(addImage("img/C.png", "C"));
chordsToShow.push(addImage("img/Cm.png", "Cm"));
chordsToShow.push(addImage("img/C7.png", "C7"));
chordsToShow.push(addImage("img/D.png", "D"));
chordsToShow.push(addImage("img/Dm.png", "Dm"));
chordsToShow.push(addImage("img/D7.png", "D7"));
chordsToShow.push(addImage("img/E.png", "E"));
chordsToShow.push(addImage("img/Em.png", "Em"));
chordsToShow.push(addImage("img/E7.png", "E7"));
chordsToShow.push(addImage("img/F.png", "F"));
chordsToShow.push(addImage("img/Fm.png", "Fm"));
chordsToShow.push(addImage("img/F7.png", "F7"));
chordsToShow.push(addImage("img/G.png", "G"));
chordsToShow.push(addImage("img/Gm.png", "Gm"));

// Add all images to chords to guess array
chordsNoName.push(addImage("img/hA.png", "hA"));
chordsNoName.push(addImage("img/hAm.png", "hAm"));
chordsNoName.push(addImage("img/hA7.png", "h7"));
chordsNoName.push(addImage("img/hB.png", "hB"));
chordsNoName.push(addImage("img/hBm.png", "hBm"));
chordsNoName.push(addImage("img/hB7.png", "hB7"));
chordsNoName.push(addImage("img/hC.png", "hC"));
chordsNoName.push(addImage("img/hCm.png", "hCm"));
chordsNoName.push(addImage("img/hC7.png", "hC7"));
chordsNoName.push(addImage("img/hD.png", "hD"));
chordsNoName.push(addImage("img/hDm.png", "hDm"));
chordsNoName.push(addImage("img/hD7.png", "hD7"));
chordsNoName.push(addImage("img/hE.png", "hE"));
chordsNoName.push(addImage("img/hEm.png", "hEm"));
chordsNoName.push(addImage("img/hE7.png", "hE7"));
chordsNoName.push(addImage("img/hF.png", "hF"));
chordsNoName.push(addImage("img/hFm.png", "hFm"));
chordsNoName.push(addImage("img/hF7.png", "hF7"));
chordsNoName.push(addImage("img/hG.png", "hG"));
chordsNoName.push(addImage("img/hGm.png", "hGm"));

// Add all audio files to audio array
chordsAudio.push(addSound("audio/A.mp3", "A"));
chordsAudio.push(addSound("audio/Am.mp3", "Am"));
chordsAudio.push(addSound("audio/A7.mp3", "7"));
chordsAudio.push(addSound("audio/B.mp3", "B"));
chordsAudio.push(addSound("audio/Bm.mp3", "Bm"));
chordsAudio.push(addSound("audio/B7.mp3", "B7"));
chordsAudio.push(addSound("audio/C.mp3", "C"));
chordsAudio.push(addSound("audio/Cm.mp3", "Cm"));
chordsAudio.push(addSound("audio/C7.mp3", "C7"));
chordsAudio.push(addSound("audio/D.mp3", "D"));
chordsAudio.push(addSound("audio/Dm.mp3", "Dm"));
chordsAudio.push(addSound("audio/D7.mp3", "D7"));
chordsAudio.push(addSound("audio/E.mp3", "E"));
chordsAudio.push(addSound("audio/Em.mp3", "Em"));
chordsAudio.push(addSound("audio/E7.mp3", "E7"));
chordsAudio.push(addSound("audio/F.mp3", "F"));
chordsAudio.push(addSound("audio/Fm.mp3", "Fm"));
chordsAudio.push(addSound("audio/F7.mp3", "F7"));
chordsAudio.push(addSound("audio/G.mp3", "G"));
chordsAudio.push(addSound("audio/Gm.mp3", "Gm"));

var infoDiv = document.getElementById('infoDiv');
infoDiv.style.visibility='hidden';

// Declare all buttons
var showButton = document.getElementById('showButton');
var startButton = document.getElementById('startButton');
var startOverButton = document.getElementById('startOverButton');

// Declare all spans
var spanCorrect = document.getElementById('spanCorrect');
var spanWrong = document.getElementById('spanWrong');

// Declare all li
var chords = document.querySelectorAll(".chords-a");

// Declare chord to guess
var chordToGuess = document.getElementById('chordToGuess');
var chordToGuessLink = document.getElementById('chordToGuessLink');

var x;
b = 0;
roundCount = 1;

showButton.onclick = function() {
$("ul[id*=chordsPanel-ul] li").unbind();

  infoDiv.style.visibility='visible';

  var i;

  for (i = 0; i < chords.length; i++) {
    chords[i].innerHTML = "";
    chordsToShow[i].className = "img-rounded";
    chords[i].appendChild(chordsToShow[i+b]);
    chords[i].appendChild(chordsAudio[i+b]);
  }

  $("ul[id*=chordsPanel-ul] li").on('click',function (event) {
    event.stopImmediatePropagation();
    var a = $(this).index();
    chordsAudio[a+b].play();
  });
};


correctCount = 0;
wrongCount = 0;


spanRound.innerHTML = roundCount;
spanCorrect.innerHTML = correctCount;
spanWrong.innerHTML = wrongCount;

startButton.onclick = function() {

  $("ul[id*=chordsPanel-ul] li").unbind();

  showButton.style.visibility='hidden';

  for (i = 0; i < chords.length; i++) {
    chords[i].innerHTML = "";
    chordsDefault[i].className = "img-rounded";
    chords[i].innerHTML = chordNames[i+b];
  }

  changesGuessChord();

};

function changesGuessChord() {

  startButton.style.visibility='hidden';

  checkX = x;

  x = Math.floor((Math.random() * 5));

  if (x == checkX) {
    x = Math.floor((Math.random() * 5));
  }
  else {
    chordsNoName[x+b].className = "img-rounded";
    chordToGuessLink.innerHTML = "";
    chordToGuessLink.appendChild(chordsNoName[x+b]);

    $("#chordToGuessLink").on('click',function (event) {
      event.stopImmediatePropagation();
      chordsAudio[x+b].play();
    });


    $("ul[id*=chordsPanel-ul] li").on('click',function (event) {
      event.stopImmediatePropagation();

      var y = $(this).index();

        if ((y+b) == (x+b)) {
          correctCount += 1;
          spanCorrect.innerHTML = correctCount;
        }
        else {
          wrongCount += 1;
          spanWrong.innerHTML = wrongCount;
        }

        if (correctCount >= 5) {

          infoDiv.style.visibility='hidden';

          roundCount = roundCount + 1;
          if (roundCount < 5) {
            alert("Congratulations! You finished this Round.");
            spanRound.innerHTML = roundCount;
            $("ul[id*=chordsPanel-ul] li").unbind();
          }
          else {
            alert("Congratulations! You are a Chords Master! Welcome back and play again.");
            window.location.reload();
          }

          showButton.style.visibility='visible';
          startButton.style.visibility='visible';

          for (i = 0; i < chords.length; i++) {
            chords[i].innerHTML = "";
            chordsDefault[i].className = "img-rounded";
            chords[i].appendChild(chordsDefault[i]);
          }

          chordToGuessLink.innerHTML = "";
          chordToGuessLink.appendChild(chordQuestion[0]);

          correctCount = 0;
          wrongCount = 0;
          spanCorrect.innerHTML = correctCount;
          spanWrong.innerHTML = wrongCount;

          b = b + 5;

        }
        else if (wrongCount >= 2) {
          alert("Sorry, too many wrongs! Start over from Round 1.");
          window.location.reload();
        }
        else {
        x = Math.floor((Math.random() * 5));
        chordsNoName[x+b].className = "img-rounded";
        chordToGuessLink.innerHTML = "";
        chordToGuessLink.appendChild(chordsNoName[x+b]);
        }
    });

  }

};

startOverButton.onclick = function() {
  window.location.reload();
};
