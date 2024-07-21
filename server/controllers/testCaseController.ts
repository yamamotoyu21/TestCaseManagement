import { Request, Response } from "express";
import TestCase, { ITestCaseDocument } from "../models/TestCase";

export const createTestCase = async (req: Request, res: Response) => {
  try {
    const testCase: ITestCaseDocument = new TestCase(req.body);
    await testCase.save();
    res.status(201).json(testCase);
  } catch (e) {
    res.status(400).json({ message: "Error creating test case", Error });
  }
};

export const updateTestCase = async (req: Request, res: Response) => {
  try {
    const updatedTestCase = await TestCase.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updateTestCase) {
      return res.status(404).json({ message: "Test case not found" });
    }
    res.json(updatedTestCase);
  } catch (error) {
    res.status(400).json({ message: "Error updating test case", Error });
  }
};

// export const deleteTestCase = async (req: Request, res: Response) => {
//     try {
//         const deletedTestCase = await TestCase.deleteOne({req.b)
//     }
// };
