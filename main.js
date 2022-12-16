var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    if(Content =="take my selfie")
    {
        console.log("taking selfie --- ");
        var synth = window.speechSynthesis;
        speak_data = "Taking your Selfie in 5 seconds";  
       // speak();
       var utterThis = new SpeechSynthesisUtterance(speak_data);
       synth.speak(utterThis);
       Webcam.attach('#camera');
    }
speak();
}
function speak(){
      var synth = window.speechSynthesis;
     // speak_data = "Taking your Selfie in 5 seconds";
    speak_data = document.getElementById("textbox").value;
      var utterThis = new SpeechSynthesisUtterance(speak_data);
      synth.speak(utterThis);
      
}
Webcam.set({
    width: 360,
    height: 240,
    image_format:'png',
    png_quality: 90
 });
 camera = document.getElementById("camera");
 function take_snapshort()
 {
     Webcam.snap(function(data_uri) {
         document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
     });
    }