import React, { useState } from 'react'
import './Calculator.scss';

const Calculator = () => {

    const [inputOpreration, setInputOperation] = useState('');
    const [lastOperation, setLastOperation] = useState('');

    const clearInput = () => {
        setInputOperation('');
        setLastOperation('');
    }

    const handleDeleteButton = () => {
        if (inputOpreration.length <= 0) {
            return;
        }
        
        setInputOperation(inputOpreration.slice(0, -1));
    }

    const handleButtonClick = (input) => {
        if (input === '+' || input === '-' || input === '/' || input === 'x' || input === '%') {

            if(inputOpreration.length <=0){
                return;
            }

            if (inputOpreration.includes('+')) {
                const findAndReplaceOperation = inputOpreration.replace('+', input);
                setInputOperation(findAndReplaceOperation);

            } else if (inputOpreration.includes('-')) {

                const findAndReplaceOperation = inputOpreration.replace('-', input);
                setInputOperation(findAndReplaceOperation);

            } else if (inputOpreration.includes('/')) {

                const findAndReplaceOperation = inputOpreration.replace('/', input);
                setInputOperation(findAndReplaceOperation);

            } else if (inputOpreration.includes('x')) {

                const findAndReplaceOperation = inputOpreration.replace('x', input);
                setInputOperation(findAndReplaceOperation);

            }else if (inputOpreration.includes('%')) {

                const findAndReplaceOperation = inputOpreration.replace('%', input);
                setInputOperation(findAndReplaceOperation);

            } else {
                setInputOperation(inputOpreration + input);
            }

        } else {
            setInputOperation(inputOpreration + input);
        }
    }

    const handleResult = () => {
        setLastOperation(inputOpreration);

        if (inputOpreration.includes('+')) {
            const [num1, num2] = inputOpreration.split('+').map(Number);
            setInputOperation(num1 + num2);
        } else if (inputOpreration.includes('-')) {
            const [num1, num2] = inputOpreration.split('-').map(Number);
            setInputOperation(num1 - num2);
        } else if (inputOpreration.includes('/')) {
            const [num1, num2] = inputOpreration.split('/').map(Number);
            setInputOperation(num1 / num2);
        } else if (inputOpreration.includes('x')) {
            const [num1, num2] = inputOpreration.split('x').map(Number);
            setInputOperation(num1 * num2);
        }else if (inputOpreration.includes('%')) {
            const [num1, num2] = inputOpreration.split('%').map(Number);
            setInputOperation(num1 % num2);
        }

    }

    /* ------ TODO ------
    [X] - check if all operations work as intended
    [ ] - fix dot problem
    [X] - fix styling
    */

    return (
        <div className='calc-body'>
            <div className='display'>
                <div className='current-operation'>
                    <input type='text' className='last-opr' value={`${lastOperation}`} disabled></input>
                    <input type='text' className='curr-opr' value={inputOpreration} onChange={(e) => { setInputOperation(e.target.value) }} disabled></input>
                </div>
            </div>
            <div className='operations'>
                <div className='operations-top'>
                    <div className='button purple-text' onClick={() => clearInput()}><p>AC</p></div>
                    <div className='button purple-text' onClick={() => handleButtonClick('/')}><p>/</p></div>
                    <div className='button purple-text' onClick={() => handleButtonClick("x")}><p>X</p></div>
                    <div className='button purple-bg' onClick={() => handleDeleteButton()}><p>DEL</p></div>
                </div>
                <div className='container-numbers'>
                    <div className='numbers'>
                        <div className='row'>
                            <div className='button' onClick={() => handleButtonClick('7')}><p>7</p></div>
                            <div className='button' onClick={() => handleButtonClick('8')}><p>8</p></div>
                            <div className='button' onClick={() => handleButtonClick('9')}><p>9</p></div>
                        </div>
                        <div className='row'>
                            <div className='button' onClick={() => handleButtonClick('4')}><p>4</p></div>
                            <div className='button' onClick={() => handleButtonClick('5')}><p>5</p></div>
                            <div className='button' onClick={() => handleButtonClick('6')}><p>6</p></div>
                        </div>
                        <div className='row'>
                            <div className='button' onClick={() => handleButtonClick('1')}><p>1</p></div>
                            <div className='button' onClick={() => handleButtonClick('2')}><p>2</p></div>
                            <div className='button' onClick={() => handleButtonClick('3')}><p>3</p></div>
                        </div>
                        <div className='row'>
                            <div className='button' onClick={() => handleButtonClick('.')}><p>.</p></div>
                            <div className='button' onClick={() => handleButtonClick('0')}><p>0</p></div>
                            <div className='button' onClick={() => handleButtonClick('%')}><p>%</p></div>
                        </div>
                    </div>
                    <div className='operations-right'>
                        <div className='button purple-bg' onClick={() => handleButtonClick('-')}><p>-</p></div>
                        <div className='button purple-bg' onClick={() => handleButtonClick('+')}><p>+</p></div>
                        <div className='button result-btn purple-bg' onClick={() => handleResult()}><p>=</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator