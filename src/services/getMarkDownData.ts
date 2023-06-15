import path from "path";
import { readdir, readFile } from "fs/promises";
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";

const jobsDirectory = "jobs";

export async function getJobNames() {
  const fileNames = await readdir(
    path.join(`${process.cwd()}/src/content`, jobsDirectory)
  );

  return {
    fileNames,
  };
}

type MarkDownData = {
  fileName: string;
  contentHtml: string;
  [key: string]: any;
};

export async function getJobData(directory: string): Promise<MarkDownData> {
  const jobs = await getMarkDownData(`${jobsDirectory}/${directory}`);
  return jobs;
}

export async function getMarkDownData(
  directory: string
): Promise<MarkDownData> {
  const fileContents = await readFile(
    path.join(`${process.cwd()}/src/content`, directory, `index.md`),
    "utf-8"
  );
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    fileName: directory,
    contentHtml,
    ...matterResult.data,
  };
}
