export const profileImg1 =
  'https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?w=1060&t=st=1703142547~exp=1703143147~hmac=45275d0dcb2e7b5f582809b03ed09f2fd64860bfb0af35203066743c4757991f';
export const profileImg2 =
  'https://images.ctfassets.net/lh3zuq09vnm2/1OO41kWzbKzcWVFrQF98F3/ca30793c490f74dcedae86347e04859c/Hotjar_reviews__what_120__real_user_reviews_say_about_Hotjar.jpg';
export const postImg1 =
  'https://www.corvsport.com/wp-content/uploads/2023/04/2019_chevrolet_corvette-zr1-coupe_2019_chevrolet_corvette-zr1-coupe_96bd9f84-6fd4-4ea2-acbc-1c3d019886e8-nPEAjH-82722-82723-scaled-1.png';
export const postImg2 =
  'https://cloudfront-us-east-1.images.arcpublishing.com/adn/OMNYEV3H7JBWFINYKNKC5WOOPM.jpg';
export interface postType {
  user: {
    username: string;
    userImg: string;
  };
  date: string,
  image: string;
  more: {
    like: number;
    comments: {
      length: number;
      all: {
        id: number;
        content: string;
      }[];
    };
  };
}

export const posts: postType[] = [
  {
    user: {
      username: 'joeanderson',
      userImg: profileImg1,
    },
    image: postImg1,
    date: "December 3",
    more: {
      like: 10,
      comments: {
        length: 2,
        all: [
          {
            id: 1,
            content: 'i like it 😍',
          },
          {
            id: 2,
            content: 'Looks goood!!!',
          },
        ],
      },
    },
  },
  {
    user: {
      username: 'zeynalabdinjs',
      userImg: profileImg2,
    },
    image: postImg2,
    date: "December 6",
    more: {
      like: 50,
      comments: {
        length: 3,
        all: [
          {
            id: 1,
            content: 'i like it 😍',
          },
          {
            id: 2,
            content: 'Hi dear!',
          },
          {
            id: 3,
            content: 'Looks goood!!!',
          },
        ],
      },
    },
  },
];
