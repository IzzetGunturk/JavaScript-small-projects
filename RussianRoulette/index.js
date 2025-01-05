const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const chambers = 6;
const bullet = Math.floor(Math.random() * chambers);
let usedChambers = [];

function shot() {
    rl.question("Press Enter to pull down the trigger...", () => {
        let rightBullet;

        while (true) {
            rightBullet = Math.floor(Math.random() * chambers);
            if (!usedChambers.includes(rightBullet)) {
                usedChambers.push(rightBullet);
                break;
            }
        }

        console.log(`Bullet in chamber: ${bullet}`);
        console.log(`Bullet: ${rightBullet}`);

        if (bullet === rightBullet) {
            console.log("Game over...")
            rl.close();
        }
        else {
            console.log("You are lucky this time...");
            shot();
        }
    })
}

shot();