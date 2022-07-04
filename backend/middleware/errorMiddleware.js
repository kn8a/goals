const errorHandler = (err,req,res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)

    res.json({
        message: err.message,
        //                     if 'production then null else err.stack
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
} 

module.exports = {
    errorHandler
}