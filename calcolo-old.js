

// Example input
const rounds = [
  {
GINO: 1.5,
HITLER:6,
KARIMMI:1,
PEDDI:4,
TRAVIS:5.5,
SREPER:3,
LABATRIX:4.5,
MASKED:6,
ABDUL:1.5,
LEVIATHAN:1,
ZIURI:1
  },
  {
    GINO: 4,
    HITLER: 3.5,
    KARIMMI: 1,
    PEDDI: 6,
    TRAVIS: 4,
    SREPER: 1,
    LABATRIX: 1,
    MASKED: 3.5,
    ABDUL: 1,
    LEVIATHAN: 1,
    ZIURI:3.5
  },
  {
    GINO: 3,
    HITLER: 1,
    KARIMMI: 1.5,
    PEDDI: 1.5,
    TRAVIS: 3.5,
    SREPER: 3,
    LABATRIX: 1,
    MASKED: 4.5,
    ABDUL: 1.5,
    LEVIATHAN: 1.5,
    ZIURI: 1.5
  },
  {
    GINO: 1.5,
    HITLER: 4.5,
    KARIMMI: 1.5,
    PEDDI: 1.5,
    TRAVIS: 1.5,
    SREPER: 1.5,
    LABATRIX: 3,
    MASKED: 2.5,
    ABDUL: 1.5,
    LEVIATHAN: 3,
    ZIURI: 4.5
  },
  // {
  //   GINO: 1,
  //   HITLER: 4,
  //   KARIMMI: 1,
  //   PEDDI: 1.5,
  //   TRAVIS: 4.5,
  //   SREPER: -2.5,
  //   LABATRIX: 5.5,
  //   MASKED: 1.5,
  //   ABDUL: 1.5,
  //   LEVIATHAN: 1.5,
  //   ZIURI: 1.5 
  // }
];

function calculateFinalScores(rounds) {
    const totalScores = {};

    // Calcola i punteggi totali
    for (const round of rounds) {
        for (const [player, score] of Object.entries(round)) {
            if (!totalScores[player]) {
                totalScores[player] = 0; // Inizializza il punteggio del giocatore
            }
            totalScores[player] += score; // Somma il punteggio del round
        }
    }

    return totalScores;
}

function getSortedLeaderboard(totalScores) {
    // Converte l'oggetto in un array, ordina i punteggi in ordine decrescente e restituisce l'array ordinato
    return Object.entries(totalScores)
        .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
        .map(([player, score], rank) => ({
            rank: rank + 1,
            player,
            score,
        }));
}


// Calcola i punteggi totali
const finalScores = calculateFinalScores(rounds);

// Ottieni la classifica finale ordinata
const leaderboard = getSortedLeaderboard(finalScores);

// Mostra i risultati
console.log("Punteggi totali:", finalScores);
console.log("Classifica finale:", leaderboard);