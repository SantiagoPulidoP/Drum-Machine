import React, { Component } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  CustomInput,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "./App.css";
import { Howl, Howler } from "howler";

import hat01 from './localSounds/hat01.wav'
import clap from './localSounds/clap.wav';
import crash from './localSounds/crash.wav'
import cymbal from './localSounds/cymbal.wav'
import kick2 from './localSounds/kick2.wav'
import ophat1 from './localSounds/ophat1.wav'
import snr1 from './localSounds/snr1.wav'
import snr3 from './localSounds/snr3.wav'
import tom3 from './localSounds/tom3.wav'

const keySounds1 = [
  {
    key: "q",
    clip: "https://www.fesliyanstudios.com/play-mp3/6703",
    ref: "hi",
  },
  {
    key: "w",
    clip: "https://www.fesliyanstudios.com/play-mp3/6780",
    ref: "hat",
  },
  {
    key: "e",
    clip: "https://www.fesliyanstudios.com/play-mp3/6773",
    ref: "snare",
  },
];

const keySounds2 = [
  {
    key: "a",
    clip: "https://www.fesliyanstudios.com/play-mp3/6659",
    ref: "bass",
  },
  {
    key: "s",
    clip: "https://www.fesliyanstudios.com/play-mp3/6735",
    ref: "bell",
  },
  {
    key: "d",
    clip: "https://www.fesliyanstudios.com/play-mp3/6741",
    ref: "ride",
  },
];

const keySounds3 = [
  {
    key: "z",
    clip:
      "http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Foxy%2070s%20Guitar%20Hit-1455-Free-Loops.com.mp3",
    ref: "delay",
  },
  {
    key: "x",
    clip: "http://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/39-maracas%20a.wav",
    ref: "maracas",
  },
  {
    key: "c",
    clip:
      "http://www.chiptape.com/chiptape/sounds/medium/MidwayGauntletG010.WAV",
    ref: "piano",
  },
];
 
