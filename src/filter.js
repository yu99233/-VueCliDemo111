var moment = require('moment');

export default {
  DatetimeFormat(time) {
    if (time) {
      return moment(time).format('YYYY-MM-DD HH:mm');
    }
  }
}