# Busca Binária Recursiva com Cache

Este repositório contém uma implementação em JavaScript de um algoritmo de busca binária recursiva com sistema de cache utilizando hashtable.

## Funcionalidades

- **Busca Binária Recursiva**: Implementação eficiente para encontrar elementos em um array ordenado com complexidade O(log n).
- **Sistema de Cache**: Armazena resultados de buscas anteriores para evitar processamento redundante.
- **Hashtable**: Utiliza um objeto JavaScript como estrutura de dados para o cache, garantindo acesso em tempo constante O(1).

## Como Funciona

O algoritmo funciona em duas etapas principais:

1. **Verificação do Cache**: Antes de realizar uma busca, verifica se o resultado já está no cache.
2. **Busca Binária**: Se o resultado não estiver no cache, executa a busca binária recursiva e armazena o resultado no cache.

A busca binária divide o array ao meio e verifica se o elemento do meio é o valor procurado. Se não for, continua a busca na metade esquerda (se o valor for menor) ou na metade direita (se o valor for maior).

## Uso

```javascript
// Importar ou copiar o arquivo buscaBinariaRecursiva.js

// Exemplo de uso:
const arrayOrdenado = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const resultado = buscaBinaria(arrayOrdenado, 7);
console.log(`Índice do valor 7: ${resultado}`);
```

## Complexidade

- **Tempo**:
  - Primeira busca: O(log n)
  - Buscas subsequentes para o mesmo valor: O(1)
- **Espaço**: O(m) onde m é o número de buscas distintas realizadas

## Arquivo Principal

- `buscaBinariaRecursiva.js`: Contém a implementação completa do algoritmo, incluindo a função de busca binária recursiva e o sistema de cache.
