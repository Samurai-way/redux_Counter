import React from 'react';
import style from './App.module.css';
import {Counter} from "./components/counter/Counter";
import {Route, Routes} from "react-router-dom";
import {Setting} from "./components/setting/Setting";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./components/redux/store";
import {incrementAC, resetAC, setMaxValueAC, setStartValueAC} from "./components/redux/couterReducer";

export default function App() {

    const count = useSelector<AppRootStateType, number>(state => state.counterReducer.count)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counterReducer.maxValue)
    const startValue = useSelector<AppRootStateType, number>(state => state.counterReducer.startValue)

    const dispatch = useDispatch()

    const incrementHandler = (e: number) => {
        dispatch(incrementAC(e))
    }

    const resetHandler = (e: number) => {
        dispatch(resetAC(e))
    }

    const setSTARTvalue = (number: number) => {
        dispatch(setStartValueAC(number))
    }

    const setMaxValue = (number: number) => {
        dispatch(setMaxValueAC(number))
    }

    return (
        <div className={style.wrapper}>
            <Routes>
                <Route path={'/'} element={<Counter
                    count={count}
                    incrementHandler={incrementHandler}
                    resetHandler={resetHandler}
                    maxValue={maxValue}
                    startValue={startValue}
                />}/>
                <Route path={'/setting'} element={<Setting
                    setSTARTvalue={setSTARTvalue}
                    setMaxValue={setMaxValue}
                />}/>
            </Routes>
        </div>
    );
}
