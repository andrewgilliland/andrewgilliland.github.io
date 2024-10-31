import { isPathDirectory } from "./fs";
import { expect } from "@jest/globals";

describe("isPathDirectory", () => {
  it("should return true if the path is a directory", async () => {
    // Arrange
    const path = "../data";
    // Act
    const result = await isPathDirectory(path);
    // Assert
    expect(result).toBe(true);
  });
});
