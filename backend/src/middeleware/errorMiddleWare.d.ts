import { Request, Response, NextFunction } from "express";
declare const errorMiddleware: (error: Error, req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>>;
export default errorMiddleware;
//# sourceMappingURL=errorMiddleWare.d.ts.map