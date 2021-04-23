let minOperations = (n) => {
    let targetNum = n;
    let isEven = n % 2 === 0 ? true : false;
    let num = targetNum - 1;
    if(!isEven) {
         targetNum = (2 * Math.floor(n / 2)) + 1;
         num = targetNum;
    }
    let oprNum = 0;
    while(num >= 1) {
         oprNum += targetNum - num;
         num -= 2;
    }
    return oprNum;
};