import Image from 'next/image';
import Link from 'next/link';
import myIcon from '@/assets/images/my-icon.png';

export function Header() {
  return (
    <header className="sticky top-0 z-10 md:px-14 py-3 px-4 from-brand-start to-brand-end bg-linear-to-b flex justify-between">
      <Link href="/">
        <div className="p-1 rounded-[50%] bg-white w-12 h-12 flex justify-center items-center">
          <Image src={myIcon} alt="myIcon" width={44} height={32} priority />
        </div>
      </Link>
      <nav>
        <ul className="flex gap-x-4 text-white items-center h-full">
          <li>
            <Link href="/skill">Skill</Link>
          </li>
          <li>
            <Link href="/my_products">MyProducts</Link>
          </li>
          <li>
            <a href="https://changeofpace.site">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
