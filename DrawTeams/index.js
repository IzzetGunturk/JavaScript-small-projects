const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

teamsForDraw = ["Real Madrid", "Manchester City", "Galatasaray", "Benfica", "Chelsea", "Atletico Madrid", "AC Milan", "Feyenoord"]

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
} 

function draw() {
    rl.question("Press Enter to draw!", () => {
        const shuffledTeams = shuffle(teamsForDraw);
        console.log(shuffledTeams);
        for (let i = 0; i < shuffledTeams.length; i+=2) {
            const team1 = shuffledTeams[i];
            const team2 = shuffledTeams[i + 1];
            console.log(`${team1} - ${team2}`);     
        }
        draw()
    });
}

draw();