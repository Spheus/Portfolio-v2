import path from "path";
import { readdir, readFile } from "fs/promises";
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
import rehypeRaw from "rehype-raw";
import remarkParse from "remark-parse/lib";
import remarkRehype from "remark-rehype/lib";
import rehypeStringify from "rehype-stringify/lib";
import rehypeSanitize from "rehype-sanitize";

const jobsDirectory = "jobs";

export async function getSubFolderNames(directory: string) {
  const fileNames = await readdir(
    path.join(`${process.cwd()}/src/content`, directory)
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

export async function getData(directory: string): Promise<MarkDownData> {
  const jobs = await getMarkDownData(`${directory}`);
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
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    fileName: directory,
    contentHtml,
    ...matterResult.data,
  };
}
