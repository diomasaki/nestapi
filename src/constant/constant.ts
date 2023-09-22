export const ERROR = (res,code,status,message,data) => res.status(code).json({
    status,
    code,
    message,
    data,
})

export const SUCCESS = (res,code,status,message, data) => res.status(code).json({
    status,
    code,
    message,
    data
})  