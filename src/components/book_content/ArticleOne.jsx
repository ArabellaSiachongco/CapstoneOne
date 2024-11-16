import React from "react";


const ArticleOne = () => {
    console.log("ContentOne is rendering!");

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-purple-700">Republic of 123</h1>
            <p className="mt-4 text-lg text-gray-600">
                Welcome to the content for Republic of 123. This is where your chapter details will go.
            </p>
        </div>
    );
};

export default ArticleOne;
