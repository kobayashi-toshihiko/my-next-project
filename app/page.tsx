import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "./_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";

export const revalidate = 60;

export default async function Home() {
  // const sliceData = data.contents.slice(0, 2);
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテックカンパニーです
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        {/* <ul>
          {sliceData.map((article) => (
            <li key={article.id} className={styles.list}>
              <div className={styles.link}>
                <Image
                  className={styles.image}
                  src="/no-image.png"
                  alt="No Image"
                  width={1200}
                  height={630}
                />
                <dl className={styles.content}>
                  <dt className={styles.newsItemTitle}>{article.title}</dt>
                  <dd className={styles.meta}>
                    <span className={styles.data}>{article.category.name}</span>
                    <span className={styles.data}>
                      <Image
                        src="/clock.svg"
                        alt=""
                        width={16}
                        height={16}
                        priority
                      />
                      {article.publishedAt}
                    </span>
                  </dd>
                </dl>
              </div>
            </li>
          ))}
        </ul> */}
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
