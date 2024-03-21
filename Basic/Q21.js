
function addncheckstring(str){
    if(str.toLowerCase().startsWith("py")){

        return "Orignal String : " + str;
    
    }else {
        return  "String added :" + " Py" + str;
    }
}

const string1 = "thon";
const string2 = "Python";

console.log(addncheckstring(string1))