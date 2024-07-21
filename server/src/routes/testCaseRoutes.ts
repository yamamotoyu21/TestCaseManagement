import express from "express";
import {
  getTestCases,
  createTestCase,
  updateTestCase,
  deleteTestCase,
} from "../../controllers/testCaseController";

const router = express.Router();

router.get("/", getTestCases);
router.post("/", createTestCase);
router.put("/:id", updateTestCase);
router.delete("/:id", deleteTestCase);

export default router;
