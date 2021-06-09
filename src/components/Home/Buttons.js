import styled from 'styled-components'
import './Buttons.css'
import { connect } from 'react-redux'
import { useState, useEffect, useRef } from 'react'

import * as Tone from 'tone'
import classNames from 'classnames'
import kick from 'assets/sounds/kick.wav'
import snare from 'assets/sounds/snare.wav'
import hihats from 'assets/sounds/hihats.wav'
import tom from 'assets/sounds/tom.wav'
import cowbell from 'assets/sounds/cowbell.wav'
import maracas from 'assets/sounds/maracas.wav'
import congas from 'assets/sounds/congas.wav'
import clava from 'assets/sounds/clava.wav'
import rimshot from 'assets/sounds/rimshot.wav'
import clap from 'assets/sounds/clap.wav'
import cymbal from 'assets/sounds/cymbal.wav'


const Buttons = (props) => {

//Generate grid
const grid = []
    for (let index = 0; index < props.columnNumber.columnNumber; index++) {
         let column = [
            { instrument : "Congas", isActive : false, activeColor : 'cream', note : {soundPlay: () => mySampler.current.triggerAttackRelease(["G4"], 4)} },
            { instrument : "Maracas", isActive : false, activeColor : 'orange', note : {soundPlay: () => mySampler.current.triggerAttackRelease(["E#4"], 4)} },
            { instrument : "Clava", isActive : false, activeColor : 'yellow', note : {soundPlay: () => mySampler.current.triggerAttackRelease(["E4"], 4)} },
            { instrument : "Cowbell", isActive : false, activeColor : 'red', note : {soundPlay: () => mySampler.current.triggerAttackRelease(["D#4"], 4)} },
            { instrument : "Tom", isActive : false, activeColor : 'cream', note : {soundPlay: () => mySampler.current.triggerAttackRelease(["D4"], 2)} },
            { instrument : "Cymbal", isActive : false, activeColor : 'orange', note : {soundPlay: () => mySampler.current.triggerAttackRelease(["C#4"], 4)} },
            { instrument : "Rimshot", isActive : false, activeColor : 'yellow', note : {soundPlay: () => mySampler.current.triggerAttackRelease(["C4"], 4)} },
            { instrument : "Hihat", isActive : false, activeColor : 'red', note : {soundPlay: () => mySampler.current.triggerAttackRelease(["B#4"], 4)} },
            { instrument : "Clap", isActive : false, activeColor : 'cream', note : {soundPlay: () => mySampler.current.triggerAttackRelease(["B4"], 4)} },
            { instrument : "Snare", isActive : false, activeColor : 'orange', note : {soundPlay: () => mySampler.current.triggerAttackRelease(["A#4"], 4)} },
            { instrument : "Kick", isActive : false, activeColor : 'yellow', note : {soundPlay: () => mySampler.current.triggerAttackRelease(["A4"], 1)} },    
        ];
        grid.push(column);
    }
    
    const [gridData, setGridData] = useState(grid)
//Generate instrument list
    const instrumentList = []
    const inst = Object.entries(grid[0])
    for (let i = 0; inst[i]; i++) { 
    instrumentList.push(inst[i][1].instrument)
    }
    var updatedGrid = []
//Regenerate Grid with instruments clicked
    function handleNoteClicked (clickedColumn, clickedNote) {
        
        updatedGrid = gridData.map((column, columnIndex) =>
            column.map((cell, cellIndex) => {
                var cellCopy = cell
                
                
            if(columnIndex === clickedColumn && cellIndex === clickedNote) {
                cellCopy.isActive = !cell.isActive
                cellCopy.note.soundPlay()
            }
                return cellCopy
        })
        )
        
        setGridData(updatedGrid)
    }

//Initialize Tone js
    const mySampler = useRef(null)
    useEffect(() => {
        const sampler = new Tone.Sampler({
            
                A4: kick,
                "A#4": snare,
                B4: clap,
                "B#4": hihats,
                C4: rimshot,
                "C#4": cymbal,
                D4: tom,
                "D#4": cowbell,
                E4: clava,               
                "E#4": maracas,
                G4: congas,
                
        }).toDestination();
        
        Tone.loaded().then(() => {
            mySampler.current = sampler
        })

    }, [])
    var nbMesures = []
    useEffect(()=>{     
        for (let i = 0; i<props.columnNumber.columnNumber; i++) {
            nbMesures.push(i)
        }
    },[props.columnNumber.columnNumber] )
  

//Play music

    const [isPlaying, setIsPlaying] = useState(false)
    const [currentColumn, setCurrentColumn] = useState(null)
    const [tempo, setTempo] = useState(100)
    
    const mySequencer = useRef(null)
    useEffect(()=>{
        const Sequencer = new Tone.Sequence((time, index) =>{
        setCurrentColumn(index)

        for(let i = 0; i<instrumentList.length; i++)
        if (gridData[index][i].isActive) {
            gridData[index][i].note.soundPlay()
        }
        },nbMesures)

        Tone.loaded().then(()=>{
            mySequencer.current = Sequencer
        })
    }, [props.columnNumber.columnNumber])
    const handleChangeTempo = (event) => {
        setTempo(event.target.value)
    }
    const PlayMusic = () => {
    
        Tone.start()

    if (isPlaying) {
        setIsPlaying(false)
        setCurrentColumn(null)
        Tone.Transport.stop()
        mySequencer.current.stop()
        return
    }
    setIsPlaying(true)
    mySequencer.current.start()
    Tone.Transport.start()
    Tone.Transport.bpm.value = tempo

}   
    

    return (
        <Wrapper>
            <ButtonsGrid className="grid-column">
                {gridData.map((column, columnIndex) => (
                    <GridColumn className={classNames("note-column", {"note-column--active" : currentColumn === columnIndex})} key={columnIndex + "column"}>
                        {column.map(( { instrument, isActive, activeColor }, instrumentIndex)=>(
                            <GridButton instrument ={instrument}
                            isActive={isActive}
                            activeColor={activeColor}
                            onClick={()=>handleNoteClicked(columnIndex, instrumentIndex)}
                            key={instrument + columnIndex}>                                
                            </GridButton>                                                
                        ))}
                                                        
                    </GridColumn>
                ))}
                <InstrumentName>
                    {instrumentList.map((item, index)=>(
                        <GridInstrument key={index}>
                            {item}
                        </GridInstrument>  
                    ))}
                </InstrumentName>
            </ButtonsGrid>

            <Play onClick={()=>PlayMusic()}>
                {isPlaying ? "stop" : "play"}
            </Play>
            <TempoDiv>
                <Tempo type="text" onChange={handleChangeTempo} value={tempo} size="10"/>
                <h3>BPM</h3>
            </TempoDiv>
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: auto;
height: 100%;
`
const ButtonsGrid = styled.div`
height: 100%;
display: flex;
`
const GridColumn = styled.div`
display: flex;
flex-direction: column;
    
`
const GridButton = ({instrument, isActive, activeColor, ...rest}) =>{
    const classes = isActive ? "note note--active" : "note"
    return (
        <button className={classes+activeColor}{...rest}>

        </button>
    )
}
const GridInstrument = styled.h2`
color : inherit;
padding-bottom : 8px;
margin-left : 20px;
`

const InstrumentName = styled.div`
    display flex;
    flex-direction : column;
`

const Play = styled.button`
padding : 0.8rem 1.5rem;
text-transform : uppercase;
margin: 3rem auto;
border-radius: 4px;
cursor: pointer;
`
const TempoDiv = styled.div`
display : flex;
flex-direction : column;
align-items: center;
h3{
    margin-top : 10px;
}
`
const Tempo = styled.input`
text-align : center;
background-color : ${props => props.theme.inputColor};
border-color : ${props => props.theme.mainColor};
    
`
const mapStateToProps = (state) => ({
    columnNumber : state.columnNumber
})

export default connect(mapStateToProps)(Buttons)
