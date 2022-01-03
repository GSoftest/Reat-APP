import { createMuiTheme } from '@material-ui/core/styles';

/*Commons constants */
export const EXPIRATION_TIME = 10;

/*Constants about theme (colors) */
export const THEME = createMuiTheme({
    
  palette: {
    primary: {
      main: '#5c068c',
    },
    secondary: {
      main: '#5c068c',
    }
  },
  typography: {
      useNextVariants: true,
  },

});

/*Constants about login component*/

export const LOGIN_TITLE = "Gestión de pagos por transferencias";

export const USERNAME_LABEL = "Nombre de usuario";
export const USERNAME_PLACEHOLDER = "Nombre de usuario";
export const USER_ICON = "person";

export const PASSWORD_LABEL = "Contraseña";
export const PASSWORD_PLACEHOLDER = "Contraseña";
export const PASSWORD_ICON = "lock";

export const LOGIN_BUTTON_NAME = "Ingresar";


/* Input Label Constants */

export const LABEL = {
  DIGITEL_TITLE : 'Digitel',
  CUSTOMER_ACCOUNT: 'Cuenta del cliente',
  SUCCESS_PAYMENT : 'Pago aplicado satisfactoriamente',
  UNSUCCESS_PAYMENT : 'Pago no aplicado',
  UNVERIFIED_PAYMENT : 'Pago no verificado',
  CUSTOMER_ID : 'Documento de identidad del titular',
  GSM : 'GSM',
  BANK_ACCOUNT : 'Cuenta Bancaria',
  LAST_ACCOUNT_DIGITS : 'Últimos dígitos de la cuenta',
  AMOUNT : 'Monto',
  REFERENCE : 'Referencia',
  PAYMENT_DATE : 'Fecha de pago',
  REPORT_STATUS : 'Estatus del reporte',
  PAYMENT_STATUS : 'Estatus del pago',
  COMMENT : 'Comentario'
}

/*Actions and reducer actions  */

export const LOGOUT_RESET = 'LOGOUT_RESET';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOADER = 'SET_LOADER';
export const SET_REPORT = 'SET_REPORT';
export const SET_HEADER = 'SET_HEADER';
export const SET_SUMMARY = 'SET_SUMMARY';
export const RESET_REPORTS = 'RESET_REPORTS';
export const SET_SEARCH = 'SET_SEARCH';
export const RESET_ALL = 'RESET_ALL';



/*Alert constants*/

export const CLOSE = 'CLOSE';
export const PROCESS = 'PROCESS';
export const CLOSE_REPORT = 'CLOSE_REPORT';
export const ALERTS_LABELS = {

  TITLE_SUCCESS : '¡Estimado usuario!',
  TITLE_ERROR :'¡Surgió un inconveniente!',
  ACCEPT : 'Aceptar',
  CANCEL : 'Cancelar',
  USERNAME_REQUIRED : 'Debe ingresar nombre de usuario',
  PASSWORD_REQUIRED : 'Debe ingresar contraseña',
  AUTHENTICATION_FAILED : 'Usuario o Contraseña inválido, verifique e intente nuevamente',
  COMUNICATION_FAILED : 'Ha ocurrido un error de comunicación, verifique su conexión',
  WITH_OUT_RESULTS : 'No se han encontrado resultados',
  GET_REPORT_LIST_FAILED : 'No se ha podido obtener la lista de reportes',
  GET_REPORT_FAILED : 'No se ha obtenido la información del reporte, verifique he intente nuevamente',
  REPORT_STATUS_FAILED : 'No se ha podido ejecutar el cambio de estatus para el reporte',
  CHANGE_STATUS_CONFIRMATION : '¿Está seguro que desea modificar el estatus del reporte?',




}

/*Endpoints constants*/

/*Authetication endpoint*/
export const AUTHENTICATION_ENDPOINT = 'http://10.192.13.69:7001/api_rest/rt/authenticator'

/*Reports endpoint*/
export const LIST_REPORT_ENDPOINT = 'http://10.192.13.69:7001/api_rest/rt/getListReport'

/*Report detail endpoint*/
export const REPORT_ENDPOINT = 'http://10.192.13.69:7001/api_rest/rt/getReport'

/*Take report and detail endpoint*/
export const TAKE_REPORT_ENDPOINT = 'http://10.192.13.69:7001/api_rest/rt/takeReport'

/*Change report estatusendpoint*/
export const CHANGE_REPORT_STATUS_ENDPOINT = 'http://10.192.13.69:7001/api_rest/rt/changeStatusReport'


