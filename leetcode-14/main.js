var longestCommonPrefix = function (strs) {
  let short = strs.reduce((small, current) =>
    small.length < current.length ? small : current
  );
  for(let i = 0; i < short.length; i++){
   for(let item of strs){
    if(short[i] !== item[i]){
        return short.slice(0,i)
    }
   }
  }
  return short
};
longestCommonPrefix(["flower", "flow", "flight"])

// bu savolda array da eng kichik so'zni olib shu bo'yicha 
// tekshirilib chiqildi

