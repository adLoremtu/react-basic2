# 問題 3

カウントアップ機能を完成させてみましょう。

## 編集ファイル

- `/src/components/answer/No3/index.tsx（親コンポーネントファイル）`
- `/src/components/ui/countup/states.tsx（子コンポーネントファイル）`

## 機能

- `+`ボタンを押したら数値が 1 ずつカウントアップされる

## カウントアップ処理サンプル（わからない方向け）

```js
// 関数名（countUp), 更新関数内の引数(prevCount)は好きに設定していただいてOKです。
// 更新関数名(setCount)はuseStateで宣言した更新関数名を設定してください。
const countUp = () => {
  setCount((prevCount) => prevCount + 1);
};
```

## なぜ上の処理にする必要があるのか

- `setCount(count++)`
  - 上記の書き方を実施した場合はエラーとなります。
  - 理由としては`count`というのはあくまで定数であり、変化する値ではないという定義があるためになります。
  - `++`を行うと定数として宣言している`count`に再代入するような挙動となり、変化させてはいけないのに変化させようとしているのでエラーとなるということになります。
  - 言葉での説明は難しいので、ここでは`++`は使えないんだなと思っていただければ OK です。
- `setCount(count + 1)`
  - 上記の書き方を実施した場合は、エラーとはならないですがうまく挙動が動かない場合があります。
  - 例えば`countUp()`を 2 回実行するようにして`+2`するようにしたい場合、countUp()を 2 回実行するようにしても`+1`しか行われません。
  - 理由としては`countUp()`を実行した瞬間に`count`に設定されている値に`+1`する処理を 2 回行っているだけになるためです。
  - ここも言葉での説明は難しいので、`count+1`ではうまくいかない時があるんだなくらいに思っていただければ OK です。

### 参考記事

- [参考記事 - setCount(count++)](https://zenn.dev/kimura141899/articles/4d5817368c4ff6)
- [参考記事 - setCount(count+1)](https://zenn.dev/stin/articles/use-appropriate-api)

## 備考

### `/src/components/answer/No3/index.tsx（親コンポーネントファイル）`

- コンポーネントの呼び出し方
  - こちらは No1, No2 と内容は同じです。

### `/src/components/ui/countup/states.tsx（子コンポーネントファイル）`

- useState を使う
  - useState を使用するためには`import`で機能を読み込むようにする必要があります。
  - 書き方としては`import { useState } from "react"`を入れる必要があります。
  - 今回すでに`import React from "react"`で react から機能を読み込んでいる処理が存在するので、そこに`useState`も読み込むようにしてみましょう。
  - 書き方としては`import React, { useState } from "react"`で読み込むことが可能です。
  - ちなみに`{ useState }`という書き方をしていますが、こちらは ES6 の分割代入を使用しています。
- state を宣言する
  - 宣言方法としては`[定義するstate, state更新関数] = useState(初期値)`で定義する必要があります。
  - ちなみに`[定義するstate, state更新関数]`という書き方をしていますが、こちらも ES6 の分割代入を使用しています。
- 更新処理
  - 今回はボタンクリック時に`state更新関数`を実施するような処理を作成する必要があります。
  - なので関数を 1 つ宣言し、その中で`state更新関数`を実施するようにしましょう。
- クリックイベント
  - 今回はボタンクリック時に実施したいので、`onClick`を定義してそちらで関数を呼び出すようにしてあげましょう。
  - なお React でイベント処理を実施する場合はいくつかの特徴があります。
    - JS では`onclick`と記述しますが、React でイベントを定義する場合は`camelCase`で書く必要があるため`onClick`となります。
    - JS ではイベントハンドラとして文字列を渡す（`<button onclick="hogehoge()">up</button>`）ように記述しますが、React では`関数`を渡すようにする必要があるため`<button onClick={hogehoge}>up</button>`となります。
