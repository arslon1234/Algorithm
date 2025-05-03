// Stack data structure: LIFO => LAST IN FIRST OUT

function isValid(str){
    let stack = []
    let map = new Map([
        [")", "("],
        ["}", "{"],
        ["]", "["]
    ])
    for(let char of str){
        if(!map.has(char)){
            stack.push(char)
        }else if(map.get(char) !== stack.pop()){
            return false
        }
    }
    return stack.length === 0
}
console.log(isValid('()'))