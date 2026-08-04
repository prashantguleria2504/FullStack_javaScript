const page = require("./pageClass")


class LoginPage extends page{

    constructor(){
        super()
        console.log(">> Calling Child class constructor.");
        this.runDate = new Date()
        console.log(`The run date is : ${this.runDate}`);
    }

    // getter property

    get loginBtnGet(){
        return "loginBtnEle"
    }

    // child class method to click login btn.

    clickLoginBtn(){
       // this.clickEle("loginBtn")   // if calling directly parent class method
        this.clickEle(this.loginBtnGet)   // calling getter.
  
    }

}

// object creation

let loginPg = new LoginPage();

// calling own method.
loginPg.clickLoginBtn()

// calling parent class method
loginPg.navigate("www.google.com");
