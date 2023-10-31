import { Router,Request,Response,NextFunction } from "express";
import { DELIMETER } from "../../common/common.constants";

const bootstrapRouter:Router = Router();

bootstrapRouter.get(`/ping`,(req:Request,res:Response,next:NextFunction)=>{
    try {
        throw new Error(`403${DELIMETER}The error test`)
    } catch (error) {
        next(error);
    }
});


export default bootstrapRouter;