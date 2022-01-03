import { SET_SUMMARY } from './../constants'


export const summary = (state = {} ,action) => {

    switch (action.type) {
        case SET_SUMMARY:
        console.log(action.payload.IdReport)
            return {...state, idReport: action.payload.IdReport, binnacle: action.payload.binnacle, length: action.payload.binnacle.length,  report: action.payload.report }  
    
        default:
            return state;
    }
}