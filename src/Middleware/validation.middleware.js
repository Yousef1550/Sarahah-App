



export const validationMiddleware = (schema) => {
    return async (req, res, next) => {
        const schemaKeys = Object.keys(schema)      // ['body']
        
        const validationErrors = []

        for (const key of schemaKeys) {
            const validationResult = schema[key].validate(req[key], {abortEarly: false}).error
            if(validationResult){
                validationErrors.push(...validationResult.details)  // spread operator to have a single array
            } 
        }
        if(validationErrors.length){
            return res.status(400).json({message: 'Validation error', error: validationErrors})
        }
        next()
    }
}





// if all data are valid no error object, only value object (has the data)
// if there is an error, an error object and inside it details object that have all the validation errors details 

// error: {
//     details: [
//                  {
//                      validation error details
//                  }
//   ]
// }


// schema[key].validate(req[key])    like >>> schema.body.validate(req.body)

    // const schema = {
    //     body: 'body rules',
    //     query: 'query rules'
    // }
    
    // console.log(schema['body']);  >>> body rules