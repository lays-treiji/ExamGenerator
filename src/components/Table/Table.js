//import { useEffect } from "react";
//import { useState } from "react";
import {useSelector } from "react-redux";
import classes from './Table.module.css';

const Table =()=>{
    const subjects = useSelector((state)=>state.exam.subjects);

    const filteredMonthHandler =(month)=>{
        return subjects.filter(subjects=>subjects.month===month)
    }

    const monthOne = filteredMonthHandler(1);
    const monthTwo = filteredMonthHandler(2);
    const monthThree =filteredMonthHandler(3);
    
    // const sortedSubjects = Array.from(subjects).sort((a, b) => {
    //     const historyA = Array.from(a.history, Number);
    //     const historyB = Array.from(b.history, Number);
       
    //     for (let i = 0; i < historyA.length; i++) {
    //        if (historyA[i] !== historyB[i]) {
    //          return historyA[i] - historyB[i];
    //        }
    //     }  
    //     return 0;
    //    });

       const sortedSubjectsOne = Array.from(monthOne).sort((a, b) => {
        const historyA = Array.from(a.history, Number);
        const historyB = Array.from(b.history, Number);
       
        for (let i = 0; i < historyA.length; i++) {
           if (historyA[i] !== historyB[i]) {
             return historyA[i] - historyB[i];
           }
        }  
        return 0;
       });

       const sortedSubjectsTwo = Array.from(monthTwo).sort((a, b) => {
        const historyA = Array.from(a.history, Number);
        const historyB = Array.from(b.history, Number);
       
        for (let i = 0; i < historyA.length; i++) {
           if (historyA[i] !== historyB[i]) {
             return historyA[i] - historyB[i];
           }
        }  
        return 0;
       });

       const sortedSubjectsThree = Array.from(monthThree).sort((a, b) => {
        const historyA = Array.from(a.history, Number);
        const historyB = Array.from(b.history, Number);
       
        for (let i = 0; i < historyA.length; i++) {
           if (historyA[i] !== historyB[i]) {
             return historyA[i] - historyB[i];
           }
        }  
        return 0;
       });
      
       
    
    return(
     <section className={classes.container}>
         
          <table className={classes.container}>
                <thead className={classes.header}>
                    <tr>
                        <th>التاريخ</th>
                        <th>الوقت</th>
                        <th>اسم المادة</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    sortedSubjectsOne.map((data)=>(
                        <tr key={data.id} className={classes.row}>
                            <td>{data.history}/{data.month}</td>
                            <td>{data.time}</td>
                            <td>{data.name}</td>
                        </tr>
                    ))}
                      {
                    sortedSubjectsTwo.map((data)=>(
                        <tr key={data.id} className={classes.row}>
                            <td>{data.history}/{data.month}</td>
                            <td>{data.time}</td>
                            <td>{data.name}</td>
                        </tr>
                    ))}
                      {
                    sortedSubjectsThree.map((data)=>(
                        <tr key={data.id} className={classes.row}>
                            <td>{data.history}/{data.month}</td>
                            <td>{data.time}</td>
                            <td>{data.name}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
          
     </section>
    )
}
export default Table;