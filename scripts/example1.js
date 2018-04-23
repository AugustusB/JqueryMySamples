(function(ns1, ns2) {

    ns2.Ex1 = function Ex1(){
        //private members 
        var selectById = function selectById(id){
            $('#' + id).html('Hello World');
        },
        // Selecting elements by their attributes 
        selectByAttribute = function selectByAttribute(attribute){
            $(attribute).each(function(){
                $(this).css('border', '3px solid red');
            });
        },
        
        selectInput = function selectInput(input){
         // Selecting specific inputs in form
            $(input).each(function(){
                $(this).css('background-color', 'Yellow');
            });
        },
        
        selectAllInputs = function selectAllInputs(allInput){
            // Selecting all inputs in form
            $(allInput).each(function(){
                console.log(this);
                $(this).val('Set by input selector');
            });
        },
    
        selectByContains = function selectByContains(contians){
            $(contians).each(function (){
                $(this).html("changed by contains selector");
            });
        },

        selectTrOddEven = function selectTrOddEven(sel){
            $(sel).css('background-color', 'Green');
        },

        selectEndStart = function selectEndStart(endStartWith){
            alert($(endStartWith).html());
        };
    
        //public members 
        return {
            selectById : selectById,
            selectByAttribute: selectByAttribute,
            selectInput: selectInput,
            selectAllInputs: selectAllInputs,
            selectByContains: selectByContains,
            selectTrOddEven: selectTrOddEven,
            selectEndStart: selectEndStart
        };
    };

 })(window.Gus = window.Gus || {}, window.Gus.ExJq = window.Gus.ExJq || {});