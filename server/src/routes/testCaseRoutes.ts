import express from "express";
import {
  createTestCase,
  updateTestCase,
} from "../../controllers/testCaseController";

const router = express.Router();
router.post("/", createTestCase);
router.put("/:id", updateTestCase);

export default router;
