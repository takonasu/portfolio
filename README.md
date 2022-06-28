# takonasu's portfolio
Next.js(TypeScript) + microCMS + Vercel

schemaフォルダにmicroCMSからDLしたスキーマ情報のjsonを入れて
```
yarn cms-schema
```
を実行することで、スキーマの型生成をしてくれる。

## microCMS priority一覧
worksカードはpriorityの値によって表示の順番を変えている。
|  priority |  説明  |
| ---- | ---- |
|  0  |  topページに表示（3つまで）  |
|  1以上  |  優先度の順にAllworksページに作品作成日順にソートされる  |