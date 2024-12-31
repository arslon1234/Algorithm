var simplifyPath = function(path) {
    let stack = []
    let new_path = path.split('/')
    for(let item of new_path){
        if(item === "" || item === "."){
            continue
        }else if(item === '..' && stack.length){
            stack.pop()
        }else {
            stack.push(item)
        }
    }
    console.log("/" + stack.join('/'))
};
simplifyPath('/home')

// bu savol stack doir savol