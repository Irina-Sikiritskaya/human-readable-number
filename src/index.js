const first_twenty = ["", "one", "two",
"three", "four", "five",
"six", "seven", "eight",
"nine", "ten", "eleven",
"twelve", "thirteen", "fourteen",
"fifteen", "sixteen", "seventeen",
"eighteen", "nineteen"]

const tens = ["", "twenty", "thirty", "forty", "fifty",
"sixty", "seventy", "eighty", "ninety"]


module.exports=function toReadable(number) {
    let readableText="";
    let dozens= number % 100;
    console.log(dozens)
    let firstNum= Math.floor(number / 100);
    let secondNum = Math.floor((number % 100) /10);
    let thirdNum = (number % 100) % 10;
    if (number==0) {
        return "zero"
    }
    if (number<20) {
        return first_twenty[number]
    }
    if (20<=number && number<= 99) {
    let first= Math.floor(number / 10);
        if (number % 10 == 0) {
            return tens[first-1]
        }
        else {
            return tens[first-1] + " " + first_twenty[number % 10]
        }
    }
    if (100<=number && number<= 999) {
        readableText= first_twenty[firstNum] + " hundred";
        if (dozens < 20 && number% 100 !=0) {
            return readableText + " " + first_twenty[dozens]
        }
        if (dozens > 20 && number % 10 != 0) {
            return readableText + " " + tens[secondNum -1] + " " + first_twenty[thirdNum]
        }
        if (number% 100 ==0) {
            return readableText
        }
        else {
            return readableText + " " +tens[secondNum -1]
        }
    }
}
