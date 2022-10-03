import React, {useState} from 'react';
import style from './Counter.module.css';
import {Link, NavLink, Route, Router, Routes, useNavigate} from "react-router-dom";
import {Error} from "../error/Error";

type CounterPropsType = {
    count: number
    incrementHandler: (e: number) => void
    resetHandler: (e: number) => void
    maxValue: number
    startValue: number

}

const styles = {
    color: 'red',
    fontSize: '90px'
}

export const Counter = ({
                            incrementHandler,
                            resetHandler,
                            maxValue,
                            startValue,
                            ...props
                        }: CounterPropsType) => {
    const navigate = useNavigate()


    const onCLickInc = () => {
        incrementHandler(0)
    }

    const onCLickReset = () => {
        resetHandler(0)
    }

    const onclickSet = () => {
        navigate('/setting')

    }

    return (
        <div className={style.wrapper}>

            <div className={style.value_container}>
                <h1
                    style={props.count >= maxValue ? styles : undefined}
                    className={style.value}>{props.count}</h1>
            </div>
            <div
                className={style.buttons_container}>
                <button
                    className={style.button_one}
                    disabled={props.count >= maxValue}
                    onClick={onCLickInc}
                >INC
                </button>
                <button className={style.button_two}
                        onClick={onCLickReset}
                >RESET
                </button>
                <button className={style.button_three}
                        onClick={onclickSet}>SET
                </button>
            </div>
        </div>
    );
};
