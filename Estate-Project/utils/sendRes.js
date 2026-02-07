export function sendResponse(res,statusCode,contenType,payLoad){
    res.statusCode =statusCode
    res.setHeader("Content-Type",contenType)
    res.end(payLoad)
}