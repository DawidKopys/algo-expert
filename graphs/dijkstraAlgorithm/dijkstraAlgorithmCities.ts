import { WeightedGraphVertex } from '../Vertex/directedGraph/WeightedGraphVertex'

export function dijkstraShortestPaths(startingCity: WeightedGraphVertex) {
  // 1. Initialize the prices table
  const prices = new Map([[startingCity, 0]])
  const visitedCities = new Set<WeightedGraphVertex>()

  // 2. Set the starting city as the current city
  let currentCity: WeightedGraphVertex | null = startingCity

  while (currentCity) { // 5. repeat until there are no more cities to visit
    visitedCities.add(currentCity)

    // 3. for each neighbor of the current node, update the price in the
    // distance table if the price from the start node to the neighbor
    // is less than the current price in the table
    for (const [
      adjecentCity,
      priceCurrentToAdjecent
    ] of currentCity.adjecentVertices) {
      const priceStartingToCurrent = prices.get(currentCity)!
      const priceStartingToAdjecent =
        priceStartingToCurrent + priceCurrentToAdjecent
      const currentLowestPriceToAdjecent =
        prices.get(adjecentCity) ?? Infinity

      if (
        priceStartingToAdjecent < currentLowestPriceToAdjecent
      ) {
        prices.set(adjecentCity, priceStartingToAdjecent)
      }
    }

    // 4. select an unvisited city from the prices table, that has the lowest price
    const minPriceCity = getMinPriceUnvisitedCity(prices, visitedCities)
    currentCity = minPriceCity
  }

  return prices
}

function getMinPriceUnvisitedCity(
  prices: Map<WeightedGraphVertex, number>,
  visitedCities: Set<WeightedGraphVertex>
) {
  let minPrice = Infinity
  let minPriceCity: WeightedGraphVertex | null = null

  for (const [city, price] of prices) {
    if (visitedCities.has(city)) {
      continue
    }
    if (price < minPrice) {
      minPrice = price
      minPriceCity = city
    }
  }

  return minPriceCity
}

const atlanta = new WeightedGraphVertex('Atlanta')
const boston = new WeightedGraphVertex('Boston')
const chicago = new WeightedGraphVertex('Chicago')
const denver = new WeightedGraphVertex('Denver')
const elPaso = new WeightedGraphVertex('El Paso')

atlanta.addAdjecentVertex(boston, 100)
atlanta.addAdjecentVertex(denver, 160)
boston.addAdjecentVertex(chicago, 120)
boston.addAdjecentVertex(denver, 180)
chicago.addAdjecentVertex(elPaso, 80)
denver.addAdjecentVertex(chicago, 40)
denver.addAdjecentVertex(elPaso, 140)
elPaso.addAdjecentVertex(atlanta, 100)

const result = dijkstraShortestPaths(atlanta)

// process output for prettier display
const prettierResult = new Map<string, number>()
for (const [city, price] of result) {
  prettierResult.set(city.value, price)
}

console.log('prettierResult :', prettierResult)
