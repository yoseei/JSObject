'use strict';
{
//   ## 配列の要素にアクセス
//   const scores = [80, 90, 100];
//   scores[2] = 50; //constで定義していても「配列の中の数値」は変更できる。

//   console.log(scores[1]);

//   ## 配列とループ処理を組み合わせる
//   const scores = [10, 20, 30, 40, 4, 5, 6];

//   console.log(`Score: ${score[0]}`);
//   console.log(`Score: ${score[1]}`);
//   console.log(`Score: ${score[2]}`);

//   for (let i = 0; i < scores.length; i++) {
//     console.log(`Score ${i}: ${scores[i]}`);
//   }

//   ## 配列の要素を変更する
//   const scores = [10, 20, 30, 40, 50];
//   scores.push(60, 70);
//   scores.shift();
//   // 20, 30, 40, 50, 60, 70
//   scores.unshift(5);
//   scores.pop();
//   // 5, 20, 30, 40, 50, 60, 

//   // ### 追加 // 先頭: unshift, 末尾: push
//   // ### 削除 // 先頭: shift, 末尾: pop

//   for (let i = 0; i < scores.length; i++) {
//     console.log(`Score ${i}: ${scores[i]}`)
//   }

//   ## splice()で配列を変更する
//   const scores = [10, 20, 30, 40, 50];

//   scores.splice(1, 2, 15, 25);
//   // ## splice(開始する位置, 削除する数, 入力する値)

//   for (let i = 0; i < scores.length; i++) {
//     console.log(`Score ${i}: ${scores[i]}`)
//   }
//   ## スプレッド構文
//   const otherScores = [10, 20];
//   // const scores = [5, 15, 49, 50, ...otherScores]; //...はスプレッド構文と言って、配列の中身を取り出して、別の配列などに加えるときに使う。
//   // console.log(scores);

//   function sum(a, b) {
//     console.log(a + b);
//   }

//   sum(...otherScores);

//   ## 分割代入
//   const scores = [30, 20, 10, 40];
//   // const [a, b, c, d] = scores;

//   // console.log(a);
//   // console.log(b);
//   // console.log(c);
//   // console.log(d);

//   const [a, b, ...others] = scores; //レスト構文
 
//   console.log(a);
//   console.log(b);
//   console.log(others);

//   let x = 50;
//   let y = 30;
//   [x, y] = [y, x]; //値の交換
//   console.log(x);
//   console.log(y);

//   ## forEach()を使う

//   const scores = [10, 20, 30, 40];
//   scores.forEach((score, index) => { //引数名はなんでも良い。大体配列の単数形の名前になる。(第2引数は、第１引数の要素が何番目か、という値を取り出せる。)
//     console.log(`Score ${index}: ${score}`);
//   });
  
//   ## map()を使う 
//   const prices = [100, 130, 150]; //すでにある配列の要素に、なんらかの値を＋したりする時に使う。
//   const updatePrices = prices.map(price => price * 2)
//   console.log(updatePrices);
 
//   ## filter()を使ってみる

//   const numbers = [1, 2, 3, 4, 5];
//   const oddNumbers = numbers.filter(number => number % 2 === 1); //本当はif文になっていたのを省略。
//   console.log(oddNumbers); //奇数だけ抽出してくれる。

//   ## オブジェクトを作る
//   const point = [100, 180]; //x座標と、y座標を作りたいが、これだと配列の数字が何を示しているのかわかりづらい。

//   const point = {
//     x: 100, //オブジェクトは波かっこでくくる。このように段を分けると見やすくなる。
//     y: 180, //プロパティ(x: 100)、キー(x)、値(100)というように、それぞれ名前があることを知る。
//   };
//   console.log(point);

//   ## プロパティを操作する
 
//   const point = {
//     x: 100,
//     y: 180,
//   };
  
//   point.x = 120;
//   point.z = 60; //定数名.キー = 値 とするとプロパティが作られる。
//   delete point.x; //<delete 定数名.キー> で対象のキーを削除できる。 


//   console.log(point);
  
//   ## オブジェクトを操作する
//   const otherProps = {
//     r: 4,
//     color: 'red',
//   }
  
//   const point = {
//     x: 100,
//     y: 180,
//     ...otherProps, //...スプレッド構文を使って、オブジェクトに代入もできる。
//   }

//   const {x, r, ...others} = point; //分割代入を使ってキーを定数として扱いたい場合は、対応するキーを指定してオブジェクトを代入する。
//   console.log(x);
//   console.log(r);
//   console.log(others);

//   ## Object.key()を使う
//   const point = { 
//     x: 100,
//     y: 180,
//   }
//   const keys = Object.keys(point);
//   keys.forEach(key => {
//     console.log(`Key: ${key}, Value: ${point[key]}`)
//   });

//   ## 変数を代入する
//   let x = 1;
//   let y = x;
//   x = 3;
//   console.log(x); // 3
//   console.log(y); // 1

//   let x = [2, 4];
//   let y = x;
//   x[0] = 1;
//   console.log(x); //1, 4
//   console.log(y); //1, 4 (2, 4となるかと思いきやをそうならないのは、配列の定数などを代入した場合は、その中身までは代入したことにならないから。)
//   let x = [2, 4];
//   let y = [...x]; //...スプレッド演算子を使うことで、数値そのものを代入出来る。
//   x[0] = 1; //なので、このように代入しても、yに代入したxの値は影響を受けない。

//   console.log(x); //1, 4
//   console.log(y); //2, 4
//   ## 文字列を操作してみる
//   const str = "hello";
//   console.log(str.length); //5

//   // str.substring(開始位置, 終了位置);
//   console.log(str.substring(3, 5)); //loを取得したい場合

//   ## join(), split()を使ってみる
//   const d = [2020, 01, 27]; //JSでは、０から始まる数字は別の意味として捉えられるので、エラーになる
//   const d = [2020, 11, 23];

//   console.log(d.join('/')); //2020/11/23
//   console.log(d.join('')); //20201123 空文字で指定するとこのようになる。

//   const t = '17:08:23';
//   console.log(t.split(':')); //["17", "08", "23"]
  
//   const [hour, minute, second] = t.split(':'); //分割代入も使える。
//   console.log(hour); //17
//   console.log(minute); // 08
//   console.log(second); // 23
  // ## 数値を操作してみる

//   const scores = [10, 4, 5];

//   let sum = 0;

//   scores.forEach(score => sum += score);

//   console.log(sum); //18

//   const avg = sum / scores.length;
//   console.log(avg); // 6.333333333333

//   console.log(Math.floor(avg)); //小数点以下切り捨て //6
//   console.log(Math.ceil(avg)); //小数点以下切り上げ //7
//   console.log(Math.round(avg)); //四捨五入 //6
//   console.log(avg.toFixed(3)); //引数に指定した箇所まで表示する。// 6.333

//   console.log(Math.random()); //0~1の間でランダムで数字を表示する。
  // ## ランダムな整数値を作る。
  // Math.floor(Math.random() * 3); //0, 1, 2
  // Math.floor(Math.random() * (n + 1)); //0 ~ n
  // Math.floor(Math.random() * (max + 1 - min)) + min; //0, 1, 2
  
  // console.log(Math.floor(Math.random() * (8 + 1 - 2)) + 2); //2 ~ 8
//  ## 現在日時を扱ってみよう。
// const d = new Date();

// d.getFullYear(); //現在の年
// d.getMonth(); //0-11 (Jan: 0, Feb:1, ...)
// d.getDate(); // 1-31
// d.getDay(); //0-6 (Sun: 0, Mon:1, ...)

// d.getHours(); //0-23
// d.getMinutes(); //0-59
// d.getSeconds(); //0-59
// d.getMilliseconds(); //0-999 1ms = 1/1000 sec;
// console.log(`${d.getFullYear()}年 ${d.getMonth() + 1}月 ${d.getDate()}日 ${d.getDay()}曜日`);
// console.log(`${d.getHours()}時 ${d.getMinutes()}分`);

// ## 特定の日時を扱う
// const d = new Date(2021, 1);
// d.setHours(11, 44, 40);
// d.setDate(15);
// d.setDate(d.getDate() + 3);
// console.log(d);

// ## alert(), confirm()を使う
  // alert('警告');

  // const answer = confirm('削除しますか？');
  // if (answer) {
  //   console.log('削除しました！');
  // } else {
  //   console.log('キャンセルしました！');
  // }

  // ## setInterval()を使う
  // let i = 0;

  // function showTime() {
  //   console.log(new Date());
  //   i++;
  //   if (i > 2) {
  //     clearInterval(intervalId);
  //   }
  // }
  // const intervalId = setInterval(showTime, 1000);

// ## setTimeout()を使う
// let i = 0; 
// function showTime() {
//   console.log(new Date());
//   const timeoutId = setTimeout(showTime, 1000);
//   i++;
//   if (i > 2) {
//     clearTimeout(timeoutId);
//   }
// }
// showTime();
  // ## 例外処理を使う
//   const name = 1;

//   try { //エラーが出そうな箇所はtyr, catchで囲む。
//     console.log(name.toUpperCase()); //toUpperCaseは文字列にしか使えない。
//   } catch (e) { //引数はerrorのeがよく使われる。
//     console.log(e); //このような記述をすることで、最後のFinished！まで処理を止めずに行く事ができる。
//   }

//   console.log('Finished!');
  // ## オブジェクトが複数ある場合
  // const posts = [
  //   {
  //     text: '今日も元気！',
  //     likeCount: 0,
  //   },
  //   {
  //     text: 'やっほー！',
  //     likeCount: 0,
  //   },
  // ];

  // function show(post) {
  //   console.log(`${post.text} - ${post.likeCount}`)
  // }
  // show(posts[1]);

  // ## メソッドをつかってみよう
//   const posts = [
//     {
//       text: 'やほい',
//       likeCount: 1,
//       show() {
//         console.log(`${this.text} - ${this.likeCount}`); //オブジェクトの中に組み込んだ関数をメソッドと呼ぶ。
//       },
//     },
//     {
//       text: 'うっひゃー',
//       likeCount: 1,
//       show() {
//         console.log(`${this.text} - ${this.likeCount}`);
//       },
//     },
//   ];

//   posts[0].show();
//   posts[1].show();
  // ## クラスとインスタンス
  // class Post {
  //   constructor() { //プロパティはconstructor()というメソッドで初期化する。
  //     this.text = 'hello'; // クラスから作られるインスタンスをクラス内ではthisというキーワードで表現する。
  //     this.likeCount = 1;
  //   }
  //   show() { ... },
  // } //この形を「クラス」と呼ぶ。class名は慣習的に先頭を大文字にする。
  // こういったクラスから作られるオブジェクトのことを「インスタンス」と呼ぶ。

  // ## クラスをつくってみよう
  // class Post {
  //   constructor(text) {
  //     this.text = text;
  //     this.likeCount = 1;
  //   }

  //   show() {
  //     console.log(`${this.text} - ${this.likeCount}`);
  //   }
  // }
  // const posts = [
  //   new Post('hello world'),
  //   new Post('こんにちは'),
  // ];
  // posts[0].show();
  // posts[1].show();
  // ## カプセル化を理解しよう。
  // class Post {
  //   constructor(text) {
  //     this.text = text;
  //     this.likeCount = 0;
  //   }
  //   show() {
  //     console.log(`${this.text} - ${this.likeCount} likes!`);
  //   }
  //   like() {
  //     this.likeCount++;
  //     this.show();
  //   }
  // }

  // const posts = [
  //   new Post(`Hello World!`),
  //   new Post(`こんにちは！`),
  // ];

  // posts[0].like();
  
  // // posts[0].show();

  // ## 静的メソッド
  // class Post {
  //   constructor(text) {
  //     this.text = text;
  //     this.likeCount = 0; 
  //   }

  //   show() {
  //     console.log(`${this.text} - ${this.likeCount} likes!`);
  //   }
  //   like() {
  //     this.likeCount++;
  //     this.show();
  //   }

  //   static showInfo() {
  //     console.log('Post class version 1.0');
  //   }
  // }

  // const posts = [
  //   new Post('Hello World'),
  //   new Post('こんにちは！'),
  // ];

  // posts[0].like();
  // Post.showInfo();
  // ## クラスの拡張
//   class Post {
//     constructor(text) {
//       this.text = text;
//       this.likeCount = 0; 
//     }

//     show() {
//       console.log(`${this.text} - ${this.likeCount} likes!`);
//     }

//     like() {
//       this.likeCount++;
//       this.show();
//     }

//   }

//   class SponsoredPost {
//     constructor(text, sponsor) {
//       this.text = text;
//       this.likeCount = 0; 
//       this.sponsor = sponsor;
//     }

//     show() {
//       console.log(`${this.text} - ${this.likeCount} likes!`);
//       console.log(`...sponsored by ${this.sponsor}`);
//     }

//     like() {
//       this.likeCount++;
//       this.show();
//     }

//   }

//   const posts = [
//     new Post('Hello World!'),
//     new Post('こんにちは！'),
//     new SponsoredPost('3分動画でマスターしよう！', 'dotinstall'),
//   ];
//   posts[2].show();
//   posts[2].like();
//   // posts[0].like();
//   // Post.showInfo();
  // ## クラスの継承
  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes!`);
    }

    like() {
      this.likeCount++;
      this.show();
    }
  }

  class SponsoredPost extends Post{
    constructor(text, sponsor) {
      super(text);
      this.sponsor = sponsor;
    }

    show() {
      super.show();
      console.log(`...sponsored by ${this.sponsor}`);
    }

  }
  const posts = [
    new Post('Hello World!'),
    new Post('こんにちは！'),
    new SponsoredPost('3分動画でマスターしよう！', 'dotinstall'),
  ];

  posts[2].show();
  posts[2].like();
}