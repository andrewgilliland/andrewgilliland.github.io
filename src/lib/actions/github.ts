"use server";
const getGithubRepos = async (username: string) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const data: [] = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

const getGithubRepoFileContents = async ({
  username,
  repoName,
  fileName,
}: {
  username: string;
  repoName: string;
  fileName: string;
}) => {
  // More deep thoughts: https://www.sccs.swarthmore.edu/users/99/mimno/humor/deep.thoughts.txt
  try {
    const response = await fetch(
      `https://api.github.com/repos/${username}/${repoName}/contents/${fileName}`
    );
    const data1 = await response.json();

    const content = Buffer.from(data1.content, "base64").toString("utf-8");
    const { data } = await JSON.parse(content);

    console.log("parsedData: ", data);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export { getGithubRepos, getGithubRepoFileContents };
