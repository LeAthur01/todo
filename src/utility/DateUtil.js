class DateUtil {
    isToday(date) {
        let today = new Date();
        return today.toDateString() === date.toDateString();
    }

    isDateInThisWeek(date) {
        const todayObj = new Date();
        const todayDate = todayObj.getDate();
        const todayDay = todayObj.getDay();
      
        // get first date of week
        const firstDayOfWeek = new Date(todayObj.setDate(todayDate - todayDay + 1));
        firstDayOfWeek.setHours(0);
        firstDayOfWeek.setMinutes(0);
        firstDayOfWeek.setSeconds(0);
        firstDayOfWeek.setMilliseconds(0);

        // get last date of week
        const lastDayOfWeek = new Date(firstDayOfWeek);
        lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 7);
      
        // if date is equal or within the first and last dates of the week
        // console.log('first date of the week' + ' ' + firstDayOfWeek);
        // console.log('the checking date: ' + date);
        // console.log('the last day of the week ' + lastDayOfWeek);
        return date >= firstDayOfWeek && date <= lastDayOfWeek;
    }
}


const dateUtil = new DateUtil();
export default dateUtil;