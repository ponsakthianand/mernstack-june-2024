import { format, render, cancel, register } from 'timeago.js';

const checkTime = (value) => {
  const date = format(value, 'en_US');

  console.log(date);
}

checkTime('2016-06-12')