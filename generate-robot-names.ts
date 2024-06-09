function generateRandomName(): string {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  //Gerar duas letras maiúsculas aleatórias
  const name = Array.from({ length: 2 }, () =>
    letters.charAt(Math.floor(Math.random() * letters.length))
  ).join("");

  // Gerar três dígitos aleatórios
  const digits = (Math.random() * 999).toFixed(0).padStart(3, "0");

  return name + digits;
}

function generateRobotNames(numRobots: number): string[] {
  //Garantir valores unicos ou nomes unicos para os Robos
  const robotNames: Set<string> = new Set();

  while (robotNames.size < numRobots) {
    robotNames.add(generateRandomName());
  }

  return Array.from(robotNames);
}

// Teste da função
const numRobots = 100;
const robotNames = generateRobotNames(numRobots);
console.log(robotNames);
