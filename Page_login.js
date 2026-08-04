const page = require("./pageClass")


class LoginPage extends page{

    constructor(){
        super()
    }


    // child class method to click login btn.

    clickLoginBtn(){
        this.clickEle("loginBtn")
    }


}

// object creation

let loginPg = new LoginPage();

// calling own method.
loginPg.clickLoginBtn()

// calling parent class method
loginPg.navigate("www.google.com");
