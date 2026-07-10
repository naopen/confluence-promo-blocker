# Confluence Promo Blocker

Confluence Cloud 上のプロモーションモーダル（Loom プロモーションなど）を自動で非表示にする Chrome 拡張機能です。

## 概要

Confluence では Loom や AI 機能などの宣伝モーダルが頻繁に表示されますが、公式に無効化する方法はありません。この拡張機能はプロモーション文言（「使ってみる」「Try it」など）を含むモーダルを検出し、自動的に非表示にします。

## 機能

- プロモーションモーダルの自動検出・非表示
- 日本語・英語のプロモーション文言に対応
- 通常の通知やアラートには影響なし
- 設定不要。インストールするだけで動作

## インストール

### 開発者向け

```bash
git clone https://github.com/naopen/confluence-promo-blocker.git
```

1. `chrome://extensions/` を開く
2. デベロッパーモードを有効化
3. 「パッケージ化されていない拡張機能を読み込む」をクリック
4. クローンしたフォルダを選択

## 対象ページ

Confluence Cloud (`https://*.atlassian.net/wiki/*`) でのみ動作します。

## 技術情報

- Manifest V3
- Vanilla JavaScript
- MutationObserver による DOM 監視

## ライセンス

MIT License

## 免責事項

本拡張機能は非公式ツールであり、Atlassian 公式とは一切関係ありません。
