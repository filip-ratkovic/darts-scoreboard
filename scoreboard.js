const lista = JSON.parse(localStorage.getItem('lista'))

if (lista === null) {
    const errorBackBtn = document.createElement('button')
    const scoreErrorDiv = document.getElementById('score-error')
    errorBackBtn.classList.add('error-back-btn')
    errorBackBtn.innerText = 'Back on home page'
    scoreErrorDiv.style.display = 'flex'
    scoreErrorDiv.appendChild(errorBackBtn)


    errorBackBtn.addEventListener('click', () => {
        window.location.href = 'index.html';

    })
} else {
    const winnerName = document.getElementById('winner-name')
    const playersContainer = document.getElementById('players-container');
    let currentPlayer = lista.length;
    const pointsScored = document.getElementById('points-scored')
    let gadjaniPoeni
    let brojac = 0;
    let lastPoints = 0;
    let brojac2 = 0
    const finishedGame = document.getElementById('finished-game')
    const newGame = document.getElementById('new-game');
    const restart = document.getElementById('restart')



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
        changeScore()
    })


    const changeScore = () => {
        gadjaniPoeni = pointsScored.value

        if (brojac > 2 || lista[currentPlayer - 1].score < 0) {
            if (currentPlayer === lista.length) {
                currentPlayer = 1;
            } else {
                currentPlayer += 1
            }
            brojac = 0
            lastPoints = 0
        }

        lista[currentPlayer - 1].score -= gadjaniPoeni;
        lastPoints += Number(gadjaniPoeni)
        if (lista[currentPlayer - 1].score < 0) {

            lista[currentPlayer - 1].score = Number(lista[currentPlayer - 1].score) + Number(lastPoints)
            lastPoints = 0
            if (lista[currentPlayer - 1].score > 0) {
                refreshScore(currentPlayer, lista[currentPlayer - 1].score)
            }
            if (currentPlayer === lista.length) {
                currentPlayer = 1;
            } else {
                currentPlayer += 1
            }
            brojac = -1
        }

        if (lista[currentPlayer - 1].score > 0) {
            refreshScore(currentPlayer, lista[currentPlayer - 1].score)

        } if (lista[currentPlayer - 1].score === 0) {
            winnerName.innerText = ` ${lista[currentPlayer - 1].name}`
            finishedGame.style.display = 'flex'
        }
        brojac++
        pointsScored.value = ''
    }

    const refreshScore = (playernum, playerScore) => {
        let playerScoreH1 = document.querySelector(`#player_${playernum - 1} h3`)
        playerScoreH1.innerText = playerScore
    }


    restart.addEventListener('click', () => {
        finishedGame.style.display = 'none';
        window.location.reload()
    });

    newGame.addEventListener('click', () => {
        finishedGame.style.display = 'none';
        window.location.href = 'index.html';
    })



    window.addEventListener("load", showPlayers(lista))

}





