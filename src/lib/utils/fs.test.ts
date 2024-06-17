import { isPathDirectory } from "./fs";
import { expect } from "@jest/globals";

// https://stackoverflow.com/questions/68584932/cypress-clashing-types-with-jest

describe("isPathDirectory", () => {
  it("should return true if the path is a directory", async () => {
    // Arrange
    const path = "./posts";
    // Act
    const result = await isPathDirectory(path);
    // Assert
    expect(result).toBe(true);
  });
});
