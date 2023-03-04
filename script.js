const formPlayer = document.getElementById('formPlayer');
const inputPlayer = document.getElementById('inputPlayer');
const listOfPlayers = document.getElementById('listOfPlayers');
const allPlayers = []

const btn = document.getElementById('btn')

formPlayer.addEventListener('submit', (el) => {
    el.preventDefault();
    addPlayer()
});

function addPlayer(player) {
    const playerName = inputPlayer.value;
    lengthLI = listOfPlayers.getElementsByTagName("li").length;

    if (lengthLI > 3) {
        alert('Max number of players is 4')
    } else {
        if (player) {
            playerName = player.text;
        }

        if (playerName) {
            let newPlayer = document.createElement('li');
            newPlayer.classList.add('newPlayer');
            newPlayer.addEventListener('click', () => {
                newPlayer.remove()
            })


            newPlayer.innerText = playerName
            listOfPlayers.appendChild(newPlayer)
            allPlayers.push(newPlayer)
            inputPlayer.value = ''
        }
    }
}


btn.addEventListener('click', function(e) {
    const listaIgraca = [
    ]
    const allPlayersList = document.querySelectorAll('li');

    allPlayersList.forEach((player) => {
        listaIgraca.push({
            name: player.innerText
        })
    })
    localStorage.setItem("lista", JSON.stringify(listaIgraca));

    window.location.href = 'scoreboard.html'
})