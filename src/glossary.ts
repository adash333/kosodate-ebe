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
];
