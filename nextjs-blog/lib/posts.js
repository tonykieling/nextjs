import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    console.log("getSORTED!!!!!!!!")
    console.log("typeof window => ", typeof window === 'undefined', " --- ", typeof global === 'undefined')
    if (typeof window === "undefined") console.log("this code os running on SERVER SIDE!!!");

    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        };
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => a - b);
    // {
    //     if (a.date < b.date) {
    //         return 1;
    //     } else {
    //         return -1;
    //     }
    // });
}


export function getAllPostsIds() {
    const fileNames = fs.readdirSync(postsDirectory);
  
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    console.log("fileNames::: ", fileNames);
    return fileNames.map(fileName => ({
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }));
}


export function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
console.log("fileContents::: ", fileContents)  ;
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
  
    // Combine the data with the id
    return {
        id,
        ...matterResult.data,
    };
}