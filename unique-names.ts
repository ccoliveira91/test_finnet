function uniqueNames(arr1: string[], arr2: string[]): string[] {
  const set1: Set<string> = new Set(arr1);
  const set2: Set<string> = new Set(arr2);

  //Combinar os arrays set1 e set2 com valores exclusivos
  const result: Set<string> = new Set([...set1, ...set2]);

  return Array.from(result);
}

const names1: string[] = ["Gabriela", "Alice", "Cesar", "Heitor"];
const names2: string[] = ["Juliana", "Alice", "Heitor", "Eduardo"];

// Teste da função
console.log(uniqueNames(names1, names2));
