let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 1;
let check =0;
// 予想を4回実行する

// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let a=document.querySelector('button#button');
a.addEventListener('click',hantei);
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する;
  // 課題3-1: 正解判定する
let n=document.querySelector('input[name="number"]');
let n1=n.value;
let yoso=Number(n1);
let k=document.querySelector('span#kaisu');
let an=document.querySelector('span#answer');
let r = document.querySelector('p#result');
k.textContent=kaisu;
an.textContent=yoso;
console.log(kaisu+'回目の予想：'+yoso);
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
if(kaisu < 4&&check===0){
    if(kaisu === 3){
        if(yoso === kotae){
            console.log('正解です．おめでとう!');
            r.textContent='正解です．おめでとう!';
        }else{
            console.log('まちがい．残念でした答えは' + kotae + 'です．');
            r.textContent='まちがい．残念でした答えは' + kotae + 'です．'
            }
    }else{
        if(yoso === kotae){
            console.log('正解です．おめでとう!');
            r.textContent='正解です．おめでとう!';
            check=1;
        }else if(yoso < kotae){
            console.log('まちがい．答えはもっと大きいですよ');
            r.textContent='まちがい．答えはもっと大きいですよ';
        }else{
            console.log('まちがい．答えはもっと小さいですよ');
            r.textContent='まちがい．答えはもっと小さいですよ';
        }
    }
}else{
    console.log('答えは' + kotae + 'でした．すでにゲームは終わっています');
    r.textContent='答えは' + kotae + 'でした．すでにゲームは終わっています';
}
kaisu++;
}