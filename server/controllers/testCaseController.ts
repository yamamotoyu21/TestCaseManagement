import { error } from "console";
import { Request, Response } from "express";
import TestCase, { ITestCaseDocument } from "../models/TestCase";

export const getTestCases = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = 50; // Number of items per page
    const searchTerm = req.query.search as string;

    let query = {};

    if (searchTerm) {
      query = { title: { $regex: searchTerm, $options: 1 } };
    }

    const totalDocs = await TestCase.countDocuments(query);
    const totalPages = Math.ceil(totalDocs / limit);

    const testCases = await TestCase.find(query)
      .sort({ lastUpdated: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      testCases,
      currentPage: page,
      totalPages,
      totalDocs,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching testcases", error });
  }
};

export const createTestCase = async (req: Request, res: Response) => {
  try {
    const testCase: ITestCaseDocument = new TestCase(req.body);
    await testCase.save();
    res.status(201).json(testCase);
  } catch (e) {
    res.status(400).json({ message: "Error creating test case", error });
  }
};

export const updateTestCase = async (req: Request, res: Response) => {
  try {
    const updatedTestCase = await TestCase.findByIdAndUpdate(
      req.params.id,
      { ...req.body, lastUpdated: new Date() },
      { new: true }
    );
    if (!updateTestCase) {
      return res.status(404).json({ message: "Test case not found" });
    }
    res.json(updatedTestCase);
  } catch (error) {
    res.status(400).json({ message: "Error updating test case", error });
  }
};

export const deleteTestCase = async (req: Request, res: Response) => {
  try {
    const deletedTestCase = await TestCase.findByIdAndDelete(req.params.id);
    if (!deletedTestCase) {
      return res
        .status(404)
        .json({ message: "Error deleting test case", error });
    }
    res.json({ message: "Test case deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting test case", error });
  }
};
