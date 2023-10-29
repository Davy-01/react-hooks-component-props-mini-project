import React from "react";
import blogData from "../data/blog";
import Article from"./Article.js";

function ArticleList(){
    const posts = blogData.posts;
    return(
        <main>
            {posts.map((post)=>{return(
                <Article key = {post.id} title ={post.title} date={post.date} preview={post.preview} />
            )}
            )}
        </main>
    )
}
export default ArticleList