import '../../App.css'
import {React, setState, useState, useEffect} from 'react'
import CardItem from '../CardItem'
import {Link} from 'react-router-dom';
// import { Button } from './Button';
import backgroundVideo from '../../videos/video-3.mp4'
import {CanvasJSChart} from 'canvasjs-react-charts'
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
// import ModalUnstyled from '@material-ui//Moda'

export default function Profile() {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "dark2", 
        title: {
          text: "Content Summary"
        },
        data: [{
                  type: "pie",
                  indexLabel: "{label}: {y}%",
                  dataPoints: [
                      { label: "Movies",  y: 10, click: onClick },
                      { label: "Music", y: 25, click: onClick  },
                      { label: "Comic Strips", y: 25, click: onClick  },
                      { label: "Digital Art",  y: 40, click: onClick  },
                  ]
         }]
     }

     function onClick(e){
        setOpen(!open);
        console.log(e.dataPoint.label)
        if(e.dataPoint.label === "Digit Art"){
            setText(`Happy: 12      Neutral: 38      Unhappy: 1`);
        }else if(e.dataPoint.label === "Movies"){
            setText(`Happy: 12      Neutral: 38      Unhappy: 1`);
        }else if(e.dataPoint.label === "Music"){
            setText(`Happy: 12      Neutral: 38      Unhappy: 1`);
        }else if(e.dataPoint.label === "Comic Strips"){
            setText(`Happy: 12      Neutral: 38      Unhappy: 1`);
        }
     }

     function handleClose(){
         setOpen(!open)
     }
     const actions = [
        <Button
          label="Cancel"
          primary={true}
          onTouchTap={handleClose}
        />,
        <Button
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onTouchTap={handleClose}
        />,
      ];

    return (
        <div>
            <video autoPlay loop muted>
                <source src={backgroundVideo} type='video/mp4'/>
            </video>
        <div>
            <CanvasJSChart style="color:transparent; !important" options = {options}/>
      </div>
      <Dialog
        onClick={handleClose}
        title="Dialog With Actions"
        actions={actions}
        modal={false}
        open={open}>
        {text}
    </Dialog>
    </div>
    )
}
