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
    heroImage: {
      src: '/glossary/jikkou-kinou.png',
      alt: '子どもが計画を立てながらブロックを並べ、実行機能の3つの働きを科学的に表したイラスト',
    },
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
  {
    slug: 'working-memory',
    term: 'ワーキングメモリ',
    reading: 'わーきんぐめもり',
    english: 'Working Memory',
    short: '必要な情報を一時的に頭の中に保ちながら使う力。実行機能の柱の一つで、指示の理解・暗算・会話など、学びと生活の土台になります。',
    updated: '2026-06-11',
    heroImage: {
      src: '/glossary/working-memory.png',
      alt: '子どもが形や順番を頭に保ちながら考える、ワーキングメモリを科学的に表したイラスト',
    },
    sections: [
      {
        heading: 'ワーキングメモリとは',
        body: [
          'ワーキングメモリとは、必要な情報を短い間だけ頭の中に保ちながら、それを使って考えたり作業したりする仕組みです。心の中の「作業机」のようなもので、机が広いほど一度にたくさんの情報を扱えます。',
          '「言われた指示を覚えて順番に行動する」「途中の数を覚えながら暗算する」「話の流れを覚えながら聞く」——こうした場面で絶えず働いています。バドリーら（1974ほか）が提唱したモデルが広く知られています。',
        ],
      },
      {
        heading: '学びとの深い関わり',
        body: [
          'ギャザコールら（2004ほか）は、ワーキングメモリの大きさが、読み書きや算数の習得と強く関わることを示しました。容量には個人差があり、その差が学習のつまずきに表れることもあります。',
          'ただし「鍛える脳トレ」で大きく伸ばすのは難しいとされ、むしろ環境の工夫（情報を減らす・支える）のほうが現実的だと考えられています。',
        ],
      },
      {
        heading: '家庭で支えるコツ',
        body: [
          '指示は一度にひとつ、短く伝える。やることをメモや絵にして「外に出しておく」。手順を一緒に確認する——こうした工夫は、限られた作業机の負担を減らします。',
          '睡眠不足や強いストレスはワーキングメモリを一時的に下げます。生活リズムを整えることも、見えにくいけれど大切な支えになります。',
        ],
      },
    ],
    related: [
      { slug: 'undou-nou', title: '体を動かすと頭も育つ — 運動・外遊びと学力・集中力のエビデンス' },
    ],
    references: [
      { label: 'Baddeley & Hitch, 1974 / Baddeley, 2003（ワーキングメモリのモデル）', url: 'https://scholar.google.com/scholar?q=Baddeley+working+memory+model+2003' },
      { label: 'Gathercole et al., 2004（ワーキングメモリと学習）', url: 'https://scholar.google.com/scholar?q=Gathercole+2004+working+memory+skills+children+learning' },
    ],
  },
  {
    slug: 'naihatsu-douki',
    term: '内発的動機づけ',
    reading: 'ないはつてきどうきづけ',
    english: 'Intrinsic Motivation',
    short: 'ごほうびや罰のためではなく、「やること自体が楽しい・やりたい」という内側からのやる気。長続きしやすく、創造性や学びの質を高めます。',
    updated: '2026-06-11',
    heroImage: {
      src: '/glossary/naihatsu-douki.png',
      alt: '子どもが自分から活動を選び、内側からのやる気が明るく広がる様子を表したイラスト',
    },
    sections: [
      {
        heading: '内発的動機づけとは',
        body: [
          '内発的動機づけとは、外からのごほうびや罰のためではなく、「面白いから」「やってみたいから」といった、活動そのものへの興味から生まれるやる気のことです。デシとライアンの研究で深く調べられてきました。',
          'これに対し、ごほうび・評価・罰など外からの理由で動くのが「外発的動機づけ」です。どちらも役立ちますが、内発的なやる気のほうが、粘り強さや学びの深さにつながりやすいとされています。',
        ],
      },
      {
        heading: 'ごほうびが裏目に出ることも',
        body: [
          'デシら（1999）のメタ分析は、もともと楽しんでやっていたことに物のごほうびを足すと、かえって内発的なやる気が下がりやすいことを示しました（アンダーマイニング効果）。',
          '「やらされている」という感覚が、「自分からやりたい」という気持ちを押しのけてしまうのです。',
        ],
      },
      {
        heading: '内発的なやる気を育てるには',
        body: [
          '自分で選べる場面をつくる（自律性）、できた実感を持てるようにする（有能感）、安心できる関係のなかで取り組む（関係性）——この3つが満たされると、内発的なやる気は自然に育ちます。',
          '結果より過程に光を当て、すでに楽しんでいることにはごほうびを足しすぎない。それが、長く続くやる気を守ります。',
        ],
      },
    ],
    related: [
      { slug: 'homekata', title: '「すごい」より効く、子どものほめ方 — 研究でわかった3つのコツ' },
      { slug: 'jiko-ketteikan', title: '「自分で決める力」を育てる関わり方 — 自己肯定感と自律のエビデンス' },
    ],
    references: [
      { label: 'Deci et al., 1999（報酬と内発的動機づけのメタ分析）', url: 'https://scholar.google.com/scholar?q=Deci+Koestner+Ryan+1999+meta-analysis+rewards+intrinsic+motivation' },
      { label: 'Ryan & Deci, 2000（内発的・外発的動機づけ）', url: 'https://scholar.google.com/scholar?q=Ryan+Deci+2000+intrinsic+extrinsic+motivations' },
    ],
  },
  {
    slug: 'jiko-kettei-riron',
    term: '自己決定理論',
    reading: 'じこけっていりろん',
    english: 'Self-Determination Theory',
    short: 'やる気の「質」を説明する理論。自律性・有能感・関係性という3つの欲求が満たされると、内側からのやる気と心の健康が育つとされます。',
    updated: '2026-06-11',
    heroImage: {
      src: '/glossary/jiko-kettei-riron.png',
      alt: '子どもが自分で活動を選び、自律性・有能感・関係性を科学的な図で表したイラスト',
    },
    sections: [
      {
        heading: '自己決定理論とは',
        body: [
          '自己決定理論は、心理学者のライアンとデシが体系化した、人のやる気と幸福に関する理論です。やる気を「量」ではなく「質」でとらえ、自分で選んでいる感覚を伴うやる気ほど、人を健やかに動かすと考えます。',
        ],
      },
      {
        heading: '3つの基本的欲求',
        body: [
          '① 自律性：自分で選び、決めている感覚。やらされるのではなく、自分ごととして取り組めること。',
          '② 有能感：「やればできる」「少しずつ上達している」という手ごたえ。',
          '③ 関係性：大切な人とつながり、受け入れられているという安心感。',
          'この3つが満たされると内発的なやる気が育ち、逆に脅かされると意欲も心の安定も損なわれやすいとされます（Ryan & Deci, 2020 ほか）。',
        ],
      },
      {
        heading: '子育てへの活かし方',
        body: [
          '小さな選択を子どもに委ねる（自律性）、できたことに目を向ける（有能感）、安心できる関係を保つ（関係性）。指示や報酬で動かすより、この3つを支えるほうが、長続きするやる気につながります。',
        ],
      },
    ],
    related: [
      { slug: 'jiko-ketteikan', title: '「自分で決める力」を育てる関わり方 — 自己肯定感と自律のエビデンス' },
      { slug: 'homekata', title: '「すごい」より効く、子どものほめ方 — 研究でわかった3つのコツ' },
    ],
    references: [
      { label: 'Ryan & Deci, 2000（自己決定理論）', url: 'https://scholar.google.com/scholar?q=Ryan+Deci+2000+self-determination+theory' },
      { label: 'Ryan & Deci, 2020（基本的心理欲求）', url: 'https://scholar.google.com/scholar?q=Ryan+Deci+2020+self-determination+theory+basic+psychological+needs' },
    ],
  },
  {
    slug: 'resilience',
    term: 'レジリエンス',
    reading: 'れじりえんす',
    english: 'Resilience',
    short: '困難や逆境にぶつかっても適応し、立ち直っていく力。生まれつきの才能ではなく、環境や関わりのなかで育つと考えられています。',
    updated: '2026-06-11',
    heroImage: {
      src: '/glossary/resilience.png',
      alt: 'しなやかに戻る植物と子どもを通して、レジリエンスと保護因子を明るく表したイラスト',
    },
    sections: [
      {
        heading: 'レジリエンスとは',
        body: [
          'レジリエンスとは、ストレスや逆境、失敗にさらされても、それに適応して回復していく力のことです。「折れない心」というより、しなって戻る「しなやかさ」に近い概念です。',
          '心理学者のマステンは、レジリエンスを特別な才能ではなく、ふつうの育ちのなかで働く仕組み（"ordinary magic"）だと表現しました。誰にでも育ちうる力なのです。',
        ],
      },
      {
        heading: 'カギになる「保護因子」',
        body: [
          'ワーナーら（1993）は、ハワイで約40年にわたり子どもを追跡し、厳しい逆境でもたくましく育った子に共通する要素（保護因子）を見つけました。その代表が、「自分を信じてくれる大人が一人いること」でした。',
          '親でなくても、祖父母・先生・コーチなど、誰か一人が安心の土台になれます。',
        ],
      },
      {
        heading: '日々の関わりで育てる',
        body: [
          'つらい気持ちを言葉にして整理する関わりや、感情スキルを育てる教育（SEL）が、立ち直る力を支えると報告されています（Durlak, 2011 ほか）。',
          '励ましや原因の追及より、「どんな気持ちだった？」と一緒に言葉にしていくこと。その積み重ねが、しなやかさを育てます。',
        ],
      },
    ],
    related: [
      { slug: 'resilience', title: '逆境に強い子を育てる — レジリエンスのエビデンス' },
    ],
    references: [
      { label: 'Werner, 1993（ハワイ40年追跡・保護因子）', url: 'https://scholar.google.com/scholar?q=Werner+1993+risk+resilience+recovery+Kauai' },
      { label: 'Masten, 2001（ordinary magic）', url: 'https://scholar.google.com/scholar?q=Masten+2001+ordinary+magic+resilience+development' },
      { label: 'Durlak et al., 2011（SELと適応）', url: 'https://scholar.google.com/scholar?q=Durlak+2011+social+emotional+learning+meta-analysis' },
    ],
  },
  {
    slug: 'boukansha-kouka',
    term: '傍観者効果',
    reading: 'ぼうかんしゃこうか',
    english: 'Bystander Effect',
    short: '困っている人がいても、その場に人が多いほど、一人ひとりは助けに動きにくくなる心理現象。いじめの場面でも働きます。',
    updated: '2026-06-11',
    heroImage: {
      src: '/glossary/boukansha-kouka.png',
      alt: '困っている子に一人が歩み寄り、周囲の子どもたちと責任の分散を科学的に表したイラスト',
    },
    sections: [
      {
        heading: '傍観者効果とは',
        body: [
          '傍観者効果とは、緊急の場面で周りに人が多いほど、かえって誰も行動を起こしにくくなる現象です。「誰かがやるだろう」と責任が分散し（責任の分散）、また「周りが動かないから大丈夫なのかも」と互いに様子をうかがってしまうために起こります。',
          'ダーリーとラタネ（1968）の実験で示され、社会心理学の古典的な知見として知られています。',
        ],
      },
      {
        heading: 'いじめにおける「傍観者」',
        body: [
          'いじめは加害者と被害者だけの問題ではありません。ソーンバーグら（2012）は、見て見ぬふりをする傍観は「中立」ではなく結果としていじめを支えてしまうこと、そして傍観者が「擁護者」に変わるといじめが止まりやすいことを示しました。',
        ],
      },
      {
        heading: '「動ける一人」を増やす',
        body: [
          'フィンランドのKiVaプログラム（Karna, 2011）は、加害者・被害者だけでなく傍観者に働きかけることで、いじめを減らすことに成功しました。',
          '家庭でも、「もし自分だったらどう感じる？」と相手の気持ちを想像する会話が、見ているだけにとどまらず動ける力を育てます。',
        ],
      },
    ],
    related: [
      { slug: 'ijime', title: 'いじめにどう向き合うか — カギを握るのは「傍観者」' },
    ],
    references: [
      { label: 'Darley & Latane, 1968（傍観者効果）', url: 'https://scholar.google.com/scholar?q=Darley+Latane+1968+bystander+intervention+diffusion+of+responsibility' },
      { label: 'Thornberg, 2012（傍観者か擁護者か）', url: 'https://scholar.google.com/scholar?q=Thornberg+2012+bystander+behavior+bullying' },
      { label: 'Karna et al., 2011（KiVaプログラム）', url: 'https://scholar.google.com/scholar?q=Karna+2011+KiVa+antibullying+program' },
    ],
  },
  {
    slug: 'matthew-effect',
    term: 'マタイ効果',
    reading: 'またいこうか',
    english: 'Matthew Effect',
    short: '「持つ者はさらに与えられる」——すでにできる子はさらに伸び、そうでない子との差が時間とともに広がっていく現象。読書でよく知られます。',
    updated: '2026-06-11',
    heroImage: {
      src: '/glossary/matthew-effect.png',
      alt: '読書や学びの小さな差が成長曲線のように広がる、マタイ効果を表したイラスト',
    },
    sections: [
      {
        heading: 'マタイ効果とは',
        body: [
          'マタイ効果とは、最初の小さな差が時間とともに拡大していく現象です。新約聖書「マタイによる福音書」の一節にちなみ、社会学者マートン（1968）が名づけました。',
          '有利な人がさらに有利になり、そうでない人との差が開いていく——教育・科学・経済など、さまざまな場面で見られます。',
        ],
      },
      {
        heading: '読書における具体例',
        body: [
          'スタノヴィッチ（1986）は、読む力が早く育った子は「読むのが楽しい」からさらに読み、語彙も知識も伸びていく一方、つまずいた子は読書を避けて差が広がっていく、と指摘しました。',
          'モルら（2011）の99論文をまとめたメタ分析でも、読書量の多い子ほど語彙や成績が高い傾向があります。',
        ],
      },
      {
        heading: '「最初の入り口」を大切に',
        body: [
          '差が広がる前の早い時期に、「読むのは楽しい」という入り口を作ることが、長く効いてきます。完璧に読ませる必要はなく、絵本を一緒に楽しむ・問いかけてやり取りする、といった小さな積み重ねが土台になります。',
        ],
      },
    ],
    related: [
      { slug: 'yomikikase', title: '読み聞かせと言葉の発達 — 「たくさん話す」より「やり取りする」' },
    ],
    references: [
      { label: 'Stanovich, 1986（読書のマタイ効果）', url: 'https://scholar.google.com/scholar?q=Stanovich+1986+Matthew+effects+in+reading' },
      { label: 'Merton, 1968（マタイ効果）', url: 'https://scholar.google.com/scholar?q=Merton+1968+Matthew+effect+in+science' },
      { label: 'Mol & Bus, 2011（読書量と成績・メタ分析）', url: 'https://scholar.google.com/scholar?q=Mol+Bus+2011+reading+leisure+time+meta-analysis' },
    ],
  },
  {
    slug: 'growth-mindset',
    term: 'しなやかマインドセット（成長マインドセット）',
    reading: 'しなやかまいんどせっと',
    english: 'Growth Mindset',
    short: '「能力は努力や工夫で伸ばせる」という考え方。「能力は生まれつきで変わらない」とする硬直（固定）マインドセットと対比されます。',
    updated: '2026-06-11',
    heroImage: {
      src: '/glossary/growth-mindset.png',
      alt: '子どもが失敗から工夫して挑戦し、脳と成長のモチーフが広がるイラスト',
    },
    sections: [
      {
        heading: '2つのマインドセット',
        body: [
          '心理学者のドゥエックは、人が能力をどうとらえているかを2つに整理しました。「能力は努力で伸ばせる」と考えるのがしなやかマインドセット（成長マインドセット）、「能力は生まれつきで変わらない」と考えるのが硬直マインドセットです。',
          'しなやかマインドセットの子は、難しい課題を成長の機会と受け止め、失敗しても粘り強く取り組みやすいとされています。',
        ],
      },
      {
        heading: 'ほめ方との関係',
        body: [
          'ミュラーとドゥエック（1998）の実験では、「頭がいいね」と能力をほめられた子は失敗で意欲を失いやすく、「よく頑張ったね」と努力・過程をほめられた子は挑戦を好みました。日々のほめ方が、マインドセットに影響します。',
        ],
      },
      {
        heading: '誤解されやすい点に注意',
        body: [
          '「とにかくほめればよい」「気持ちの問題」と単純化されがちですが、それは誤解です。シスクら（2018）のメタ分析では、マインドセットの効果は限定的で、万能ではないことも示されています。',
          '大切なのは、結果ではなく工夫や過程に目を向け、失敗を学びの一部として扱う関わりを、地道に続けることです。',
        ],
      },
    ],
    related: [
      { slug: 'homekata', title: '「すごい」より効く、子どものほめ方 — 研究でわかった3つのコツ' },
    ],
    references: [
      { label: 'Dweck, 2006（マインドセット）', url: 'https://scholar.google.com/scholar?q=Dweck+2006+mindset+the+new+psychology+of+success' },
      { label: 'Mueller & Dweck, 1998（能力ほめと努力ほめ）', url: 'https://scholar.google.com/scholar?q=Mueller+Dweck+1998+praise+intelligence+motivation' },
      { label: 'Sisk et al., 2018（効果の限界・メタ分析）', url: 'https://scholar.google.com/scholar?q=Sisk+2018+growth+mindset+meta-analysis' },
    ],
  },
  {
    slug: 'undermining-effect',
    term: 'アンダーマイニング効果',
    reading: 'あんだーまいにんぐこうか',
    english: 'Undermining / Overjustification Effect',
    short: 'もともと楽しんでやっていたことにごほうびを与えると、かえって「自分からやりたい」という意欲が下がってしまう現象。',
    updated: '2026-06-11',
    heroImage: {
      src: '/glossary/undermining-effect.png',
      alt: '楽しんで絵を描く子どもと外からのごほうびが、やる気の変化として図解されたイラスト',
    },
    sections: [
      {
        heading: 'どんな現象か',
        body: [
          'アンダーマイニング効果とは、内発的に楽しんでいた活動に対して、お金や物などの外的なごほうびを与えると、ごほうびがないときよりも自発的なやる気が下がってしまう現象です。「過正当化効果」とも呼ばれます。',
          'レッパーら（1973）は、お絵かきを楽しんでいた子に「描いたらごほうび」を約束すると、その後ごほうびがないときに自分から描かなくなったことを示しました。',
        ],
      },
      {
        heading: 'なぜ起きるのか',
        body: [
          '「好きだからやっていた」はずの行動に外的な理由（ごほうび）が加わると、「ごほうびのためにやっている」と感じ方が変わってしまうためと考えられています。デシら（1999）のメタ分析でも、特に物の報酬で起こりやすいことが示されています。',
        ],
      },
      {
        heading: '子育てでの活かし方',
        body: [
          'すべてのごほうびが悪いわけではありません。やる気のない活動を始めるきっかけには役立つこともあります。ただし、すでに楽しんでいることにごほうびを足すと、楽しさが目減りしかねない——この点を知っておくと、関わり方の判断に役立ちます。',
        ],
      },
    ],
    related: [
      { slug: 'homekata', title: '「すごい」より効く、子どものほめ方 — 研究でわかった3つのコツ' },
    ],
    references: [
      { label: 'Lepper et al., 1973（過正当化効果）', url: 'https://scholar.google.com/scholar?q=Lepper+Greene+Nisbett+1973+overjustification+intrinsic+interest' },
      { label: 'Deci et al., 1999（報酬と内発的動機づけ・メタ分析）', url: 'https://scholar.google.com/scholar?q=Deci+Koestner+Ryan+1999+meta-analysis+rewards+intrinsic+motivation' },
    ],
  },
  {
    slug: 'emotion-coaching',
    term: '感情コーチング',
    reading: 'かんじょうこーちんぐ',
    english: 'Emotion Coaching',
    short: '子どもの感情を「悪いもの」として抑え込ませるのではなく、受け止めて言葉にし、対処を一緒に考える関わり方。',
    updated: '2026-06-11',
    heroImage: {
      src: '/glossary/emotion-coaching.png',
      alt: '親子が向き合い、感情の泡と脳と心のモチーフで感情コーチングを表したイラスト',
    },
    sections: [
      {
        heading: '感情コーチングとは',
        body: [
          '感情コーチングとは、心理学者のゴットマンが提唱した、子どもの感情に寄り添う関わり方です。怒りや悲しみといった感情も大切なサインとして受け止め、名前をつけ、どう対処するかを一緒に考えていきます。',
          'ゴットマンら（1996）は、こうした関わりをする親のもとで、子どもが感情をうまく扱えるように育ちやすいことを示しました。',
        ],
      },
      {
        heading: '「抑え込ませる」関わりとの違い',
        body: [
          '「泣くな」「怒るな」と感情を否定したり、軽視したりする関わりは、感情をコントロールする力を育てにくいとされています。感情コーチングは、感情そのものは認めたうえで、出し方・対処を教える点が異なります。',
          'デナムら（2003）の研究でも、幼児期に感情を理解し扱う力が高い子は、その後の対人関係や学校適応が良い傾向がありました。',
        ],
      },
      {
        heading: '実践のステップ',
        body: [
          '①子どもの感情に気づく ②感情を否定せず受け止める ③「くやしかったね」と名前をつけて言葉にする ④許されることと許されないことの線を示す ⑤どうすればよかったかを一緒に考える——おおむねこうした流れです。',
          '感情は受け止め、行動には線を引く。この組み合わせが、感情コーチングの核心です。',
        ],
      },
    ],
    related: [
      { slug: 'kanjou-control', title: 'かんしゃくとどう向き合うか — 感情のコントロールを育てる3つの土台' },
    ],
    references: [
      { label: 'Gottman et al., 1996（感情コーチング・メタ情動）', url: 'https://scholar.google.com/scholar?q=Gottman+1996+parental+meta-emotion+emotion+coaching' },
      { label: 'Denham et al., 2003（幼児の感情の力と適応）', url: 'https://scholar.google.com/scholar?q=Denham+2003+preschool+emotional+competence+social' },
    ],
  },
  {
    slug: 'co-regulation',
    term: '共調整',
    reading: 'きょうちょうせい',
    english: 'Co-regulation',
    short: '子どもが自分で感情を整える力（自己調整）が育つ前に、まわりの大人が「一緒に落ち着く」ことで支える関わり。自己コントロールの土台になります。',
    updated: '2026-06-11',
    heroImage: {
      src: '/glossary/co-regulation.png',
      alt: '親子が一緒に落ち着き、呼吸の波がそろっていく共調整を表したイラスト',
    },
    sections: [
      {
        heading: '共調整とは',
        body: [
          '共調整（co-regulation）とは、子どもがまだ自分一人では感情を立て直せないときに、まわりの大人が穏やかに寄り添い、一緒に落ち着くことで気持ちの整えを助ける関わりです。',
          'ローザンバルムとマレー（2017）は、こうした大人の関わりが、子どもの自己コントロール（自己調整）の発達を支える土台になると整理しています。',
        ],
      },
      {
        heading: '自己調整への橋渡し',
        body: [
          '感情を自分で整える力（自己調整）は、最初から備わっているわけではなく、共調整の経験を何度も重ねるなかで少しずつ内側に育っていきます。「一緒に落ち着く」が、やがて「自分で落ち着く」に変わっていくイメージです。',
        ],
      },
      {
        heading: 'まず大人が落ち着く',
        body: [
          'かんしゃくの最中に理屈で説得しても届きにくいものです。まず大人が深呼吸して声のトーンを落とし、落ち着いてから言葉をかける。リーバーマンら（2007）が示したように、気持ちに名前をつけること（「くやしかったね」）も、興奮を静める助けになります。',
        ],
      },
    ],
    related: [
      { slug: 'kanjou-control', title: 'かんしゃくとどう向き合うか — 感情のコントロールを育てる3つの土台' },
    ],
    references: [
      { label: 'Rosanbalm & Murray, 2017（共調整）', url: 'https://scholar.google.com/scholar?q=Rosanbalm+Murray+2017+co-regulation+from+birth+through+adolescence' },
      { label: 'Lieberman et al., 2007（感情のラベリング）', url: 'https://scholar.google.com/scholar?q=Lieberman+2007+putting+feelings+into+words+affect+labeling' },
    ],
  },
  {
    slug: 'theory-of-mind',
    term: '心の理論',
    reading: 'こころのりろん',
    english: 'Theory of Mind',
    short: '相手にも自分とは違う気持ち・考え・知識があると理解し、それを推し量る力。4〜5歳ごろに大きく育ち、対人関係の土台になります。',
    updated: '2026-06-11',
    heroImage: {
      src: '/glossary/theory-of-mind.png',
      alt: '二人の子どもが別々の考えを持つ様子を思考の泡で示した、心の理論のイラスト',
    },
    sections: [
      {
        heading: '心の理論とは',
        body: [
          '心の理論とは、「人にはそれぞれ心があり、自分とは違うことを考えたり感じたりしている」と理解し、相手の立場や気持ちを推し量る力のことです。日々のやり取りや、うそ・冗談・思いやりの土台になります。',
        ],
      },
      {
        heading: '「誤信念課題」で調べる',
        body: [
          '心の理論の発達は、「サリーとアン課題」などの誤信念課題で調べられます。ウィマーとパーナー（1983）が考案したこの課題では、「自分は知っているが相手は知らない」状況を理解できるかを見ます。',
          'ウェルマンら（2001）のメタ分析によれば、多くの子はおおむね4〜5歳ごろにこの力が大きく育ちます。',
        ],
      },
      {
        heading: 'やり取りのなかで育つ',
        body: [
          '心の理論は、人との関わりのなかで育ちます。ごっこ遊び、絵本での気持ちの会話、そしてきょうだいとのやり取りも役立ちます。ソンら（2018）は、適度なきょうだいげんかが「相手の気持ちを読む力」を育てる面があると示しました。',
          '「○○ちゃんはどう思ったかな？」と相手の気持ちを想像する会話が、この力を後押しします。',
        ],
      },
    ],
    related: [
      { slug: 'kyodai', title: 'きょうだい関係の科学 — 出生順位・やきもち・けんかの本当のところ' },
    ],
    references: [
      { label: 'Wimmer & Perner, 1983（誤信念課題）', url: 'https://scholar.google.com/scholar?q=Wimmer+Perner+1983+beliefs+about+beliefs+false+belief' },
      { label: 'Wellman et al., 2001（心の理論・メタ分析）', url: 'https://scholar.google.com/scholar?q=Wellman+Cross+Watson+2001+meta-analysis+theory+of+mind+false+belief' },
      { label: 'Song et al., 2018（きょうだいげんかと心の理論）', url: 'https://scholar.google.com/scholar?q=Song+2018+sibling+conflict+theory+of+mind' },
    ],
  },
  {
    slug: 'food-neophobia',
    term: '食物新奇性恐怖',
    reading: 'しょくもつしんきせいきょうふ',
    english: 'Food Neophobia',
    short: '見慣れない食べ物を警戒して避ける傾向。子どもに多く、ある程度は生まれつき。くり返し経験するなかでやわらいでいきます。',
    updated: '2026-06-11',
    heroImage: {
      src: '/glossary/food-neophobia.png',
      alt: '新しい野菜を慎重に見る子どもと、くり返しの経験で慣れていく過程を表したイラスト',
    },
    sections: [
      {
        heading: '食物新奇性恐怖とは',
        body: [
          '食物新奇性恐怖（neophobia）とは、食べたことのない・見慣れない食べ物を警戒して口にしたがらない傾向のことです。とくに幼児期に強く表れ、好き嫌いや偏食の背景のひとつになっています。',
          'これは「わがまま」ではなく、ある程度は生まれつきの傾向だと考えられています。叱って直すものではありません。',
        ],
      },
      {
        heading: 'なぜあるのか',
        body: [
          '見慣れないものを警戒するのは、有害なものを口にしないための、いわば安全装置だと考えられています。動き回るようになる幼児期に強まるのは、進化的に理にかなった反応とも言われます。',
        ],
      },
      {
        heading: 'やわらげ方は「くり返し出す」',
        body: [
          'ウォードルら（2003）は、嫌っていた野菜でも少しずつ味見をさせて出し続けると、好んで食べるようになっていくことを示しました。新しい食べ物を受け入れるには、ふつう8〜15回の経験が必要だとされています。',
          '「一度拒否された＝嫌い」と決めつけず、プレッシャーをかけずにまた食卓へ。経験を重ねることが、いちばんの近道です。',
        ],
      },
    ],
    related: [
      { slug: 'henshoku', title: '子どもの好き嫌い・偏食 — 「無理に食べさせない」が近道なわけ' },
    ],
    references: [
      { label: 'Wardle et al., 2003（くり返し出すと食べられる）', url: 'https://scholar.google.com/scholar?q=Wardle+2003+modifying+children%27s+food+preferences+exposure' },
      { label: 'Cooke et al., 2007（食物新奇性恐怖と摂取）', url: 'https://scholar.google.com/scholar?q=Cooke+2007+food+neophobia+fruit+vegetable+intake+children' },
      { label: 'Birch & Marlin, 1982（くり返しと好みの形成）', url: 'https://scholar.google.com/scholar?q=Birch+Marlin+1982+exposure+food+preference+children' },
    ],
  },
];
