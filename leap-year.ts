function isLeapYear(year: number): boolean {
  //Verifica se ano é divisível por 4
  if (year % 4 === 0) {
    //Verifica se ano é divisível por 100 se for ele deve ser divisível por 400 (para anos terminados em 00)
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
    //Se não for divisível por 100, mas for divisível por 4, é bissexto
    return true;
  }

  return false;
}

// Teste da função
console.log(isLeapYear(2020));
console.log(isLeapYear(2024));
console.log(isLeapYear(500));
console.log(isLeapYear(400));
