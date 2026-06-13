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
  /** ページ冒頭に表示する注意書き（任意。医療系の用語で「診断ではない」旨を示すのに使う）。 */
  notice?: string;
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
        heading: '「保護因子」「リスク因子」との違い',
        body: [
          'レジリエンスと「保護因子」は、しばしば混同されますが、同じものではありません。レジリエンスは、逆境にあっても適応し立ち直っていく「力・結果」そのものです。一方、保護因子は、そのレジリエンスを高める「条件・要因」を指します（信じてくれる大人の存在、感情を言葉にする力、安心できる環境など）。',
          '逆に、貧困・虐待・孤立など、不適応のリスクを高める要因は「リスク因子」と呼ばれ、保護因子と対になります。子どもは、リスク因子と保護因子の綱引きのなかで育つ、と考えられています。',
          'たとえるなら、レジリエンスはでき上がった料理（結果）、保護因子は材料や調味料（要因）、リスク因子は味を損なう要素です。だからこそ、子どもを直接「強くする」より、保護因子を一つずつ増やし、リスク因子をやわらげる関わりが現実的です。',
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
  {
    slug: 'default-mode-network',
    term: 'デフォルトモードネットワーク',
    reading: 'でふぉるともーどねっとわーく',
    english: 'Default Mode Network（DMN）',
    short: '課題に集中していない「ぼーっとした」ときに、かえって活発になる脳のネットワーク。記憶の整理、自己理解、人の気持ちの想像などに関わります。',
    updated: '2026-06-11',
    heroImage: {
      src: '/glossary/default-mode-network.png',
      alt: '子どもが静かに考えごとをするそばで、脳のネットワークが明るく広がる様子を表したイラスト',
    },
    sections: [
      {
        heading: 'デフォルトモードネットワークとは',
        body: [
          'デフォルトモードネットワーク（DMN）は、レイクルら（2001）が見つけた、特定の作業をしていないときにこそ活発に働く脳のネットワークです。「安静時」「ぼーっとしているとき」に優位になります。',
          '過去の出来事を思い返す、自分について考える、人の気持ちを想像する、未来を思い描く——といった「内側に向かう思考」に関わります。',
        ],
      },
      {
        heading: '「休んでいる脳」の大切な仕事',
        body: [
          '何もしていないように見えても、脳は経験を整理し、意味づけ、「自分」という感覚を育てています。イモルディーノ＝ヤンら（2012）は、休息や内省がこのネットワークを通じて社会性や道徳的思考を支えると指摘しました。',
          '課題に集中する「外向き」の働き（実行機能など）とはシーソーのような関係にあり、両方のバランスが大切だと考えられています。',
        ],
      },
      {
        heading: '子育てでの意味',
        body: [
          '予定や刺激で隙間なく埋めるより、ぼんやりする余白を残すこと。退屈や空想の時間が、創造性や自己理解の土台になります。',
        ],
      },
    ],
    related: [
      { slug: 'default-mode', title: '「ぼーっとする時間」の脳科学 — デフォルトモードネットワークと子どものこころ' },
    ],
    references: [
      { label: 'Raichle et al., 2001（デフォルトモードネットワーク）', url: 'https://scholar.google.com/scholar?q=Raichle+2001+a+default+mode+of+brain+function' },
      { label: 'Immordino-Yang et al., 2012（休息・内省と発達）', url: 'https://scholar.google.com/scholar?q=Immordino-Yang+2012+rest+is+not+idleness+default+mode' },
      { label: 'Buckner et al., 2008（DMNの総説）', url: 'https://scholar.google.com/scholar?q=Buckner+2008+brain+default+network+anatomy+function' },
    ],
  },
  {
    slug: 'attachment',
    term: '愛着（アタッチメント）・安全基地',
    reading: 'あいちゃく',
    english: 'Attachment / Secure Base',
    short: '子どもが養育者との間に結ぶ、安心のための情緒的な絆。安心して頼れる「安全基地」があるからこそ、子どもは外の世界へ挑戦できます。',
    updated: '2026-06-11',
    heroImage: {
      src: '/glossary/attachment.png',
      alt: '子どもが安心できる保護者を安全基地にして、少し離れて探索している様子を表したイラスト',
    },
    sections: [
      {
        heading: '愛着とは',
        body: [
          '愛着（アタッチメント）とは、ボウルビィが提唱した、子どもが特定の養育者との間に結ぶ安心のための絆です。こわいとき・不安なときに「この人のところに行けば大丈夫」と感じられる関係を指します。',
          'エインズワースは「ストレンジ・シチュエーション法」という観察で、安定型・回避型・抵抗型といった愛着のパターンを見いだしました。',
        ],
      },
      {
        heading: '「安全基地」と探索',
        body: [
          '安心の拠り所（安全基地）があるからこそ、子どもは安心して外の世界を探索し、挑戦できます。甘えと自立は対立せず、十分に頼れた経験が自立を支えます。',
          '安定した愛着は、後の対人関係や感情のコントロール、ストレスへの強さとも関連すると報告されています。',
        ],
      },
      {
        heading: '完璧でなくていい',
        body: [
          'ウィニコットの「ほどよい親（good enough mother）」という言葉の通り、いつも応えられなくても、おおむね子どものサインに気づき応えていれば十分です。鍵になるのは「感受性」——求めに気づき、応えることです。',
        ],
      },
    ],
    related: [
      { slug: 'aichaku', title: '愛着と「安全基地」 — 子どもの心の土台のつくり方' },
    ],
    references: [
      { label: 'Bowlby（愛着理論）', url: 'https://scholar.google.com/scholar?q=Bowlby+attachment+theory+secure+base' },
      { label: 'Ainsworth（ストレンジ・シチュエーション）', url: 'https://scholar.google.com/scholar?q=Ainsworth+strange+situation+patterns+of+attachment' },
      { label: 'Sroufe et al.（愛着の長期追跡）', url: 'https://scholar.google.com/scholar?q=Sroufe+attachment+development+person+longitudinal' },
    ],
  },
  {
    slug: 'exposure',
    term: 'エクスポージャー（段階的曝露）',
    reading: 'えくすぽーじゃー',
    english: 'Exposure',
    short: '不安やこわさを感じる対象に、少しずつ慣れていく方法。避け続けると不安は強まり、小さく近づくほど和らぐ、という原理にもとづきます。',
    updated: '2026-06-11',
    heroImage: {
      src: '/glossary/exposure.png',
      alt: '不安なものに小さな段階で近づき、子どもが少しずつ慣れていく過程を表したイラスト',
    },
    sections: [
      {
        heading: 'エクスポージャーとは',
        body: [
          'エクスポージャー（曝露）とは、不安症への心理療法で最も確かな効果が示されている方法の一つです。こわいものを避けるのではなく、安全な範囲で少しずつ近づき、慣れていきます。',
        ],
      },
      {
        heading: 'なぜ効くのか',
        body: [
          '「避ける→ほっとする→次も避ける」という悪循環を断ちます。実際に近づいて「思ったより大丈夫だった」という経験が、不安の予測を上書きしていきます。一気にではなく、できそうな小さな段階を踏むのがポイントです（段階的曝露）。',
        ],
      },
      {
        heading: '家庭での応用',
        body: [
          'こわがる場面を全部避けさせず、できそうな一歩から一緒に挑戦する。先回りの手助け（過剰な配慮）を少しずつ手放す。なお、強い不安で生活に支障がある場合は専門機関にご相談ください。',
        ],
      },
    ],
    related: [
      { slug: 'fuan', title: '子どもの不安・こわがり — 「逃げ道」を作りすぎない関わり' },
    ],
    references: [
      { label: 'Kendall（小児の不安への認知行動療法）', url: 'https://scholar.google.com/scholar?q=Kendall+child+anxiety+cognitive+behavioral+therapy+exposure' },
      { label: 'Craske et al.（エクスポージャーの仕組み）', url: 'https://scholar.google.com/scholar?q=Craske+2014+maximizing+exposure+therapy+inhibitory+learning' },
      { label: 'Rapee（不安と回避）', url: 'https://scholar.google.com/scholar?q=Rapee+childhood+anxiety+avoidance+exposure' },
    ],
  },
  {
    slug: 'technoference',
    term: 'テクノフェランス',
    reading: 'てくのふぇらんす',
    english: 'Technoference',
    short: '親がスマホなどに気を取られ、子どもとの関わりが途切れること。日常の小さな中断の積み重ねが、やり取りや子どもの行動に影響しうると報告されています。',
    updated: '2026-06-11',
    heroImage: {
      src: '/glossary/technoference.png',
      alt: '親子の関わりにスマホ通知が割り込む様子を、明るい科学図解として表したイラスト',
    },
    sections: [
      {
        heading: 'テクノフェランスとは',
        body: [
          'テクノフェランス（technoference）は、マクダニエルとラデスキーらによる造語で、「テクノロジー（technology）」と「干渉（interference）」を合わせた言葉です。デジタル機器による、対面の関わりへの割り込み・中断を指します。',
        ],
      },
      {
        heading: 'なぜ気になるのか',
        body: [
          '会話の往復（やり取り）が言葉や脳の発達を支えます。中断が増えると応答の質が下がりやすく、トロニックのスティルフェイス実験が示すように、反応が返らない状態は子どもに不安を与えうるためです。',
        ],
      },
      {
        heading: '「メリハリ」で対処',
        body: [
          '完全に断つより、食事中・寝る前など「子どもに集中する時間」を決めること。通知を切る、置き場所を決める、話しかけられたら一度顔を上げて応える——小さな工夫がやり取りを守ります。',
        ],
      },
    ],
    related: [
      { slug: 'technoference', title: '親の「ながらスマホ」が子に与えるもの — テクノフェランスを考える' },
    ],
    references: [
      { label: 'McDaniel & Radesky（テクノフェランス）', url: 'https://scholar.google.com/scholar?q=McDaniel+Radesky+technoference+parent+child+interaction' },
      { label: 'Radesky et al.（親のモバイル端末使用と関わり）', url: 'https://scholar.google.com/scholar?q=Radesky+caregiver+mobile+device+use+meals+children' },
    ],
  },
  {
    slug: 'modeling',
    term: 'モデリング（観察学習）',
    reading: 'もでりんぐ',
    english: 'Modeling / Observational Learning',
    short: '子どもが、まわりの人の行動を見て学ぶこと。教えなくても、大人の振る舞いや感情の出し方を見て、まねて身につけていきます。',
    updated: '2026-06-11',
    heroImage: {
      src: '/glossary/modeling.png',
      alt: '子どもが保護者の行動を見てまねる、観察学習のしくみを表したイラスト',
    },
    sections: [
      {
        heading: 'モデリングとは',
        body: [
          'モデリング（観察学習）は、バンデューラの社会的学習理論の中心概念です。直接教えられなくても、他者（モデル）の行動を観察し、まねることで学習が起こります。有名な「ボボ人形実験」では、大人の攻撃的な行動を見た子が、それをまねることが示されました。',
        ],
      },
      {
        heading: '感情や態度も伝わる',
        body: [
          '行動だけでなく、こわがり方・落ち着き方・人への接し方も伝わります。親が不安そうにすると子もこわがりやすく、落ち着いた姿は安心のモデルになります（恐怖のモデリング学習）。',
        ],
      },
      {
        heading: '「見せる」が最強の教え方',
        body: [
          '「やりなさい」より「やってみせる」。あいさつ・正直さ・感情の扱い方など、大人自身がモデルになることが、いちばん効く教え方です。',
        ],
      },
    ],
    related: [
      { slug: 'fuan', title: '子どもの不安・こわがり — 「逃げ道」を作りすぎない関わり' },
    ],
    references: [
      { label: 'Bandura（社会的学習理論・ボボ人形実験）', url: 'https://scholar.google.com/scholar?q=Bandura+social+learning+theory+Bobo+doll+imitation' },
      { label: 'Bandura, 1977（社会的学習理論）', url: 'https://scholar.google.com/scholar?q=Bandura+1977+social+learning+theory' },
      { label: 'Field（恐怖のモデリング学習）', url: 'https://scholar.google.com/scholar?q=Field+children+fear+learning+modeling+vicarious' },
    ],
  },
  {
    slug: 'still-face',
    term: 'スティルフェイス実験',
    reading: 'すてぃるふぇいすじっけん',
    english: 'Still-Face Experiment',
    short: '親が急に無表情・無反応になると、赤ちゃんが強い不安を示すという古典的な実験。やり取り（応答）が子どもにとっていかに大切かを示します。',
    updated: '2026-06-11',
    heroImage: {
      src: '/glossary/still-face.png',
      alt: '親子の応答的な関わりと表情の変化を、スティルフェイス実験としてやさしく表したイラスト',
    },
    sections: [
      {
        heading: 'どんな実験か',
        body: [
          'スティルフェイス実験は、トロニックら（1978）の研究です。親が普通にやり取りした後、急に無表情になって反応しなくなると、赤ちゃんは笑いかけたり声を出したりして関わりを取り戻そうとし、やがてぐずって不安を示します。',
        ],
      },
      {
        heading: '何を教えてくれるか',
        body: [
          '赤ちゃんは一方的に世話されるだけの存在ではなく、応答のあるやり取りを求めていることが分かります。反応が返ってこない状態は、子どもにとってストレスになります。',
        ],
      },
      {
        heading: '日常へのヒント',
        body: [
          'いつも完璧に応える必要はありません（やり取りは「ずれて→直す」のくり返しです）。ただ、ながらスマホなどで反応が途切れがちになっていないか、ときどき振り返る価値があります。',
        ],
      },
    ],
    related: [
      { slug: 'technoference', title: '親の「ながらスマホ」が子に与えるもの — テクノフェランスを考える' },
    ],
    references: [
      { label: 'Tronick et al., 1978（スティルフェイス）', url: 'https://scholar.google.com/scholar?q=Tronick+1978+infants+response+to+still+face' },
      { label: 'Mesman et al.（スティルフェイスのメタ分析）', url: 'https://scholar.google.com/scholar?q=Mesman+still+face+paradigm+meta-analysis+review' },
    ],
  },
  {
    slug: 'critical-period',
    term: '臨界期・敏感期',
    reading: 'りんかいき',
    english: 'Critical / Sensitive Period',
    short: 'ある能力が特に育ちやすい時期のこと。「この時期を逃すと手遅れ」と誤解されがちですが、多くは「窓」が緩やかで、過ぎても学べます。',
    updated: '2026-06-11',
    heroImage: {
      src: '/glossary/critical-period.png',
      alt: '子どもの発達の時期ごとの学びやすさを、成長の窓と曲線で表したイラスト',
    },
    sections: [
      {
        heading: '臨界期・敏感期とは',
        body: [
          '臨界期・敏感期とは、特定の経験が発達に強く影響する、感受性の高い時期のことです。視覚や言語などで知られます。厳密に閉じる「臨界期」より、ゆるやかな「敏感期」と捉えるほうが、実態に近いことが多いとされます。',
        ],
      },
      {
        heading: '「早くないと手遅れ」は言い過ぎ',
        body: [
          '言語では、ハートショーンら（2018）が、ネイティブ並みの文法習得に有利な時期はあるものの、その窓は従来考えられていたより長いことを示しました。発音は早い開始が有利ですが、語彙や読み書きは後からでも十分に伸びます。',
        ],
      },
      {
        heading: '子育てでの意味',
        body: [
          '「今を逃すと…」と焦るより、その時期に豊かな経験ややり取りを重ねることが大切です。早期の詰め込みより、楽しく続けられることのほうが効きます。',
        ],
      },
    ],
    related: [
      { slug: 'bilingual', title: 'バイリンガル・早期英語 — 「早いほど得」は本当か' },
    ],
    references: [
      { label: 'Hartshorne et al., 2018（言語習得の臨界期）', url: 'https://scholar.google.com/scholar?q=Hartshorne+2018+critical+period+second+language+acquisition' },
      { label: 'Hensch（臨界期の可塑性）', url: 'https://scholar.google.com/scholar?q=Hensch+critical+period+plasticity+brain' },
      { label: 'Knudsen（敏感期）', url: 'https://scholar.google.com/scholar?q=Knudsen+sensitive+periods+development+brain+behavior' },
    ],
  },
  {
    slug: 'self-control',
    term: '自制心（マシュマロ実験）',
    reading: 'じせいしん',
    english: 'Self-control',
    short: '目の前の欲求を抑えて、長い目で見て大切なことを選ぶ力。「マシュマロ実験」で知られますが、近年は環境の影響も大きいと分かってきました。',
    updated: '2026-06-11',
    heroImage: {
      src: '/glossary/self-control.png',
      alt: '子どもが目の前のおやつを待ちながら、自制心を使って落ち着いている様子を表したイラスト',
    },
    sections: [
      {
        heading: '自制心とマシュマロ実験',
        body: [
          'ミシェルの「マシュマロ実験」では、目の前のマシュマロを我慢できた子が、後年の成績などで良い傾向を示し、自制心の大切さを印象づけました。',
        ],
      },
      {
        heading: '「我慢する力」だけではない',
        body: [
          '近年の大規模な追試（ワッツら, 2018）では、その関連は当初より弱く、家庭環境の影響も大きいと報告されました。自制心は生まれつきの性格ではなく、安心できる環境や見通しのなかで育ち、実行機能とも深く関わります。',
        ],
      },
      {
        heading: '育て方',
        body: [
          '我慢を強いるより、見通しを示す・気をそらす工夫・安心できる関係。「待てた」という経験を積み重ねることが、自制心を育てます。',
        ],
      },
    ],
    related: [
      { slug: 'souki-kyouiku', title: '早期教育・習い事は得か — 「先取り」より大切な土台' },
    ],
    references: [
      { label: 'Mischel（マシュマロ実験）', url: 'https://scholar.google.com/scholar?q=Mischel+marshmallow+test+delay+of+gratification' },
      { label: 'Watts et al., 2018（マシュマロ実験の追試）', url: 'https://scholar.google.com/scholar?q=Watts+2018+revisiting+marshmallow+test+conceptual+replication' },
      { label: 'Duckworth（自制心とやり抜く力）', url: 'https://scholar.google.com/scholar?q=Duckworth+self-control+grit+academic' },
    ],
  },
  {
    slug: 'hininchi-nouryoku',
    term: '非認知能力',
    reading: 'ひにんちのうりょく',
    english: 'Non-cognitive Skills',
    short: 'IQやテストでは測りにくい力の総称。やり抜く力、自制心、意欲、社会性、感情のコントロールなどを含み、将来の幸福や成功と関わるとされます。',
    updated: '2026-06-11',
    heroImage: {
      src: '/glossary/hininchi-nouryoku.png',
      alt: '子どもの粘り強さや協力、感情調整などの非認知能力を星座のように表したイラスト',
    },
    sections: [
      {
        heading: '非認知能力とは',
        body: [
          '非認知能力とは、知能テストや学力テストで測られる「認知能力」に対して、それ以外の幅広い力をまとめた呼び方です。具体的には、自制心、やり抜く力（grit）、意欲、協調性、感情のコントロール、レジリエンスなどが含まれます。',
        ],
      },
      {
        heading: 'なぜ注目されるのか',
        body: [
          '経済学者ヘックマンらは、幼児期の介入（ペリー就学前計画）の長期的な効果が、IQの持続的な上昇というより、非認知的な力を通じて表れたと論じました。学力だけでなく、人生の幅広い面と関連すると考えられています。',
        ],
      },
      {
        heading: 'どう育つのか',
        body: [
          '特別な訓練より、遊び・対話・安心できる関係といった日常の関わりのなかで育ちます。ダックワースの「やり抜く力」の研究も、興味と粘りを支える環境の大切さを示しています。',
          'なお「非認知」と「認知」はきれいに分かれるものではなく、互いに支え合う点にも注意が必要です。',
        ],
      },
    ],
    related: [
      { slug: 'resilience', title: '逆境に強い子を育てる — レジリエンスのエビデンス' },
      { slug: 'jiko-ketteikan', title: '「自分で決める力」を育てる関わり方 — 自己肯定感と自律のエビデンス' },
    ],
    references: [
      { label: 'Heckman（非認知能力・ペリー就学前計画）', url: 'https://scholar.google.com/scholar?q=Heckman+noncognitive+skills+Perry+Preschool+returns' },
      { label: 'Duckworth & Seligman（自制心・やり抜く力）', url: 'https://scholar.google.com/scholar?q=Duckworth+grit+perseverance+passion+long-term+goals' },
      { label: 'OECD（社会情動的スキル）', url: 'https://scholar.google.com/scholar?q=OECD+social+and+emotional+skills+well-being' },
    ],
  },
  {
    slug: 'empathy',
    term: '共感（認知的共感・情動的共感）',
    reading: 'きょうかん',
    english: 'Cognitive / Affective Empathy',
    short: '相手の気持ちを「理解する」認知的共感と、「感じ取る」情動的共感の2つの側面があります。いじめを止める力や思いやりの土台になります。',
    updated: '2026-06-12',
    heroImage: {
      src: '/glossary/empathy.png',
      alt: '相手の気持ちを理解し、感じ取る共感の働きを、子ども同士のやり取りと科学図解で表したイラスト',
    },
    sections: [
      {
        heading: '2種類の共感',
        body: [
          '共感には、相手の気持ちや状況を頭で理解する「認知的共感」と、相手の感情を自分も感じ取る「情動的共感」の2つの側面があります。相手の心を推し量る力（心の理論）は、とくに認知的共感と深く関わります。',
        ],
      },
      {
        heading: 'いじめを止める力との関係',
        body: [
          'ヴァン・ノールデンら（2015）は、いじめを止める子が、認知的共感と情動的共感の両方を持っていたことを示しました。相手の状況を理解し、かつその気持ちを感じ取れる子が、傍観者から擁護者へと変わりやすいのです。',
        ],
      },
      {
        heading: '家庭で育てる',
        body: [
          '「もし自分だったらどう感じる？」と相手の気持ちを想像する会話。絵本や日々の出来事を通じて、登場人物や相手の気持ちを言葉にすること。こうしたやり取りが、共感を育てます。',
        ],
      },
    ],
    related: [
      { slug: 'ijime', title: 'いじめにどう向き合うか — カギを握るのは「傍観者」' },
    ],
    references: [
      { label: 'van Noorden et al., 2015（いじめと共感性）', url: 'https://scholar.google.com/scholar?q=van+Noorden+2015+empathy+bullying+roles+children' },
      { label: 'Eisenberg（共感と向社会的行動）', url: 'https://scholar.google.com/scholar?q=Eisenberg+empathy+related+responding+prosocial+behavior' },
      { label: 'Decety（共感の神経科学）', url: 'https://scholar.google.com/scholar?q=Decety+empathy+development+neuroscience' },
    ],
  },
  {
    slug: 'sel',
    term: 'SEL（社会性と感情の学習）',
    reading: 'えすいーえる',
    english: 'Social and Emotional Learning',
    short: '感情の理解・コントロールや、人との関わり方などを意図的に育てる教育の取り組み。心の安定だけでなく、学力にも良い影響があると報告されています。',
    updated: '2026-06-12',
    heroImage: {
      src: '/glossary/sel.png',
      alt: '子どもたちが感情調整や協力、聞く力を学ぶSELを明るい科学図解で表したイラスト',
    },
    sections: [
      {
        heading: 'SELとは',
        body: [
          'SEL（Social and Emotional Learning）とは、自分の感情に気づき扱う力、他者を思いやる力、責任ある判断、人間関係のスキルなどを、学校や家庭で意図的に育てる取り組みのことです。',
        ],
      },
      {
        heading: '学力にも効く',
        body: [
          'ダーラックら（2011）の大規模なメタ分析は、SELプログラムが、子どもの社会性や情緒の安定だけでなく、学業成績の向上にもつながったことを示しました。感情を扱う力は、学びの土台でもあるのです。',
        ],
      },
      {
        heading: '家庭でできること',
        body: [
          '感情に名前をつける、気持ちを言葉にして整理する、相手の立場を想像する——特別なプログラムでなくても、日常の関わりが立派なSELになります。',
        ],
      },
    ],
    related: [
      { slug: 'resilience', title: '逆境に強い子を育てる — レジリエンスのエビデンス' },
    ],
    references: [
      { label: 'Durlak et al., 2011（SELのメタ分析）', url: 'https://scholar.google.com/scholar?q=Durlak+2011+social+emotional+learning+meta-analysis' },
      { label: 'CASEL（SELの枠組み）', url: 'https://scholar.google.com/scholar?q=CASEL+social+emotional+learning+framework+competencies' },
      { label: 'Jones & Bouffard（SELの実践）', url: 'https://scholar.google.com/scholar?q=Jones+Bouffard+social+emotional+learning+schools' },
    ],
  },
  {
    slug: 'fadeout',
    term: 'フェードアウト効果',
    reading: 'ふぇーどあうとこうか',
    english: 'Fadeout Effect',
    short: '早期の教育や介入で一度上がった効果が、時間とともに薄れていく現象。「早く始めれば差がつき続ける」とは限らないことを示します。',
    updated: '2026-06-12',
    heroImage: {
      src: '/glossary/fadeout.png',
      alt: '早期教育の効果が時間とともに変化し、支えのある環境が大切になることを表したイラスト',
    },
    sections: [
      {
        heading: 'フェードアウト効果とは',
        body: [
          'フェードアウト（消失）効果とは、幼児期の教育や介入で上がったテストの成績などが、入学後の数年で差が縮まり、消えていくことがある現象です。',
        ],
      },
      {
        heading: 'どんな研究があるか',
        body: [
          'プロツコ（2015）は、早期介入で上がった知能の得点が、支援が終わると薄れやすいことを示しました。テネシー州の就学前プログラムの追跡（リプシーら, 2018）でも、初期の学力面のメリットが続かなかったと報告されています。',
        ],
      },
      {
        heading: 'どう捉えるか',
        body: [
          '「早期教育は無意味」という意味ではありません。点数の先取りより、自分で取り組む経験・遊び・安心できる環境といった「土台の力」のほうが長く効く、と捉えるのが現実的です。',
        ],
      },
    ],
    related: [
      { slug: 'souki-kyouiku', title: '早期教育・習い事は得か — 「先取り」より大切な土台' },
    ],
    references: [
      { label: 'Protzko, 2015（早期介入とフェードアウト）', url: 'https://scholar.google.com/scholar?q=Protzko+2015+fadeout+effect+intelligence+interventions' },
      { label: 'Lipsey et al., 2018（テネシー就学前プログラム）', url: 'https://scholar.google.com/scholar?q=Lipsey+2018+Tennessee+voluntary+prekindergarten+effects' },
      { label: 'Bailey et al.（フェードアウトの仕組み）', url: 'https://scholar.google.com/scholar?q=Bailey+persistence+fadeout+early+childhood+education+interventions' },
    ],
  },
  {
    slug: 'cognitive-dissonance',
    term: '認知的不協和',
    reading: 'にんちてきふきょうわ',
    english: 'Cognitive Dissonance',
    short: '自分の考えと行動が矛盾したときに感じる、心の居心地の悪さ。人はこの不快を減らそうと、考えや態度のほうを変えることがあります。',
    updated: '2026-06-12',
    heroImage: {
      src: '/glossary/cognitive-dissonance.png',
      alt: '子どもが矛盾する考えを見つめ、認知的不協和を整理していく様子を表したイラスト',
    },
    sections: [
      {
        heading: '認知的不協和とは',
        body: [
          '認知的不協和とは、フェスティンガー（1957）が提唱した考え方です。「体に悪いと思っているのに続けている」のように、信念と行動が食い違うと、人は不快（不協和）を感じ、それを減らそうと考えや行動を調整します。',
        ],
      },
      {
        heading: '子育てとの関わり',
        body: [
          'フェスティンガーの古典研究（1959）は、外からの強い理由（報酬）で行動させると、その行動を「好きではない」と感じやすくなることを示しました。逆に、軽い理由づけで自分から選んで行動すると、「自分は好きだからやっている」と捉え直し、態度が内側から変わりやすくなります。',
          'これは、強い罰や報酬より、納得して自分で選ぶ関わりのほうが効く、という知見の背景にもなっています。',
        ],
      },
      {
        heading: '日常での例',
        body: [
          '「やらされた」と感じると、その行動を嫌いになりやすく、「自分で決めた」と感じると好きになりやすいものです。小さな選択を委ねることが、前向きな態度を育てます。',
        ],
      },
    ],
    related: [
      { slug: 'homekata', title: '「すごい」より効く、子どものほめ方 — 研究でわかった3つのコツ' },
    ],
    references: [
      { label: 'Festinger, 1957（認知的不協和理論）', url: 'https://scholar.google.com/scholar?q=Festinger+1957+theory+of+cognitive+dissonance' },
      { label: 'Festinger & Carlsmith, 1959（不協和の実験）', url: 'https://scholar.google.com/scholar?q=Festinger+Carlsmith+1959+cognitive+consequences+forced+compliance' },
      { label: 'Aronson（不協和と子どもの行動）', url: 'https://scholar.google.com/scholar?q=Aronson+1963+effect+of+severity+of+threat+devaluation' },
    ],
  },
  {
    slug: 'protective-factors',
    term: '保護因子',
    reading: 'ほごいんし',
    english: 'Protective Factors',
    short: '逆境のなかでも子どもの育ちを守り、レジリエンスを高める「条件・要因」。信じてくれる大人の存在、自己コントロールの力、安心できる環境などを指します。',
    updated: '2026-06-12',
    heroImage: {
      src: '/glossary/protective-factors.png',
      alt: '子どもを支える関係や環境が保護因子として働く様子を、明るい科学図解で表したイラスト',
    },
    sections: [
      {
        heading: '保護因子とは',
        body: [
          '保護因子とは、リスクのある状況でも、子どもが不適応に陥るのを防ぎ、立ち直る力（レジリエンス）を支える要因のことです。逆に、不適応のリスクを高める要因は「リスク因子」と呼ばれ、保護因子と対になります。',
        ],
      },
      {
        heading: 'レジリエンスとの違い',
        body: [
          'レジリエンスが「立ち直る力・結果」であるのに対し、保護因子は「それを支える要因」です。保護因子が積み重なることで、レジリエンスが発揮されやすくなります。両者は関係が深いものの、同じものではありません。',
        ],
      },
      {
        heading: '代表的な保護因子',
        body: [
          'ワーナーら（1993）の長期研究などから、「自分を信じてくれる大人が一人いること」「自己コントロールの力」「安心できる家庭や居場所」「得意なことや役割があること」などが知られています。',
          '子どもを直接「強くする」より、こうした保護因子を一つずつ増やし、リスク因子をやわらげる関わりが現実的です。',
        ],
      },
    ],
    related: [
      { slug: 'resilience', title: '逆境に強い子を育てる — レジリエンスのエビデンス' },
    ],
    references: [
      { label: 'Werner, 1993（保護因子と長期追跡）', url: 'https://scholar.google.com/scholar?q=Werner+1993+risk+resilience+protective+factors+Kauai' },
      { label: 'Masten, 2001（ordinary magic）', url: 'https://scholar.google.com/scholar?q=Masten+2001+ordinary+magic+resilience+development' },
      { label: 'Rutter（保護因子とレジリエンス）', url: 'https://scholar.google.com/scholar?q=Rutter+protective+factors+resilience+psychosocial' },
    ],
  },
  {
    slug: 'metacognition',
    term: 'メタ認知',
    reading: 'めたにんち',
    english: 'Metacognition',
    short: '自分の考えや学び方を、一段上から客観的に見てコントロールする力。「分かっているか」を自分で点検し、やり方を調整する土台になります。',
    updated: '2026-06-12',
    heroImage: {
      src: '/glossary/metacognition.png',
      alt: '子どもが自分の考えを見つめ直し、メタ認知で学び方を調整する様子を表したイラスト',
    },
    sections: [
      {
        heading: 'メタ認知とは',
        body: [
          'メタ認知とは、フラベル（1979）が提唱した概念で、「自分が何を分かっていて、何が分かっていないか」を把握し（メタ認知的知識）、自分の理解や進み方を点検・調整する（メタ認知的コントロール）働きのことです。「考えることについて考える」とも言われます。',
        ],
      },
      {
        heading: '学びを支える力',
        body: [
          '自分の理解度を点検できる子は、つまずきに気づき、やり方を変えられます。メタ認知は学習の成果と関わり、自分の学びを自分で進める「自己調整学習」の中心にあります。実行機能とも近い関係です。',
        ],
      },
      {
        heading: '家庭で育てる',
        body: [
          '「どこが分かって、どこが難しい？」「次はどうやってみる？」と問いかけること。答えをすぐ教えるより、自分で点検する習慣を促します。うまくいった・いかなかった理由を一緒に振り返るのも効果的です。',
        ],
      },
    ],
    references: [
      { label: 'Flavell, 1979（メタ認知）', url: 'https://scholar.google.com/scholar?q=Flavell+1979+metacognition+cognitive+monitoring' },
      { label: 'Zimmerman（自己調整学習）', url: 'https://scholar.google.com/scholar?q=Zimmerman+self-regulated+learning+metacognition' },
      { label: 'Schraw & Dennison（メタ認知の測定）', url: 'https://scholar.google.com/scholar?q=Schraw+Dennison+assessing+metacognitive+awareness' },
    ],
  },
  {
    slug: 'self-efficacy',
    term: '自己効力感',
    reading: 'じここうりょくかん',
    english: 'Self-efficacy',
    short: '「自分はこれをやり遂げられそうだ」という見通し・自信。困難に挑む意欲や粘り強さを支えます。自己肯定感（自分への肯定的な感情）とは別の概念です。',
    updated: '2026-06-12',
    heroImage: {
      src: '/glossary/self-efficacy.png',
      alt: '子どもが小さな成功を積み重ね、自己効力感を育てていく様子を表したイラスト',
    },
    sections: [
      {
        heading: '自己効力感とは',
        body: [
          '自己効力感とは、バンデューラが提唱した、ある課題について「自分はできそうだ」と思える見通しのことです。自分全体への肯定的な感情（自己肯定感）とは異なり、「この場面でやれそうか」という、より具体的な感覚を指します。',
        ],
      },
      {
        heading: 'なぜ大切か',
        body: [
          '自己効力感が高いと、難しいことにも挑戦し、失敗しても粘りやすくなります。バンデューラは、①小さな成功体験、②人の成功を見ること（モデリング）、③励まし、④心身の状態、の4つが自己効力感を高めると整理しました。',
        ],
      },
      {
        heading: '家庭で育てる',
        body: [
          '「できた」という小さな成功を積ませること。手伝いすぎず、自分でやり遂げる経験を大切にすること。「すごい」と能力をほめるより、工夫や過程を具体的に認めることが、地に足のついた自信を育てます。',
        ],
      },
    ],
    related: [
      { slug: 'jiko-ketteikan', title: '「自分で決める力」を育てる関わり方 — 自己肯定感と自律のエビデンス' },
    ],
    references: [
      { label: 'Bandura, 1977（自己効力感）', url: 'https://scholar.google.com/scholar?q=Bandura+1977+self-efficacy+toward+unifying+theory' },
      { label: 'Bandura, 1997（自己効力感）', url: 'https://scholar.google.com/scholar?q=Bandura+1997+self-efficacy+the+exercise+of+control' },
      { label: 'Multon et al.（自己効力感と学業成績）', url: 'https://scholar.google.com/scholar?q=Multon+1991+self-efficacy+academic+outcomes+meta-analysis' },
    ],
  },
  {
    slug: 'curiosity',
    term: '好奇心',
    reading: 'こうきしん',
    english: 'Curiosity',
    short: '「知りたい」「やってみたい」という心の動き。学びや記憶を後押しし、内発的なやる気の源になります。',
    updated: '2026-06-12',
    heroImage: {
      src: '/glossary/curiosity.png',
      alt: '子どもが身近なものを観察し、好奇心から発見していく様子を表したイラスト',
    },
    sections: [
      {
        heading: '好奇心とは',
        body: [
          '好奇心とは、新しいことや分からないことに引かれ、知りたい・確かめたいと思う気持ちです。レーベンシュタイン（1994）は、これを「自分の知識のすきま（情報のギャップ）を埋めたい欲求」として説明しました。',
        ],
      },
      {
        heading: '学びと記憶を後押しする',
        body: [
          'グルーバーら（2014）は、好奇心が高まっている状態のとき、人は対象だけでなく、たまたま一緒に提示された無関係なことまでよく覚えていたことを示しました。好奇心は、学びの効率そのものを高めるのです。',
        ],
      },
      {
        heading: '家庭で育てる',
        body: [
          '子どもの「なんで？」を大切にすること。すぐ答えを与えるより、一緒に考え、調べること。正解を急がず、問いそのものを面白がる雰囲気が、好奇心を守ります。ごほうびで釣りすぎないこと（内発的動機づけ）も大切です。',
        ],
      },
    ],
    references: [
      { label: 'Loewenstein, 1994（好奇心の情報ギャップ理論）', url: 'https://scholar.google.com/scholar?q=Loewenstein+1994+psychology+of+curiosity+information+gap' },
      { label: 'Gruber et al., 2014（好奇心と記憶）', url: 'https://scholar.google.com/scholar?q=Gruber+2014+states+of+curiosity+modulate+memory+learning' },
      { label: 'Kang et al., 2009（好奇心と学習）', url: 'https://scholar.google.com/scholar?q=Kang+2009+wick+in+the+candle+of+learning+curiosity' },
    ],
  },
  {
    slug: 'self-esteem',
    term: '自己肯定感',
    reading: 'じここうていかん',
    english: 'Self-esteem',
    short: '自分を価値ある存在として受け止める、肯定的な感情。大切な土台ですが、「高ければ高いほど良い」わけではないことも分かってきました。',
    updated: '2026-06-12',
    heroImage: {
      src: '/glossary/self-esteem.png',
      alt: '子どもがありのままの自分を受け止め、自己肯定感を育てていく様子を表したイラスト',
    },
    sections: [
      {
        heading: '自己肯定感とは',
        body: [
          '自己肯定感とは、自分自身を肯定的に受け止め、「これでいい」と思える感覚（自尊感情）です。ローゼンバーグの尺度などで測られてきました。心の安定の土台とされます。',
        ],
      },
      {
        heading: '「高ければ良い」わけではない',
        body: [
          'バウマイスターら（2003）の大規模なレビューは、自尊心の高さが学業成績や仕事の成功の「原因」になるとは言えず、むしろ良い結果が自尊心を高める面が大きいと結論づけました。',
          '根拠のない過剰な称賛は、かえって打たれ弱さにつながることもあります（大げさなほめの研究）。「すごい」と中身なくほめ続けるより、ありのままを受け止めることが大切です。',
        ],
      },
      {
        heading: '育て方',
        body: [
          '安心できる関係（愛着）と、「できた」という経験（自己効力感）の積み重ねが、地に足のついた自己肯定感を育てます。結果や能力をほめるより、工夫や過程を具体的に認めることが土台になります。',
        ],
      },
    ],
    related: [
      { slug: 'jiko-ketteikan', title: '「自分で決める力」を育てる関わり方 — 自己肯定感と自律のエビデンス' },
    ],
    references: [
      { label: 'Rosenberg（自尊感情）', url: 'https://scholar.google.com/scholar?q=Rosenberg+self-esteem+society+and+the+adolescent+self-image' },
      { label: 'Baumeister et al., 2003（自尊心と成果のレビュー）', url: 'https://scholar.google.com/scholar?q=Baumeister+2003+does+high+self-esteem+cause+better+performance' },
      { label: 'Brummelman et al., 2014（過剰なほめ）', url: 'https://scholar.google.com/scholar?q=Brummelman+2014+inflated+praise+children+low+self-esteem' },
    ],
  },
  {
    slug: 'agency',
    term: '主体性（エージェンシー）',
    reading: 'しゅたいせい',
    english: 'Agency',
    short: '自分の人生や行動を、自分で考えて選び、動かしていく力・姿勢。「やらされる」のではなく「自分ごと」として取り組む感覚です。',
    updated: '2026-06-12',
    heroImage: {
      src: '/glossary/agency.png',
      alt: '子どもが自分で選び行動する主体性を、分かれ道と支える大人で表したイラスト',
    },
    sections: [
      {
        heading: '主体性（エージェンシー）とは',
        body: [
          '主体性（エージェンシー）とは、自分の意思で目標を定め、選び、行動し、その結果に責任を持つ力です。OECDの「ラーニング・コンパス（Education 2030）」では、これからの時代に育てたい中心的な力として「生徒のエージェンシー」が掲げられています。',
        ],
      },
      {
        heading: '自律性・自己決定理論との関係',
        body: [
          '自己決定理論でいう「自律性（自分で選んでいる感覚）」と深く関わりますが、主体性はより広く、「自分の人生を自分で動かしていく」姿勢全体を指します。指示や報酬で動かされるのではなく、自分ごととして関わることが核になります。',
        ],
      },
      {
        heading: '家庭で育てる',
        body: [
          '小さな選択を子どもに委ねること。失敗も含めて、自分で決める経験を積ませること。先回りしすぎず、本人の「やってみたい」を尊重することが、主体性を育てます。',
        ],
      },
    ],
    related: [
      { slug: 'jiko-ketteikan', title: '「自分で決める力」を育てる関わり方 — 自己肯定感と自律のエビデンス' },
    ],
    references: [
      { label: 'OECD（Education 2030 / 生徒のエージェンシー）', url: 'https://scholar.google.com/scholar?q=OECD+Education+2030+learning+compass+student+agency' },
      { label: 'Ryan & Deci（自己決定理論・自律性）', url: 'https://scholar.google.com/scholar?q=Ryan+Deci+self-determination+theory+autonomy' },
      { label: 'Bandura（人間のエージェンシー）', url: 'https://scholar.google.com/scholar?q=Bandura+2001+human+agency+social+cognitive+theory' },
    ],
  },
  {
    slug: 'coping',
    term: 'ストレスとコーピング',
    reading: 'すとれすとこーぴんぐ',
    english: 'Stress and Coping',
    short: 'ストレスにどう対処するか（コーピング）の考え方。出来事そのものより、「どう捉え、どう対処するか」が、ストレスの影響を左右します。',
    updated: '2026-06-12',
    heroImage: {
      src: '/glossary/coping.png',
      alt: '子どもがストレスに気づき、深呼吸や相談でコーピングしていく様子を表したイラスト',
    },
    sections: [
      {
        heading: 'ストレスとコーピングとは',
        body: [
          'ラザルスとフォルクマン（1984）は、ストレスを「出来事」そのものではなく、「自分にとってどれほど脅威か」という評価と、「どう対処できそうか」という見積もりで決まると考えました。この対処の仕方を「コーピング」と呼びます。',
        ],
      },
      {
        heading: 'コーピングのいろいろ',
        body: [
          'コーピングには、問題そのものを解決しようとする「問題焦点型」と、気持ちを整える「情動焦点型」があり、状況に応じて使い分けることが大切です。子どもはまず、大人と一緒に落ち着く経験（共調整）を通じて、対処の仕方を学んでいきます。',
        ],
      },
      {
        heading: '大切な視点：「毒性ストレス」',
        body: [
          'ショーンコフらは、強いストレスでも支えてくれる大人がいれば耐えられる（耐えうるストレス）一方、支えのないまま長く続く強いストレスは発達に害を及ぼしうる（毒性ストレス）と整理しました。鍵は、ストレスをゼロにすることではなく、支える関係があることです。',
        ],
      },
    ],
    related: [
      { slug: 'resilience', title: '逆境に強い子を育てる — レジリエンスのエビデンス' },
      { slug: 'kanjou-control', title: 'かんしゃくとどう向き合うか — 感情のコントロールを育てる3つの土台' },
    ],
    references: [
      { label: 'Lazarus & Folkman, 1984（ストレスとコーピング）', url: 'https://scholar.google.com/scholar?q=Lazarus+Folkman+1984+stress+appraisal+and+coping' },
      { label: 'Shonkoff et al.（毒性ストレス）', url: 'https://scholar.google.com/scholar?q=Shonkoff+toxic+stress+childhood+development' },
      { label: 'Compas et al.（子どものコーピング）', url: 'https://scholar.google.com/scholar?q=Compas+coping+with+stress+during+childhood+adolescence' },
    ],
  },
  {
    slug: 'developmental-disorders',
    term: '発達障害（神経発達症）',
    reading: 'はったつしょうがい',
    english: 'Neurodevelopmental Disorders',
    short: '生まれつきの脳の働き方の特性により、発達の現れ方に凸凹（得意・不得意の差）が見られる状態の総称。現在は「神経発達症」とも呼ばれ、ASD・ADHD・限局性学習症などを含みます。',
    updated: '2026-06-12',
    heroImage: {
      src: '/glossary/developmental-disorders.png',
      alt: '子どもたちの発達の多様な特性と、それぞれに合った支援環境を明るい科学図解で表したイラスト',
    },
    notice: 'このページは特性を理解するための一般的な情報であり、診断や自己判断のためのものではありません。気になる場合は、小児科・児童精神科・発達外来や、お住まいの自治体の発達相談などの専門機関にご相談ください。',
    sections: [
      {
        heading: '発達障害（神経発達症）とは',
        body: [
          '発達障害とは、生まれつきの脳機能の特性により、発達の現れ方に凸凹（得意・不得意の差）が見られる状態の総称です。米国の診断基準DSM-5では「神経発達症（neurodevelopmental disorders）」と総称され、自閉スペクトラム症（ASD）、注意欠如多動症（ADHD）、限局性学習症（LD）、知的発達症などが含まれます。',
          '育て方やしつけが原因で生じるものではない、と考えられています。',
        ],
      },
      {
        heading: '「治す」より「合わせる」',
        body: [
          '特性そのものをなくすというより、環境や関わりを本人に合わせて整えることで、力を発揮しやすくなります。早めに特性を理解し、合った支援につながることが大切です。',
        ],
      },
      {
        heading: '専門機関につながる',
        body: [
          '「もしかして」と思ったら、一人で抱え込まず、小児科・児童精神科・発達外来や、自治体の発達相談へ。診断の有無にかかわらず、特性に合った関わりや支援を受けることができます。',
        ],
      },
    ],
    references: [
      { label: 'American Psychiatric Association, DSM-5（神経発達症）', url: 'https://scholar.google.com/scholar?q=DSM-5+neurodevelopmental+disorders+classification' },
      { label: 'Thapar et al.（神経発達症の総説）', url: 'https://scholar.google.com/scholar?q=Thapar+neurodevelopmental+disorders+review' },
      { label: '日本小児神経学会（神経発達症）', url: 'https://scholar.google.com/scholar?q=神経発達症+発達障害+概念+小児神経' },
    ],
  },
  {
    slug: 'asd',
    term: '自閉スペクトラム症（ASD）',
    reading: 'じへいすぺくとらむしょう',
    english: 'Autism Spectrum Disorder',
    short: '対人コミュニケーションのスタイルや、興味・感覚の現れ方に特性がある状態。「スペクトラム（連続体）」と呼ばれ、現れ方は一人ひとり大きく異なります。',
    updated: '2026-06-13',
    heroImage: {
      src: '/glossary/asd.png',
      alt: '子どもの興味や感覚、コミュニケーションの特性を、穏やかな支援環境とともに表したイラスト',
    },
    notice: 'このページは特性を理解するための一般的な情報であり、診断や自己判断のためのものではありません。気になる場合は、小児科・児童精神科・発達外来や、お住まいの自治体の発達相談などの専門機関にご相談ください。',
    sections: [
      {
        heading: '自閉スペクトラム症とは',
        body: [
          '自閉スペクトラム症（ASD）は、社会的なコミュニケーションややり取りのスタイル、興味やこだわり、感覚（音・光・触覚などへの過敏や鈍感）の現れ方に特性がある状態です。DSM-5では、かつてのアスペルガー症候群などを統合し「自閉スペクトラム症」とされました。',
          '「スペクトラム」は、特性の強さや現れ方が、人によって連続的に異なることを表しています。',
        ],
      },
      {
        heading: '「優劣」ではなく「特性」',
        body: [
          '特性は、細部への気づきや規則性への強さ、好きなことへの深い集中といった強みにも、難しさにもなりえます。ニューロダイバーシティ（脳の多様性）の視点では、違いを「治すべき欠陥」ではなく多様性として捉えます。',
        ],
      },
      {
        heading: 'どのようなタイプがあるか',
        body: [
          'ASDは「このタイプならこう」と単純に分けられるものではありません。大きくは、社会的なやり取りの特性、こだわりや反復的な行動、感覚の過敏・鈍感、学び方や注意の向け方の違いが、子どもごとに異なる組み合わせで表れます。',
          '言葉が流ちょうでも、暗黙のルールや相手の意図を読むことが難しい子もいます。逆に、言葉での表現は苦手でも、視覚的な手がかりや好きな活動の中では力を発揮しやすい子もいます。',
          '感覚面では、音・光・におい・触覚がつらい子もいれば、強い感覚入力を求めて体を動かしたり、同じ動きをくり返したりする子もいます。',
        ],
      },
      {
        heading: 'どのように困るのか',
        body: [
          '学校では、予定変更、曖昧な指示、グループ活動、休み時間の自由な会話、騒がしい教室、給食や体育館の刺激が負担になりやすいことがあります。本人は努力していても、「空気を読まない」「わざとこだわる」と誤解されることがあります。',
          '得意なことに深く集中できる一方、急な切り替えや「あとで」「ちゃんと」などの抽象的な言葉が苦手な場合があります。見通しが立たないと不安が強まり、固まる、泣く、怒る、逃げるといった形で表れることもあります。',
        ],
      },
      {
        heading: '具体的な対策例',
        body: [
          '見通しを支えるには、1日の予定、授業の流れ、終わりの条件を絵・文字・写真で見える化します。予定変更があるときは、できるだけ前もって伝え、「変更後に何をするか」まで示します。',
          '指示は短く具体的にし、口頭だけでなく板書・カード・実物で補います。「きれいに片づけて」より「プリントを青い箱に入れる」のように、行動として分かる形にします。',
          '感覚がつらい場合は、席を出入口やスピーカーから離す、イヤーマフを使える場面を決める、休める静かな場所を用意するなどの調整が役立つことがあります。集団活動では、役割を明確にしたり、参加方法を選べるようにしたりします。',
          'こだわりをすぐに止めるより、本人にとって何を守っている行動なのかを見ます。安全を確保したうえで、予告、代替案、選択肢を使うと、切り替えやすくなることがあります。',
        ],
      },
      {
        heading: '早めの理解と支援',
        body: [
          '見通しを示す、刺激を調整するなど、関わり方や環境の工夫で、本人が過ごしやすくなります。気になる場合は、自己判断せず専門機関にご相談ください。',
        ],
      },
    ],
    references: [
      { label: 'American Psychiatric Association, DSM-5（ASD）', url: 'https://scholar.google.com/scholar?q=DSM-5+autism+spectrum+disorder+criteria' },
      { label: 'Lord et al.（自閉スペクトラム症の総説）', url: 'https://scholar.google.com/scholar?q=Lord+autism+spectrum+disorder+Lancet+review' },
      { label: 'CDC（自閉スペクトラム症）', url: 'https://scholar.google.com/scholar?q=CDC+autism+spectrum+disorder+prevalence+children' },
      { label: 'CDC（ASDの教育的アプローチ）', url: 'https://www.cdc.gov/autism/treatment/index.html' },
    ],
  },
  {
    slug: 'adhd',
    term: 'ADHD（注意欠如多動症）',
    reading: 'えーでぃーえいちでぃー',
    english: 'Attention-Deficit / Hyperactivity Disorder',
    short: '不注意（集中の持続が難しい）、多動・衝動性といった特性が、年齢に比べて強く、生活に影響している状態。脳の発達特性で、しつけの問題ではありません。',
    updated: '2026-06-13',
    heroImage: {
      src: '/glossary/adhd.png',
      alt: '注意の調整や活動量の特性を、見通しや休憩などの支援とともに明るく表したイラスト',
    },
    notice: 'このページは特性を理解するための一般的な情報であり、診断や自己判断のためのものではありません。気になる場合は、小児科・児童精神科・発達外来や、お住まいの自治体の発達相談などの専門機関にご相談ください。',
    sections: [
      {
        heading: 'ADHDとは',
        body: [
          'ADHD（注意欠如多動症）は、不注意（気が散りやすい、忘れやすい）、多動性（じっとしていにくい）、衝動性（待つのが苦手）などの特性が、発達段階に比べて強く、生活や学習に影響する状態です。遺伝の影響が大きいことが分かっており、育て方やしつけが原因ではありません。',
        ],
      },
      {
        heading: '強みの面もある',
        body: [
          '興味のあることへの高い集中（過集中）、行動力、発想の豊かさなど、特性が強みになる場面もあります。現れ方は、環境によっても大きく変わります。',
        ],
      },
      {
        heading: 'どのようなタイプがあるか',
        body: [
          'ADHDの現れ方は、不注意が目立つタイプ、多動・衝動性が目立つタイプ、両方が見られるタイプに分けて整理されます。実際には、年齢、環境、睡眠、ストレス、授業内容によって見え方が変わります。',
          '不注意が目立つ子は、ぼんやりしている、忘れ物が多い、指示を聞き落とす、作業を最後まで進めにくい形で困りやすくなります。多動・衝動性が目立つ子は、座っているのがつらい、順番を待つのが難しい、思いついたことをすぐ言う・動く形で表れます。',
          'また、感情の切り替えに時間がかかる、時間の見通しが立ちにくい、片づけや準備が苦手といった実行機能の困りごともよく見られます。',
        ],
      },
      {
        heading: 'どのように困るのか',
        body: [
          '学校では、板書を写しているうちに説明を聞き逃す、宿題をやったのに出し忘れる、長い課題の途中で何をするか分からなくなる、といった困り方があります。本人の努力不足に見えやすい点がつらいところです。',
          '体を動かしたい子は、椅子を揺らす、手元のものを触る、立ち歩きたくなることがあります。これは授業を邪魔したいというより、覚醒度や注意を保つための自己調整になっている場合があります。',
          '叱られる経験が重なると、「どうせ自分はだめ」と感じやすくなります。行動だけでなく、できる条件を整える視点が大切です。',
        ],
      },
      {
        heading: '具体的な対策例',
        body: [
          '課題は小さく区切り、「1. 名前を書く、2. 1問目だけ解く」のように手順を見える化します。口頭指示だけでなく、板書、チェックリスト、予定表、タイマーを使うと、見通しが持ちやすくなります。',
          '座席は、刺激が多い場所を避ける、先生の合図が届きやすい位置にするなど調整します。長時間座り続けるより、プリントを配る、短い立ち上がり休憩を入れるなど、動ける役割を用意することも助けになります。',
          '授業中に手を動かすと集中しやすい子には、音が出にくい握り物、鉛筆グリップ、消しゴムなどを「授業を見る・聞く邪魔にならない範囲」で使えるようにします。目的は遊びではなく、注意を保つための調整です。',
          '宿題や持ち物は、連絡帳だけでなく写真、チェック欄、置き場所の固定などで支えます。うまくいった行動をすぐ具体的に認めることも、行動支援として重要です。',
        ],
      },
      {
        heading: '支援につながる',
        body: [
          '課題を小さく分ける、見通しを示す、刺激を減らすといった環境調整、行動への関わり、必要に応じた医療的支援など、効果が確かめられた支援があります。気になる場合は専門機関にご相談ください。',
        ],
      },
    ],
    references: [
      { label: 'American Psychiatric Association, DSM-5（ADHD）', url: 'https://scholar.google.com/scholar?q=DSM-5+ADHD+attention+deficit+hyperactivity+criteria' },
      { label: 'Faraone et al.（ADHDの総説）', url: 'https://scholar.google.com/scholar?q=Faraone+attention-deficit+hyperactivity+disorder+nature+reviews' },
      { label: 'Barkley（ADHDと実行機能）', url: 'https://scholar.google.com/scholar?q=Barkley+ADHD+executive+functions+self-regulation' },
      { label: 'CDC（ADHDの学校での支援）', url: 'https://www.cdc.gov/adhd/treatment/classroom.html' },
    ],
  },
  {
    slug: 'ld',
    term: '限局性学習症（LD）',
    reading: 'げんきょくせいがくしゅうしょう',
    english: 'Learning Disabilities / Specific Learning Disorder',
    short: '全体の知的な発達に遅れがないのに、読み・書き・計算など特定の領域の学習に著しい困難がある状態。「努力不足」ではなく、脳の情報処理の特性です。',
    updated: '2026-06-13',
    heroImage: {
      src: '/glossary/ld.png',
      alt: '読み書きや計算などの学び方の違いに合わせて、支援ツールで学ぶ子どもを表したイラスト',
    },
    notice: 'このページは特性を理解するための一般的な情報であり、診断や自己判断のためのものではありません。気になる場合は、小児科・児童精神科・発達外来や、お住まいの自治体の発達相談などの専門機関にご相談ください。',
    sections: [
      {
        heading: '限局性学習症（LD）とは',
        body: [
          '限局性学習症（LD）は、知的な遅れや教える機会の不足では説明できないのに、読み（ディスレクシア）・書き・算数など、特定の領域の習得に著しい困難がある状態です。本人は努力していても、その領域だけがうまくいきにくいのが特徴です。',
        ],
      },
      {
        heading: '「怠けている」という誤解',
        body: [
          '努力不足やしつけの問題と誤解されやすいのですが、原因は脳の情報処理の特性です。叱責は、かえって自信や学ぶ意欲を奪ってしまいます。',
        ],
      },
      {
        heading: 'どのようなタイプがあるか',
        body: [
          'LDは、読みの困難、書きの困難、算数・数学の困難に分けて整理されます。複数が重なることもあり、ADHDやASDなど他の特性と併存することもあります。',
          '読みの困難では、文字を音に変える、読み間違いを減らす、長い文章をすばやく読むことが難しくなります。書きの困難では、文字の形、漢字、つづり、板書を書き写すこと、考えを文章にまとめることが負担になります。',
          '算数・数学の困難では、数の大小、計算手順、九九、文章題、図形、単位などでつまずきやすくなります。どれも「やる気がない」のではなく、特定の処理に負荷がかかっている状態です。',
        ],
      },
      {
        heading: 'どのように困るのか',
        body: [
          '読めないと、内容を理解していないように見えます。書けないと、考えていないように見えます。計算が遅いと、努力していないように見えます。実際には、考える力とは別のところで大きな負荷がかかっていることがあります。',
          '音読、板書、漢字テスト、時間制限のある計算、ノート提出など、学校でよくある活動が苦痛になりやすいです。叱責や低い点数が続くと、学習そのものを避けるようになることもあります。',
        ],
      },
      {
        heading: '具体的な対策例',
        body: [
          '読みが苦手な場合は、読み上げ機能、音声教材、ルビ、行間を広げたプリント、読む範囲を指で追える定規やリーディングガイドを使う方法があります。音読を全員の前で急に求めず、事前に読む場所を知らせることも助けになります。',
          '書きが苦手な場合は、板書量を減らす、プリントや写真で補う、タブレット入力や音声入力を認める、解答欄を広くする、漢字の細かい形だけでなく内容理解も評価するなどの配慮が考えられます。',
          '算数が苦手な場合は、具体物、数直線、方眼紙、手順カード、計算機の使用、途中式の型を示すことが役立つことがあります。テストでは、何を測りたいのかに応じて、時間延長や問題数の調整を検討します。',
          '大切なのは、支援ツールを「ずるい」と見なさないことです。眼鏡が見えにくさを補うように、読み上げや入力支援は、その子が本来の理解や考えを示すための道具です。',
        ],
      },
      {
        heading: '合った方法で学べる',
        body: [
          '読み上げ機能やタブレットの活用、書く量の調整など、その子に合った方法や道具（合理的配慮）で学びやすくなります。早めの気づきと支援が大切です。気になる場合は専門機関にご相談ください。',
        ],
      },
    ],
    references: [
      { label: 'American Psychiatric Association, DSM-5（限局性学習症）', url: 'https://scholar.google.com/scholar?q=DSM-5+specific+learning+disorder+criteria' },
      { label: 'Snowling & Hulme（ディスレクシアの研究）', url: 'https://scholar.google.com/scholar?q=Snowling+Hulme+dyslexia+reading+development' },
      { label: 'Peterson & Pennington（学習症の総説）', url: 'https://scholar.google.com/scholar?q=Peterson+Pennington+developmental+dyslexia+learning+disorders' },
      { label: 'International Dyslexia Association（ディスレクシアと支援）', url: 'https://dyslexiaida.org/' },
    ],
  },
  {
    slug: 'gifted',
    term: 'ギフテッド',
    reading: 'ぎふてっど',
    english: 'Giftedness',
    short: '同年齢の子に比べて、特定の領域で著しく高い能力を示す状態。教育上の概念で、医学的な診断ではありません。才能と困難を併せ持つ「2E」もあります。',
    updated: '2026-06-13',
    heroImage: {
      src: '/glossary/gifted.png',
      alt: '子どもの深い好奇心や高い能力と、適切な挑戦や支援の必要性を表したイラスト',
    },
    notice: 'ギフテッドは教育上の概念であり、医学的な診断ではありません。このページは一般的な情報で、自己判断やレッテル貼りのためのものではありません。',
    sections: [
      {
        heading: 'ギフテッドとは',
        body: [
          'ギフテッドとは、知能や特定の分野で、同年齢より著しく高い能力を示すことを指す、教育上の概念です。明確な医学的診断ではなく、定義や基準は国や立場によって異なります（IQ130以上を目安にすることが多い）。',
        ],
      },
      {
        heading: '「天才で順風満帆」は誤解',
        body: [
          'ギフテッドの子が、いつも幸せで成績優秀とは限りません。授業が退屈で力を持て余す、強い感受性や完璧主義に苦しむ、といった悩みを抱えることもあります。',
          'また、才能と発達の困難（ASD・ADHD・LDなど）を併せ持つ「2E（twice-exceptional）」もあります。才能が困難を、困難が才能を、互いに隠し合って気づかれにくいこと（マスキング）が知られています。',
        ],
      },
      {
        heading: 'どのようなタイプがあるか',
        body: [
          'ギフテッドは、知能全般だけでなく、数学、言語、芸術、音楽、創造性、リーダーシップ、特定分野への深い探究心など、さまざまな領域で表れます。すべての教科が得意とは限りません。',
          '年齢以上に抽象的に考えられる一方で、感情調整や手先の不器用さ、友だち関係は年齢相応ということもあります。このような発達の凸凹は、非同期発達と呼ばれることがあります。',
          '2Eの子では、得意な領域の高さと、ADHD・ASD・LDなどによる困りごとが同時にあります。高い能力があるため困難が見えにくく、困難があるため才能も見えにくくなることがあります。',
        ],
      },
      {
        heading: 'どのように困るのか',
        body: [
          '授業が易しすぎると、退屈、反抗的に見える態度、ぼんやり、提出物の手抜きとして表れることがあります。本人の中では「分かっていることを何度もやるのが苦しい」という場合があります。',
          '完璧主義が強い子は、失敗を恐れて挑戦を避けることがあります。感受性が強い子は、不公平、戦争、環境問題などを深く受け止めすぎて苦しくなることもあります。',
          '同年齢の友だちと興味が合わず孤立する、話が大人びていて浮く、能力が高いから支援はいらないと誤解される、といった困り方もあります。',
        ],
      },
      {
        heading: '具体的な対策例',
        body: [
          'すでに理解している内容を何度も解かせるより、確認できた部分は短くし、発展課題や探究課題に進める「カリキュラム・コンパクティング」が役立つことがあります。難しい本、実験、創作、調べ学習など、深く取り組める選択肢を用意します。',
          '学年を越えた教材、得意分野だけの先取り、上級生や同じ関心を持つ仲間との学びなど、加速や発展的な学習も選択肢になります。ただし、本人の気持ちや社会情緒面の負担も一緒に見ます。',
          '完璧主義には、完成度より試行錯誤を評価し、失敗例や途中経過を扱うことが助けになります。2Eが疑われる場合は、「賢いから大丈夫」とせず、読み書き、注意、感覚、対人面の困りごとにも具体的な支援を用意します。',
          '家庭では、知的刺激だけでなく、休む時間、同じ興味を話せる相手、気持ちを受け止める関係が大切です。「才能を伸ばす」と「子どもとして安心して過ごす」を両方守ります。',
        ],
      },
      {
        heading: 'その子に合った関わりを',
        body: [
          '「賢いから大丈夫」と放置せず、知的好奇心を満たす機会を用意し、困りごとには支援を。強みと弱みの両方に目を向けることが大切です。',
        ],
      },
    ],
    related: [
      { slug: 'hitori-jikan', title: 'ひとりが好きな子は心配？— 「賢い人ほど一人を好む」説と、ひとり時間のエビデンス' },
    ],
    references: [
      { label: 'Renzulli / Gagné（ギフテッドのモデル）', url: 'https://scholar.google.com/scholar?q=Renzulli+Gagne+giftedness+definition+model' },
      { label: 'Reis & Renzulli（ギフテッド教育）', url: 'https://scholar.google.com/scholar?q=Reis+Renzulli+gifted+talented+education+research' },
      { label: 'Baum（2E・twice-exceptional）', url: 'https://scholar.google.com/scholar?q=twice-exceptional+gifted+learning+disabilities+Baum' },
      { label: 'NAGC（ギフテッド教育と支援）', url: 'https://nagc.org/' },
    ],
  },
  {
    slug: 'hsp',
    term: 'HSP（感覚処理感受性）',
    reading: 'えいちえすぴー',
    english: 'Highly Sensitive Person / Sensory Processing Sensitivity',
    short: '周囲の刺激や他者の感情を、人より深く・強く受け取りやすい性格特性。アーロンが提唱した「感覚処理感受性（SPS）」のことで、医学的な診断や障害ではありません。',
    updated: '2026-06-13',
    heroImage: {
      src: '/glossary/hsp.png',
      alt: '子どもが光や音、感情などの繊細な刺激を深く受け取る感覚処理感受性を表したイラスト',
    },
    notice: 'HSP（感覚処理感受性）は性格特性であり、医学的な診断・障害ではありません。このページは一般的な情報です。困りごとが強い場合は、自己判断せず専門機関にご相談ください。',
    sections: [
      {
        heading: 'HSPとは',
        body: [
          'HSPは、心理学者アーロンが提唱した「感覚処理感受性（SPS）」を、分かりやすく表した言葉です。音・光・人の感情などの刺激を、深く・強く処理しやすい生まれつきの性格特性で、人口の15〜20%程度と推定されています。性格の自然な個人差であり、障害ではありません。',
        ],
      },
      {
        heading: '強みと、疲れやすさ',
        body: [
          '細やかに気づく、共感力が高い、深く考える、といった強みがある一方で、刺激の多い環境では疲れやすい面もあります。落ち着いた良い環境では、特に力を発揮しやすいとも言われます。',
        ],
      },
      {
        heading: 'どのようなタイプがあるか',
        body: [
          'HSP（感覚処理感受性）そのものは診断名ではなく、刺激を深く処理しやすい性格特性です。ただ、日常の困りごとは「どの感覚がつらいか」と「どう反応しやすいか」に分けると整理しやすくなります。',
          '感覚の種類としては、音（教室のざわざわ、チャイム、掃除機）、光（蛍光灯、まぶしさ）、触覚（服のタグ、肌ざわり、給食の食感）、におい、味、体の動きや姿勢、空腹・疲労など体の内側の感覚があります。',
          '反応のパターンとしては、刺激を強く感じて避けたくなる「過敏・回避」、刺激に気づきにくい「低反応」、落ち着くために動く・触る・噛むなどの入力を求める「感覚探求」があります。HSPと呼ばれる子は過敏が目立つことが多い一方、感覚探求が混ざることもあります。',
        ],
      },
      {
        heading: 'どのように困るのか',
        body: [
          '音に敏感な子は、授業中のざわつきや運動会の音、給食時間の食器音で疲れやすくなります。本人は「うるさい」と言っていても、周囲にはわがままに見えてしまうことがあります。',
          '触覚に敏感な子は、服のタグ、靴下の縫い目、制服の素材、手が汚れる活動、給食の食感が苦手になることがあります。光やにおいに敏感な子は、蛍光灯、日差し、香料、給食室のにおいで集中しにくくなることがあります。',
          '感覚探求がある子は、授業中に何かを触る、椅子を揺らす、鉛筆を噛む、体を動かしたくなることがあります。これは「ふざけている」だけでなく、体を落ち着かせるための自己調整になっている場合があります。',
        ],
      },
      {
        heading: '具体的な対策例',
        body: [
          '音がつらい場合は、イヤーマフやノイズを減らす耳栓を「必要な場面だけ」使えるようにします。常に完全に遮断するより、掃除機、避難訓練、体育館、給食時間など負荷が高い場面を決めて使うほうが、生活とのバランスを取りやすくなります。',
          '授業中に手を動かすと落ち着く子には、音が出にくい小さな握り物、消しゴム、やわらかいグリップ、布の切れ端などを「見る・聞く邪魔にならない範囲」で認める方法があります。目的は遊ぶことではなく、体を落ち着かせて授業に参加しやすくすることです。',
          '触覚がつらい場合は、タグを切る、肌ざわりの合う服を選ぶ、苦手な素材を避ける、手が汚れる活動では手袋や道具を使うなどの調整が役立つことがあります。光がつらい場合は、席を窓際や蛍光灯の直下から外す、帽子や薄い色つきレンズを検討するなど、環境側を少し変えます。',
          '学校では、「我慢できるか」ではなく、「参加しやすくするために何を調整するか」と考えるのがポイントです。担任、養護教諭、スクールカウンセラー、必要に応じて作業療法士などと相談し、家庭だけで抱え込まないようにします。',
        ],
      },
      {
        heading: '注意したいこと',
        body: [
          'HSPは医学的な診断ではなく、自己診断テストで安易にラベルを貼るのは禁物です。感覚過敏は自閉スペクトラム症、ADHD、不安、睡眠不足、体調不良などでも見られ、HSPと混同されやすいことがあります。困りごとが強い場合は、HSPと決めつけず、専門機関にご相談ください。',
          '感覚への配慮は、すべての刺激を避けることではありません。避けるだけで生活範囲が狭くなる場合もあるため、本人が安心できる逃げ道を用意しながら、少しずつ参加しやすい条件を探すことが大切です。',
        ],
      },
    ],
    related: [
      { slug: 'hitori-jikan', title: 'ひとりが好きな子は心配？— 「賢い人ほど一人を好む」説と、ひとり時間のエビデンス' },
    ],
    references: [
      { label: 'Aron & Aron, 1997（感覚処理感受性）', url: 'https://scholar.google.com/scholar?q=Aron+1997+sensory+processing+sensitivity+highly+sensitive+person' },
      { label: 'Greven et al., 2019（SPSの総説）', url: 'https://scholar.google.com/scholar?q=Greven+2019+sensory+processing+sensitivity+review+critical' },
      { label: 'Dunn, 1997（感覚処理パターンのモデル）', url: 'https://scholar.google.com/scholar?q=Dunn+1997+impact+of+sensory+processing+abilities+daily+lives+children+families' },
      { label: 'Zimmer & Desch, 2012（感覚統合療法への慎重な見方）', url: 'https://scholar.google.com/scholar?q=Zimmer+Desch+2012+sensory+integration+therapies+children+developmental+behavioral+disorders' },
      { label: 'Pluess（環境感受性）', url: 'https://scholar.google.com/scholar?q=Pluess+environmental+sensitivity+children+differential+susceptibility' },
    ],
  },
  {
    slug: 'conscientiousness',
    term: '誠実性',
    reading: 'せいじつせい',
    english: 'Conscientiousness',
    short: '責任感、計画性、粘り強さ、約束を守る力などを含む性格特性。Big Fiveの一つで、学業や仕事、健康行動とも関わるとされます。',
    updated: '2026-06-13',
    heroImage: {
      src: '/glossary/conscientiousness.png',
      alt: '子どもが計画を立て、約束や手順を大切にしながら取り組む誠実性を表したイラスト',
    },
    sections: [
      {
        heading: '誠実性とは',
        body: [
          '誠実性は、Big Fiveと呼ばれる性格特性の一つで、計画性、責任感、自己管理、粘り強さ、慎重さなどを含みます。「まじめさ」だけでなく、目標に向けて行動を整える傾向を指します。',
          '子どもの場合は、忘れ物をしない、順番を守る、最後まで取り組む、約束を覚えている、といった日常の姿に表れます。ただし年齢や環境の影響が大きく、幼い時期から大人と同じ水準を求めるものではありません。',
        ],
      },
      {
        heading: '実行機能や自制心との違い',
        body: [
          '実行機能や自制心は、注意や行動をその場で調整する力です。誠実性は、そうした力も含みながら、より長期的な行動傾向として見られる性格特性です。',
          '「性格だから変わらない」と決めつける必要はありません。見通しを示す、片づけや準備を一緒に練習する、小さな責任を任せるなどの経験で育ちやすくなります。',
        ],
      },
      {
        heading: '育て方のヒント',
        body: [
          '叱って責任感を植えつけるより、できる手順を見える形にし、やり終えた経験を積むことが土台になります。「ちゃんとしなさい」より、「まず靴下、次に上着」のように具体化するほうが助けになります。',
        ],
      },
    ],
    related: [
      { slug: 'otetsudai', title: 'お手伝い・家事参加が子どもを伸ばす' },
    ],
    references: [
      { label: 'Roberts et al.（誠実性の発達と成果）', url: 'https://scholar.google.com/scholar?q=Roberts+conscientiousness+development+life+outcomes' },
      { label: 'John & Srivastava（Big Five特性）', url: 'https://scholar.google.com/scholar?q=John+Srivastava+Big+Five+trait+taxonomy+conscientiousness' },
      { label: 'Duckworth & Seligman（自制心と学業）', url: 'https://scholar.google.com/scholar?q=Duckworth+Seligman+self-discipline+outdoes+IQ+academic+performance' },
    ],
  },
  {
    slug: 'grit',
    term: 'グリット（やり抜く力）',
    reading: 'ぐりっと',
    english: 'Grit',
    short: '長期目標に向かう情熱と粘り強さ。成果と関連するとされますが、誠実性との重なりや、努力だけを強調しすぎる危うさも指摘されています。',
    updated: '2026-06-13',
    heroImage: {
      src: '/glossary/grit.png',
      alt: '子どもが長い道のりを小さな一歩で進み、やり抜く力を育てる様子を表したイラスト',
    },
    sections: [
      {
        heading: 'グリットとは',
        body: [
          'グリットは、長期的な目標に向かって関心を持ち続け、困難があっても粘り強く取り組む力として提案された概念です。「才能だけでなく、続ける力が大切」という視点を広げました。',
          'ただし、研究では誠実性や努力の粘り強さとの重なりも指摘されています。グリットを、すべてを我慢して続ける根性論として扱わないことが大切です。',
        ],
      },
      {
        heading: '子育てでの注意点',
        body: [
          'やり抜く力は大切ですが、合わない環境で無理を続けることとは違います。休む、やり方を変える、助けを求めることも、長く続けるための力です。',
          '子どもには「最後までやりなさい」だけでなく、「どこでつまずいた？」「次はどう試す？」と、工夫の仕方を一緒に考える関わりが役立ちます。',
        ],
      },
      {
        heading: '小さく続ける',
        body: [
          '大きな目標より、まずは小さな約束を守る経験が土台になります。短い練習、途中での振り返り、できた部分の具体的な確認が、現実的な粘り強さを育てます。',
        ],
      },
    ],
    related: [
      { slug: 'resilience', title: '逆境に強い子を育てる — レジリエンスのエビデンス' },
    ],
    references: [
      { label: 'Duckworth et al., 2007（グリット）', url: 'https://scholar.google.com/scholar?q=Duckworth+2007+grit+perseverance+passion+long-term+goals' },
      { label: 'Credé et al., 2017（グリットのメタ分析）', url: 'https://scholar.google.com/scholar?q=Crede+Tynan+Harms+2017+grit+meta-analysis' },
      { label: 'Duckworth & Quinn（Grit Scale）', url: 'https://scholar.google.com/scholar?q=Duckworth+Quinn+development+validation+short+grit+scale' },
    ],
  },
  {
    slug: 'critical-thinking',
    term: '批判的思考',
    reading: 'ひはんてきしこう',
    english: 'Critical Thinking',
    short: '情報や意見をそのまま受け取らず、根拠・前提・別の見方を確かめながら考える力。相手を否定することではなく、よりよく判断するための思考です。',
    updated: '2026-06-13',
    heroImage: {
      src: '/glossary/critical-thinking.png',
      alt: '子どもが情報の根拠を比べ、批判的思考で考えを整理する様子を表したイラスト',
    },
    sections: [
      {
        heading: '批判的思考とは',
        body: [
          '批判的思考は、情報をうのみにせず、根拠は何か、別の説明はあるか、結論は飛躍していないかを考える力です。「批判」という言葉が入りますが、人を責めることではありません。',
          '学びの場面では、読んだ内容を比べる、理由を説明する、反対の立場を考える、といった活動に表れます。メタ認知とも関わり、自分の考え方を点検する力を支えます。',
        ],
      },
      {
        heading: '子どもにどう育つか',
        body: [
          '幼い時期から、正解を急ぐより「どうしてそう思ったの？」と理由を聞く関わりが土台になります。間違い探しではなく、考える過程を一緒に見ることが大切です。',
          'ニュースや動画、友だちの話などに触れたときも、「誰が言っている？」「ほかの見方はある？」と対話することで、情報との距離の取り方を学びます。',
        ],
      },
      {
        heading: '家庭でのヒント',
        body: [
          '親がすぐに答えを出しすぎず、子どもの仮説を聞く時間をつくること。事実と感想を分けること。これらの小さな会話が、根拠をもって考える練習になります。',
        ],
      },
    ],
    related: [
      { slug: 'yomikikase', title: '読み聞かせと言葉の発達 — 「たくさん話す」より「やり取りする」' },
    ],
    references: [
      { label: 'Facione（批判的思考のDelphi報告）', url: 'https://scholar.google.com/scholar?q=Facione+1990+critical+thinking+Delphi+report' },
      { label: 'National Research Council（21世紀型スキル）', url: 'https://scholar.google.com/scholar?q=National+Research+Council+Education+for+Life+and+Work+critical+thinking' },
      { label: 'Halpern（批判的思考教育）', url: 'https://scholar.google.com/scholar?q=Halpern+critical+thinking+instruction+transfer' },
    ],
  },
  {
    slug: 'optimism',
    term: '楽観性',
    reading: 'らっかんせい',
    english: 'Optimism',
    short: '将来に良いことが起こりうると見通す傾向。困難を軽視することではなく、「やれることがある」と考える力として、レジリエンスとも関わります。',
    updated: '2026-06-13',
    heroImage: {
      src: '/glossary/optimism.png',
      alt: '子どもが困難の先に明るい見通しを持ち、楽観性を支えに進む様子を表したイラスト',
    },
    sections: [
      {
        heading: '楽観性とは',
        body: [
          '楽観性は、将来に対して良い結果を期待しやすい傾向です。単なる「なんとかなる」ではなく、困ったときにも「できることがある」と見通す力として働きます。',
          '心理学では、楽観性はストレス対処や健康行動、レジリエンスと関連することが報告されています。一方で、現実を見ない過度な楽観は助けにならないこともあります。',
        ],
      },
      {
        heading: '説明スタイル',
        body: [
          '失敗を「自分はだめだから」と広く固定的に捉えるのか、「今回は準備が足りなかった」と具体的に捉えるのかで、次の行動は変わります。楽観性は、現実的な原因の見方とも関わります。',
          '子どもには、失敗を人格ではなく状況や作戦の問題として扱う言葉がけが役立ちます。',
        ],
      },
      {
        heading: '現実的な楽観を育てる',
        body: [
          '「大丈夫」と励ますだけでなく、「次にできる一歩」を一緒に見つけること。安心と行動の見通しがそろうと、楽観性は根拠のある力になります。',
        ],
      },
    ],
    related: [
      { slug: 'resilience', title: '逆境に強い子を育てる — レジリエンスのエビデンス' },
    ],
    references: [
      { label: 'Scheier & Carver（楽観性と健康）', url: 'https://scholar.google.com/scholar?q=Scheier+Carver+optimism+health+coping' },
      { label: 'Carver et al.（楽観性の総説）', url: 'https://scholar.google.com/scholar?q=Carver+Scheier+optimism+review' },
      { label: 'Seligman（説明スタイルと楽観性）', url: 'https://scholar.google.com/scholar?q=Seligman+learned+optimism+explanatory+style+children' },
    ],
  },
  {
    slug: 'emotion-regulation',
    term: '感情調整',
    reading: 'かんじょうちょうせい',
    english: 'Emotion Regulation',
    short: '感情をなくすのではなく、気づき、名前をつけ、状況に合う形で扱う力。かんしゃく、ストレス対処、対人関係の土台になります。',
    updated: '2026-06-13',
    heroImage: {
      src: '/glossary/emotion-regulation.png',
      alt: '子どもが感情の波に気づき、呼吸や言葉で感情調整していく様子を表したイラスト',
    },
    sections: [
      {
        heading: '感情調整とは',
        body: [
          '感情調整は、怒り・不安・悲しみ・喜びなどの感情に気づき、強さや出し方を状況に合わせて整える力です。感情を消すことではなく、感情を扱えるようになることを指します。',
          '子どもは最初から一人で感情を調整できるわけではありません。大人に受け止められ、一緒に落ち着く経験を通して、少しずつ自分でも扱えるようになります。',
        ],
      },
      {
        heading: '感情コーチング・共調整との関係',
        body: [
          '感情コーチングは、感情に名前をつけ、対処を一緒に考える関わり方です。共調整は、大人と一緒に落ち着くプロセスです。どちらも、子どもの感情調整を育てる土台になります。',
        ],
      },
      {
        heading: '家庭でできること',
        body: [
          'まず「怒っているね」「悔しかったね」と感情を言葉にすること。次に「叩くのはだめ」「少し離れて深呼吸しよう」と行動の線引きと対処を示すこと。この順番が役立ちます。',
        ],
      },
    ],
    related: [
      { slug: 'kanjou-control', title: 'かんしゃくとどう向き合うか — 感情のコントロールを育てる3つの土台' },
    ],
    references: [
      { label: 'Gross, 1998（感情調整の総説）', url: 'https://scholar.google.com/scholar?q=Gross+1998+emotion+regulation+review' },
      { label: 'Thompson（子どもの感情調整）', url: 'https://scholar.google.com/scholar?q=Thompson+emotion+regulation+development+children' },
      { label: 'Gottman et al.（感情コーチング）', url: 'https://scholar.google.com/scholar?q=Gottman+1996+parental+meta-emotion+emotion+coaching' },
    ],
  },
  {
    slug: 'time-perspective',
    term: '時間的展望',
    reading: 'じかんてきてんぼう',
    english: 'Time Perspective',
    short: '過去・現在・未来をどう見通し、今の行動と結びつけるかという心理的な枠組み。目標設定、自制心、主体性と関わります。',
    updated: '2026-06-13',
    heroImage: {
      src: '/glossary/time-perspective.png',
      alt: '子どもが過去・現在・未来をつなげて考え、時間的展望を育てる様子を表したイラスト',
    },
    sections: [
      {
        heading: '時間的展望とは',
        body: [
          '時間的展望は、過去・現在・未来をどのように捉え、今の行動と結びつけるかという心の枠組みです。「今これをすると、あとでどうなるか」を見通す力にも関わります。',
          '未来を考える力は、自制心や計画性、主体性とつながります。ただし、幼い子どもは時間の見通しがまだ発達途中なので、大人の支えが必要です。',
        ],
      },
      {
        heading: '未来だけではなく、今も大切',
        body: [
          '未来志向は目標達成に役立ちますが、「将来のために今を我慢する」ばかりでは苦しくなります。過去の経験を振り返り、今の楽しさも大切にしながら、未来への見通しを持つバランスが大切です。',
        ],
      },
      {
        heading: '子どもへの関わり',
        body: [
          'カレンダー、予定表、写真での振り返りなど、時間を見える形にすることが助けになります。「昨日できたこと」「今日すること」「明日楽しみなこと」を一緒に話すだけでも、時間のつながりを学べます。',
        ],
      },
    ],
    related: [
      { slug: 'jiko-ketteikan', title: '「自分で決める力」を育てる関わり方 — 自己肯定感と自律のエビデンス' },
    ],
    references: [
      { label: 'Zimbardo & Boyd, 1999（時間的展望）', url: 'https://scholar.google.com/scholar?q=Zimbardo+Boyd+1999+time+perspective+inventory' },
      { label: 'Mischel（遅延満足と未来志向）', url: 'https://scholar.google.com/scholar?q=Mischel+delay+of+gratification+future+orientation+children' },
      { label: 'Lens et al.（未来展望と動機づけ）', url: 'https://scholar.google.com/scholar?q=Lens+future+time+perspective+motivation+learning' },
    ],
  },
  {
    slug: 'emotional-intelligence',
    term: '情動知能（EI/EQ）',
    reading: 'じょうどうちのう',
    english: 'Emotional Intelligence',
    short: '感情を知覚し、理解し、活用し、調整する力。共感・感情調整・対人関係と関わりますが、能力モデルと自己評価モデルを区別して見る必要があります。',
    updated: '2026-06-13',
    heroImage: {
      src: '/glossary/emotional-intelligence.png',
      alt: '子どもが自分と相手の感情を理解し、情動知能を使って関わる様子を表したイラスト',
    },
    sections: [
      {
        heading: '情動知能とは',
        body: [
          '情動知能は、感情を読み取り、理解し、考えや行動に活かし、必要に応じて調整する力として提案された概念です。一般にはEQと呼ばれることもあります。',
          '研究では、能力として測るモデルと、自分の性格や傾向として答えるモデルがあります。すべてを一つの「EQの高さ」として単純に見るのではなく、どの力を指しているかを分けて考えることが大切です。',
        ],
      },
      {
        heading: '子育てとの関係',
        body: [
          '情動知能は、共感、感情調整、SELと重なります。子どもが自分の気持ちを言葉にし、相手の気持ちを想像し、対立を解決する力の土台になります。',
        ],
      },
      {
        heading: '日常で育つ場面',
        body: [
          '「今どんな気持ち？」「相手はどう感じたかな？」と感情を言葉にする会話、絵本の登場人物の気持ちを考える時間、落ち着く方法を一緒に試す経験が支えになります。',
        ],
      },
    ],
    related: [
      { slug: 'kanjou-control', title: 'かんしゃくとどう向き合うか — 感情のコントロールを育てる3つの土台' },
      { slug: 'ijime', title: 'いじめにどう向き合うか — カギを握るのは「傍観者」' },
    ],
    references: [
      { label: 'Salovey & Mayer, 1990（情動知能）', url: 'https://scholar.google.com/scholar?q=Salovey+Mayer+1990+emotional+intelligence' },
      { label: 'Mayer, Salovey & Caruso（能力モデル）', url: 'https://scholar.google.com/scholar?q=Mayer+Salovey+Caruso+emotional+intelligence+ability+model' },
      { label: 'Durlak et al.（SELのメタ分析）', url: 'https://scholar.google.com/scholar?q=Durlak+2011+social+emotional+learning+meta-analysis' },
    ],
  },
  {
    slug: 'self-compassion',
    term: 'セルフ・コンパッション',
    reading: 'せるふこんぱっしょん',
    english: 'Self-compassion',
    short: '失敗したときや苦しいときに、自分を責めすぎず、思いやりをもって受け止める力。自己肯定感とは違い、うまくいかない自分への関わり方に焦点があります。',
    updated: '2026-06-13',
    heroImage: {
      src: '/glossary/self-compassion.png',
      alt: '子どもが失敗した自分をやさしく受け止め、セルフ・コンパッションを育てる様子を表したイラスト',
    },
    sections: [
      {
        heading: 'セルフ・コンパッションとは',
        body: [
          'セルフ・コンパッションは、苦しいときや失敗したときに、自分を厳しく責めるのではなく、思いやりをもって受け止める力です。自分へのやさしさ、誰にでも失敗はあるという感覚、今の気持ちに気づくことが柱とされます。',
          '自己肯定感が「自分を肯定的に見られるか」に関わるのに対し、セルフ・コンパッションは「うまくいかない自分にどう関わるか」に焦点があります。',
        ],
      },
      {
        heading: '甘やかしではない',
        body: [
          '自分にやさしくすることは、努力しないことではありません。むしろ、失敗で心が折れすぎないため、次の一歩を選びやすくなります。',
          '子どもにとっては、「失敗しても価値がなくなるわけではない」と感じられることが、挑戦の土台になります。',
        ],
      },
      {
        heading: '家庭での言葉がけ',
        body: [
          '「また失敗したね」ではなく、「悔しかったね。次は何を変えてみようか」と声をかけること。親自身が自分を責めすぎない姿を見せることも、子どもの学びになります。',
        ],
      },
    ],
    related: [
      { slug: 'homekata', title: '「すごい」より効く、子どものほめ方 — 研究でわかった3つのコツ' },
      { slug: 'jiko-ketteikan', title: '「自分で決める力」を育てる関わり方 — 自己肯定感と自律のエビデンス' },
    ],
    references: [
      { label: 'Neff, 2003（セルフ・コンパッション）', url: 'https://scholar.google.com/scholar?q=Neff+2003+self-compassion+scale' },
      { label: 'Neff & Germer（セルフ・コンパッション介入）', url: 'https://scholar.google.com/scholar?q=Neff+Germer+self-compassion+intervention' },
      { label: 'Bluth & Neff（青年期のセルフ・コンパッション）', url: 'https://scholar.google.com/scholar?q=Bluth+Neff+self-compassion+adolescents' },
    ],
  },
  {
    slug: 'mindfulness',
    term: 'マインドフルネス',
    reading: 'まいんどふるねす',
    english: 'Mindfulness',
    short: '今この瞬間の体験に気づき、評価しすぎずに受け止める心のあり方。注意の調整、感情調整、ストレス対処と関わります。',
    updated: '2026-06-13',
    heroImage: {
      src: '/glossary/mindfulness.png',
      alt: '子どもが呼吸や体の感覚に気づき、今この瞬間に注意を向けるマインドフルネスを表したイラスト',
    },
    sections: [
      {
        heading: 'マインドフルネスとは',
        body: [
          'マインドフルネスは、今この瞬間の体験に注意を向け、良い・悪いとすぐ評価しすぎずに気づく心のあり方です。呼吸、体の感覚、音、気持ちの変化に気づく練習として使われます。',
          '研究では、注意の調整、ストレス対処、感情調整との関連が調べられてきました。子ども向けには、短く、遊びや生活に近い形で取り入れることが大切です。',
        ],
      },
      {
        heading: '子どもに使うときの注意',
        body: [
          'じっと座って長く瞑想する必要はありません。小さな子どもには、風船のように息を吸う、足の裏の感覚に気づく、音を一つ探すなど、短い活動が向いています。',
          '不安やつらさが強い場合に、無理に内面へ注意を向けるとかえって苦しくなることもあります。安全で穏やかな範囲で行うことが大切です。',
        ],
      },
      {
        heading: '親子でできること',
        body: [
          '寝る前に一緒に3回ゆっくり呼吸する、散歩で聞こえる音を探す、植物の世話をしながら手触りや匂いに気づく。日常の小さな気づきが、マインドフルネスの入口になります。',
        ],
      },
    ],
    related: [
      { slug: 'kanjou-control', title: 'かんしゃくとどう向き合うか — 感情のコントロールを育てる3つの土台' },
      { slug: 'resilience', title: '逆境に強い子を育てる — レジリエンスのエビデンス' },
    ],
    references: [
      { label: 'Kabat-Zinn（マインドフルネス）', url: 'https://scholar.google.com/scholar?q=Kabat-Zinn+mindfulness+definition' },
      { label: 'Bishop et al., 2004（操作的定義）', url: 'https://scholar.google.com/scholar?q=Bishop+2004+mindfulness+operational+definition' },
      { label: 'Flook et al.（幼児向けマインドフルネス）', url: 'https://scholar.google.com/scholar?q=Flook+2015+mindfulness+kindness+curriculum+preschool' },
    ],
  },
];
