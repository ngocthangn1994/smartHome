import {
  getHomes,
  getHomeById,
  deleteHome,
  updateHome,
  createHome,
} from "../controllers/homeController";

import { Router } from "express";

const router = Router();

router.get("/", getHomes);
router.get("/:id", getHomeById);
router.post("/", createHome);
router.delete("/:id", deleteHome);
router.patch("/:id", updateHome);

export default router;
