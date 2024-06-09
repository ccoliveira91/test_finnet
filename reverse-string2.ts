//Função manipulando string no loop
function reverseStringLoop(str: string) {
  var r = "";
  for (var i = str.length - 1; i >= 0; i--) {
    r += str[i];
  }
  return r;
}

// Teste da função
console.log(reverseStringLoop("Finnet"));
