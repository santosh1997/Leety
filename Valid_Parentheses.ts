/*
https://leetcode.com/problems/valid-parentheses
*/

const openers = new Set(["(","{","["]);
const closers = new Set([")", "}", "]"]);

function isValid(s: string): boolean {
    const stack = [];
    for(let char of s){
        if(openers.has(char)){
            stack.push(char);
        } else if(closers.has(char)){
            const lastOpener = stack.pop();
            if(
                !((char === "}" && lastOpener === "{") ||
                (char === ")" && lastOpener === "(") ||
                (char === "]" && lastOpener === "["))
            ) return false;
        }
    }
    return stack.length ? false : true;
};
