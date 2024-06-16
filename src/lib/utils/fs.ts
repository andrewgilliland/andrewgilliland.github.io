"use server";
import fs from "fs";

export const isDirectory = async (path: string): Promise<boolean> => {
  try {
    const stats = await fs.promises.stat(path);
    return stats.isDirectory();
  } catch (error) {
    return false;
  }
};
