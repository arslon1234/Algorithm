var romanToInt = function(s) {
    // roman value uchun object yaratib oldik
    const romanValue = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let result = 0
    // argument da kegan roman string ni loop qilib oldik
    for(let i = 0; i < s.length; i++){
        // bu joyda kegan romanvalue larni yonma yon value lari taqqoslanayapti
        // IX = 9 mana shunaqa xolat uchun
        if(romanValue[s[i]] < romanValue[s[i + 1]]){
            result -= romanValue[s[i]]
        }else {
            result += romanValue[s[i]]
        }
    }
    console.log(result)
};
romanToInt("IX")