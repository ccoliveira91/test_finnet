function bhaskara(a: number, b: number, c: number): number[] {
  //calcular discriminante b²-4ac
  const delta = b * b - 4 * a * c;

  if (delta >= 0) {
    const rootDelta = Math.sqrt(delta); //calcula a raiz quadrada de delta
    //calculo de x
    const x1 = (-b + rootDelta) / (2 * a);
    const x2 = (-b - rootDelta) / (2 * a);

    if (delta === 0) {
      return [x1, x1]; //raíz real dupla
    } else {
      return [x1, x2]; //raízes reais distintas
    }
  } else {
    throw new Error("As raízes serão complexas e não reais. ");
  }
}

// Teste da função
console.log(bhaskara(2, -3, -5));
console.log(bhaskara(1, -5, 6));
console.log(bhaskara(1, 0, -4));
