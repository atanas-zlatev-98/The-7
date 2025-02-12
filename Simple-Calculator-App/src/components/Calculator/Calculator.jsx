import React from 'react'
import './Calculator.scss';

const Calculator = () => {
    return (
        <div className='calc-body'>
            <div className='display'>
                <div className='current-operation'>
                    <input type='text' className='last-opr' disabled></input>
                    <input type='text' className='curr-opr' disabled></input>
                </div>
            </div>
            <div className='operations'>
                <div className='operations-top'>
                    <div className='button purple-text'><p>AC</p></div>
                    <div className='button purple-text'><p>%</p></div>
                    <div className='button purple-text'><p>X</p></div>
                    <div className='button purple-bg'><p>DEL</p></div>
                </div>
                <div className='container-numbers'>
                    <div className='numbers'>
                        <div className='row'>
                            <div className='button'><p>7</p></div>
                            <div className='button'><p>8</p></div>
                            <div className='button'><p>9</p></div>
                        </div>
                        <div className='row'>
                            <div className='button'><p>4</p></div>
                            <div className='button'><p>5</p></div>
                            <div className='button'><p>6</p></div>
                        </div>
                        <div className='row'>
                            <div className='button'><p>1</p></div>
                            <div className='button'><p>2</p></div>
                            <div className='button'><p>3</p></div>
                        </div>
                        <div className='row'>
                            <div className='button'><p>.</p></div>
                            <div className='button'><p>0</p></div>
                            <div className='button'><p>%</p></div>
                        </div>
                    </div>
                    <div className='operations-right'>
                        <div className='button purple-bg'><p>-</p></div>
                        <div className='button purple-bg'><p>+</p></div>
                        <div className='button result-btn purple-bg'><p>=</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator