import './App.css';
import { nanoid } from 'nanoid';
import { useEffect, useRef } from 'react';

function App() {
    const body = useRef(document.body)

    useEffect(() => {
        const scriptTag = document.createElement('script')
        scriptTag.src = 'game_engine/gameEngine.js'
        setTimeout(() => {
            body.current.appendChild(scriptTag)
        }, 200)
    }, [])

    const boardElements  = [...Array(15).keys()].map(x => {
        return (
            <div key={ nanoid() } className='boardRow'>
                {
                    [...Array(15).keys()].map(y =>
                        <div key={ nanoid() } className='boardCol'>
                            <div className='boardCell' id={`${x}-${y}`}></div>
                        </div>
                    )
                }
            </div>
        )
    })

    return (
        <section>
            <div className="controls">
                <div className="newGameCtrl"><input type="checkbox" id="check" /><label className="newMain" htmlFor="check">
                        <div className="newMainText">new</div>
                    </label>
                    <div className="newContainer">
                        <div className="newPlate">
                            <div className="boardCellCircle" id="new-O"></div>
                        </div>
                        <div className="newPlate">
                            <div className="boardCellCross" id="new-X"></div>
                        </div>
                    </div>
                </div>

                <div className="messages">
                    <div className="messagesContainer">
                        <div className="newMainText" id="message">try to get 5 in a row!</div>
                    </div>
                </div>
            </div>
            <div className="board">
                {boardElements}
            </div>
        </section>
    );
}

export default App;
