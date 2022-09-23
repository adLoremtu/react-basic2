# 問題 5

各ライフサイクルごとに Console を出力させてみましょう。

## 編集ファイル

- `/src/components/ui/lifecycle/index.tsx（子コンポーネントファイル）`

## 対象のライフサイクル

- `Mounting`
- `Updating`
- `Unmounting`
- `Mounting + Updating`
  - 制限なし
  - `isHoge`が更新された時のみ
  - `isHoge, isHuga`が更新された時のみ

## 出力タイミング

- `Mounting`
  - 画面初期表示時
  - 表示切替ボタンクリックで要素を表示した時
- `Updating`
  - isHoge ボタンクリック時
  - isFuga ボタンクリック時
  - isPiyo ボタンクリック時
- `Unmounting`
  - 表示切替ボタンクリックで要素を非表示にした時

## 備考

### `/src/components/ui/countup/props.tsx（子コンポーネントファイル）`

- `useEffect`を使用する
  - useEffect を使用するためには`import`で機能を読み込むようにする必要があります。
  - 書き方としては`import { useEffect } from "react"`を入れる必要があります。
  - 今回すでに`import React, { useState } from "react"`で react から機能を読み込んでいる処理が存在するので、そこに`useEffect`も読み込むようにしてみましょう。
  - 書き方としては`import React, { useState, useEffect } from "react"`で読み込むことが可能です。
  - ちなみに`{ useState, useEffect }`という書き方をしていますが、こちらは ES6 の分割代入を使用しています。

- `Mounting`
  - `Mounting`のタイミングで実施するには`useEffect(処理関数, 変数配列)`の`変数配列`を`空配列([])`に設定する必要があります。

- `Updating`
  - `Updating`のタイミングで実施するには`初回(Mounting)のみスキップ`させるようなフラグを作成する必要があります。
  - 今回は`useRef`というものを使用します。
  - `useRef`は`useEffect`と同じように`import`で読み込む必要があります。読み込み方に関しては`useEffect`と同じです。

- `Unmounting`
  - `Unmounting`のタイミングで実施するには`useEffect(処理関数, 変数配列)`の`処理関数`で``return`を設定し、`関数`を返却させるようにする必要があります。

- `Mounting + Updating`
  - `Mounting + Updating`のタイミングで実施するには、`useEffect(処理関数, 変数配列)`の`変数配列`部分に何も設定を入れないようにする必要があります。
  - また`特定のstateでのみ処理が実行`されるようにしたい場合は、`変数配列`の部分で`対象state`を格納する必要があります。
