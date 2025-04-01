/**
 * Implementação de busca binária recursiva com cache
 */

// Cache para armazenar resultados de buscas anteriores
const cache = {};

/**
 * Função principal que verifica o cache antes de executar a busca
 * @param {Array} arr - Array ordenado de números
 * @param {number} target - Valor a ser buscado
 * @returns {number} - Índice do valor encontrado ou -1 se não encontrado
 */
function buscaBinaria(arr, target) {
  // Criamos uma chave única para o cache que combina o array e o valor buscado
  // Convertemos o array para string para formar a chave do cache
  const cacheKey = `${arr.toString()}_${target}`;

  // Verifica se o resultado já está no cache
  if (cache[cacheKey] !== undefined) {
    console.log(`Resultado encontrado no cache para o valor ${target}`);
    return cache[cacheKey];
  }

  // Se não estiver no cache, executa a busca recursiva
  console.log(`Realizando busca binária para o valor ${target}`);
  const resultado = buscaBinariaRecursiva(arr, target, 0, arr.length - 1);

  // Armazena o resultado no cache para uso futuro
  cache[cacheKey] = resultado;

  return resultado;
}

/**
 * Implementação recursiva da busca binária
 * @param {Array} arr - Array ordenado de números
 * @param {number} target - Valor a ser buscado
 * @param {number} inicio - Índice inicial da busca
 * @param {number} fim - Índice final da busca
 * @returns {number} - Índice do valor encontrado ou -1 se não encontrado
 */
function buscaBinariaRecursiva(arr, target, inicio, fim) {
  // Caso base: se o início ultrapassar o fim, o elemento não existe no array
  if (inicio > fim) {
    return -1;
  }

  // Calcula o índice do meio
  const meio = Math.floor((inicio + fim) / 2);

  // Caso encontre o elemento, retorna o índice
  if (arr[meio] === target) {
    return meio;
  }

  // Se o elemento buscado for menor que o elemento do meio,
  // busca na metade esquerda
  if (target < arr[meio]) {
    return buscaBinariaRecursiva(arr, target, inicio, meio - 1);
  }

  // Se o elemento buscado for maior que o elemento do meio,
  // busca na metade direita
  return buscaBinariaRecursiva(arr, target, meio + 1, fim);
}

// Exemplo de uso
const arrayOrdenado = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

console.log("Primeira busca para o valor 7:");
console.log(`Índice: ${buscaBinaria(arrayOrdenado, 7)}`);

console.log("\nSegunda busca para o valor 7 (deve usar o cache):");
console.log(`Índice: ${buscaBinaria(arrayOrdenado, 7)}`);

console.log("\nBusca para um valor inexistente (10):");
console.log(`Índice: ${buscaBinaria(arrayOrdenado, 10)}`);

console.log("\nBusca repetida para o valor inexistente (10):");
console.log(`Índice: ${buscaBinaria(arrayOrdenado, 10)}`);

// Verificação do conteúdo do cache
console.log("\nConteúdo do cache:");
console.log(cache);
