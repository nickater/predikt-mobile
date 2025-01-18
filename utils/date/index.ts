import dayjs from '@/libs/dayjs.config'

export const DateUtils = {
  now: () => dayjs(),
  format: (date: Date, format: string) => dayjs(date).format(format),
  isBefore: (date: Date, compare: Date) => dayjs(date).isBefore(compare),
  isAfter: (date: Date, compare: Date) => dayjs(date).isAfter(compare),
  isSame: (date: Date, compare: Date) => dayjs(date).isSame(compare),
  isSameOrBefore: (date: Date, compare: Date) =>
    dayjs(date).isSameOrBefore(compare),
  isSameOrAfter: (date: Date, compare: Date) =>
    dayjs(date).isSameOrAfter(compare),
  diff: (date: Date, compare: Date, unit: dayjs.OpUnitType) =>
    dayjs(date).diff(compare, unit),
  isValid: (date: Date) => dayjs(date).isValid(),
  isDayjs: (date: any) => dayjs.isDayjs(date),
  fromDayjs: (date: dayjs.Dayjs) => dayjs(date).toDate(),
  toDayjs: (date: Date) => dayjs(date),
}
