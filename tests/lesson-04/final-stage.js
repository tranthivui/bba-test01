function findPairsDivisibleBy17() {
    const list = new Array();
    for (let i = 0; i <= 100; i++) {
        for (let j = 0; j <= 100; j++) {
            if ((i + j) % 17 === 0) {
                let capSo = {
                    soA: i,
                    soB: j
                }
                let exsitscapSo = list.find(cap => cap.soA === j && cap.soB === i);
                if (!exsitscapSo) {
                    list.unshift(capSo);
                }
            }
        }
    };
    //console.log(list.length);
    console.log(`\n Tổng cộng: ${list.length} cặp`);
};

findPairsDivisibleBy17();
