function generateRandomNameASCII(): string {
  //Gerar letras aleatórias utilizando codigo ASCII maiúscuslas sequencial de 65 a 90
  const randomCharCode = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
  const randomLetter = String.fromCharCode(randomCharCode);

  //Gerar três dígitos aleatórios
  const digits = (Math.random() * 999).toFixed(0).padStart(3, "0");

  return randomLetter + digits;
}

function generateRobotNamesASCII(numberRobots: number): string[] {
  //Garantir valores unicos ou nomes unicos para os Robos
  const robotNamesASCII: Set<string> = new Set();

  while (robotNamesASCII.size < numberRobots) {
    robotNamesASCII.add(generateRandomNameASCII());
  }

  return Array.from(robotNamesASCII);
}

// Teste da função
const numberRobots = 500;
const robotNamesASCII = generateRobotNamesASCII(numberRobots);
console.log(robotNamesASCII);
