/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days{
  mon= "Monday",
  tue = 'Tuesday',
  wed = 'Wednesday',
  thu = 'Thursday',
  fri = 'Friday',
  sat = 'Saturday',
  sun = 'Sunday'
}
function isWeekend(day: Days): boolean {
  if (day === Days.sat || day ===  Days.sun ) {
    return true
  } else {
    return false
  }
}
