import assert from "power-assert"
import {summary} from "../src/summary.js"

describe("summary", _ => {

  it("should be function", () => {
    assert(summary instanceof Function)
  });

  it("should retrun 0 for null", () => {
    assert(0 === summary(null))
  });

  // Expects this fails. Kind of sample for power-assert
  it("should retrun length", () => {
    assert(({a:"ab"}).a === summary("abc"))
  });

});
