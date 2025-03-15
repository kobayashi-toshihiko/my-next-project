import Image from "next/image";
import styles from "./page.module.css";
import { profile } from "console";
import { url } from "inspector";

const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/img-member1.jpg",
        width: 240,
        height: 240,
      },
      name: "デイビッド・チャン",
      position: "CEO",
      profile:
        "グローバルテクノロジー企業での豊富な経験を持つリーダー。以前は大手ソフトウェア企業の上級幹部として勤務し、新市場進出や収益成長に成功。自身の経験を活かし、当社のビジョンを実現するために日々奮闘している。",
    },
    {
      id: "2",
      image: {
        url: "/img-member2.jpg",
        width: 240,
        height: 240,
      },
      name: "エミリー・ダンダース",
      position: "COO",
      profile:
        "グローバル企業での運営管理と組織改革の経験豊富なエグゼクティブ。以前は大手コンサルティングファームで経営コンサルタントとして活躍。当社の成長戦略を牽引し、組織の効率化と業績向上に貢献している。",
    },
    {
      id: "3",
      image: {
        url: "/img-member3.jpg",
        width: 240,
        height: 240,
      },
      name: "ジョン・ウィルソン",
      position: "CTO",
      profile:
        "先進技術の研究開発と製品イノベーションの分野で優れた経歴を持つテクノロジーエキスパート。大手テクノロジー企業での経験を活かし、当社の製品開発と技術戦略をリードしている。最新の技術トレンドに精通し、常に新しい価値を創造することに情熱を燃やしている。",
    },
  ],
};
export default function Page() {
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
                className={styles.image}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
