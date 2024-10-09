function revomeExtraSapce(str) {
    let nstr = " ";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            nstr += str[i]
        }
        else if (str[i - 1] != " ") {
            nstr += str[i]
        }
    }
    return nstr;
}
console.log(revomeExtraSapce("I              love      dogs"));
console.log(revomeExtraSapce("I              like      coding"));
console.log(revomeExtraSapce("I am       coding    student"));