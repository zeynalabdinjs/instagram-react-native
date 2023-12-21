const img =
  'https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?w=1060&t=st=1703142547~exp=1703143147~hmac=45275d0dcb2e7b5f582809b03ed09f2fd64860bfb0af35203066743c4757991f';
const postImg = "https://www.corvsport.com/wp-content/uploads/2023/04/2019_chevrolet_corvette-zr1-coupe_2019_chevrolet_corvette-zr1-coupe_96bd9f84-6fd4-4ea2-acbc-1c3d019886e8-nPEAjH-82722-82723-scaled-1.png"
export interface postType {
  user: {
    username: string;
    userImg: string;
  };
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
      username: 'zeynalabdinjs',
      userImg: img,
    },
    image: postImg,
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
