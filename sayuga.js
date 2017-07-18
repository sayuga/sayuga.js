
(function(window){
    //I recommend this
    'use strict';
    function define_Library(){
        var Sayuga = {};        
		
        Sayuga.greet = function(){
            alert("Welcome to the Sayuga JavaScript library. More to come soon");
        }					
		
        return Sayuga;
    }
    //define globally if it doesn't already exist
    if(typeof(Sayuga) === 'undefined'){
        window.Sayuga = define_Library();
    }
    else{
        console.log("Library already defined.");
    }
})(window);
