/*
包含n个action creator函数的模块
每个action creator都返回一个action对象/函数
同步action: action对象
异步action: action函数(dispatch)
 */

import {reqCate,reqManual,reqTabDta} from "../api"

import {RESEIVE_CATE, RESEIVE_INDEX, RESEIVE_IDENTINDEX,RESEIVE_MANUAL,RESEIVE_TABDTA} from "./action-types"

const reseive = (giveCate) => ({type: RESEIVE_CATE, data: giveCate})

export const getIndex = (index) => ({type: RESEIVE_INDEX, data: index})

export const identIndex = (index) => ({type: RESEIVE_IDENTINDEX, data: index})

export const manual = (Manual) => ({type: RESEIVE_MANUAL, data: Manual})

export const tabDta = (TabDta) => ({type: RESEIVE_TABDTA, data: TabDta})

export function getCate() {
    return async (dispatch) => {
        const result = await reqCate()
        if (result.code === 0) {
            const giveCate = result.data
            dispatch(reseive(giveCate))
        }
    }
}

export function getManual() {
    return async (dispatch) => {
        const result = await reqManual()
        if (result.code === "200") {
            const Manual = result.data
            dispatch(manual(Manual))
        }
    }
}

export function getTabDta() {
    return async (dispatch) => {
        const result = await reqTabDta()
        if (result.code === "200") {
            const TabDta = result.data
            dispatch(tabDta(TabDta))
        }
    }
}