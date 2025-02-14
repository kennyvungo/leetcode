


// Brute force solution, uses stack to iterates through all possible parenthesis combinations
// Then calls helper function on each posssible combination
// Very slow
function bruteForceGenerateParenthesis(n) {
    let maxLength = n * 2;
    let parenStack = ["("];
    let output = [];
    while(parenStack.length > 0){
        let currVal = parenStack.pop();
        let leftParen = currVal + "(";
        let rightParen = currVal + ")"
        if(leftParen.length == maxLength){
            if(checkValid(leftParen)){
                output.push(leftParen);
            }
            if(checkValid(rightParen)){
                output.push(rightParen);
            }
        }
        else{
            parenStack.push(leftParen);
            parenStack.push(rightParen)
        }
    }
    return output;
}

function checkValid(str){
    let count = 0
    for(let i in str){
        if(count < 0){
            return false;
        }
        if(str[i] == "("){
            count ++;
        }
        else{
            count --;
        }
    }
    return count == 0;
}

// Generates possible, but stores current count in hash
// If count is ever less than 0, solution is no longer valid, and does not add to stack

function slightlyBetterGenParen(n) {
    let maxLength = n * 2;
    let parenStack = ["("];
    let output = [];
    let parenCounter = {"(": 1};
    while(parenStack.length > 0){
        let currVal = parenStack.pop();
        let currCount = parenCounter[currVal];
        let leftParen = currVal + "(";
        let rightParen = currVal + ")"
        let leftCount = currCount + 1;
        let rightCount = currCount - 1;
        parenCounter[leftParen] = leftCount;
        parenCounter[rightParen] = rightCount;
        if(leftParen.length == maxLength){
            if(leftCount === 0){
                output.push(leftParen);
            }
            if(rightCount === 0){
                output.push(rightParen);
            }
        }
        else{
            if(leftCount >= 0 && leftCount <= n){
                parenStack.push(leftParen);
            }
            if(rightCount >= 0 && rightCount <= n){
                parenStack.push(rightParen)
            }
        }
    }
    return output;
}


let testStr = "())()";
// console.log(checkValid(testStr))
// console.log(bruteForceGenerateParenthesis(3))
console.log(slightlyBetterGenParen(3));
