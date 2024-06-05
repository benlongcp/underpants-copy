// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    //returns value as-is
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

//creates a function _.typeof that takes one parameter
_.typeOf = function(value){
    //checks if object is an array
    if (Array.isArray(value)){
        return "array";
    } else if (value === null){
        return "null";
    } else{ 
        //else returns the value with the typeof operator
        return typeof value;
    }
}




/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/


//creates a function that takes an array and a number as parameters
_.first = function(arr, num){
    
    //checks if the array is NOT an array
    if(!Array.isArray(arr)){
        return []; //if not returns an empty array
        //check if the number is NOT equal to typeof "number", 
       
    } else if (typeof num !== "number"){
         //return the 0th element in the array
        return arr[0];
    } else if (num <= 0){
        return [];
        //else return the sliced portion of the array equal to the input number
    } else{
        return arr.slice(0, num);
    }
        
}





/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/


//creates function _.last
_.last = function(arr, num){
    //checks if the array is not an array
    if (!Array.isArray(arr)){
        return []; //if not returns an empty array
    //check if the number is NOT equal to typeof "number", 
   
} else if (typeof num !== "number"){
     //return the 0th element in the array
    return arr[arr.length - 1];
} else if (num <= 0){
    return [];
    //else return the sliced portion of the array equal to the negative input number (sliced from the end)
} else{
    return arr.slice(-num);
}
    
}



/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(arr, val){
    //loop through the array
    for (let i = 0; i < arr.length; i++){
        //check if the current index of arr contains the input val
        if (arr[i] === val){
            return i;
        }
    }
    return -1;
}



/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

//creates a funciton taking array and value params
_.contains = function(arr, val){
    //create a truth-o-meter
    let truth = 0;
    //loop through the array
    for (let i = 0; i < arr.length; i++){
        //check to see if each array index equals value
        if(arr[i] === val){
            //make the truth-o-meter positive
            truth = 1;
        }
    }
        //if the truth meter is positive, return true, else return false
        return truth > 0 ? true : false;


}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

//creates a function that takes a collection and a function as parameters
_.each = function(coll, func){
    //check is object is an array
    if (Array.isArray(coll)){
        //iterate through the array
        for (let i = 0; i < coll.length; i++){
            //call the function for each element. its index, and the collection
            func(coll[i], i, coll);
            }       
    } else {
        //iterate through the object
        for (let key in coll){
            //call the function for each property value, the key, and the collection
            func(coll[key], key, coll);
        }
    }

}


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/



_.unique = function(arr){
    //create empty array to return later
    let noDupes = [];
    //loop through the array
    for (let i = 0; i < arr.length; i++){
        //use indexOf to check if noDupes contains the current array index value
        if (_.indexOf(noDupes, arr[i]) === -1){
            //if it does not contain the current array index, push the array index to noDupes
            noDupes.push(arr[i]);
        }
    }
    return noDupes;
}






/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

//_.filter function takes an array and a function as parameters
_.filter = function(arr, func){
    //create an empty array to return later
    let retArr = [];
    //loop through the array
    for (let i = 0; i < arr.length; i++){
        //check if called input func for each array element is true
        if (func(arr[i], i, arr)){
            //push this array value to our retArr
            retArr.push(arr[i]);
        }

    }
    //returns retArr
    return retArr;
}









/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

//_.reject function takes an array and a funciton as parameters
_.reject = function(arr, func){
    //create empty array to return later
    let retArr = [];
    //loop through the array
    for (let i = 0; i < arr.length; i++){
        //call func for each element and check to see if false
        if(func(arr[i], i, arr) === false){
            retArr.push(arr[i]);

        }
    }
    return retArr;
   
}







/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

// partition function takes an array and a function as parameterers
_.partition = function(arr, func){
    //create array to return later as well as 2 empty sub-arrays to push to it
    let retArr = [];
    let falArr = [];
    let truArr = [];
    //loop through input array
    for (let i = 0; i < arr.length; i++){
        //check if func called on each iterated element with the element, index, and array as arguments is true
        if (func(arr[i], i, arr)){
            //if it is push indexed value to truArr
            truArr.push(arr[i]);
        } else {
            falArr.push(arr[i]);
        }
    }
    retArr.push(truArr, falArr);
    return retArr;
}








/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func){
    //create empty array to return
    let retArr = [];
    //iterates through a collection and returns a new collection where each value has been transformed by a callback funciton
    //check if collection is an array
    if (Array.isArray(collection)){
        //if it is loop through the array with a for loop
        for (let i = 0; i < collection.length; i++){
            //pass the index and index value to the func and push to return array
            retArr.push(func(collection[i], i, collection));
        }
    } else {
        //else loop through the presumed object with a for in loop
        for (let key in collection){
            //else pass the value and key to the func and push output to return array
            retArr.push(func(collection[key], key, collection));
        }
    }
    return retArr;

}



/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/


