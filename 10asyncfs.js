const {readFile, writeFile} = require('fs')


readFile('./content/first.txt', 'utf8', (error, results)=>{
    if(error){
        console.log(error);
        return
    }
    
        const firstfile = results
        readFile('./content/second.txt', 'utf8', (error, results)=>{
            if(error){
                console.log(error)
                return
            }
            
                const secondfile = results
                writeFile('./content/async.txt', 'asyncfile', (error, results)=>{
                    if(error){
                        console.log(error)
                        return}
                    
                        console.log(results)
                    
                })
            
        })
    }
) 