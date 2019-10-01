import React from 'react';
import './App.css';
import Calendar from './components/Calendar';
import moment from 'moment';
import locale from 'moment/locale/ru';

function App() {
  moment.locale('ru', locale);
  const now = moment();

  return (
    <Calendar date={now} />
  );
}

export default App;
