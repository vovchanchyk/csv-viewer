import { ColumnType } from "../redux/reducers/dataReducer";

function getPayload(rows: any[], titles: any[]):ColumnType[] {
    return titles.map((key,i) => {
      return { title: key,columnId :i, mode:'', fields: rows.map((el) => el[key]), error:{
        uniq:false,   
        required: false,
        phone: false,
        date: false,
        email: false,
        maxLength: { mode: false, value: 0 },
        minLength: { mode: false, value: 0 },
        max: { mode: false, value: 0 },
        min: { mode: false, value: 0 }
       } };
    });
  }
  
  export default getPayload;