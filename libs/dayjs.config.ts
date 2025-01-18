import baseDayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

baseDayjs.extend(isSameOrBefore)
baseDayjs.extend(isSameOrAfter)

export default baseDayjs
