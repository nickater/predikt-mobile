/**
 * Formats a Date object to a string in the format "Month Day, Year".
 * Example: January 1, 2023
 *
 * @param {Date} date - The date to format.
 * @returns {string} The formatted date string.
 */
export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return date.toLocaleDateString(undefined, options)
}

/**
 * Formats a Date object to a string in the format "HH:MM AM/PM".
 * Example: 01:30 PM
 *
 * @param {Date} date - The date to format.
 * @returns {string} The formatted time string.
 */
export const formatTime = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
  }
  return date.toLocaleTimeString(undefined, options)
}

/**
 * Formats a Date object to a string in the format "Month Day, Year HH:MM AM/PM".
 * Example: January 1, 2023 01:30 PM
 *
 * @param {Date} date - The date to format.
 * @returns {string} The formatted date and time string.
 */
export const formatDateTime = (date: Date): string => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
  }
  return `${date.toLocaleDateString(undefined, dateOptions)} ${date.toLocaleTimeString(undefined, timeOptions)}`
}

/**
 * Formats a Date object to a string in the format "MM/DD/YY".
 * Example: 01/01/23
 *
 * @param {Date} date - The date to format.
 * @returns {string} The formatted short date string.
 */
export const formatShortDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  }
  return date.toLocaleDateString(undefined, options)
}

/**
 * Formats a Date object to a string in the format "HH:MM".
 * Example: 13:30
 *
 * @param {Date} date - The date to format.
 * @returns {string} The formatted short time string.
 */
export const formatShortTime = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
  }
  return date.toLocaleTimeString(undefined, options)
}
