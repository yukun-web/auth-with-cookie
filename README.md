# Next.js App Router and Firebase Authentication with Cookie

Next.js
をちゃんとするならセッションベースで認証できるのが好ましいと聞いたので、とっても[わかりやすい記事](https://zenn.dev/uttk/articles/f48fc75120f018)
を参考にしてサンプルを書いてみました。

ついでに App Router にも入門。

## セットアップ

```bash
pnpm i
```

## 起動

```bash
pnpm dev
```

## ポイント

### セッションと Cookie への理解

セッションはログイン状態を保持するための仕組みです。
今回のケースだと Firebase Authentication がセッションの情報を保持しています。

### セッション ID

ユーザーがブラウザを使ってログインするとセッションが開始されます。
そのタイミングでセッション ID が発行されます。

### セッション ID と Cookie

セッション ID は Cookie に保存されます。

Cookie には

* ブラウザ・サーバーの両方で読み書きできる
* 他のページに遷移したり、ページを閉じしてもブラウザに保持される

という性質があるので、セッション ID を Cookie に保存することでブラウザはログイン状態を維持することができます。
