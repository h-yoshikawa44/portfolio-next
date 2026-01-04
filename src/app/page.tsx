import Image from 'next/image';
import myIcon from '@/assets/images/my-icon.png';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between sm:items-start">
      <header className="bg-brand-primary h-100 w-full md:px-14 px-4 py-22">
        <h1 className="bg-white text-5xl inline-block p-1">
          h-yoshikawa44's Portfolio
        </h1>
        <p className="text-3xl mt-4 bg-white inline-block py-1">
          よしのポートフォリオ
        </p>
      </header>
      <section className="bg-brand-secondary w-full md:px-14 py-14 px-4">
        <h2 className="text-white text-xl md:text-2xl header-double-line mb-2 text-center md:text-left break-keep">
          当サイト
          <wbr />
          について
        </h2>
        <p className="text-white">
          Web Developer である h-yoshikawa44 のポートフォリオサイトです。
          <br />
          経験スキルや個人開発の履歴、各種技術活動に関するアカウントのリンクなどを集約しています。
        </p>
      </section>
      <section className="bg-brand-secondary w-full md:px-14 py-14 px-4">
        <h2 className="text-white text-xl md:text-2xl header-double-line mb-2 break-keep text-center md:text-left">
          管理人
          <wbr />
          プロフィール
        </h2>
        <div className="p-4 bg-brand-primary rounded-xl text-white">
          <div className="grid grid-cols-[1fr_2fr] md:grid-cols-[1fr_4fr]">
            <div className="p-1 rounded-[50%] bg-white w-20 h-20 md:w-26 md:h-26 flex justify-center items-center">
              <Image
                src={myIcon}
                alt="myIcon"
                width={88}
                height={64}
                priority
              />
            </div>
            <div className="flex flex-col justify-center gap-y-2">
              <p className="text-lg">Hitomi Yoshikawa</p>
              <p className="text-sm">よし（h-yoshikawa44）</p>
            </div>
          </div>
          <div className="mt-4">
            <p>Web Developer。</p>
            <br />
            <p>
              2017/10からエンジニアをやっています。
              <br />
              3年ほどサーバサイドメインでしたが、フロントエンドに転向して、現在はフロントエンドエンジニアとして仕事しています。
            </p>
            <p>比較的慣れているのは TypeScript × React、Next.js あたり。</p>
          </div>
        </div>
      </section>
    </main>
  );
}
