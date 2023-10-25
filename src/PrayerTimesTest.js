import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone'; // Import moment-timezone
import './PrayerTimesTest.css';

function PrayerTimes() {
  const [prayerData, setPrayerData] = useState({
    date: 'Fetching data...',
    fajr: { time: '-', iqama: '-' },
    dhuhr: { time: '-', iqama: '-' },
    asr: { time: '-', iqama: '-' },
    maghrib: { time: '-', iqama: '-' },
    isha: { time: '-', iqama: '-' },
  });

  useEffect(() => {
    fetchPrayerData();
    const interval = setInterval(() => {
        const sanAntonioTime = moment.tz('America/Chicago');
        const formattedTime = sanAntonioTime.format('h:mm A');
        setCurrentTime(formattedTime);
      }, 1000);
      return () => clearInterval(interval);
  }, []);

  const fetchPrayerData = async () => {
    try {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSeZ26h2oufYXq0i04ioOoH7aDkOHl0pvQ9E8mbIzxpVsElIoeUq0FJhwRgHkaiRlPn6IEcoM-0vty9/pub?output=csv');
      const data = await response.text();
      const rows = data.split('\n');
      const headerRow = rows[0].split(',');

      const dateIndex = headerRow.indexOf('Date');
      const fajrIndex = headerRow.indexOf('Fajr');
      const dhuhrIndex = headerRow.indexOf('Dhuhr');
      const asrIndex = headerRow.indexOf('Asr');
      const maghribIndex = headerRow.indexOf('Maghrib');
      const ishaIndex = headerRow.indexOf('Isha');
      const iqamaFajrIndex = headerRow.indexOf('Iqama Fajr');
      const iqamaDhuhrIndex = headerRow.indexOf('Iqama Dhuhr');
      const iqamaAsrIndex = headerRow.indexOf('Iqama Asr');
      const iqamaMaghribIndex = headerRow.indexOf('Iqama Maghrib');
      const iqamaIshaIndex = headerRow.indexOf('Iqama Isha');

      const today = new Date();
      const todayDate = today.toISOString().slice(0, 10);
      const todayRow = rows.find((row) => row.includes(todayDate));
      const todayData = todayRow.split(',');

      setPrayerData({
        date: todayData[dateIndex],
        fajr: {
          time: todayData[fajrIndex],
          iqama: todayData[iqamaFajrIndex],
        },
        dhuhr: {
          time: todayData[dhuhrIndex],
          iqama: todayData[iqamaDhuhrIndex],
        },
        asr: {
          time: todayData[asrIndex],
          iqama: todayData[iqamaAsrIndex],
        },
        maghrib: {
          time: todayData[maghribIndex],
          iqama: todayData[iqamaMaghribIndex],
        },
        isha: {
          time: todayData[ishaIndex],
          iqama: todayData[iqamaIshaIndex],
        },
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Define an array of prayer times in the order you want to highlight
  const prayerTimes = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
  const [currentTime, setCurrentTime] = useState('');

  // Function to calculate the current prayer
  const getCurrentPrayer = () => {
    const sanAntonioTime = moment.tz('America/Chicago'); // San Antonio timezone
    const currentTime = sanAntonioTime.format('HH:mm');
    for (const prayer of prayerTimes) {
      if (currentTime < prayerData[prayer].time) {
        return prayer;
      }
    }
    return null; // Return null if all prayers have passed
  };

  // Function to format the date
  function formatDate(dateString) {
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString(undefined, options);
    const day = date.getDate();
    const suffix = day === 1 ? 'st' : day === 2 ? 'nd' : day === 3 ? 'rd' : 'th';
    return formattedDate.replace(/\d{1,2}/, (day) => day + suffix);
  }

  // Check if the current day is Friday
  const isFriday = moment.tz('America/Chicago').isoWeekday() === 5;

  // Data Display
  return (
    <div id="prayerTimes">
       <div>
        <h2 id="dateElement">{formatDate(prayerData.date)}</h2>
        <h3 id="currentTimeElement">Current Time in San Antonio: {currentTime}</h3>
      </div>
      <div className="prayer-info">
        {prayerTimes.map((prayer) => (
          <div className={`prayer-item ${prayer === getCurrentPrayer() ? 'highlighted' : ''}`} key={prayer}>
            <h3>{prayer.charAt(0).toUpperCase() + prayer.slice(1)}</h3>
            <p>Time: {prayerData[prayer].time}</p>
            <p>Iqama: {prayerData[prayer].iqama}</p>
          </div>
        ))}
      </div>
      {isFriday && (
        <div>
          <h2>Jummah Prayer Times</h2>
          <p>1st Jummah: 1:00 PM</p>
          <p>2nd Jummah: 2:00 PM</p>
        </div>
      )}
    </div>
  );
}

export default PrayerTimes;
