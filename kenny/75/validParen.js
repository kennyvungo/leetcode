var isValid = function(s) {
    let comp = {
        ")": "(",
        "]": "[",
        "}": "{" 
    }
    let stack = [];
    for(let char of s){
        if(comp[char]){
            if(stack[stack.length - 1] === comp[char]){
                stack.pop()
            }
            else{
                return false;
            }
        }
        else{
            stack.push(char)
        }
     }
     console.log(stack)
    return stack.length === 0
};
