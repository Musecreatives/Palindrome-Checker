 function palindrome(str) {
    let reg = /[/W_]/g;

    let smallStr = str.toLowerCase().replace(reg, "");

    console.log(smallStr)
    let reversed = str.split("").reverse().join("");
  if (reversed === str) return true;
  
  return false;
  }

  
  
  
  palindrome("eye");
  