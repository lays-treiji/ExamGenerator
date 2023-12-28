
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SubjectItem from "./SubjectItem";
import classes from './Year..module.css';

const ThirdYear =()=>{

    const DummySubjectsFirst = [
    
        {  
             id: 't1',
            time:'12:00',
            month:1,
            history:'22',
            name:'الوبائيات ومنجية البحث والإحصاء الطبي'
            },
            {  
                id: 't2',
               time:'9:00',
               month:1,
               history:'28',
               name:'التشريح(3)(الجملة العصبية)'
               },
               {  
                id: 't3',
               time:'1:00',
               month:2,
               history:'03',
               name:'اخلاقيات الممارسة الطبية و تشريعاتها'
               },
               {  
                id: 't4',
               time:'2:00',
               month:2,
               history:'06',
               name:'الأحياء الدقيقة(1)(الجراثيم و الفيروسات)'
               },
               {  
                id: 't5',
               time:'9:00',
               month:2,
               history:'10',
               name:'الفيزيولوجيا الطبية السوية والمرضية(2)'
               },
               {  
                id: 't6',
               time:'12:00',
               month:2,
               history:'14',
               name:'الكيمياء الحيوية الطبية والسريرية(2)'
               },
               {  
                id: 't7',
               time:'1:00',
               month:3,
               history:'02',
               name:'مهارات سريرية'
               },

    ]
    const DummySubjectsSeconde =[
        {
            id:'t8',
            time:'9:00',
            history:'25',
            month:1,
            name:'علم الأدوية العام'
            },
            {  
                id: 't9',
               time:'9:00',
               history:'28',
               month:1,
               name:'الأحياء الدقيقة(2)(الطفيليات و الفطور)'
            },
            {  
                id: 't10',
               time:'12:00',
               history:'22',
               month:2,
               name:'الصحة العامة المهنية'
            },
            {  
                id: 't11',
               time:'1:00',
               history:'26',
               month:2,
               name:'علم الأمراض(1)'
            },
            {  
                id: 't12',
               time:'9:00',
               history:'27',
               month:2,
               name:'مهارات جراحية و إسعافية'
            },
            {  
                id: 't13',
               time:'2:00',
               history:'28',
               month:2,
               name:'علم المناعة والمخبريات الدموية'
            },
            {  
                id: 't14',
               time:'9:00',
               history:'03',
               month:3,
               name:'الطب المسند بالدليل'
            },
    ]

    const [checked, setChecked] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

return(
    <section className={classes.products}>
    <h2>اختر مواد من السنة الثالثة</h2>

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


export default ThirdYear;