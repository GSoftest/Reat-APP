
import axios from 'axios'
import { LIST_REPORT_ENDPOINT, 
         REPORT_ENDPOINT, 
         TAKE_REPORT_ENDPOINT, 
         CHANGE_REPORT_STATUS_ENDPOINT,
         SET_ERROR, 
         SET_REPORT, RESET_REPORTS } from '../constants';
import { setHeaderNavegation } from '../actions/headerNavegation';
import { setLoader } from '../actions/loader';
import { summary } from '../actions/summary';
import { resetAll } from '../actions/all';
import { setSearch } from '../actions/search';

import { ALERTS_LABELS, CLOSE } from './../constants'



export const reports = (payload) =>{
     return {
        type: SET_REPORT,
        payload: payload,    
    }
}

export const resetReports = () =>{
    return {
        type: RESET_REPORTS,
        payload: false,
    }
}

export function getReports (username,reportstatus,reportlevel,processName) {   

      return dispath => {
        axios({
          method: 'get',
          url:LIST_REPORT_ENDPOINT,
          headers:{
            username : username,
            reportstatus : reportstatus,
            reportlevel : reportlevel,

          },
        }).then((response) => {
            console.log(response.data)
            dispath(reports(response.data));
            dispath(setHeaderNavegation(processName));
            dispath(setLoader(false))

            if(response.data.length === 0){
              const propsAlert = {
                title : ALERTS_LABELS.TITLE_SUCCESS,
                dialog : ALERTS_LABELS.WITH_OUT_RESULTS,
                leftButton : null,
                rightButton : ALERTS_LABELS.ACCEPT,
                leftWay : CLOSE,
                rightWay : CLOSE
              }
              dispath({
                type: SET_ERROR,
                payload: true,
                props: propsAlert,
            })
            }

    

        }).catch(error => {
          
              let errorObject=JSON.parse(JSON.stringify(error));
              console.log("error" + errorObject)

              const propsAlert = {
                  title : ALERTS_LABELS.TITLE_ERROR,
                  dialog : ALERTS_LABELS.GET_REPORT_LIST_FAILED,
                  leftButton : null,
                  rightButton : ALERTS_LABELS.ACCEPT,
                  leftWay : CLOSE,
                  rightWay : CLOSE
                }
                dispath({
                  type: SET_ERROR,
                  payload: true,
                  props: propsAlert,
              })
            });      
    }
  }


  export function getReport (idReport,userName,processName,endpoint) {   

    return dispath => {

        var URL = '';

        if(endpoint === 1){
            URL = REPORT_ENDPOINT;
        }else{
            URL = TAKE_REPORT_ENDPOINT;
        }
 
      axios({
        method: 'get',
        url: URL,
        headers:{
          idReport : idReport,
          userName : userName,
        },
      }).then((response) => {
          dispath(summary(response.data));
          dispath(setHeaderNavegation(processName))         
          dispath(setLoader(false))
      }).catch(error => {
        
            let errorObject=JSON.parse(JSON.stringify(error));
            console.log("error" + errorObject)
            dispath(setLoader(false))
            const propsAlert = {
                title : ALERTS_LABELS.TITLE_ERROR,
                dialog : ALERTS_LABELS.GET_REPORT_FAILED,
                leftButton : null,
                rightButton : ALERTS_LABELS.ACCEPT,
                leftWay : CLOSE,
                rightWay : CLOSE
              }
              dispath({
                type: SET_ERROR,
                payload: true,
                props: propsAlert,
            })
          });      
  }
}

export function foundReport (userName,processName,idReport) {   

    console.log(userName + ' ' + idReport)
    return dispath => {

      axios({
        method: 'get',
        url: REPORT_ENDPOINT,
        headers:{
          idReport : idReport,
          userName : userName,
        },
      }).then((response) => {

        console.log("estatus" + response.data.report[0].reportStatus)
        
        if(response.data.report[0].reportStatus === 3 || response.data.report[0].reportStatus === 1){         
            dispath(summary(response.data));
            dispath(setHeaderNavegation(processName))         
            dispath(setLoader(false))
        }else{
            dispath(getReport(idReport,userName,processName,2))
        }

      }).catch(error => {
        
            let errorObject=JSON.parse(JSON.stringify(error));
            console.log("error" + errorObject)
            dispath(setLoader(false))
            dispath(setSearch(true))
            const propsAlert = {
                title : ALERTS_LABELS.TITLE_ERROR,
                dialog : ALERTS_LABELS.GET_REPORT_FAILED,
                leftButton : null,
                rightButton : ALERTS_LABELS.ACCEPT,
                leftWay : CLOSE,
                rightWay : CLOSE
              }
              dispath({
                type: SET_ERROR,
                payload: true,
                props: propsAlert,
            })
          });      
  }
}

export function getChangeReportStatus (idReport,newReportStatus,newPayStatus,textComment,userName) {   

    return dispath => {

      axios({
        method: 'get',
        url: CHANGE_REPORT_STATUS_ENDPOINT,
        headers:{
            idReport : idReport,
          newReportStatus : newReportStatus,
          newPayStatus : newPayStatus,
          textComment : textComment,
          userName : userName,
        },
      }).then((response) => {
        console.log(response)
        dispath(reports(response.data));
        dispath(setLoader(false))
        dispath(resetAll()) 
        dispath(getReports(localStorage.getItem('user'),0,1,'Gestión de pagos'))
           
         
      }).catch(error => {
        
            let errorObject=JSON.parse(JSON.stringify(error));
            console.log("error" + errorObject)

            const propsAlert = {
                title : ALERTS_LABELS.TITLE_ERROR,
                dialog : ALERTS_LABELS.REPORT_STATUS_FAILED,
                leftButton : null,
                rightButton : ALERTS_LABELS.ACCEPT,
                leftWay : CLOSE,
                rightWay : CLOSE
              }
              dispath({
                type: SET_ERROR,
                payload: true,
                props: propsAlert,
            })
            dispath(setLoader(false))
          });      
  }
}