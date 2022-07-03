import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import moment, {Moment} from 'moment';


function App() {
    const [currentDate, setCurrentDate] = useState(moment(new Date))
    const endMonthDay = moment(currentDate).endOf("month").endOf("week")
    const startMonthDay = moment(currentDate).startOf("month").startOf("week")
    const calendarShowingDaysArray: Moment[][] = []
    let dateForCycle = startMonthDay.clone().subtract(1, "day")
    while (dateForCycle.isBefore(endMonthDay, "day")) {
        calendarShowingDaysArray.push(Array(7).fill(0).map(() => dateForCycle.add(1, "day").clone()) as unknown as Moment[])
    }
    console.log({calendarShowingDaysArray})
    return (
        <>

            {
                calendarShowingDaysArray.map(week => {
                    return <div style={{
                        width:"300px",
                        display: "grid",
                        gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr 1fr"
                    }}>{week.map((day) => {
                        return <p style={{
                            marginLeft: "10px",
                            backgroundColor: +day.format("D").toString() === +new Date().getDate().toString()? "red":"transparent"
                        }}>{day.format("D").toString()}</p>
                    })}</div>
                })
            }
            <button onClick={() => {
                setCurrentDate(currentDate.clone().subtract(1, "month"))
            }}>-1 month
            </button>
            <button onClick={() => {
                setCurrentDate(currentDate.clone().add(1, "month"))
            }}>+1 month
            </button>

        </>
    );
}

export default App;
