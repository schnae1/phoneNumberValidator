function telephoneCheck(str) {

  let numArr = str.split("");
  let beginRegex = /^(\(|1|[3-9])/g;
  let pairRegex = /\([0-9][0-9][0-9]\)/;
  let numRegex = /[0-9]/;

  if(!beginRegex.test(str))
    return false;

  // check number of digits 
  let numCnt = 0;
  let lParen = 0;
  let rParen = 0;
  for(let i = 0; i < numArr.length; i++){

    if(numRegex.test(numArr[i]))
      numCnt++;
    if(numArr[i] == '('){
      lParen++;
    } else if(numArr[i] == ')'){
      rParen++;
    }

  }
  if(lParen == 1 && rParen == 1 && !pairRegex.test(str))
      return false;

  if(pairRegex.test(str) && !/\-/.test(str))
    return false;

  if(numCnt > 11 || numCnt < 10 
      || lParen != rParen || lParen >= 2 
      || rParen >= 2)
    return false;

  return true;
}

if(telephoneCheck("555-555-5555"))
  console.log("Success!");
