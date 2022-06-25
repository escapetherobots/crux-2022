import React from "react";

const Ztest = () => {
    // const 
    const stuff1 = `// CODE EXAMPLE\n------------------------`;

    const stuff = 
`
let myStuff = function() {
    return 'something';
}
`;

    return (
        <div className="app-content">
            <pre className="code-example">
                <code className="pre-func">
                    {stuff1}
                </code>
                <code>
                    {stuff}
                </code>
            </pre>
                            
            {/* <img src={url} /> */}
        </div>
    );
};

export default Ztest;