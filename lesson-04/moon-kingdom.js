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
    console.log(charactersPowerup);

   const possibleWinners=characters.filter(char => char.health>1000);
   console.log(possibleWinners);

};
createCharacters();