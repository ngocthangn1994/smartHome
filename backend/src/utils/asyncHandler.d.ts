import { Request, Response, NextFunction } from "express";
import { RequestHandler } from "express-serve-static-core";
export declare function asyncHandler(fn: (req: Request, res: Response, next: NextFunction) => Promise<unknown>): RequestHandler;
//# sourceMappingURL=asyncHandler.d.ts.map