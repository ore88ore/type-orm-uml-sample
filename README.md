# type-orm-uml-sample
TypeORM の Extension の typeorm-uml を利用して ER 図を出力するサンプル

## セットアップ

### 依存関係をインストール

```
npm install
```

### DB接続情報の設定

`.env.sample` を `.env` にリネームして、DB接続情報を設定

※実際に接続可能なDBがなくてもER図の出力はできました。ただし、DB接続情報は必要となります。

see: https://typeorm.io/#/using-ormconfig/using-environment-variables


### ER図を出力

以下のコマンドを実行後、パッケージのルートディレクトリに `er-diagram.png` が出力される
```
npm run db:diagram
```
