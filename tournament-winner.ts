const competitions = [
  ['HTML', 'C#'],
  ['C#', 'Python'],
  ['Python', 'HTML']
]
const results = [0, 0, 1]

// O(n) time, O(n) space
export function tournamentWinner(competitions: string[][], results: number[]) {
  // co co, trzeba przejsc przez oba arraye za jednym razem, dodajac wszystkie nazwy zespolow
  // ... do hash map, wraz z ich wynikiem
  // szukamy zwyciezcy, wiec przegranych nie muszę nawet dodawac do socreboard

  const scoreboard = new Map<string, { name: string, wins: number }>()

  // O(n) time - bo iterujemy po arrayu competitions
  for (
    let competitionIdx = 0;
    competitionIdx < competitions.length;
    competitionIdx++
  ) {
    const winnerIdx = results[competitionIdx] === 0 ? 1 : 0
    const winner = competitions[competitionIdx][winnerIdx]

    if (scoreboard.has(winner)) {
      // issue w githubie https://github.com/microsoft/TypeScript/issues/13086
      const currentWins = scoreboard.get(winner)!.wins
      scoreboard.set(winner, { name: winner, wins: currentWins + 1 })
    } else {
      scoreboard.set(winner, { name: winner, wins: 1 })
    }
  }

  // tutaj znowu musimy przejzec caly map i znalezc typa z najwieksza iloscia winow - not perfect
  // ... zrob tak najpierw zeby dzialalo, ale potem zrob madrzej
  // todo: zrob madrzej (bez tej drugiej iteracji, zrob to przy pierwszej)

  // O(n) time - bo iterujemy po mapie
  let winner: { name: string, wins: number } | null = null
  scoreboard.forEach((competitior) => {
    if (!winner || competitior.wins > winner.wins) {
      winner = competitior
    }
  })


  return winner!.name
}


const result = tournamentWinner(competitions, results)
console.log('result :', result)
