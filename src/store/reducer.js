/*
包含n个reducer函数的模块
reducer函数: 根据老state和指定action返回一个新的state
 */

import {combineReducers} from 'redux'
import {RESEIVE_CATE, RESEIVE_INDEX, RESEIVE_IDENTINDEX,RESEIVE_MANUAL,RESEIVE_TABDTA} from "./action-types"

const initCate = []
function giveCate(state = initCate, action) {
    switch (action.type) {
        case RESEIVE_CATE:
            return action.data
        default:
            return state
    }
}

const initId = 0
function getIndex(state = initId, action) {
    switch (action.type) {
        case RESEIVE_INDEX:
            return action.data
        default:
            return state
    }
}

const initIdentIndex = 0
function identIndex(state = initIdentIndex, action) {
    switch (action.type) {
        case RESEIVE_IDENTINDEX:
            return action.data
        default:
            return state
    }
}

const initmanual = []
function manual(state = initmanual, action) {
    switch (action.type) {
        case RESEIVE_MANUAL:
            return action.data
        default:
            return state
    }
}

const inittabDta = {}
function tabDta(state = inittabDta, action) {
    switch (action.type) {
        case RESEIVE_TABDTA:
            return action.data
        default:
            return state
    }
}

export default combineReducers({
    giveCate,
    getIndex,
    identIndex,
    manual,
    tabDta
})