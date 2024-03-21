function withJava(str)
{
    if (str.toLowerCase().startsWith("java")){ 
        return true
       }
    return false
}

console.log(withJava("JavaScript"))
console.log(withJava("Hello"))
console.log(withJava("ScriptJava"))