function check(string){
    try {
    const parsedData  = JSON.parse(string)
    console.log(parsedData)
    }catch(error)
    {
        if (error instanceof SyntaxError){
            console.error('Syntax Error :',error.message )
        }else{
            console.log("Error :" , error.message)
        }
    }
}

const myJSON = '{"name":"John", "age":30, "car":null , }'
check(myJSON)