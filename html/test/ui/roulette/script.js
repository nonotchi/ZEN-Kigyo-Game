const rouletteMachine = document.getElementById('roulette-machine');
const rouletteWheel = document.getElementById('roulette-wheel');

// ルーレット筐体のアニメーション
let machineState = 1;

setInterval(() => {
    rouletteMachine.setAttribute('class', `state${machineState}`);
    machineState++;
    if (machineState > 3) machineState = 1;
}, 200);

// 回転処理
rouletteWheel.addEventListener('click', () => {
    const totalDuration = Math.random() * 2000 + 4000; // 回転時間
    const finalAngle = Math.random() * 360 + 3600; // 最終角度(10回転以上)

    rouletteWheel.style.transition = `${totalDuration}ms cubic-bezier(0.33, 1, 0.68, 1)`;
    rouletteWheel.style.transform = `rotate(${finalAngle}deg)`;

    setTimeout(() => {
        const normalizedAngle = finalAngle % 360;
        rouletteWheel.style.transition = 'none';
        rouletteWheel.style.transform = `rotate(${normalizedAngle}deg)`;

        let result = Math.floor((((360 - normalizedAngle) + 45 / 2) / 45) % 8);
        if (result === 0) result = 8;

        alert(result);
    }, totalDuration);
});