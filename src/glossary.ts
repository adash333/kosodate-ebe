// 子育てエビデンス相談室 用語解説（用語集）データ。
// 読み物記事に出てくる専門用語を、子育て世代向けにやさしく解説する独自コンテンツ。
// 出典は各用語末尾に明記。

export interface TermRef {
  label: string;
  url: string;
}
export interface TermSection {
  heading: string;
  body: string[]; // 段落の配列
}
export interface TermImage {
  src: string;
  alt: string;
}
/** 関連する読み物記事への導線。 */
export interface RelatedArticle {
  slug: string;
  title: string;
}
export interface Term {
  slug: string;
  term: string; // 用語名（例: 実行機能）
  reading?: string; // よみがな（例: じっこうきのう）
  english?: string; // 英語名（例: Executive Function）
  short: string; // 一覧用の短い定義
  updated: string;
  /** アイキャッチ画像（任意。未設定なら表示しない。後から差し込めるようフィールドのみ用意）。 */
  heroImage?: TermImage;
  sections: TermSection[];
  related?: RelatedArticle[]; // 関連する読み物
  references: TermRef[];
}

export const terms: Term[] = [
  {
    slug: 'jikkou-kinou',
    term: '実行機能',
    reading: 'じっこうきのう',
    english: 'Executive Function',
    short: '目標に向けて自分の考えや行動を調整する脳の働き。「抑制」「ワーキングメモリ」「認知の柔軟性」の3つが土台とされ、学力や感情のコントロール、対人関係を支えます。',
    updated: '2026-06-11',
    // heroImage は後から追加できるよう、フィールドのみ用意（現在は未設定）。
    sections: [
      {
        heading: '実行機能とは',
        body: [
          '実行機能とは、目標を達成するために自分の注意・思考・行動を調整する、一連の脳の働きの総称です。「やりたい衝動をぐっと抑える」「必要なことを覚えておく」「状況に合わせてやり方を切り替える」といった、日常の自己コントロール全般に関わります。',
          '前頭前野（おでこのあたりの脳）を中心としたネットワークが関わり、幼児期から思春期・青年期にかけてゆっくり育っていきます。生まれつき決まっているものではなく、経験や環境のなかで伸びていく力だと考えられています。',
        ],
      },
      {
        heading: '実行機能をつくる「3つの柱」',
        body: [
          '① 抑制（よくせい）：やりたい衝動や、気を散らす刺激を抑えて、今やるべきことに向かう力です。「順番を待つ」「いったん手を止める」といった場面で働きます。',
          '② ワーキングメモリ：必要な情報を頭の中に保ちながら使う力です。「言われた指示を覚えて動く」「途中の数を覚えながら計算する」といったときに使われます。',
          '③ 認知の柔軟性（じゅうなんせい）：状況やルールの変化に合わせて、やり方や視点を切り替える力です。「うまくいかないとき別の方法を試す」「相手の立場から考える」といった場面で役立ちます。',
          'ミヤケら（2000）は、実行機能がこの3つの要素にある程度分けられることを示しました。どれも、毎日の暮らしのなかで少しずつ育っていきます。',
        ],
      },
      {
        heading: 'なぜ大切なのか',
        body: [
          'ダイヤモンド（2013）のレビューによれば、実行機能は学力（読み書きや算数）だけでなく、健康や対人関係、心の安定まで、人生の幅広い面と関連することが分かっています。',
          '幼児期の実行機能が、その後の学校での学びや適応を予測するという報告もあります。IQ（知能指数）とは別に、将来の育ちを支える「土台の力」と考えられています。',
        ],
      },
      {
        heading: '家庭でどう育つのか',
        body: [
          '特別な訓練より、日常の関わりのなかで育ちます。ダイヤモンドとリー（2011）は、運動・遊び・対話など多様な活動が実行機能を伸ばしうると整理しています。',
          'ごっこ遊びやルールのある遊び、体を動かす遊び、安心できる対話。そして、まわりの大人が穏やかに見守り「一緒に落ち着く」ことが、子どもが自分をコントロールする力の土台になります。',
          '一方で、睡眠不足や強いストレスは実行機能を一時的に下げることも分かっています。生活リズムを整えることも、実行機能を支える大切な要素です。',
        ],
      },
    ],
    related: [
      { slug: 'undou-nou', title: '体を動かすと頭も育つ — 運動・外遊びと学力・集中力のエビデンス' },
      { slug: 'kanjou-control', title: 'かんしゃくとどう向き合うか — 感情のコントロールを育てる3つの土台' },
    ],
    references: [
      { label: 'Miyake et al., 2000（実行機能の3要素）', url: 'https://scholar.google.com/scholar?q=Miyake+2000+unity+and+diversity+of+executive+functions' },
      { label: 'Diamond, 2013（実行機能の総説）', url: 'https://scholar.google.com/scholar?q=Diamond+2013+executive+functions+annual+review+psychology' },
      { label: 'Diamond & Lee, 2011（実行機能を育てる）', url: 'https://scholar.google.com/scholar?q=Diamond+Lee+2011+interventions+executive+function+children' },
    ],
  },
];
