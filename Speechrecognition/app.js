const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");


// speech   recognition setup

const speechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();

//sr start
// recognition.onstart = function() {
//     console.log("mic activated");

// };

//sr stop
// recognition.onend = function() {
//     console.log("mic deactivated");
// };

//sr result

recognition.onresult = function(event) {
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;
    console.log(transcript);
}

//sr continous
// recognition.continuous = true;

//event listener
startBtn.addEventListener("click", () => {
    recognition.start()
});

stopBtn.addEventListener("click", () => {
    recognition.stop()
});


startBtn.onclick = async() => {

    const value = input.value
    const res = await fetch("http://localhost:3000/complete", {
        body: JSON.stringify({
            query: value
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        }
    })
    const data = await res.json()
};

function speakThis(transcript) {
    const speech = new SpeechSynthesisUtterance();
    speech.data
};
