var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent =
  SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var wordZing = ["bài hát", "mở bài hát", "nghe bài hát"];
var wordMaps = [
  "chỉ đường tới",
  "chỉ đường",
  "đường tới",
  "tới",
  "google maps",
  "bản đồ",
];

var wordYoutube = ["video", "mở video", "xem video", "youtube"];
var wordGoogle = ["google"];
var wordFacebook = ["facebook"];
var wordGoogleDrive = ["google drive"];

var keyWords = [
  { name: wordMaps, link: "https://www.google.com/maps" },
  { name: wordGoogle, link: "https://www.google.com" },
  { name: wordFacebook, link: "https://www.facebook.com" },
  { name: wordYoutube, link: "https://www.youtube.com" },
  { name: wordGoogleDrive, link: "https://drive.google.com" },

  { name: wordZing, link: "https://zingmp3.vn" },
];

var phrasePara = document.querySelector(".phrase");
var resultPara = document.querySelector(".result");
var diagnosticPara = document.querySelector(".output");
var actionPara = document.querySelector(".action");

var testBtn = document.querySelector("button");

function testSpeech() {
  testBtn.disabled = true;
  testBtn.textContent = "Progress";
  actionPara.style.display = "block";
  resultPara.style.display = "none";
  diagnosticPara.style.display = "block";
  // resultPara.style.background = "rgba(0,0,0,0.2)";
  diagnosticPara.textContent = "...diagnostic messages";

  var recognition = new SpeechRecognition();
  recognition.lang = "vi-VN";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function (event) {
    var speechResult = event.results[0][0].transcript.toLowerCase();
    resultPara.style.display = "block";
    // diagnosticPara.style.display = "block";
    resultPara.textContent = `Đang thực hiện: ${speechResult}`;
    setTimeout(function () {
      diagnosticPara.textContent = "Speech received: " + speechResult + ".";
      console.log(speechResult);

      var linkSearch = "";
      var findResult = keyWords.find(function (value) {
        if (value.name.length === 1) {
          if (value.name[0] === speechResult) {
            linkSearch = value.link.slice(0);

            return true;
          }
          return false;
        }

        value.name.forEach(function (item) {
          // console.log("item", item);
          if (item === speechResult) {
            linkSearch = value.link.slice(0);
            return true;
          }
          if (speechResult.includes(item)) {
            if (
              speechResult.length ===
              String(speechResult).slice(0, String(speechResult).indexOf(item))
                .length +
                item.length
            ) {
              if (
                String(speechResult).slice(
                  0,
                  String(speechResult).indexOf(item)
                ).length +
                  item.length >
                item.length
              ) {
                return false;
              }
              linkSearch = value.link.slice(0);
            } else {
              var queryString = "";
              if (value.link === "https://www.google.com/maps") {
                console.log(
                  "speechResult",
                  String(speechResult).slice(String(speechResult).indexOf(item))
                );
                queryString =
                  "/search/" +
                  String(speechResult)
                    .slice(String(speechResult).indexOf(item))
                    .replace(`${item}`, "");
              } else if (value.link === "https://zingmp3.vn") {
                queryString =
                  "/tim-kiem/tat-ca?q=" +
                  String(speechResult)
                    .slice(String(speechResult).indexOf(item))
                    .replace(`${item}`, "");
              } else if (value.link === "https://www.youtube.com") {
                queryString =
                  "/results?search_query=" +
                  String(speechResult)
                    .slice(String(speechResult).indexOf(item))
                    .replace(`${item}`, "");
                console.log("bbbbbbbbbbb");
              }
              linkSearch = value.link.slice(0) + queryString;
              console.log(linkSearch);
            }
          }
        });
        console.log(linkSearch);
        return linkSearch;
      });
      if (findResult) {
        //   console.log(findResult);
        resultPara.textContent = "Đã thực hiện xong!";
        window.open(`${linkSearch}`, "_blank");
        // resultPara.style.background = "lime";
      } else {
        resultPara.textContent = "Không thực hiện được yêu cầu";
        // resultPara.style.background = "red";
      }

      console.log("Confidence: " + event.results[0][0].confidence);
    }, 1000);
  };

  recognition.onspeechend = function () {
    recognition.stop();
    testBtn.disabled = false;
    testBtn.textContent = "Bấm lại để nói";
  };

  recognition.onaudiostart = function (event) {
    //Fired when the user agent has started to capture audio.
    console.log("SpeechRecognition.onaudiostart");
    actionPara.textContent = "Hãy nói điều bạn muốn";
  };

  recognition.onsoundend = function (event) {
    //Fired when any sound — recognisable speech or not — has stopped being detected.
    console.log("SpeechRecognition.onsoundend");
    actionPara.textContent = "Đã nói xong. Hy vọng kết quả như ý bạn";
  };
}

testBtn.addEventListener("click", testSpeech);
