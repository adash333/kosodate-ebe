// 記事の執筆・監修者（書き手）情報。
// YMYL/E-E-A-T（専門性・権威性・信頼性）をクローラと読者に明示するため、
// 全記事末尾（AuthorCard）と運営者情報ページ（/company）で共有する。
export interface AuthorLink {
  label: string;
  url: string;
}

export interface Author {
  /** 表示名（活動名）。ブログ・YouTubeと同一人物であることを示す。 */
  name: string;
  /** 肩書き（例: 医師・医学博士）。事実である前提で記載する。 */
  title: string;
  bio: string;
  /** 実在性を担保する外部リンク（ブログ・YouTube等）。 */
  links: AuthorLink[];
}

export const siteAuthor: Author = {
  name: 'りさお',
  title: '医師・医学博士',
  bio:
    '普段は勤務医として診療にあたっています。自身の子育てをきっかけに、エビデンス（科学的根拠）にもとづく子育て・教育（EBE）に関心を持ち、ブログおよび YouTube チャンネル「子育てエビデンス研究所」で、論文をやさしく解説する情報発信を続けています。本サイトの記事は、これらの活動で扱った研究知見をもとに執筆・監修しています。',
  links: [
    { label: '東大理三夫婦のこそだて', url: 'https://risan.jpn.org/' },
    { label: 'YouTube「子育てエビデンス研究所」', url: 'https://www.youtube.com/@evilab' },
  ],
};
