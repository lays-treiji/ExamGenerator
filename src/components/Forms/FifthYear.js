
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SubjectItem from "./SubjectItem";
import classes from './Year..module.css';

const FifthYear =()=>{

    const DummySubjectsFirst = [
    
        {  
             id: 'v1',
            time:'12:00',
            month:1,
            history:'24',
            name:'الأمراض الباطنة(6)(الأمراض العصبية وطب المسنين)'
            },
            {  
                id: 'v2',
               time:'9:00',
               month:1,
               history:'29',
               name:'الجراحة(3) (العصبية والبولية)'
               },
               {  
                id: 'v3',
               time:'1:00',
               month:2,
               history:'03',
               name:'الطب الوقائي و طب الأسرة'
               },
               {  
                id: 'v4',
               time:'2:00',
               month:2,
               history:'05',
               name:'أمراض العين وجراحتها'
               },
               {  
                id: 'v5',
               time:'9:00',
               month:2,
               history:'09',
               name:'الأمراض النسائية'
               },
               {  
                id: 'v6',
               time:'12:00',
               month:2,
               history:'12',
               name:'طب الأطفال(1)'
               },
               {  
                id: 'v7',
               time:'1:00',
               month:3,
               history:'01',
               name:'الأمراض الباطنة(7)(أمراض الكلية)'
               },

    ]
    const DummySubjectsSeconde =[
        {
            id:'v8',
            time:'9:00',
            history:'26',
            month:1,
            name:'الطب الشرعي'
            },
            {  
                id: 'v9',
               time:'9:00',
               history:'28',
               month:1,
               name:'الأمراض الباطنة(9)(أمراض الدم)'
            },
            {  
                id: 'v10',
               time:'12:00',
               history:'20',
               month:2,
               name:'الجراحة(4)(العظمية وجراحة التجميل والأطفال)'
            },
            {  
                id: 'v11',
               time:'1:00',
               history:'25',
               month:2,
               name:'علم المداواة السريري'
            },
            {  
                id: 'v12',
               time:'9:00',
               history:'27',
               month:2,
               name:'التصوير الطبي والتشخيص الشعاعي(2)'
            },
            {  
                id: 'v13',
               time:'2:00',
               history:'28',
               month:2,
               name:'الأمراض الباطنة(8)(أمراض الجهاز الحركي)'
            },
            {  
                id: 'v14',
               time:'9:00',
               history:'01',
               month:3,
               name:'طب الأطفال(2)'
            },
            {  
                id: 'v15',
               time:'9:00',
               history:'03',
               month:3,
               name:'الأمراض النفسية'
            },
    ]

    const [checked, setChecked] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

return(
    <section className={classes.products}>
    <h2>اختر مواد من السنة الخامسة</h2>

    <section className={classes.part}>
    <h2 >الفصل الأول</h2>
    {    
            <ul  >
            {DummySubjectsFirst.map((s)=>(
                <SubjectItem 
                    key={s.id}
                    name={s.name}
                    time={s.time}
                    month={s.month}
                    history={s.history}
                />
            ))}
        </ul>
        
    }
     </section>

     <section className={classes.part}>
    <h2>الفصل الثاني</h2>
    {       
            <ul  >
            {DummySubjectsSeconde.map((s)=>(
                <SubjectItem 
                    key={s.id}
                    name={s.name}
                    time={s.time}
                    month={s.month}
                    history={s.history}
                />
            ))}
        </ul>
        
    }
     </section>


    <section className={classes.Button}>
    <section >
          <h2>سوف أتأكد من المعلومات وعلى مسؤوليتي</h2>
          <input 
            type="checkbox"
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
              setButtonDisabled(!e.target.checked);
            }}
          /> 
        </section>
    <button disabled={buttonDisabled} >
        <Link to="/TablePage">إنشاء الجدول</Link>
      </button>
    </section>
  </section>
);
};


export default FifthYear;