//pluck is a function that takes an array containing objects and a prop value
_.pluck = function (arrObjs, prop){
    //return the result of invoking the function map, called with the array of objects and a cb function returns the value at each target key (prop)
    return _.map(arrObjs, function (obj) {return obj[prop]});
    }







let result = _.pluck([{a: "one"}, {a: "two"}], "a")
console.log("result", result)

var result2 = _.pluck([{ name: "Ralph", age: 22 }, { name: "Jimmy", age: 13 }, { name: "Carla", age: 20 }], "age");
console.log("result2", result2);









/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/


//creates _.every which is a funciton that takes a collection and a function as params
_.every = function (coll, func){
    //check that func is a function
    if (typeof func !== "function"){
        //check if coll is an array and iterate through coll
        if (Array.isArray(coll)){
            //loop through the array
            for (let i = 0; i < coll.length; i++){
                //check if any element it falsey
                if (!coll[i]){
                    return false;
                }
            }
            return true;
        //if coll is not an array and therefore an object    
        } else {
            //loop through the collection
        for (let key in coll){
            //check  falsiness of calling func, passing in the current key-value, the key, and coll
            if (!func(coll[key])){
                //return false
                return false;
            }
        }
        //if no single iterated value is false, then return true
        return true;

        }

    }
    //check if coll is an array
    if (Array.isArray(coll)){
        //loop through the array
        for (let i = 0; i < coll.length; i++){
            //check falsiness of calling func, passing in current iterated element, current index, and coll
            if (!func(coll[i], i, coll)){
                //then return false
                return false;
            }
        }
        //if no single iterated value is false, then return true
        return true;
    //if coll is not an array and therefore an object    
    } else {
        //loop through the collection
        for (let key in coll){
            //check  falsiness of calling func, passing in the current key-value, the key, and coll
            if (!func(coll[key], key, coll)){
                //return false
                return false;
            }

        }
        //if no single iterated value is false, then return true
        return true;
    }
} 




/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/



//some is a function that takes parameters of a collection and a function
_.some = function(coll, func){
    //check if function is a function
    if (typeof func !== "function"){
        //check if coll is an array
        if (Array.isArray(coll)){
            //iterate through the array
            for (let i = 0; i < coll.length; i++){
                //check if iterated element is truthy
                if (coll[i]){
                    return true;
                }
            }
            //if nothing is truthy, return false
            return false;
        //if it's not an array it's a collection
        } else {
            //loop through collection
            for (let key in coll){
                //check if key-value is truthy
                if (coll[key]){
                    return true
                }
            }
            //if nothing returns truthy, return false
            return false;
        }
    }

    //check if  coll is an array
    if (Array.isArray(coll)){
        //iterate through the array
        for (let i = 0; i < coll.length; i++){
            //check if func called with iterated element, current index, anc coll resolves to truthy
            if (func(coll[i], i, coll)){
                return true;
            }
        }
        //if nothing is truthy, return false
        return false;
    //if it's not an array it's a collection
    } else {
        //loop through collection
        for (let key in coll){
            //check if func called with key-value, key, can coll resolves to truthy
            if (func(coll[key], key, coll)){
                return true
            }
        }
        //if nothing returns truthy, return false
        return false;
    }
}




/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


//reduce is assigned to a function that takes an array, a function, and a seed (number?)
_.reduce = function(arr, func, seed){
    
    //if the seed isn't a number, set seed to the value of the 0th array
    if (typeof seed !== "number"){
        seed = arr[0];
        //create a previous result variable lastRes and set it to seed
        let lastRes = seed;
        //loop thgrough the array, skipping the 0th index
        for (let i = 1; i < arr.length; i++){
            //for each iterated value, assign prevRes to the invoked func which is passed the arguments: prevRes, the indexed element, and the index
            lastRes = func(lastRes, arr[i], i);
        
        }
        //return lastRes
        return lastRes
    }
    //create a previous result variable prevRes and set it to seed
    let prevRes = seed;

    //iterate through the array
    for (let i = 0; i < arr.length; i++){
        //for each iterated value, assign prevRes to the invoked func which is passed the arguments: prevRes, the indexed element, and the index
        prevRes = func(prevRes, arr[i], i);

    }
    return prevRes;
}

// let theResult = _.reduce([1,2,4], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0)

// console.log(theResult);


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/


//extend is a function that takes a target object and indefinite number of additional objects as an array


_.extend = (targetObj, ...objs) => {
    console.log("inputs:  ", targetObj, objs);

    //loop through the objects array
    for (let i = 0; i < objs.length; i++){

      //for each object in the array, use the object.assign method to copy the keys from the iterated object to the target object
    //   console.log("objs[i]:  ", objs[i])
    //   console.log("pre targetObj:  ", targetObj);
      Object.assign(targetObj, objs[i]);
    //   console.log("post targetObj:  ", targetObj);
    }
  //return targetObj
  console.log("return:  ", targetObj);
    return targetObj;

}


// var inputData = { a: "one", b: "two" };

// let resulto = _.extend(inputData, { c: "three", d: "four" }, {e: "five", f: "six"});

// console.log("resulto: ", resulto);


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}