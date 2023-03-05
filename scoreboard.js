const test = document.getElementById('test');
const playersContainer = document.getElementById('players-container');

const lista = JSON.parse(localStorage.getItem('lista'))
// todo   proveriti duzinu igraca
let currentPlayer = lista.length;
const changeButton = document.getElementById('btn')
const pointsScored = document.getElementById('points-scored')
let gadjaniPoeni
let brojac = 1;


const showPlayers = (lista) => {
    lista.map((player, index) => {
        let singlePlayerDiv = document.createElement('div');
        singlePlayerDiv.setAttribute('id', `player_${index}`)
        let playersName = document.createElement('h1');
        let playersScore = document.createElement('h3');
        let score = player.score;
        singlePlayerDiv.classList.add('single-player');
        playersScore.innerText = score;
        playersName.innerText = player.name;

        singlePlayerDiv.appendChild(playersName);
        singlePlayerDiv.appendChild(playersScore);
        playersContainer.appendChild(singlePlayerDiv);
    })
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('DA LI RADI PROMENA!!!!')
    changeScore()
})


const changeScore = () => {
    gadjaniPoeni = pointsScored.value
    lista[currentPlayer - 1].score -= gadjaniPoeni;



    if (brojac > 2 || lista[currentPlayer - 1].score < 0 ) {
        if (currentPlayer === lista.length) {
            currentPlayer = 1;
        } else {
            currentPlayer += 1
        }
        brojac = 0
    }
    brojac++
    if(lista[currentPlayer - 1].score > 0){
        refreshScore(currentPlayer, lista[currentPlayer - 1].score)
    }

    pointsScored.value = ''

}

const refreshScore = (playernum, playerScore) => {
    playerScoreH1 = document.querySelector(`#player_${playernum - 1} h3`)

    playerScoreH1.innerText = playerScore
}

window.addEventListener("load", showPlayers(lista))




