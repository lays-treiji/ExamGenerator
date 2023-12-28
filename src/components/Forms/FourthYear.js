
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SubjectItem from "./SubjectItem";
import classes from './Year..module.css';

const FourthYear =()=>{

    const DummySubjectsFirst = [
    
        {  
             id: 'f1',
            time:'12:00',
            month:1,
            history:'24',
            name:'علم الأمراض (2)'
            },
            {  
                id: 'f2',
               time:'9:00',
               month:1,
               history:'29',
               name:'الأمراض الباطنة (1)(أمراض جهاز الهضم)'
               },
               {  
                id: 'f3',
               time:'1:00',
               month:2,
               history:'03',
               name:'الأمراض الباطنة(2)(أمراض الغدد الصم والتغذية)'
               },
               {  
                id: 'f4',
               time:'2:00',
               month:2,
               history:'05',
               name:'علم الأورام الجزيئي والسريري'
               },
               {  
                id: 'f5',
               time:'9:00',
               month:2,
               history:'09',
               name:'أمراض الأذن و الأنف والحنجرة والوجه والعنق وجراحتها'
               },
               {  
                id: 'f6',
               time:'12:00',
               month:2,
               history:'12',
               name:'الأمراض الباطنة(4)(أمراض القلب والأوعية)'
               },
               {  
                id: 'f7',
               time:'1:00',
               month:3,
               history:'01',
               name:'الجراحة(1)(الجراحة العامة و جراحة البطن)'
               },

    ]
    const DummySubjectsSeconde =[
        {
            id:'f8',
            time:'9:00',
            history:'26',
            month:1,
            name:'طب التوليد'
            },
            {  
                id: 'f9',
               time:'9:00',
               history:'28',
               month:1,
               name:'التصور الطبي والتشخيص الشعاعي(1)'
            },
            {  
                id: 'f10',
               time:'12:00',
               history:'20',
               month:2,
               name:'الأمراض الباطنة(3)(الأمرتض الخمجية)'
            },
            {  
                id: 'f11',
               time:'1:00',
               history:'25',
               month:2,
               name:'الجراحة(2)(القلب والصدر والأوعية)'
            },
            {  
                id: 'f12',
               time:'9:00',
               history:'27',
               month:2,
               name:'طب الطوارئ والتخدير والإنعاش'
            },
            {  
                id: 'f13',
               time:'2:00',
               history:'28',
               month:2,
               name:'الأمراض الجلدية والمنتقلة بالجنس'
            },
            {  
                id: 'f14',
               time:'9:00',
               history:'03',
               month:3,
               name:'الأمراض الباطنة (5)(الأمراض الصدرية)'
            },
    ]

    const [checked, setChecked] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

return(
    <section className={classes.products}>
    <h2>اختر مواد من السنة الرابعة</h2>

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


export default FourthYear;