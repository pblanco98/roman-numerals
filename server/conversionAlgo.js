

const charConvert = (num) => {
    if(num === 'I')
        return 1;
    if(num === 'V')
        return 5;
    if(num === 'X')
        return 10;
    if(num === "L")
        return 50;
    if(num === "C")
        return 100;
    if(num === "D")
        return 500;
    if(num === "M")
        return 1000;
    else 
        return -1;

}


const romanToNum = (romanNum) => {
    result = 0;
    // const romanArray = Array.from(romanNum)
    for(i=0; i<romanNum.length; i++){
        const current = charConvert(romanNum[i]);
        console.log('current: ' + current);
        if(i+1 < romanNum.length){
            const next = charConvert(romanNum[i+1]);
            console.log('next: ' + next)
            if(current >= next){
                result += current;
            } else {
                result = result - current + next;
                i++;
            }
        } else {
            result = result + current;
        }
        console.log('result: ' + result);
        
        
    }
    return result;
}

romanToNum("IV")

module.exports = romanToNum;
