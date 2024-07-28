import axios from "axios";
import { TestCase } from "../types/TestCase";

const API_URL = "http://localhost:5000/api";

export const createTestCase = async (testCase: TestCase): Promise<TestCase> => {
  const response = await axios.post(`${API_URL}/testcase`, testCase);
  return response.data;
};

export const updateTestCase = async (
  id: string,
  testCase: Partial<TestCase>
): Promise<TestCase> => {
  const response = await axios.put(`${API_URL}/testcases/${id}`, testCase);
  return response.data;
};
