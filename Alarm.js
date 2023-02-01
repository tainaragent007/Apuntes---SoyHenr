// Mon - 7am
// Tue - Thurs - 4am
// Fri - 9am
// Sat - Sun - 8am

let day = "Wednesday"

switch(day){
    case 'Monday':
        console.log("7am");
        break;
    case 'Tuesday':
    case 'Wednesday': 
    case 'Thursday':
        console.log("4am");
        break;
    case 'Friday':
        console.log("9am");
        break;
    case 'Saturday':
    case 'Sunday':
        console.log("8am");
        break;
    default:
        console.log("7am - LOL")

}

console.log("Bye");
