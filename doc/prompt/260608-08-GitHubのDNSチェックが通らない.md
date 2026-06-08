# GitHub の DNS チェックが通らない

- 日付: 2026-06-08
- セッション: 1
- 連番: 08

## プロンプト

> githubの方が、うまくチェックしてくれません（＋さくらのゾーン情報に k CNAME 追加済み／GitHub Pages "DNS check unsuccessful" のスクリーンショット）

## 概要

さくら側で CNAME 追加済みなのに GitHub Pages の DNS チェックが `InvalidDNSError` で通らない件の相談。原因はさくらのネガティブキャッシュ（SOA negative TTL=3600）で、GitHub 側のキャッシュが切れるまで待って「Check again」する必要があると説明。`dns.google` での反映確認方法も案内した。
