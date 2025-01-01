var evalRPN = function(tokens) {
    const stack = []
    let result = []
    const operations = {
        "+": (a,b)=> a + b,
        "-": (a,b)=> a - b,
        "*": (a,b)=> a * b,
        "/": (a,b)=> Math.trunc(a / b)
    }
    for(let item of tokens){
        if(!Object.keys(operations).includes(item)){
            stack.push(Number(item))
        }else {
            let operator = operations[item]
            let a = stack.pop()
            let b = stack.pop()
            stack.push(operator(a,b))
        }
    }
    console.log(stack)
    console.log(result)
};
evalRPN(["2","1","+","3","*"])