'use strict';
{
  // ## 配列の要素にアクセス
  // const scores = [80, 90, 100];
  // scores[2] = 50; //constで定義していても「配列の中の数値」は変更できる。

  // console.log(scores[1]);

  // ## 配列とループ処理を組み合わせる
  // const scores = [10, 20, 30, 40, 4, 5, 6];

  // console.log(`Score: ${score[0]}`);
  // console.log(`Score: ${score[1]}`);
  // console.log(`Score: ${score[2]}`);

  // for (let i = 0; i < scores.length; i++) {
  //   console.log(`Score ${i}: ${scores[i]}`);
  // }

  // ## 配列の要素を変更する
  // const scores = [10, 20, 30, 40, 50];
  // scores.push(60, 70);
  // scores.shift();
  // // 20, 30, 40, 50, 60, 70
  // scores.unshift(5);
  // scores.pop();
  // // 5, 20, 30, 40, 50, 60, 

  // // ### 追加 // 先頭: unshift, 末尾: push
  // // ### 削除 // 先頭: shift, 末尾: pop

  // for (let i = 0; i < scores.length; i++) {
  //   console.log(`Score ${i}: ${scores[i]}`)
  // }

  // ## splice()で配列を変更する
  // const scores = [10, 20, 30, 40, 50];

  // scores.splice(1, 2, 15, 25);
  // // ## splice(開始する位置, 削除する数, 入力する値)

  // for (let i = 0; i < scores.length; i++) {
  //   console.log(`Score ${i}: ${scores[i]}`)
  // }
  // ## スプレッド構文
  // const otherScores = [10, 20];
  // // const scores = [5, 15, 49, 50, ...otherScores]; //...はスプレッド構文と言って、配列の中身を取り出して、別の配列などに加えるときに使う。
  // // console.log(scores);

  // function sum(a, b) {
  //   console.log(a + b);
  // }

  // sum(...otherScores);

  // ## 分割代入
  // const scores = [30, 20, 10, 40];
  // // const [a, b, c, d] = scores;

  // // console.log(a);
  // // console.log(b);
  // // console.log(c);
  // // console.log(d);

  // const [a, b, ...others] = scores; //レスト構文
 
  // console.log(a);
  // console.log(b);
  // console.log(others);

  // let x = 50;
  // let y = 30;
  // [x, y] = [y, x]; //値の交換
  // console.log(x);
  // console.log(y);

  // ## forEach()を使う

  // const scores = [10, 20, 30, 40];
  // scores.forEach((score, index) => { //引数名はなんでも良い。大体配列の単数形の名前になる。(第2引数は、第１引数の要素が何番目か、という値を取り出せる。)
  //   console.log(`Score ${index}: ${score}`);
  // });
  
  // ## map()を使う 
  // const prices = [100, 130, 150]; //すでにある配列の要素に、なんらかの値を＋したりする時に使う。
  // const updatePrices = prices.map(price => price * 2)
  // console.log(updatePrices);
  const otherScores = [100, 120];
  const scores = [10, 20, 30, 40, 50, ...otherScores];
  
  
  

}