
//console.log("Loading pageClass.js");
class Page{

    runDate

    constructor(){
        console.log(">> Calling parent constructor.");
        this.runDate     
    }

    // Re-usable method

    navigate(url) {
        console.log(`>>>Navigating to the give url : ${url}`);   
    }

    clickEle(ele){
        console.log(`>>>Clicking to the give button : ${ele}`);
    }

}

module.exports = Page;

// This is parent class inherited by Page_login.js
