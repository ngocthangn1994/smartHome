import { Request, Response, NextFunction } from "express";
import buildResponse from "../utils/buildResponse";
import { AppError } from "../utils/AppError";
import Home from "../models/Home";
import { asyncHandler } from "../utils/asyncHandler";
import { NewExpression } from "typescript";

// get all homes.

export const getHomes = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const homes = await Home.find();
    if (!homes) {
      throw new AppError("No home found", 404);
    }
    res
      .status(200)
      .json(buildResponse(true, "Successfully fetch all the homes", homes));
  },
);

// get home by Id:

export const getHomeById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const home = await Home.findById(req.params.id);
    if (!home) {
      throw new AppError("Not found home by Id", 404);
    }
    res
      .status(200)
      .json(buildResponse(true, "Successfully fetch home by id", home));
  },
);

// create home by id.

export const createHome = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, address, ownerId } = req.body;
    if (!name || !address || !ownerId) {
      throw new AppError(
        "Name, address, ownerId are required to fill out.",
        400,
      );
    }
    const home = await Home.create({
      name,
      address,
      ownerId,
    });
    res
      .status(201)
      .json(buildResponse(true, "Successfully create the new home", home));
  },
);

// delete home by id

export const deleteHome = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const home = await Home.findByIdAndDelete(req.params.id);
    if (!home) {
      throw new AppError("Can't delete home by Id.", 404);
    }
    res
      .status(200)
      .json(buildResponse(true, "Successfuly delete the home", home));
  },
);
// update home by id

export const updateHome = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, address, ownerId } = req.body;
    const home = await Home.findByIdAndUpdate(
      req.params.id,
      { name, address, ownerId },
      { new: true, isValidate: true },
    );
    if (!home) {
      throw new AppError("Can't update home by Id.", 404);
    }
    res
      .status(200)
      .json(buildResponse(true, "Successfuly update the home", home));
  },
);
