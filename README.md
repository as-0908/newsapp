###  アプリ概要
このアプリでは、ニュース記事の感情分析スコアを計算し、ネガティブな記事を除外して表示します。  
ポジティブで有益な情報を効率的に収集できるよう設計されています。

[アプリURL]
https://newsapp-rouge-delta.vercel.app/
<img width="946" alt="image" src="https://github.com/user-attachments/assets/8a07544b-8e2d-4f3a-9878-431182a08f62" />


### テスト用ログイン情報
- **ログインID:** adsers2g4gere@gmail.com  
- **パスワード:** testtest  

## 機能一覧
- **ログイン画面**
https://newsapp-rouge-delta.vercel.app/auth/login

- **新規登録画面**
https://newsapp-rouge-delta.vercel.app/auth/signup

- **検索機能** 

- **記事表示**  

---

## 使用技術
- **Next.js**  
- **TypeScript** 
- **Tailwind CSS**  
- **News API**  
- **Cloud Natural Language API**  

---

## 今後追加予定の機能
- **ログアウト機能**
- **記事取得の工夫**
現状の仕様ではCloud Natural Language APIの課金が発生してしまっているので、APIからの記事取得を工夫
- **お気に入り登録**  
  気になる記事をお気に入りとして保存可能にする機能。
- **翻訳機能**  
  表示された記事を多言語で翻訳する機能。

---

## 工夫した点・苦労した点
- **工夫した点:**  
  - ネガティブなニュースを排除する機能を実現し、利用者にとってストレスを軽減する体験を提供。
- **苦労した点:**  
  - **News APIの記事取得:** APIのレスポンスが遅延する問題が発生し、効率的な処理を模索しました。  
  - **Cloud Natural Language API:** APIの利用制限（上限）を超過しないよう注意する必要があり、管理に苦労しました。

