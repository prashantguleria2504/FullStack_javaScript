
class Page{

    constructor(){

    }


    // Re-usable method

    navigate(url) {
        console.log(`>>>Navigating to the give url : ${url}`);   
    }


    clickEle(ele){
        console.log(`>>>Clicking to the give button : ${ele}`);
    }

}

module.exports = Page


// This parent class is inherited by Page_login.js.
