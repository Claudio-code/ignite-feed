import React from "react";

type PostContent = {
    author: string,
    content: string
}

export default (content: PostContent) => {
    return (
        <div>
            <strong>{content.author}</strong>
            <p>{content.content}</p>
        </div>
    );
};
