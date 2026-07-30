function createCharacters(){
   const characters=[
        {
            name:'name1',
            level: 1,
            health: 1000
        },
        {
            name:'name2',
            level: 2,
            health: 2000
        },
        {
            name:'name3',
            level: 3,
            health: 3000
        }
    ];
  const  charactersPowerup=characters.map((upperChars) => ({
        name: upperChars.name.toUpperCase(),
        level: upperChars.level*2,
        health: upperChars.health*3
    }));
    console.log('**********charactersPowerup***********');
    console.log(charactersPowerup);

   const possibleWinners=characters.filter(char => char.health>1000);
    console.log('**********possibleWinners***********');
    console.log(possibleWinners);

};
createCharacters();

const players=[
    {
        name: 'Mario',
        score: 1000
    },
    {
        name: 'Luigi',
        score: 900
    },
    {
        name: 'Peach',
        score: 850
    },
    {
        name: 'Yoshi',
        score: 800
    },
    {
        name: 'Phong',
        score: 500
    }
];
function printLeaderboard(listPlayer){
    const playersOrder=listPlayer.sort((a,b) => b.score-a.score);
  //  console.log(playersOrder);
    console.log('**********playersOrder***********');
   for(let i=0; i<playersOrder.length; i++){
        if(i===0){
            console.log(`🥇 ${i+1}. ${playersOrder[i].name} - ${playersOrder[i].score} pts`);
        }else{
            if(i===1){
                console.log(`🥈 ${i+1}. ${playersOrder[i].name} - ${playersOrder[i].score} pts`);
            }else{
                if(i===2){
                console.log(`🥉 ${i+1}. ${playersOrder[i].name} - ${playersOrder[i].score} pts`);
                }else{
                console.log(`   ${i+1}. ${playersOrder[i].name} - ${playersOrder[i].score} pts`);
                }
            }
        }
   }
}

printLeaderboard(players);