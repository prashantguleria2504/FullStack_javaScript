
function checkage(age)
{
    if (age <=10)
    {
        console.log("Not eligible.");
        
    }
    else {
        console.log("eligibile for voting.");
        
    }

}
checkage(20);
checkage(9);
checkage(0);

// check number is 0

function checkNumber(number)
{
    if(number > 0)
    {
        console.log("positive number.");
        
    }
    else if(number < 0)
    {
        console.log("negative number.");
        
    }
    else{
        console.log("number is zero.");
        
    }
}
checkNumber(0);

// nested if else

function checkGrade(score) {
    let grade;
    if(score >=90){
        grade = "A";
    }
    else{
        if(score >=80){
            grade = "B";
        }
        else {
            if(score >=70){
                grade = "C";
            }
            else{
                grade = "D";
            }
        }
    }
    console.log(grade);
    
}
checkGrade(98);
checkGrade(60);
checkGrade(80);
checkGrade(70);

// launch browser : code not correct 


    let browser = "firefox";
    if(browser == "Chrome"){
        console.log("launch chrome.");
    }
    if(browser == "edge"){
        console.log("launch edge.");
    }
    if(browser == "firefox"){
        console.log("launch firefox.");
    }
    else{
        console.log("Cross check browser.");
        
    }

// just if (NOT) -- checking falsy value

let data
if(!data) throw Error("No Valid data provided")



