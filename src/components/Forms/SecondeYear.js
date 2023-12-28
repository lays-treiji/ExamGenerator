
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SubjectItem from "./SubjectItem";
import classes from './Year..module.css';

const SecondeYear =()=>{

    const DummySubjectsFirst = [
    
        {  
             id: 's1',
            time:'12:00',
            month:1,
            history:'24',
            name:'التشريح 1 (الرأس والعنق والأطراف)'
            },
            {  
                id: 's2',
               time:'9:00',
               month:1,
               history:'29',
               name:'علم الأنسجة 1'
               },
               {  
                id: 's3',
               time:'1:00',
               month:2,
               history:'03',
               name:'الثقافة القومية'
               },
               {  
                id: 's4',
               time:'2:00',
               month:2,
               history:'05',
               name:'اللغة الإنكليزية (3) '
               },
               {  
                id: 's5',
               time:'9:00',
               month:2,
               history:'09',
               name:'الكيمياء الحيوية الطبية والبيولوجيا الجزيئية '
               },
               {  
                id: 's6',
               time:'12:00',
               month:2,
               history:'12',
               name:'علم النفس السلوكي'
               },
               {  
                id: 's7',
               time:'1:00',
               month:3,
               history:'01',
               name:'علم الجنين الطبي '
               },

    ]
    const DummySubjectsSeconde =[
        {
            id:'s8',
            time:'9:00',
            history:'26',
            month:1,
            name:'التشريح 2 (أحشاء العنق والصدر والبطن والحوض)'
            },
            {  
                id: 's9',
               time:'9:00',
               history:'28',
               month:1,
               name:'علم الأنسجة 2'
            },
            {  
                id: 's10',
               time:'12:00',
               history:'20',
               month:2,
               name:'الفيزيولوجيا الطبية السوية والمرضية (1) '
            },
            {  
                id: 's11',
               time:'1:00',
               history:'25',
               month:2,
               name:'اللغة الإنكليزية (4)'
            },
            {  
                id: 's12',
               time:'9:00',
               history:'27',
               month:2,
               name:'الكيمياء الحيوية الطبية والسريرية (1)'
            },
            {  
                id: 's13',
               time:'2:00',
               history:'28',
               month:2,
               name:'اللغة العربية'
            },
            {  
                id: 's14',
               time:'9:00',
               history:'03',
               month:3,
               name:'مهارات التواصل'
            },
    ]

    const [checked, setChecked] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

return(
    <section className={classes.products}>
    <h2>اختر مواد من السنة الثانية</h2>

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


export default SecondeYear;