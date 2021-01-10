import React from "react";

const Link = (props:any) => {
    const { link } = props;
    console.log("Link: " + link);
    return (
        <div>
            <div>
                {link.description} ({link.url})
            </div>
        </div>
    );
};

export default Link;