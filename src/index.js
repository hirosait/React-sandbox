/**
 * const & letの変数宣言
 */

// // varは割となんでもできちゃう
// var val1 = "var変数";

// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// // let
// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";

// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// //const変数への上書き不可
// val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

// constでもオブジェクトの中身は変えられる
// constで定義したオブジェクトはプロパティの変更が可能
// →基本的にapp開発で変数宣言はconstで行い、処理の中で上書きする変数はletを使う
// const val4 = {
//   name: "じゃんけん",
//   age: 28
// }
// console.log(val4);

// val4.name = "ぽん";
// console.log(val4);

// val4.address = "hi";
// console.log(val4);
// // constで定義した配列はプロパティの変更が可能

// const val5 = ['dog', 'cat'];
// console.log(val5);
// val5[0] = "bird";
// console.log(val5);
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "じゃんけん";
// const age = 28;
// // 「私の名前はじゃんけんです。年齢は２８歳です。」
// //これまで
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);
// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

//従来の関数
//  function func1(str){
//   return str;
//  }
//変数に入れることもできる
//  const func1 = function(str){
//    return str;
//  }
//  console.log(func1('test'));

//アロー関数
//  const func2 = (str) => {
//   return str;
//  }
//  console.log(func2("test2"));

//引数の()は省略できる。がprettierが勝手に保管してくれる

// 波括弧とリターンを省略できる
// const func2 = (str) => str;
// console.log(func2("test2"));

// const func3 = (num1, num2) => {
//  return num1 + num2;
// };
// // const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */

//  const myProfile = {
//    name: "じゃんけん",
//    age: 28
//  };

// //  const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;
// //  console.log(message1);

//  const {name, age} = myProfile; //取り出し
//  const message1 = `名前は${name}です。年齢は${age}です`;
//  console.log(message1);

// const myProfile = ['じゃんけん',28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */

//  const sayHello = (name) => console.log(`こんにちは!${name}さん`);
//  sayHello();
//-> こんにちは!undefinedさん

//  const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん`);
//  sayHello();
//->こんにちはゲストさん

/**
 * スプレッド構文 ...
 * 配列に対して...ついていたら、順番に展開して処理してくれる
 */
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// // まとめる
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// //　配列nコピー、結合
// const arr4 = [10,20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// // =だと参照渡し
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 * これを使うことで、for文が不要になる
 */

const nameArr = ["田中", "山田", "じゃんけん"];
//  for (let index = 0; index < nameArr.length; index++){
//    console.log(`${index+1}番目は${nameArr[index]}です`);
//  }

// mapの中にアロー関数を定義、配列の値を１つずつ取り出しnameに入ってくる
//  const nameArr2 = nameArr.map((name) => {
//    return name;
//  })
// console.log(nameArr2);

// 配列から値を１つずつ取り出して、アロー関数に渡す.
// nameArr.map((name) => console.log(name));
// nameArr.map((name, index) => console.log(`${index+1}番目は${name}です`));

// filter 配列に対してある条件が一致した値のみ取り出す

// const numArr = [1, 2, 3, 4, 5];
// const newnumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newnumArr);

// const newNameArr = nameArr.map((name) => {
//   if(name === "じゃんけん"){
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */

// ある条件? 条件がtrueのとき: 条件がfalseのとき

// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);

const num = 1300;
console.log(num.toLocaleString());

