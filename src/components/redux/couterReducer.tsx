import React from "react";

type incrementAC = ReturnType<typeof incrementAC>
type resetAC = ReturnType<typeof resetAC>
type setStartValueAC = ReturnType<typeof setStartValueAC>
type setMaxValueAC = ReturnType<typeof setMaxValueAC>


const initialState = {
    count: 0,
    startValue: 0,
    maxValue: 0
}

export type initialStateProps = {
    count: number,
    startValue: number,
    maxValue: number
}

type othersReducersPropsType = incrementAC | resetAC | setStartValueAC | setMaxValueAC

export const counterReducer = (state: initialStateProps = initialState, action: othersReducersPropsType): initialStateProps => {
    switch (action.type) {
        case 'INCREMENT' :
            return {
                ...state,
                count: state.count + 1
            }
        case 'RESET':
            return {
                ...state,
                count: action.count
            }
        case 'SET-START-VALUE':
            return {
                ...state,
                count: action.startValue
            }
        case 'SET-MAX-VALUE':
            return {
                ...state,
                maxValue: action.maxValue
            }
        default:
            return state

    }
}

export const incrementAC = (count: number) => {
    return {
        type: 'INCREMENT',
        count: count
    } as const
}

export const resetAC = (count: number) => {
    return {
        type: 'RESET',
        count: count
    } as const
}

export const setStartValueAC = (startValue: number) => {
    return {
        type: 'SET-START-VALUE',
        startValue: startValue
    } as const
}

export const setMaxValueAC = (maxValue: number) => {
    return {
        type: 'SET-MAX-VALUE',
        maxValue: maxValue
    } as const
}