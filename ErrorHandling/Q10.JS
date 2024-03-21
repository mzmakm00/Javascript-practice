function readFile(filename){
    if (filename !== 'data.txt'){
        throw new Error(`File not Found : ${filename}`)
    }
    return "This is data from the file";
}

try{
    const data = readFile("file1.text")
    console.log(data)
} catch(error){
    console.error(error.message)
}finally{
    console.log("Cleaning up ")
}