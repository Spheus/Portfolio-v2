import path from "path";
import { readdir, readFile } from "fs/promises";
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";

const jobsDirectory = path.join(process.cwd(), "content/jobs");
export async function getJobNames() {
  const fileNames = await readdir(jobsDirectory);

  return {
    fileNames,
  };
}

export async function getJobData(fileName: string) {
  const fileContents = await readFile(
    path.join(jobsDirectory, fileName, `index.md`),
    "utf-8"
  );
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    fileName,
    contentHtml,
    ...matterResult.data,
  };
}
