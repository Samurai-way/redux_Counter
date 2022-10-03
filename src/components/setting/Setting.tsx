import React, {ChangeEvent, useState} from 'react';
import style from './Setting.module.css';
import {useNavigate} from "react-router-dom";
import {Error} from "../error/Error";

const errorCOLOR = {
    backgroundColor: 'red'
}

type SettingPropsType = {
    setSTARTvalue: (number: number) => void
    setMaxValue: (number: number) => void
}

export const Setting = (props: SettingPropsType) => {

    const [max, setMax] = useState<number>(0)
    const [start, setStart] = useState<number>(0)

    const navigate = useNavigate()
    const onclickSet = () => {
        navigate('/')
        props.setSTARTvalue(start)
        props.setMaxValue(max)
    }


    const setMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = (+e.currentTarget.value)
        // if(value < 100 && value > 0) setMax(value)
        setMax(value)
    }
    const setStartValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = +e.currentTarget.value
        // if(value < 100 && value > 0) setStart(value)
        setStart(value)
    }

    return (
        <div className={style.wrapper}>
            <div className={style.inputs_container}>
                <div className={style.max}>max value:
                    <input
                        style={max < 0 || start < 0 ? errorCOLOR : undefined}
                        onChange={setMaxValueChange}
                        value={max}
                        className={style.input_max}
                        type={'number'}/></div>

                <div
                    className={style.start}>start value:
                    <input
                        value={start}
                        onChange={setStartValueChange}
                        style={start < 0 || max < 0 ? errorCOLOR : undefined}
                        className={style.input_start}
                        type={'number'}/></div>
            </div>
            {
                max < 0 || start < 0 ? <Error/> : <div className={style.button_container}>
                    <button
                        className={style.set}
                        onClick={onclickSet}
                    >SET
                    </button>
                </div>
            }

        </div>
    );
};
