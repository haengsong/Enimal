import React,{useEffect,useState} from 'react';
import './MakeCalendar.scss'

import { getMyDayCheck } from '@apis/mypage';

import stamp from '@images/stamp.png'
import { transString } from "./CalcDate";



/*
 * 현재 날짜를 key값 형식으로 변환
 * key ex) 2021.10.11
 */

const returnIdx = (order, year, month, day) => {
    if (order === 'PREV') {
        if (month === 0) {
            return transString(year - 1, 12, day)
        }
        return transString(year, month, day)
    }
    if (order === 'NEXT') {
        if (month === 11) {
            return transString(year + 1, 1, day)
        }
        return transString(year, month + 2, day)
    }
    
    return transString(year, month + 1, day)
}



const MakeCalendar = ({ year, month, firstDay, lastDate }) => {
    const [myDay,setMyDay] = useState([]);
    const result = []
    useEffect(()=>{
        getMyDayCheck().then(res=>{
            const DayList = []
            const DATA = res.data
            const keyList = Object.keys(DATA)
            for (let i=1; i<=keyList.length; i+=1){
                const DATE = new Date(DATA[i]);
                const Checkday=`${DATE.getFullYear()}.${(DATE.getMonth()+1)}.${DATE.getDate()}`;
                DayList.push(Checkday)
            }
            setMyDay(DayList)
        })
    },[])
    const makeDay = (week) => {
        const result2 = []
        // 첫 주 
        if (week === 1) {
            const prevLastDate = parseInt(new Date(year, month, 0).getDate(), 10);
            for (let i = 1; i <= 7; i += 1) {
                // 저번 달 날짜 
                if (i <= firstDay) {
                    const now = prevLastDate - firstDay + i
                    const idx = returnIdx('PREV', year, month, now)
                    result2.push(
                        <td className="diff day" key={idx}>
                            <h1>{now}</h1>
                            { myDay.includes(`${year}.${month}.${now}`) ?
                            <img className='checkStamp' src={stamp} alt='#' /> 
                        : null}
                        </td>)
                }
                // 현재 달 날짜
                else {
                    const now = i - firstDay
                    const idx = returnIdx('', year, month, now)

                    result2.push(
                        <td className='day' key={idx}>
                            <h1>{now}</h1>
                            { myDay.includes(`${year}.${month+1}.${now}`) ?
                            <img className='checkStamp' src={stamp} alt='#' />
                        : null}
                        </td>)
                }
            }
        }
        else {
            const startDate = ((week - 1) * 7)
            for (let i = startDate; i <= week * 7 - 1; i += 1) {
                // 현재 달 날짜
                if (i - firstDay < lastDate) {
                    const now = i - firstDay + 1
                    const idx = returnIdx('', year, month, now)

                    result2.push(
                        <td className='day' key={idx} >
                            <h1>{now}</h1>
                            { myDay.includes(`${year}.${month+1}.${now}`) ?
                            <img className='checkStamp' src={stamp} alt='#' />
                        : null}
                        </td>)
                }
                // 다음 달 날짜
                else {
                    const now = i - lastDate - firstDay + 1
                    const idx = returnIdx('NEXT', year, month, now)

                    result2.push(
                        <td className="diff day" key={idx}>
                            <h1>{now}</h1>
                            { myDay.includes(`${year}.${month}.${now}`) ?
                            <img className='checkStamp' src={stamp} alt='#' />
                        : null}
                        </td>)
                }
            }
        }
        return result2
    }

    // 주 계산
    const week = Math.ceil((firstDay + lastDate) / 7)
    for (let i = 1; i <= week; i += 1) {
        result.push(<tr key={week + i}>{makeDay(i)}</tr>);
    }
    return result;
};

export default MakeCalendar
