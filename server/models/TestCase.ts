import mongoose, { Schema, Document, Model } from "mongoose";

export interface ITestCase {
  precondition: string;
  steps: string;
  expectedResult: string;
  status: "todo" | "pass" | "fail" | "skip";
  lastUpdate: Date;
}

export interface ITestCaseDocument extends ITestCase, Document {}

export interface ITestCaseModel extends Model<ITestCaseDocument> {}

const TestCaseSchema: Schema = new Schema({
  precondition: { type: String, requred: true },
  steps: { type: String, required: true },
  expectedResult: { type: String, requred: true },
  status: {
    type: String,
    enum: ["todo", "pass", "fail", "skip"],
    default: "todo",
  },
  lastUpdated: { type: Date, default: Date.now() },
});

export default mongoose.model<ITestCaseDocument, ITestCaseModel>(
  "TestCase",
  TestCaseSchema
);
