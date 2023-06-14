import './GamePage.css';
import Cell from './Cell.js'
import NextBlock from './NextBlock.js'
import ScoreBoard from './ScoreBoard.js'
import Popup from './Popup.js'
import {useState} from 'react';
function Board(){
    const cells=[];
    for(let i=0;i<20;i++){
        for(let j=0;j<10;j++){
            cells.push(<Cell key={`${i}${j}`} color='0'></Cell>);
        }
    }
    return (
        <div class="board-container">
            {cells}
        </div>
    );
}
function Button(props){
    if(props.id==="resume"&&!props.shouldResume){
        return null;
    }
    if(props.id==="pause"&&props.shouldResume){
        return null;
    }
    return <button className="meta" id={props.id} onClick={props.onClick}>{props.text}</button>
}
function Page(){
    const [resume,shouldShowResume]=useState(false);
    function setResume(){
        shouldShowResume(!resume);
    }
    function restartGame(){
        shouldShowResume(false);
    }
    return (
        <div className="container">
            <div className="side-area">
                <NextBlock></NextBlock>
                <ScoreBoard></ScoreBoard>
                <Button className="meta" id="pause" onClick={setResume} shouldResume={resume} text="Pause">Pause</Button>
                <Button className="meta" id="resume" onClick={setResume} shouldResume={resume} text="Resume">Resume</Button>
                <Button className="meta" id="restart" onClick={restartGame} shouldResume={resume} text="Restart">Restart</Button>
            </div>
            
            <Board></Board>
        </div>
    );
}
export default Page;