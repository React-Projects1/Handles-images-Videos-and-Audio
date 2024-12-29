import { useState } from 'react';
import './App.css';

function App() {

  const [imgSrc ,setImgSrc] = useState('')
  const [videoSrc ,setVideoSrc] = useState('')
  const [audioSrc ,setAudioSrc] = useState('')

  const handelImage = (e)=>{
    const file = e.target.files[0]

    if (file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (e)=>{
        setImgSrc(e.target.result)
      }
    }else{
      alert('please enter Image')
    }
  }

  const handelVideo = (e)=>{
    const file = e.target.files[0]

    if (file.type.startsWith('video/')) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (e)=>{
        setVideoSrc(e.target.result)
      }
    }else{
      alert('please enter Video')
    }
  }

  const handelAudio = (e)=>{
    const file = e.target.files[0]

    if (file.type.startsWith('audio/')) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (e)=>{
        setAudioSrc(e.target.result)
      }
    }else{
      alert('please enter Image')
    }
  }

  return (
    <div className="App">

      {/* Task 1 */}
      <div class="task1-image">
        <div class="container-input">
          <input type="file" id="input-image" onChange={handelImage} />
          <label for="input-image" class="custom-input-image">Select Image</label>
        </div>
        <div class="contanier-image">
          <img src={imgSrc} alt="photo" id="img" />
        </div>
      </div>

      {/* Task 2 */}
      <div class="task2-video">
        <div class="container-input">
          <input type="file" id="input-video" onChange={handelVideo} />
          <label for="input-video" class="custom-input-video">Select Video</label>
        </div>

        <div class="contanier-video">
          <video src={videoSrc} id="video" controls autoplay></video>
        </div>
      </div>

      {/* Task 3 */}
      <div class="task3-audio">
        <div class="container-input">
          <input type="file" id="input-audio" onChange={handelAudio} />
          <label for="input-audio" class="custom-input-audio">Select Audio</label>
        </div>

        <div class="contanier-audio">
          <audio src={audioSrc} id="audio" controls autoplay></audio>
        </div>
      </div>

    </div>
  );
}

export default App;
