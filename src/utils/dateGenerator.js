import { now } from 'lodash';

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const currentDate = new Date(now());

export const terminalHeaderDate = `${DAYS_OF_WEEK[currentDate.getDay()]} ${MONTHS[currentDate.getMonth()]} ${currentDate.getDate()}`;
