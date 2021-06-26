const dayjs = require('dayjs')
require('dayjs/locale/ru')

const defaultFormat = 'DD MMM YYYY'
dayjs.locale('ru') 

function dayjsFilter(date, format = defaultFormat) {
  return dayjs(date).format(format)
}

module.exports = dayjsFilter