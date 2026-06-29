import {
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
  createUser,
} from "../controllers/userController";

import Router from "express";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

export default router;
