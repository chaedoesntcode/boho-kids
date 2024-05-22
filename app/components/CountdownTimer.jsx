'use client'
import React, { useEffect } from 'react'

const CountdownTimer = () => {

  useEffect(() => {
    const countdown = () => {
      // Get and calculate difference until date
      const countDate = new Date("Jun 20, 2024 00:00:00").getTime();
      const now = new Date().getTime();
      const timeRemaining = countDate - now;
  
      // Define time in ms
      const seconds = 1000;
      const minutes = seconds * 60;
      const hours = minutes * 60;
      const days = hours * 24;
  
      // Calculate remaining time
      const daysRemaining = Math.floor(timeRemaining / days);
      const hoursRemaining = Math.floor((timeRemaining % days) / hours);
      const minutesRemaining = Math.floor((timeRemaining % hours) / minutes);
      const secondsRemaining = Math.floor((timeRemaining % minutes) / seconds);
  
      // Get and update days element
      const daysEl = document.querySelector('.days');
      const daysUnitEl = document.querySelector('.days-unit');
      if(daysEl && daysUnitEl) {
        daysEl.innerText = daysRemaining;
        daysUnitEl.innerText = daysRemaining === 1 ? 'day' : 'days';
      }

      // Get and update hours element
      const hoursEl = document.querySelector('.hours');
      const hoursUnitEl = document.querySelector('.hours-unit');
      if(hoursEl && hoursUnitEl) {
        hoursEl.innerText = hoursRemaining;
        hoursUnitEl.innerText = hoursRemaining === 1 ? 'hour' : 'hours';
      } 

      // Get and update minutes element
      const minutesEl = document.querySelector('.minutes');
      const minutesUnitEl = document.querySelector('.minutes-unit');
      if(minutesEl && minutesUnitEl) {
        minutesEl.innerText = minutesRemaining;
        minutesUnitEl.innerText = minutesRemaining === 1 ? 'minute' : 'minutes';
      }

      // Get and update seconds element
      const secondsEl = document.querySelector('.seconds');
      const secondsUnitEl = document.querySelector('.seconds-unit');
      if(secondsEl && secondsUnitEl) {
        secondsEl.innerText = secondsRemaining;
        secondsUnitEl.innerText = secondsRemaining === 1 ? 'second' : 'seconds';
      }
    }

    countdown();

    const interval = setInterval(countdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex gap-x-2 mt-5'>
        <div className='countdown-item'>
            <h3 className='h3 days'></h3>
            <p className='days-unit'></p>
        </div>
        <div className='countdown-item'>
            <h3 className='h3 hours'></h3>
            <p className='hours-unit'></p>
        </div>
        <div className='countdown-item'>
            <h3 className='h3 minutes'></h3>
            <p className='minutes-unit'>minutes</p>
        </div>
        <div className='countdown-item'>
            <h3 className='h3 seconds'></h3>
            <p className='seconds-unit'>seconds</p>
        </div>
    </div>
  )
}

export default CountdownTimer