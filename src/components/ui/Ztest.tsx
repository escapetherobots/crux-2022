import React, { useEffect } from "react";
import Prism from 'prismjs';
import "../../css/prism.css";


const Ztest = () => {
    useEffect(() => {
        Prism.highlightAll();
    });
    
    // const 
    const stuff1 = `// CODE EXAMPLE\n------------------------`;

const mainCode = 
`
Scanner input = new Scanner(System.in);
System.out.println("Please enter a string");
String s1 = input.nextLine();
System.out.println("Please enter a comparison string");
String s2 = input.nextLine();

Set<Character> matchedChars = new HashSet<Character>(); 

char[] charArr1 = s1.toCharArray();
char[] charArr2 = s2.toCharArray();

for (int i = 0; i < charArr1.length; i++) {
    // loop through first arr of chars
    
    for (int j = 0; j < charArr2.length; j++) {
        // loop through each char in 2nd
        if (charArr1[i] == charArr2[j]) matchedChars.add(charArr1[i]);
        
    }
}
Object[] arr = matchedChars.toArray();

System.out.println("Matched Characters = " + arr.length);
for (int z = 0; z < arr.length; z++)
    System.out.println(arr[z]);
`;

const zzz = `
onSubmit(e) {
e.preventDefault();
const job = {
    title: 'Developer',
    company: 'Facebook' 
    };
}
`;

    return (
        <div className="app-content">
            <pre className="code-example">
                <code className="pre-func">
                    {stuff1}
                </code>
                <code className="language-javascript">
                    {mainCode}
                </code>
            </pre>     
            <pre className="code-example">
                <code className="language-javascript">
                {zzz}
                </code>
            </pre>
                       
            {/* <img src={url} /> */}
        </div>
    );
};

export default Ztest;