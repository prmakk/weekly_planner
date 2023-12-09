import React from 'react'
import WeekDayCard from './WeekDayCard'

const WeekDaysBoard = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Notes']

  return (
    <div className='weekDaysBoard'>
        {days.map((day) => 
          <WeekDayCard day={day} key={day}/>
        )}
    </div>
  )
}

export default WeekDaysBoard