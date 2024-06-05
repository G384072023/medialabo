function changeBackground(image) {
    document.body.style.backgroundImage = `url(${image})`;
}
// 通信を開始する処理
function sendRequest(city) {
    // URL を設定
    let url =`https://www.nishita-lab.org/web-contents/jsons/openweather/${city}.json`;;
    // 通信開始
    axios.get(url)
        .then(resp => showResult(resp, city))  // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}
// 通信が成功した時の処理
function showResult(resp,city) {
    // サーバから送られてきたデータを出力
    let data = resp.data;
    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    // data をコンソールに出力
    console.log(data);
    // data.x を出力
    console.log(data.x);
 
    let names = data.name;
    let a = document.querySelector(`#name_${city}`);
    a.textContent = names;

    let weather =data.weather[0].description 	;
    let b = document.querySelector(`#weather_${city}`);
    b.textContent =  weather;

    let temp_max = data.main.temp_max;
    let c = document.querySelector(`#max_${city}`);
    c.textContent =  temp_max + '℃';
    
    let temp_min = data.main.temp_min;
    let d = document.querySelector(`#min_${city}`);
    d.textContent =  temp_min + '℃';

    let humidity = data.main.humidity
    let e = document.querySelector(`#hum_${city}`);
    e.textContent =  humidity ;

    let windspeed = data.wind.speed;
    let f = document.querySelector(`#sp_${city}`);
    f.textContent =  windspeed ;

    let winddeg = data.wind.deg;
    let g = document.querySelector(`#di_${city}`);
    g.textContent =  winddeg ;
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}
