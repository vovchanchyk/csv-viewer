import React from 'react'
import checkField from '../../../functions/checkField';
import { ColumnType } from '../../../redux/reducers/dataReducer';
import { StyledCell } from '../../../styledComponents/styledCell';
import Rules from './rules/Rules';


type  Props = ColumnType;

const Column:React.FC<Props> = ({title, fields, error, columnId}) => {
 
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  p-0" >
          <Rules title={title} columnId={columnId}/>
          {fields.map(el=> {
            const warning = checkField(el, error)
            console.log(warning)
         return  <StyledCell className={!warning?'bg-warning':''}>{el}</StyledCell>
         
         })}
            
        </div>
    )
}

export default Column
