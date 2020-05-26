import React, { Component } from 'react';

import './App.css';
import {Howl} from 'howler';
/* import bass from './sounds/bass.mp3'
import crash from './sounds/crash.mp3'
import snare from './sounds/snare.mp3'
 */

const keySounds = [
  
  {key: 'q', clip: 'https://www.fesliyanstudios.com/play-mp3/6703', ref:'hi' },
  {key: 'w', clip: 'https://www.fesliyanstudios.com/play-mp3/6780', ref:'hat'},
  {key: 'e', clip: 'https://www.fesliyanstudios.com/play-mp3/6773', ref:'snare'},
  {key: 'a', clip: 'https://www.fesliyanstudios.com/play-mp3/6659', ref:'bass' },
  {key: 's', clip: 'https://www.fesliyanstudios.com/play-mp3/6735', ref:'bell' },
  {key: 'd', clip: 'https://www.fesliyanstudios.com/play-mp3/6741', ref: 'ride' },
  {key: 'z', clip: 'http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Foxy%2070s%20Guitar%20Hit-1455-Free-Loops.com.mp3', ref: 'delay' },
  {key: 'x', clip: 'http://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/39-maracas%20a.wav', ref: 'maracas'},
  {key: 'c', clip: 'http://www.chiptape.com/chiptape/sounds/medium/MidwayGauntletG010.WAV' ,ref: 'piano'}
];


class App extends Component {

  SoundPlay = (src)=>{
    const sound = new Howl({
      src,
      html5: true
    });
    sound.play();

  }

  RenderButtonAndSound(){
    return keySounds.map((sound,index)=>{
     
      return (
        <button key={index} id={sound.ref}>
        {sound.key.toUpperCase()}
        </button>
      )
    })
  }


  look(e){
    
    keySounds.map((sound)=>{
      if(e.key===sound.key){
        this.SoundPlay(sound.clip)
        document.getElementById(sound.ref).style.opacity=0.6
        setTimeout(() => {
          document.getElementById(sound.ref).style.opacity=1
        }, 200);
      }
      
    })
  }

  render(){
  {document.onkeydown = this.look.bind(this)}
  return (
    <div className="App">
      <h2>Hello everyBody</h2>
      {this.RenderButtonAndSound()}   
    </div>
  );
}


}

export default App;
