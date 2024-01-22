export type NewsType = {
   id: string,
   author: string,
   image: string,
   title: string,
   category: string[],
   published: string,
   description: string,
   language: string,
   url: string
} | null;