const getTodayInString = () => {
  // get today in Month Date like NOV 12
  const today = new Date()
  // get month in string like NOV, DEC
  const month = today.toLocaleString('en-US', { month: 'short' })
  const date = today.getDate()
  return {
    month: month,
    date: date,
  }
}

export default getTodayInString