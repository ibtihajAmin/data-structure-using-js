function checkBalancedBrackets(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let temp = str[i];

    if (temp == "(" || temp == "[" || temp == "{") {
      stack.push(temp);
      continue;
    }

    if (stack.length == 0) return false;

    let check;
    switch (temp) {
      case ")":
        check = stack.pop();
        if (check == "{" || check == "[") return false;
        break;

      case "}":
        check = stack.pop();
        if (check == "(" || check == "[") return false;
        break;

      case "]":
        check = stack.pop();
        if (check == "(" || check == "{") return false;
        break;
    }
  }

  return stack.length == 0;
}

let str = "[{()}]";

if (checkBalancedBrackets(str)) console.log("Balanced ");
else console.log("Not Balanced ");
