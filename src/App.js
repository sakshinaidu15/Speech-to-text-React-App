import React, { useState } from "react";
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from 'react-use-clipboard';

const App = () => {

  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy);
  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: 'en-IN' })

  }
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()

  if (!browserSupportsSpeechRecognition) {
    return null
  }
  return (
    <>
      <div className="container">
        <h1 className="heading">Speech to Text Converter</h1>
        <p className="para">A react hook that converts speech from the microphone to text and make it available to react components.</p>
      </div>
      <div className="content">
        <p onClick={() => setTextToCopy(transcript)}> {transcript}</p>
        <button className="btn" onClick={setCopied}>
          {isCopied ? "Copied" : "Copy to Clipboard"}
        </button>
        <button className="btn" onClick={startListening}>Start Listening</button>
        <button className="btn" onClick={SpeechRecognition.stopListening}>Stop Listening</button>

      </div>

    </>
  )
}
export default App;