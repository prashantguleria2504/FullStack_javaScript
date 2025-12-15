
function checkDayofTheWeek(dayofWeek){

    let day;
    switch (dayofWeek) {
        case 0:
                day = "Sunday"; 
                break;
        case 1:
                day = "Monday"; 
                break;  
        case 2:
                day = "Tuesday"; 
                break;    
        case 3:
                day = "Wednesday"; 
                break; 
        case 4:
                day = "Thrusday"; 
                break;    
        case 5:
                day = "Friday"; 
                break;   
        case 6:
                day = "Saturday"; 
                break;                    
            
    
        default:
            console.log("Enter valid week day !!");
            
            break;
    }
    console.log(day);
    
}
checkDayofTheWeek(6);
//console.log(checkDayofTheWeek(5));


// Cross browser

function checkBrowser(browser){

    switch (browser) {
        case "Chrome":
            console.log("Chrome launched...");
            break;

        case "edge":
            console.log("edge launched...");
            break;   
            
        case "firefox":
            console.log("firefox launched...");
            break;       
    
        default:
            console.log("Enter valid browser!!!");
            
            break;
    }
}
checkBrowser("opera");