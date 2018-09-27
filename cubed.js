//Returns the argument cubed.
function cubed(arg){

    //If the type of the arguement is an array, we assume there's numbers in there.
    //                                              (Pls no strings.)
    //If the type is a string, we just print it 3 times as if we multiplied it by 3 in Python.
    //Otherwise I just assume its a number and cube it as normal.

    result = [];
    if (Array.isArray(arg)){ // no need for `typeof` when we can type fun things like this ;)
        for (var i = 0; i < arg.length; i++){
            result[i] = Math.pow(arg[i], 3);
        }
    }
    else if (typeof arg === 'string') { // fine, ill use `typeof`
        result = arg + arg + arg;
    }
    else{
        result = Math.pow(arg, 3);
    }
    console.log("Result is [" + result + "]");
    return result;
}

//Test uno
cubed([1, 4, 9]);
//Test dos
var cube = "cubed!";
cubed(cube);
//Test tres
var result = cubed(10);
console.log("Result of function `cubed` on `10` is " + result);
//change
