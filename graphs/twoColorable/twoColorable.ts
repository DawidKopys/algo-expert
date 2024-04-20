// You are given a list of edges representing a connected, unweighted, undirected graph with at least one node.
// Write a function that returns a boolean representing whether the given graph is two-colorable.

// A graph is two-colorable if you can assign one of two colors to each node in such a way that no two adjacent nodes share the same color.

// The given list is what's called an adjacency list, and it represents a graph.
// The number of vertices in the graph is equal to the length of edges,
// where each index i in edges contains vertex i's neighbors, in no particular order.
// Each invidual edge is represented by a positive integer that denotes an index (a destination vertex) in the list that this vertex is connected to.
// Note that these edges are undirected, meaning that if a vertex appears in the edge list of a another vertex, then the inverse is also true.

// Note that this graph may have self loops. Any self loop will make the graph not two-colorable.

// na pewno będzie trzeba przejść cały graph przy pomocy DFS / BFS
// ... wydaje mi się, ze BFS będzie miał tu więcej sensu
// 1. zaczynamy od dowolnego node'a - to nasz currentNode
// 2. kolorujemy go na jeden kolor - np. "blue"
// 3. dla kazdego sąsiada (neighbour) currentNode'a:
//    - jeśli jest juz pokolorowany:
//      - na TEN SAM kolor co currentNode - oznacza to, ze graph nie jest two-colorable, zwracamy false
//      - na przeciwny kolor - nic nie robimy
//    - jeśli nie jest jeszcze pokolorowny - kolorujemy go na przeciwny kolor
// ... jesli odwiedzimy w ten sposób wszystkie node'y - to oznacza ze graph jest two-colorable - zwracamy true

// pytania:
// 1. w jaki sposób będziemy "kolorować" node'y? jakiej struktury danych tu uzyjemy?
//    ... moze po prostu dwa arraye z indeksami elementów w danym kolorze?
//        np. blueNodes oraz redNodes? niby zadziala, ale sprawdzanie czy node jest
//        pokolorowany byloby wolne - O(n), gdzie n to liczba elementow w arrayu
//    ... wiec lepszym wyborem będzie hash table - Set
// 2. skąd będziemy wiedzieć ze odwiedzilismy juz wszystkie node'y?
//    odp: to nie problem - korzystamy z BFS i konczymy kiedy kolejka jest pusta

// O(v + e) time (as regular BFS)
// O(v) space (we store all nodes in sets)
export function twoColorable(edges: number[][]) {
  const queue = [0]
  const blueNodes: Set<number> = new Set([0])
  const redNodes: Set<number> = new Set()

  while (queue.length > 0) {
    const currentNode = queue.shift()!

    let [currentColorNodes, opositeColorNodes] = blueNodes.has(currentNode)
      ? [blueNodes, redNodes]
      : [redNodes, blueNodes]

    for (const neighbour of edges[currentNode]) {
      if (currentColorNodes.has(neighbour)) {
        return false
      }
      if (opositeColorNodes.has(neighbour)) {
        continue
      }

      opositeColorNodes.add(neighbour)
      queue.push(neighbour)
    }
  }

  return true
}
