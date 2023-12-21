function caesarCipher(vared) {
  var khoroji = '';
  var sh = 3; 

  for (var  x= 0; x< vared.length; x++) {
    var charCode = vared.charCodeAt(x);
    if (charCode >= 97 && charCode <= 122) { 
      khoroji += String.fromCharCode(((charCode - 97 + sh) % 26) + 65);
    } else if (charCode >= 65 && charCode <= 90) { 
      khoroji += String.fromCharCode(((charCode - 65 + sh) % 26) + 65);
    } else {
      khoroji += vared.charAt(x);
    }
  }

  return khoroji;
}

//var input = 'be bootcamp quera khosh amadid';
//var encryptedInput = caesarCipher(input.toUpperCase());

//console.log(encryptedInput); 


 


module.exports = caesarCipher;

