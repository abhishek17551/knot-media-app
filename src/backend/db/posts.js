import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";


export const posts = [
  {
    _id: "15e5bc45-f341-4287-97f3-d9a1f845ff69",
    content: "It's my Birthday today!",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686386278/socialMedia/cake_g0csez.jpg",
    mediaAlt: "A piece of cake",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          _id: "t7cZfWIp-q",
          firstName: "Aanya",
          lastName: "Chowdhury",
          username: "aanyac",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-1_xurao7.jpg",
        },
        {
          _id: "79Gksh9otl",
          firstName: "Aditi",
          lastName: "Rao",
          username: "aditir",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-2_vsj3xh.jpg",
        },
        {
          _id: "ab8zWjEeXd",
          firstName: "Ayaan",
          lastName: "Ahmed",
          username: "ayaan.a",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-8_hsifu9.jpg",
        },
        {
          _id: "1T6Be1QpLm",
          firstName: "Arjun",
          lastName: "Malik",
          username: "arjunm",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-4_ojblhb.jpg",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Avi",
          lastName: "Thakur",
          username: "avit",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-6_yizohm.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "avit",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "t1cZfWIp-q",
        commentData: "Wish you a very Happy Birthday, dear!",
        firstName: "Aanya",
        lastName: "Chowdhury",
        username: "aanyac",
        profileAvatar:
          "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-1_xurao7.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "q18zWjEeXd",
        commentData: "Happy Birthday, girl!",
        firstName: "Avi",
        lastName: "Thakur",
        username: "avit",
        profileAvatar:
          "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-6_yizohm.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "116Be1QpLm",
        commentData: "Happy Birthday! Be always happy!",
        firstName: "Arjun",
        lastName: "Malik",
        username: "arjunm",
        profileAvatar:
          "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-4_ojblhb.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: "508f7462-a891-4d73-987e-ad030fa40fcd",
    content:
      "Just had my mind blown at the A.R. Rahman concert! 🎶🤩 An absolute musical genius, his melodies transported me to another world. The energy, the soul-stirring compositions, and the electrifying atmosphere... it was an unforgettable experience! 🎵✨",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/video/upload/w_400,f_auto,q_auto/v1686375304/socialMedia/concert-video_nlsijt.mp4",
    mediaAlt: "Concert Video",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "ab8zWjEeXd",
          firstName: "Ayaan",
          lastName: "Ahmed",
          username: "ayaan.a",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-8_hsifu9.jpg",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Avi",
          lastName: "Thakur",
          username: "avit",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-6_yizohm.jpg",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Aryan",
          lastName: "Iyer",
          username: "aryani",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-3_jja7xd.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "aaravp",
    createdAt: "2023-03-15T01:06:00+05:30",
    updatedAt: "2023-03-15T01:06:00+05:30",
    comments: [
      {
        _id: "o52gzWjEeX_",
        commentData:
          "It was lot of fun! Next time will go with all our friends!",
        firstName: "Aryan",
        lastName: "Iyer",
        username: "aryani",
        profileAvatar:
          "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-3_jja7xd.jpg",
        createdAt: "2023-03-16T01:06:00+05:30",
        updatedAt: "2023-03-16T01:06:00+05:30",
      },
    ],
  },
  {
    _id: "175ece04-a8b3-4cf5-a9f1-4de2c84c8b7c",
    content:
      "Nowadays, spending lots of time with coding! Building something gives so much pleasure!✨🚀",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1687930216/socialMedia/coding_kz1ars.jpg",
    mediaAlt: "Laptop Image",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "ab8zWjEeXd",
          firstName: "Ayaan",
          lastName: "Ahmed",
          username: "ayaan.a",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-8_hsifu9.jpg",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Avi",
          lastName: "Thakur",
          username: "avit",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-6_yizohm.jpg",
        },
        {
          _id: "1NR81Bzmuh",
          firstName: "Aryan",
          lastName: "Patel",
          username: "aryan987",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689249218/socialMedia/profile-pic-5_gaqahl.jpg",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Aryan",
          lastName: "Iyer",
          username: "aryani",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-3_jja7xd.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "aanyac",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "qq83zWjEeXd",
        commentData: "Awesome!",
        firstName: "Avi",
        lastName: "Thakur",
        username: "avit",
        profileAvatar:
          "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-6_yizohm.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "1N5R81Bzmuh",
        commentData: "Keep learning and keep growing!",
        firstName: "Aryan",
        lastName: "Patel",
        username: "aryan987",
        profileAvatar:
          "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689249218/socialMedia/profile-pic-5_gaqahl.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: "39475b82-0f43-40f1-a98f-a145c52c02db",
    content:
      "Stepping into the fashion scene like a style supernova! From runway inspirations to street chic, I'm here to make heads turn and trends ignite.",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1687930615/socialMedia/fashio-show-men_pnsrnz.jpg",
    mediaAlt: "Fashion Show Image",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "79Gksh9otl",
          firstName: "Aditi",
          lastName: "Rao",
          username: "aditir",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-2_vsj3xh.jpg",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Avi",
          lastName: "Thakur",
          username: "avit",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-6_yizohm.jpg",
        },
        {
          _id: "1NR81Bzmuh",
          firstName: "Aryan",
          lastName: "Patel",
          username: "aryan987",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689249218/socialMedia/profile-pic-5_gaqahl.jpg",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Aryan",
          lastName: "Iyer",
          username: "aryani",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-3_jja7xd.jpg",
        },
        {
          _id: "ab8zWjEeXd",
          firstName: "Ayaan",
          lastName: "Ahmed",
          username: "ayaan.a",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-8_hsifu9.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "ayaan.a",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "79tyGksh9otl",
        commentData: "Wish you all the best! Keep shining!",
        firstName: "Aditi",
        lastName: "Rao",
        username: "aditir",
        profileAvatar:
          "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-2_vsj3xh.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: "203e6407-4fa8-47dc-8406-7ae2530c1461",
    content:
      "Exciting news! Embarking on a new storytelling adventure as I dive into the realms of imagination to craft my upcoming book. Words are my enchanting brushstrokes, painting vivid worlds and compelling characters.",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          _id: "79Gksh9otl",
          firstName: "Aditi",
          lastName: "Rao",
          username: "aditir",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-2_vsj3xh.jpg",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Avi",
          lastName: "Thakur",
          username: "avit",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-6_yizohm.jpg",
        },
        {
          _id: "1NR81Bzmuh",
          firstName: "Aryan",
          lastName: "Patel",
          username: "aryan987",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689249218/socialMedia/profile-pic-5_gaqahl.jpg",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Aryan",
          lastName: "Iyer",
          username: "aryani",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-3_jja7xd.jpg",
        },
        {
          _id: "LCrc9f0Zl0",
          firstName: "Aarav",
          lastName: "Patel",
          username: "aaravp",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1688409795/290d3a27e02ebce5e121c624b276e4d4_vl6eik.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "anayan",
    createdAt: "2021-09-15T01:06:00+05:30",
    updatedAt: "2021-09-15T01:06:00+05:30",
    comments: [
      {
        _id: "1NR81Bzmuh12",
        commentData: "Amazing! Looking forward to your new work!",
        firstName: "Aryan",
        lastName: "Patel",
        username: "aryan987",
        profileAvatar:
          "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689249218/socialMedia/profile-pic-5_gaqahl.jpg",
        createdAt: "2021-09-15T01:06:00+05:30",
        updatedAt: "2021-09-15T01:06:00+05:30",
      },
      {
        _id: "o5gzWjEeX_sdcf",
        commentData: "Ohh Wow! Eager to read.",
        firstName: "Aryan",
        lastName: "Iyer",
        username: "aryani",
        profileAvatar:
          "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-3_jja7xd.jpg",
        createdAt: "2021-09-16T01:06:00+05:30",
        updatedAt: "2021-09-16T01:06:00+05:30",
      },
      {
        _id: "LCrc9f0Zl0asd",
        commentData:
          "Great! Always liked your books. This time also it will be a good read.",
        firstName: "Aarav",
        lastName: "Patel",
        username: "aaravp",
        profileAvatar:
          "https://res.cloudinary.com/dd1ynbj52/image/upload/v1688409795/290d3a27e02ebce5e121c624b276e4d4_vl6eik.jpg",
        createdAt: "2021-09-18T01:06:00+05:30",
        updatedAt: "2021-09-18T01:06:00+05:30",
      },
    ],
  },
  {
    _id: "ede18080-78ab-4c3e-a3e2-aded11c1bf95",
    content:
      "Just had the most incredible experience at the Met Gala! ✨🌟 The fashion extravaganza was an artistic playground, where imagination and couture collided. Rubbing shoulders with fashion icons and witnessing breathtaking creations was a dream come true. Feeling inspired and ready to push the boundaries of style in my own designs! 🌹💃 ",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1687930816/socialMedia/met-gala_sbtw5a.webp",
    mediaAlt: "Met-Gala-Fashion-show",
    likes: {
      likeCount: 6,
      likedBy: [
        {
          _id: "79Gksh9otl",
          firstName: "Aditi",
          lastName: "Rao",
          username: "aditir",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-2_vsj3xh.jpg",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Avi",
          lastName: "Thakur",
          username: "avit",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-6_yizohm.jpg",
        },
        {
          _id: "1NR81Bzmuh",
          firstName: "Aryan",
          lastName: "Patel",
          username: "aryan987",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689249218/socialMedia/profile-pic-5_gaqahl.jpg",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Aryan",
          lastName: "Iyer",
          username: "aryani",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-3_jja7xd.jpg",
        },
        {
          _id: "LCrc9f0Zl0",
          firstName: "Aarav",
          lastName: "Patel",
          username: "aaravp",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1688409795/290d3a27e02ebce5e121c624b276e4d4_vl6eik.jpg",
        },
        {
          _id: "M1NR81Bzlz",
          firstName: "Anaya",
          lastName: "Nair",
          username: "anayan",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-2_vsj3xh.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "aishak",
    createdAt: "2021-03-11T01:06:00+05:30",
    updatedAt: "2021-03-11T01:06:00+05:30",
    comments: [
      {
        _id: "M1NR81Bzlz2345",
        commentData:
          "It must be an amazing experience! Let's catch up soon! Eager to hear your experience there!",
        firstName: "Anaya",
        lastName: "Nair",
        username: "anayan",
        profileAvatar:
          "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-2_vsj3xh.jpg",
        createdAt: "2021-03-12T01:06:00+05:30",
        updatedAt: "2021-03-12T01:06:00+05:30",
      },
    ],
  },
  {
    _id: "7f6e1427-c26d-4969-928f-ca966129a87a",
    content:
      "Dream big, hustle harder! Success is not a destination; it's a journey of resilience, determination, and unwavering belief in your vision.",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "LCrc9f0Zl0",
          firstName: "Aarav",
          lastName: "Patel",
          username: "aaravp",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1688409795/290d3a27e02ebce5e121c624b276e4d4_vl6eik.jpg",
        },
        {
          _id: "M1NR81Bzlz",
          firstName: "Anaya",
          lastName: "Nair",
          username: "anayan",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-2_vsj3xh.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "aryan987",
    createdAt: "2022-05-11T01:06:00+05:30",
    updatedAt: "2022-05-11T01:06:00+05:30",
    comments: [],
  },
  {
    _id: "37236383-7792-4a3d-afff-f6a624bc55a6",
    content: "Just finished my new piece! Show some love guys!",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1687931196/socialMedia/owais-kakar-qEqTcj7VeZQ-unsplash_wsipyr.jpg",
    mediaAlt: "Sketch",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "79Gksh9otl",
          firstName: "Aditi",
          lastName: "Rao",
          username: "aditir",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-2_vsj3xh.jpg",
        },
        {
          _id: "t7cZfWIp-q",
          firstName: "Aanya",
          lastName: "Chowdhury",
          username: "aanyac",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-1_xurao7.jpg",
        },
        {
          _id: "1NR81Bzmuh",
          firstName: "Aryan",
          lastName: "Patel",
          username: "aryan987",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689249218/socialMedia/profile-pic-5_gaqahl.jpg",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Aryan",
          lastName: "Iyer",
          username: "aryani",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-3_jja7xd.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "avit",
    createdAt: "2022-05-10T01:06:00+05:30",
    updatedAt: "2022-05-10T01:06:00+05:30",
    comments: [
      {
        _id: "t7cZfWIp-qqwer",
        commentData: "Just amazing! You are an amazing artist.",
        firstName: "Aanya",
        lastName: "Chowdhury",
        username: "aanyac",
        profileAvatar:
          "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-1_xurao7.jpg",
        createdAt: "2022-05-10T01:06:00+05:30",
        updatedAt: "2022-05-10T01:06:00+05:30",
      },
    ],
  },
  {
    _id: "f0b613fb-81b4-47bc-9ca2-751a22977242",
    content:
      "Just tried this dish today. And gues what! It turned out purrrfectt!",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1687931512/socialMedia/eiliv-aceron-ZuIDLSz3XLg-unsplash_vkluvd.jpg",
    mediaAlt: "FoodDish",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          _id: "79Gksh9otl",
          firstName: "Aditi",
          lastName: "Rao",
          username: "aditir",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-2_vsj3xh.jpg",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Avi",
          lastName: "Thakur",
          username: "avit",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-6_yizohm.jpg",
        },
        {
          _id: "1NR81Bzmuh",
          firstName: "Aryan",
          lastName: "Patel",
          username: "aryan987",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689249218/socialMedia/profile-pic-5_gaqahl.jpg",
        },
        {
          _id: "LCrc9f0Zl0",
          firstName: "Aarav",
          lastName: "Patel",
          username: "aaravp",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1688409795/290d3a27e02ebce5e121c624b276e4d4_vl6eik.jpg",
        },
        {
          _id: "M1NR81Bzlz",
          firstName: "Anaya",
          lastName: "Nair",
          username: "anayan",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-2_vsj3xh.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "rohaaan",
    createdAt: "2023-06-12T01:06:00+05:30",
    updatedAt: "2023-06-12T01:06:00+05:30",
    comments: [
      {
        _id: "qq8zWjEeXdertgf",
        commentData:
          "I hope you prepared some extra for me also. I am coming right away to your place! 😂",
        firstName: "Avi",
        lastName: "Thakur",
        username: "avit",
        profileAvatar:
          "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-6_yizohm.jpg",
        createdAt: "2023-06-12T01:06:00+05:30",
        updatedAt: "2023-06-12T01:06:00+05:30",
      },
    ],
  },
  {
    _id: "3cd5e18d-da71-4c4a-a3e5-46d529a8e039",
    content:
      "In the gentle touch of the waves, a reminder: You are loved, always. 💙",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1687931847/socialMedia/nick-fewings-0ogq3xndxG0-unsplash_tcqo6r.jpg",
    mediaAlt: "Love Yourself Written In Sand",
    likes: {
      likeCount: 7,
      likedBy: [
        {
          _id: "M1NR81Bert",
          firstName: "Aisha",
          lastName: "Khan",
          username: "aishak",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-6_yizohm.jpg",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Avi",
          lastName: "Thakur",
          username: "avit",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-6_yizohm.jpg",
        },
        {
          _id: "1NR81Bzmuh",
          firstName: "Aryan",
          lastName: "Patel",
          username: "aryan987",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689249218/socialMedia/profile-pic-5_gaqahl.jpg",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Aryan",
          lastName: "Iyer",
          username: "aryani",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-3_jja7xd.jpg",
        },
        {
          _id: "LCrc9f0Zl0",
          firstName: "Aarav",
          lastName: "Patel",
          username: "aaravp",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1688409795/290d3a27e02ebce5e121c624b276e4d4_vl6eik.jpg",
        },
        {
          _id: "M1NR81Bzlz",
          firstName: "Anaya",
          lastName: "Nair",
          username: "anayan",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-2_vsj3xh.jpg",
        },
        {
          _id: "ab8zWjEeXd",
          firstName: "Ayaan",
          lastName: "Ahmed",
          username: "ayaan.a",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-8_hsifu9.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "aditir",
    createdAt: "2023-06-10T01:06:00+05:30",
    updatedAt: "2023-06-10T01:06:00+05:30",
    comments: [
      {
        _id: "M1NR81Bertvbn",
        commentData: "🤩",
        firstName: "Aisha",
        lastName: "Khan",
        username: "aishak",
        profileAvatar:
          "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-6_yizohm.jpg",
        createdAt: "2023-06-11T01:06:00+05:30",
        updatedAt: "2023-06-11T01:06:00+05:30",
      },
    ],
  },
  {
    _id: "d6c1f1e8-f8f2-46f2-9a6e-1886aa019479",
    content:
      "Adventure awaits as I set my sights on the mesmerizing city-state of Singapore! From vibrant streets to stunning skylines, I'm ready to explore the cultural tapestry, indulge in delectable cuisine, and uncover hidden gems.",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1688064342/socialMedia/bna-ignacio-C8gvt2LMX94-unsplash_rhwbim.jpg",
    mediaAlt: "Singapore",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "M1NR81Bzlz",
          firstName: "Anaya",
          lastName: "Nair",
          username: "anayan",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-2_vsj3xh.jpg",
        },
        {
          _id: "ab8zWjEeXd",
          firstName: "Ayaan",
          lastName: "Ahmed",
          username: "ayaan.a",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-8_hsifu9.jpg",
        },
        {
          _id: "M1NR81Bert",
          firstName: "Aisha",
          lastName: "Khan",
          username: "aishak",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-6_yizohm.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "arjunm",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "ab8zWjEeXdwer",
        commentData: "Enjoy bro! Will wait for some gifts from Singapore.😉",
        firstName: "Ayaan",
        lastName: "Ahmed",
        username: "ayaan.a",
        profileAvatar:
          "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-8_hsifu9.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: "92faab82-f28d-4a64-8f56-14e17f27cb16",
    content:
      " Hackathon success unlocked! Proud and thrilled to have secured the second prize in an exhilarating coding showdown. It was an incredible experience collaborating, coding, and pushing boundaries to build innovative solutions.",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1687932390/socialMedia/hero_hackathons_zbnfb8.jpg",
    mediaAlt: "hackathon",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "o5gzWjEeX_",
          firstName: "Aryan",
          lastName: "Iyer",
          username: "aryani",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-3_jja7xd.jpg",
        },
        {
          _id: "M1NR81Bert",
          firstName: "Aisha",
          lastName: "Khan",
          username: "aishak",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-6_yizohm.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "aanyac",
    createdAt: "2023-03-17T01:06:00+05:30",
    updatedAt: "2023-03-17T01:06:00+05:30",
    comments: [],
  },
  {
    _id: "bb019e8d-f5d9-483d-8260-04d1ab280e97",
    content:
      "💜 What an incredible performance! Enjoyed the show so much! The rhythm that transcends borders, the melodies that touch hearts. Grateful to be a part of this incredible fandom. ✨🚀 #BTS #ARMY #MusicMagic",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1687932667/socialMedia/bts-concert-1_blse9a.png",
    mediaAlt: "BTS",
    likes: {
      likeCount: 6,
      likedBy: [
        {
          _id: "t7cZfWIp-q",
          firstName: "Aanya",
          lastName: "Chowdhury",
          username: "aanyac",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-1_xurao7.jpg",
        },
        {
          _id: "ab8zWjEeXd",
          firstName: "Ayaan",
          lastName: "Ahmed",
          username: "ayaan.a",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-8_hsifu9.jpg",
        },
        {
          _id: "1T6Be1QpLm",
          firstName: "Arjun",
          lastName: "Malik",
          username: "arjunm",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-4_ojblhb.jpg",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Avi",
          lastName: "Thakur",
          username: "avit",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-6_yizohm.jpg",
        },
        {
          _id: "M1NR81Bert",
          firstName: "Aisha",
          lastName: "Khan",
          username: "aishak",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-6_yizohm.jpg",
        },
        {
          _id: "1NR81Bzmuh",
          firstName: "Aryan",
          lastName: "Patel",
          username: "aryan987",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689249218/socialMedia/profile-pic-5_gaqahl.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "aditir",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "qq8zWjEeXd4567",
        commentData: "Boraahaeeeeeee",
        firstName: "Avi",
        lastName: "Thakur",
        username: "avit",
        profileAvatar:
          "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-6_yizohm.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "t7cZfWIp-qpoiuy",
        commentData: "Yaay! Next time we'll go together!",
        firstName: "Aanya",
        lastName: "Chowdhury",
        username: "aanyac",
        profileAvatar:
          "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-1_xurao7.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: "d09da77f-9613-4b0a-bc52-f24dd7bf9903",
    content:
      "Thrilled to embark on thrilling adventures, immerse in diverse cultures, and embrace the beauty of humanity. Let's meet, share stories, and build lasting friendships on this incredible journey called life. Travel and friendship are the greatest treasures that enrich our souls! 🌐💙 ",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "ab8zWjEeXd",
          firstName: "Ayaan",
          lastName: "Ahmed",
          username: "ayaan.a",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-8_hsifu9.jpg",
        },
        {
          _id: "1T6Be1QpLm",
          firstName: "Arjun",
          lastName: "Malik",
          username: "arjunm",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-4_ojblhb.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "arjunm",
    createdAt: "2022-11-02T01:06:00+05:30",
    updatedAt: "2022-11-02T01:06:00+05:30",
    comments: [],
  },
  {
    _id: "1975fbb2-ddf4-45a5-a362-650ea7d56de0",
    content:
      "Seeds planted, green dreams sown. Embarking on a blooming journey with my newfound gardening hobby! 🌱🌻 #GreenThumbsUp",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "M1NR81Bzlz",
          firstName: "Anaya",
          lastName: "Nair",
          username: "anayan",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-2_vsj3xh.jpg",
        },
        {
          _id: "ab8zWjEeXd",
          firstName: "Ayaan",
          lastName: "Ahmed",
          username: "ayaan.a",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-8_hsifu9.jpg",
        },
        {
          _id: "M1NR81Bert",
          firstName: "Aisha",
          lastName: "Khan",
          username: "aishak",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-6_yizohm.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "aanyac",
    createdAt: "2023-06-25T01:06:00+05:30",
    updatedAt: "2023-06-25T01:06:00+05:30",
    comments: [],
  },
  {
    _id: "aa5b428e-f8c9-47de-9714-867ea7fea3eb",
    content:
      "Strumming into a new chapter of music. 🎸 Excited to unleash my melodies with this beautiful new guitar! #NewGuitarVibes",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1687933153/socialMedia/42-north--G50vpGzaes-unsplash_k92mgi.jpg",
    mediaAlt: "Guitar",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "M1NR81Bzlz",
          firstName: "Anaya",
          lastName: "Nair",
          username: "anayan",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-2_vsj3xh.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "aaravp",
    createdAt: "2023-06-17T01:06:00+05:30",
    updatedAt: "2023-06-17T01:06:00+05:30",
    comments: [
      {
        _id: "M1NR81Bzlz98765",
        commentData: "Eager to hear your performance!",
        firstName: "Anaya",
        lastName: "Nair",
        username: "anayan",
        profileAvatar:
          "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-2_vsj3xh.jpg",
        createdAt: "2023-06-17T01:06:00+05:30",
        updatedAt: "2023-06-17T01:06:00+05:30",
      },
    ],
  },
  {
    _id: "490c8e54-73d3-41da-a249-98f123a974a7",
    content:
      "Embarking on a flavorful adventure as a food blogger! Join me on this mouthwatering journey filled with culinary delights and gastronomic wonders. 🍽️✨ #FoodBlogger #FoodieLife",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "M1NR81Bzlz",
          firstName: "Anaya",
          lastName: "Nair",
          username: "anayan",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-2_vsj3xh.jpg",
        },
        {
          _id: "ab8zWjEeXd",
          firstName: "Ayaan",
          lastName: "Ahmed",
          username: "ayaan.a",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-8_hsifu9.jpg",
        },
        {
          _id: "M1NR81Bert",
          firstName: "Aisha",
          lastName: "Khan",
          username: "aishak",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-6_yizohm.jpg",
        },
        {
          _id: "LCrc9f0Zl0",
          firstName: "Aarav",
          lastName: "Patel",
          username: "aaravp",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1688409795/290d3a27e02ebce5e121c624b276e4d4_vl6eik.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "rohaaan",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: "c6826efc-35a3-4996-a7eb-090a7b143d01",
    content: "Went for a casual walk! Came across this beauty!",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1687933371/socialMedia/recal-media-ueBIGLmiI5A-unsplash_slhlto.jpg",
    mediaAlt: "Sunset view",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "LCrc9f0Zl0",
          firstName: "Aarav",
          lastName: "Patel",
          username: "aaravp",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1688409795/290d3a27e02ebce5e121c624b276e4d4_vl6eik.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "anayan",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "LCrc9f0Zl0qwaz",
        commentData: "I must praise your photography skills!",
        firstName: "Aarav",
        lastName: "Patel",
        username: "aaravp",
        profileAvatar:
          "https://res.cloudinary.com/dd1ynbj52/image/upload/v1688409795/290d3a27e02ebce5e121c624b276e4d4_vl6eik.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: "d4ae83ad-39b8-4c04-8de0-f3492c3f5981",
    content:
      "Photography, my window to the world, where creativity meets vision. From breathtaking landscapes to candid portraits, I'm endlessly inspired by the beauty that surrounds us.",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 7,
      likedBy: [
        {
          _id: "M1NR81Bert",
          firstName: "Aisha",
          lastName: "Khan",
          username: "aishak",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-6_yizohm.jpg",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Avi",
          lastName: "Thakur",
          username: "avit",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-6_yizohm.jpg",
        },
        {
          _id: "1T6Be1QpLm",
          firstName: "Arjun",
          lastName: "Malik",
          username: "arjunm",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-4_ojblhb.jpg",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Aryan",
          lastName: "Iyer",
          username: "aryani",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-3_jja7xd.jpg",
        },
        {
          _id: "LCrc9f0Zl0",
          firstName: "Aarav",
          lastName: "Patel",
          username: "aaravp",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1688409795/290d3a27e02ebce5e121c624b276e4d4_vl6eik.jpg",
        },
        {
          _id: "M1NR81Bzlz",
          firstName: "Anaya",
          lastName: "Nair",
          username: "anayan",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-2_vsj3xh.jpg",
        },
        {
          _id: "ab8zWjEeXd",
          firstName: "Ayaan",
          lastName: "Ahmed",
          username: "ayaan.a",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-8_hsifu9.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "aryan987",
    createdAt: "2023-01-27T01:06:00+05:30",
    updatedAt: "2023-01-27T01:06:00+05:30",
    comments: [],
  },
  {
    _id: "5c8b26ce-934c-4dc7-a09a-59d7a17b20f6",
    content:
      "Forever grateful for the guiding light and unconditional love of my incredible parents. They have been my rock, my inspiration, and my unwavering support system. Their love and sacrifices have shaped me into the person I am today. Words cannot express how blessed I am to have them by my side. Mom and Dad, you are my heroes, my forever source of love and strength. ❤️",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 8,
      likedBy: [
        {
          _id: "M1NR81Bert",
          firstName: "Aisha",
          lastName: "Khan",
          username: "aishak",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-6_yizohm.jpg",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Avi",
          lastName: "Thakur",
          username: "avit",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-6_yizohm.jpg",
        },
        {
          _id: "1T6Be1QpLm",
          firstName: "Arjun",
          lastName: "Malik",
          username: "arjunm",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-4_ojblhb.jpg",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Aryan",
          lastName: "Iyer",
          username: "aryani",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-3_jja7xd.jpg",
        },
        {
          _id: "LCrc9f0Zl0",
          firstName: "Aarav",
          lastName: "Patel",
          username: "aaravp",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1688409795/290d3a27e02ebce5e121c624b276e4d4_vl6eik.jpg",
        },
        {
          _id: "M1NR81Bzlz",
          firstName: "Anaya",
          lastName: "Nair",
          username: "anayan",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-2_vsj3xh.jpg",
        },
        {
          _id: "t7cZfWIp-q",
          firstName: "Aanya",
          lastName: "Chowdhury",
          username: "aanyac",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-1_xurao7.jpg",
        },
        {
          _id: "79Gksh9otl",
          firstName: "Aditi",
          lastName: "Rao",
          username: "aditir",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-2_vsj3xh.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "ayaan.a",
    createdAt: "2021-06-07T01:06:00+05:30",
    updatedAt: "2021-06-07T01:06:00+05:30",
    comments: [],
  },
  {
    _id: "eaf91a20-5b28-4027-a6b2-bae97d76681a",
    content:
      "Yaay! Finally Goa adventure begins! The countdown begins for an unforgettable getaway filled with laughter, memories, and beach vibes. Let's make this trip one for the books! 🌊🎉",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "1T6Be1QpLm",
          firstName: "Arjun",
          lastName: "Malik",
          username: "arjunm",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-4_ojblhb.jpg",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Aryan",
          lastName: "Iyer",
          username: "aryani",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-3_jja7xd.jpg",
        },
        {
          _id: "LCrc9f0Zl0",
          firstName: "Aarav",
          lastName: "Patel",
          username: "aaravp",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1688409795/290d3a27e02ebce5e121c624b276e4d4_vl6eik.jpg",
        },
        {
          _id: "M1NR81Bzlz",
          firstName: "Anaya",
          lastName: "Nair",
          username: "anayan",
          profileAvatar:
            "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-2_vsj3xh.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "aishak",
    createdAt: "2021-08-23T01:06:00+05:30",
    updatedAt: "2021-08-23T01:06:00+05:30",
    comments: [
      {
        _id: "1T6Be1QpLmaszx",
        commentData: "Yo! Let's rock there!",
        firstName: "Arjun",
        lastName: "Malik",
        username: "arjunm",
        profileAvatar:
          "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-4_ojblhb.jpg",
        createdAt: "2021-08-23T01:06:00+05:30",
        updatedAt: "2021-08-23T01:06:00+05:30",
      },
      {
        _id: "o5gzWjEeX_9876",
        commentData:
          "Have an incredible time exploring the beaches, soaking up the vibrant culture, and indulging in delicious seafood. Safe travels! ",
        firstName: "Aryan",
        lastName: "Iyer",
        username: "aryani",
        profileAvatar:
          "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-3_jja7xd.jpg",
        createdAt: "2021-08-24T01:06:00+05:30",
        updatedAt: "2021-08-24T01:06:00+05:30",
      },
    ],
  },
];

