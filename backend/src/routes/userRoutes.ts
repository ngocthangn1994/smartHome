import {
  getMe,
  getUserById,
  deleteUser,
  updateUser,
  createUser,
  getAllUsers,
} from "../controllers/userController";

import { protect, restrictTo } from "../middeleware/authMiddleware";
import { Router } from "express";

const router = Router();

router.use(protect);

router.get("/", getAllUsers);
router.get("/me", getMe);
router.get("/:id", getUserById);
router.post("/", createUser);
router.delete("/:id", restrictTo("admin"), deleteUser);
router.patch("/:id", updateUser);

export default router;
