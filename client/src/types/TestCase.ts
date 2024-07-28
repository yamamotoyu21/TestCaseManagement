export interface TestCase {
  _id?: string;
  title: string;
  precondition: string;
  steps: string;
  expectedResult: string;
  status: "todo" | "pass" | "fail" | "skip";
  lastUpdated: Date;
}