const keySounds4 = [
  {
    key: "q",
    clip: clap,
    ref: "clap",
  },
  {
    key: "w",
    clip: crash,
    ref: "crash",
  },
  {
    key: "e",
    clip: cymbal,
    ref: "cymbal",
  },
];
const keySounds5 = [
  {
    key: "a",
    clip: hat01,
    ref: "hat01",
  },
  {
    key: "s",
    clip: kick2,
    ref: "kick2",
  },
  {
    key: "d",
    clip: ophat1,
    ref: "ophat1",
  },
];
const keySounds6 = [
  {
    key: "z",
    clip: snr1,
    ref: "snr1",
  },
  {
    key: "x",
    clip: snr3,
    ref: "snr3",
  },
  {
    key: "c",
    clip: tom3,
    ref: "tom3",
  },
]; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kit1: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    
  }

  changeStateTrue() {
    this.setState({
      kit1: true,
    });
  }

  changeStateFalse() {
    this.setState({
      kit1: false,
    });
  }

  SoundPlay = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };

  RenderButtonAndSound(arr) {
    return arr.map((sound, index) => {
      return (
        <Button key={index} id={sound.ref} color="secondary">
          {sound.key.toUpperCase()}
        </Button>
      );
    });
  }

  look(e) {
    let tecla = e.key.toLowerCase();
    if(this.state.kit1===true){

      keySounds1.map((sound) => {
        if (tecla === sound.key) {
          this.SoundPlay(sound.clip);
          document.getElementById(sound.ref).style.opacity = 0.6;
          setTimeout(() => {
            document.getElementById(sound.ref).style.opacity = 1;
          }, 200);
        }
      });
      keySounds2.map((sound) => {
        if (tecla === sound.key) {
          this.SoundPlay(sound.clip);
          document.getElementById(sound.ref).style.opacity = 0.6;
          setTimeout(() => {
            document.getElementById(sound.ref).style.opacity = 1;
          }, 200);
        }
      });
      keySounds3.map((sound) => {
        if (tecla === sound.key) {
          this.SoundPlay(sound.clip);
          document.getElementById(sound.ref).style.opacity = 0.6;
          setTimeout(() => {
            document.getElementById(sound.ref).style.opacity = 1;
          }, 200);
        }
      });
    }
    if(this.state.kit1===false){

      keySounds4.map((sound) => {
        if (tecla === sound.key) {
          this.SoundPlay(sound.clip);
          document.getElementById(sound.ref).style.opacity = 0.6;
          setTimeout(() => {
            document.getElementById(sound.ref).style.opacity = 1;
          }, 200);
        }
      });
      keySounds5.map((sound) => {
        if (tecla === sound.key) {
          this.SoundPlay(sound.clip);
          document.getElementById(sound.ref).style.opacity = 0.6;
          setTimeout(() => {
            document.getElementById(sound.ref).style.opacity = 1;
          }, 200);
        }
      });
      keySounds6.map((sound) => {
        if (tecla === sound.key) {
          this.SoundPlay(sound.clip);
          document.getElementById(sound.ref).style.opacity = 0.6;
          setTimeout(() => {
            document.getElementById(sound.ref).style.opacity = 1;
          }, 200);
        }
      });
    }
  } 

  setVolume(e) {
    let vol = e.currentTarget.value / 100;
    Howler.volume(vol);
  }

  render() {
    document.onkeydown = this.look.bind(this);

    if (this.state.kit1 === true) {
      return (
        <div className="App">
          <h2 className="title">Clasical Drum Machine</h2>

          <Container>
            <Row>
              <Col className="col">
                <div>{this.RenderButtonAndSound(keySounds1)}</div>
              </Col>
            </Row>
            <Row>
              <Col className="col">
                <div>{this.RenderButtonAndSound(keySounds2)}</div>
              </Col>
            </Row>
            <Row>
              <Col className="col">
                <div>{this.RenderButtonAndSound(keySounds3)}</div>
              </Col>
            </Row>
          </Container>

          <FormGroup>
            <Label for="exampleCustomRange">Volume</Label>
            <CustomInput
              type="range"
              id="exampleCustomRange"
              name="customRange"
              onChange={this.setVolume.bind(this)}
            />
          </FormGroup>

          <FormGroup check>
            <Label check className="kit">
              <Input
                type="radio"
                name="radio1"
                onClick={this.changeStateTrue.bind(this)}
              />{" "}
              Select kit 1
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check className="kit">
              <Input
                type="radio"
                name="radio1"
                onClick={this.changeStateFalse.bind(this)}
              />{" "}
              Select kit 2
            </Label>
          </FormGroup>
        </div>
      );
    }
  

    else if(this.state.kit1===false){
      return (
        <div className="App">
          <h2 className="title">Clasical Drum Machine</h2>

          <Container>
            <Row>
              <Col className="col">
                <div>{this.RenderButtonAndSound(keySounds4)}</div>
              </Col>
            </Row>
            <Row>
              <Col className="col">
                <div>{this.RenderButtonAndSound(keySounds5)}</div>
              </Col>
            </Row>
            <Row>
              <Col className="col">
                <div>{this.RenderButtonAndSound(keySounds6)}</div>
              </Col>
            </Row>
          </Container>

          <FormGroup>
            <Label for="exampleCustomRange">Volume</Label>
            <CustomInput
              type="range"
              id="exampleCustomRange"
              name="customRange"
              onChange={this.setVolume.bind(this)}
            />
          </FormGroup>

          <FormGroup check>
            <Label check className="kit">
              <Input
                type="radio"
                name="radio1"
                onClick={this.changeStateTrue.bind(this)}
              />{" "}
              Select kit 1
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check className="kit">
              <Input
                type="radio"
                name="radio1"
                onClick={this.changeStateFalse.bind(this)}
              />{" "}
              Select kit 2
            </Label>
          </FormGroup>
        </div>
      );
    }

      

    return (
      <div className="App">
        <h2 className="title">Clasical Drum Machine</h2>

        <FormGroup check>
          <Label check className="kit">
            <Input
              type="radio"
              name="radio1"
              onClick={this.changeStateTrue.bind(this)}
            />{" "}
            Select kit 1
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check className="kit">
            <Input
              type="radio"
              name="radio1"
              onClick={this.changeStateFalse.bind(this)}
            />{" "}
            Select kit 2
          </Label>
        </FormGroup>
      </div>
    );
  }
}

export default App;
