# 問題 6

Props から Context に変更してみましょう

## 編集ファイル

- `/src/components/ui/answer/No6/index.tsx（親コンポーネントファイル）`
- `/src/components/ui/context/component_A.tsx（子コンポーネントファイル）`
- `/src/components/ui/context/component_B.tsx（子コンポーネントファイル）`
- `/src/components/ui/context/component_C.tsx（子コンポーネントファイル）`

## 現在の挙動

ログイン切替ボタンを押すとログイン状態のテキストが切り替わる

## 修正前の状態

`index.tsx`で`isLogin, setIsLogin`を`useState`で宣言しており、それを`Props`で子コンポーネントにバケツリレー形式で渡している状態

## 実装の流れ

### `/src/components/ui/answer/No6/index.tsx（親コンポーネントファイル）`

- `createContext`を使用する
  - `createContext` を使用するためには`import`で機能を読み込むようにする必要があります
  - 書き方としては`import { createContext } from "react"`を入れる必要があります
  - 今回すでに`import React, { useState } from "react"`で react から機能を読み込んでいる処理が存在するので、そこに`createContext`も読み込むようにしてみましょう
  - 書き方としては`import React, { useState, createContext } from "react"`で読み込むことが可能です
  - ちなみに`{ useState, createContext }`という書き方をしていますが、こちらは ES6 の分割代入を使用しています
- `createContext`を用いて Context を生成する
  - `createContext(初期値)`で Context の生成を行うことができます。
  - 元々`Props`では`isLogin, updateLogin`を渡すようにしているので、これを Context に入れるようにしてみましょう。
  - 1 つずつ`createContext`を宣言して指定しても良いですが、せっかくなので`Object`でまとめるようにして入れてみましょう。
  - 今回初期値としては`空Object({})`を入れてみましょう。
  - なお子コンポーネントでどの Context を参照するか指定する必要があるため、`export`で書き出しておきましょう。
- Context の型を定義
  - 今回上の Context 生成の時に、初期値として`空Object`を入れています。
  - このままだと TypeScript でエラーが発生するため、初期値の空 Object がこのような型になる想定ですよというのを明示する必要があります
  - `type`を使用して、Context に追加する予定のパラメータの型を明記してみましょう
    - 過去問題を参照に作ってみましょう
  - 型定義が完了した後は`createContext({} as OO)`と書いて適用させれば OK です
- Context を子コンポーネントにて参照する
  - 子コンポーネントで参照できるようにするため、`return`内で呼び出している子コンポーネントを`<createContext宣言変数.Provider>`で囲む必要があります。
  - 囲んだ後は`Props`のように value として渡したい値を`value={渡したい値}`と書く必要があります。
    - 今回は Context の型に合わせて、`value={{ isLogin, updateLogin }}`と書いてみましょう。

### `/src/components/ui/context/component_A.tsx（子コンポーネントファイル）`

### `/src/components/ui/context/component_B.tsx（子コンポーネントファイル）`

- Props を削除
  - 今回 Props から Context に変更するので、Props 自体は不要になります。削除してあげてください。
    - `type Props`を削除
    - `(props: Props)`を`()`に変更
    - 子コンポーネントに渡している`Props`を削除
  - ここでは Context のパラメータは使用しないので削除だけで OK です。

### `/src/components/ui/context/component_C.tsx（子コンポーネントファイル）`

- Props を削除
  - 今回 Props から Context に変更するので、Props 自体は不要になります。削除してあげてください。
    - `type Props`を削除
    - `(props: Props)`を`()`に変更
    - 子コンポーネントに渡している`Props`を削除
- `useContext`を使用する
  - `useContext` を使用するためには`import`で機能を読み込むようにする必要があります
  - 書き方としては`import { useContext } from "react"`を入れる必要があります
  - 今回すでに`import React from "react"`で react から機能を読み込んでいる処理が存在するので、そこに`useContext`も読み込むようにしてみましょう
  - 書き方としては`import React, { useContext } from "react"`で読み込むことが可能です
  - ちなみに`{ useContext }`という書き方をしていますが、こちらは ES6 の分割代入を使用しています
- Context を使用する
  - Context を参照するために`/src/components/ui/answer/No6/index.tsx（親コンポーネントファイル）`で作成した Context を読み込むようにする必要があります
  - 書き方としては`import { Context宣言変数 } from "../../answer/No6"`を入れる必要があります
- Context を参照する
  - `useContext(対象のContext)`で生成した Context の参照が可能になります。
  - 書き方としては`{ state, state更新関数 } = useContext(対象のContext)`で参照することができます。
  - ちなみに`{ state, state更新関数 }`という書き方をしていますが、こちらは ES6 の分割代入を使用しています
- 参照した Context を表示させる
  - 表示させるには`{表示させたい値}`と書きます
- ボタンをクリックしたときに更新処理が実行されるよう設定する
  - 今回はボタンクリック時に実施したいので、`onClick`を定義してそちらで関数を呼び出すようにしてあげましょう。
  - なお React でイベント処理を実施する場合はいくつかの特徴があります。
    - camelCase を使用する
      - JS では`onclick`と記述しますが、React でイベントを定義する場合は`camelCase`で書く必要があるため`onClick`となります。
    - イベントハンドラとして関数を渡すようにする
      - JS ではイベントハンドラとして文字列を渡す（`<button onclick="hogehoge()">up</button>`）ように記述しますが、React では`関数`を渡すようにする必要があるため`<button onClick={hogehoge}>up</button>`となります。
