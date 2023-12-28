import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { examAction } from '../../store/exam-slice';
import classes from './SubjectItem.module.css';


const SubjectItem = (props) => {

  const { id, time, history,month,name} = props;

// const Choosed = useSelector((state)=>state.exam.isChoosed);
const [isChoosed,setIsChoosed]=useState(true);

const dispatch = useDispatch();

  const addToTableHandler=()=>{
    dispatch(examAction.addSubject({
        id,
        time,
        history,
        month,
        name
    }))
    
    setIsChoosed(false);
  };

  
  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
  <div className={classes.price}> {history}/{month} الساعة {time}  التاريخ </div>
        
     
      </header>

      <div className={classes.actions}>
        { isChoosed && <button onClick={addToTableHandler}>اضافة الى البرنامج</button> }
        {!isChoosed && <span>تمّت الإضافة</span>}
      
    
      </div>
    
    </li>
  );
};

export default SubjectItem;
