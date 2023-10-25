//import React from "react";
import "./PrayerTimesTest.css";
import React, { useState, useEffect } from 'react';

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
    fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSeZ26h2oufYXq0i04ioOoH7aDkOHl0pvQ9E8mbIzxpVsElIoeUq0FJhwRgHkaiRlPn6IEcoM-0vty9/pubhtml')
      .then((response) => response.text())
      .then((data) => {
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
      });
  }, []);

  return (
    <div id="prayerTimes">
      <p id="dateElement">{prayerData.date}</p>
      <p id="fajrElement">
        Fajr: {prayerData.fajr.time}, Iqama: {prayerData.fajr.iqama}
      </p>
      <p id="dhuhrElement">
        Dhuhr: {prayerData.dhuhr.time}, Iqama: {prayerData.dhuhr.iqama}
      </p>
      <p id="asrElement">
        Asr: {prayerData.asr.time}, Iqama: {prayerData.asr.iqama}
      </p>
      <p id="maghribElement">
        Maghrib: {prayerData.maghrib.time}, Iqama: {prayerData.maghrib.iqama}
      </p>
      <p id="ishaElement">
        Isha: {prayerData.isha.time}, Iqama: {prayerData.isha.iqama}
      </p>
    </div>
  );
}

export default PrayerTimes;
