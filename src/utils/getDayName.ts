export function getDayName(dateString:string|Date) {
    const date = new Date(dateString);
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = date.getDay(); // Get the day index (0-6)
    const dayName = dayNames[dayIndex]; // Get the day name from the array
    return dayName;
  }
  
  const dayName = getDayName("2024-03-18");
  console.log("Day name:", dayName); // Output: "Saturday"
  