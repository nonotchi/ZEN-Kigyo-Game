const button = document.getElementById('register-button');

button.addEventListener('click', function() {
    const session = document.getElementById('session').value;
    const nickname = document.getElementById('nickname').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const student = document.getElementById('student').value;
    const entrepreneurship = document.querySelector('input[name="entrepreneurship"]:checked');
    const agreement = document.querySelector('input[name="agreement"]:checked');

    button.disabled = true;
    
    if (!session) {
        alert('参加回を選択してください');
        button.disabled = false;
        return;
    }

    if (!nickname) {
        alert('ニックネームを入力してください');
        button.disabled = false;
        return;
    }

    // JISコード変換(電光掲示板用)
    let nicknameJIS;

    try {
        nicknameJIS = Encoding.convert(nickname, {
            to: "ISO-2022-JP",
            type: 'array',
            fallback: 'error'
        });
    } catch (e) {
        alert('ニックネームに未対応の文字が含まれています');
        button.disabled = false;
        return;
    }

    if (agreement.value !== '1') {
        alert('同意事項に同意してください');
        button.disabled = false;
        return;
    }


    // TODO: 送信処理
    const ok = true; // 送信結果

    if (ok) {
        document.getElementById('result-area').innerHTML = `<p>参加受付が完了しました！</p>
        <p>この画面は参加時に必要です！閉じると再度表示できません！必ずスクリーンショットを保存してください。</p>

        <div class="center">
            <div id="reception-nickname">テストさん</div>
            <div id="reception-time">10:00～10:40</div>
            <div id="reception-meeting-time">9:50にお越しください。</div>
            <div id="reception-qrcode"></div>
            <div id="reception-number">受付番号：123456</div>
        </div>
        
        <p>起業サークルメンバー一同、お待ちしています！</p>`;
        // window.location.href = 'done.html';
    } else {
        alert('ニックネームを入力し、同意事項に同意してください。');
        button.disabled = false;
    }
});