// getDays(

//   new Date("June 14, 2019"),

//   new Date("June 20, 2019")

// ) ➞ 6
// var myBirthday = new Date("November 29, 1997");
// var christmas = new Date("December 25, 1997");

 function dayCalendar(birthday,christmas) {
    
    let date1 = new Date(christmas);
    let date2 = new Date(birthday);

    // var myBirthday = new Date("November 29, 1997");
    // var christmas = new Date("December 25, 1997");
    var differenceTime = date1.getTime() - date2.getTime();
    var differenceDays = differenceTime / (1000 * 3600 * 24);
    
    return differenceDays;

 }

console.log(dayCalendar("November 29, 1997","December 25, 1997"));