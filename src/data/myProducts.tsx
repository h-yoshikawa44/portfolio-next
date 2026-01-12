import Image from 'next/image';
import changeOfPace from '@/assets/images/products/change-of-pace/overview.png';
import closeTo2 from '@/assets/images/products/close-to-2/overview.png';
import jigsawLikePuzzle from '@/assets/images/products/jigsaw-like-puzzle/overview.png';

export type Product = {
  name: string;
  description: React.ReactElement;
  ProductImg: React.ReactElement<typeof Image>;
  productLink: string;
  repositoryUrl?: string;
};

export const MANAGEMENTS = [
  {
    name: 'Change Of Pace',
    description: (
      <>
        Astro 製の個人ブログ。
        <br />
        2023/07に Jekyll から移行。テーマは使用せず自作。
      </>
    ),
    ProductImg: (
      <Image
        style={{
          objectFit: 'cover',
          objectPosition: '50% 0',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
          width: '100%',
          height: 180,
        }}
        src={changeOfPace}
        alt="Change Of Pace - Overview"
        priority
      />
    ),
    productLink: 'https://changeofpace.site',
    repositoryUrl: 'https://github.com/h-yoshikawa44/change-of-pace-astro',
  },
] satisfies Product[];

export const EVENT_PRODUCTS = [
  {
    name: 'Close to 2',
    description: (
      <>
        web1week のお題「2」の投稿作品。
        <br />
        4択から計算結果が一番「2」に近い式をあてるゲーム。
      </>
    ),
    ProductImg: (
      <Image
        style={{
          objectFit: 'cover',
          objectPosition: '50% 0',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
          width: '100%',
          height: 180,
        }}
        src={closeTo2}
        alt="Close to 2 - Overview"
        priority
      />
    ),
    productLink: 'https://h-yoshikawa44.github.io/close-to-2',
    repositoryUrl: 'https://github.com/h-yoshikawa44/close-to-2',
  },
  {
    name: 'Jigsaw Like Puzzle',
    description: (
      <>
        web1week のお題「Like」の投稿作品。
        <br />
        ジグソーパズルっぽいパズルゲーム（※PC向け）
      </>
    ),
    ProductImg: (
      <Image
        style={{
          objectFit: 'cover',
          objectPosition: '50% 0',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
          width: '100%',
          height: 180,
        }}
        src={jigsawLikePuzzle}
        alt="Jigsaw Like Puzzle - Overview"
        priority
      />
    ),
    productLink: 'https://jigsaw-like-puzzle.web.app',
    repositoryUrl: 'https://github.com/h-yoshikawa44/jigsaw-like-puzzle',
  },
] satisfies Product[];
