import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "t7cZfWIp-q",
    firstName: "Aanya",
    lastName: "Chowdhury",
    password: "chowdhury88",
    username: "aanyac",
    profileAvatar:
    "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-1_xurao7.jpg",
    bio: "Software Engineer and Nature Lover",
    website: "https://aanyachowdhury.io",
    backgroundImage:
      "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689787742/socialMedia/bg-image-1_jrvcdo.jpg",
    createdAt: "2019-02-02T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [
      {
        _id: "LCrc9f0Zl0",
        firstName: "Aarav",
        lastName: "Patel",
        username: "aaravp",
        profileAvatar:
        "https://res.cloudinary.com/dd1ynbj52/image/upload/v1688409795/290d3a27e02ebce5e121c624b276e4d4_vl6eik.jpg",
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
        _id: "79Gksh9otl",
        firstName: "Aditi",
        lastName: "Rao",
        username: "aditir",
        profileAvatar:
        "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-2_vsj3xh.jpg",
      },
    ],
    followers: [
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
    ],
    bookmarks: [],
  },
  {
    _id: "79Gksh9otl",
    firstName: "Aditi",
    lastName: "Rao",
    password: "raop@ss",
    username: "aditir",
    profileAvatar:
    "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-2_vsj3xh.jpg",
    bio: "Graphic Designer and Foodie",
    website: "https://aditirao.designs",
    backgroundImage:
      "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689787741/socialMedia/bg-image-2_kyl74l.jpg",
    createdAt: "2018-06-12T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [
      {
        _id: "1T6Be1QpLm",
        firstName: "Arjun",
        lastName: "Malik",
        username: "arjunm",
        profileAvatar:
        "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-4_ojblhb.jpg",
      },
    ],
    followers: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Aanya",
        lastName: "Chowdhury",
        username: "aanyac",
        profileAvatar:
        "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-1_xurao7.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "1T6Be1QpLm",
    firstName: "Arjun",
    lastName: "Malik",
    password: "malik987",
    username: "arjunm",
    profileAvatar:
    "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-4_ojblhb.jpg",
    bio: "Data Scientist and Fitness Freak",
    website: "https://arjunmalik.me",
    backgroundImage:
      "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689787740/socialMedia/bg-image-3_o9nk0x.jpg",
    createdAt: "2018-11-26T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [
      {
        _id: "ab8zWjEeXd",
        firstName: "Ayaan",
        lastName: "Ahmed",
        username: "ayaan.a",
        profileAvatar:
        "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-8_hsifu9.jpg",
      },
    ],
    followers: [
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
    ],
    bookmarks: [],
  },
  {
    _id: "LCrc9f0Zl0",
    firstName: "Aarav",
    lastName: "Patel",
    password: "patel123",
    username: "aaravp",
    profileAvatar:
    "https://res.cloudinary.com/dd1ynbj52/image/upload/v1688409795/290d3a27e02ebce5e121c624b276e4d4_vl6eik.jpg",
    bio: "Web Developer and Music Enthusiast",
    website: "https://aaravpatel.com",
    backgroundImage:
      "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689787740/socialMedia/bg-image-4_biey1y.jpg",
    createdAt: "2017-05-15T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [],
    followers: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Aanya",
        lastName: "Chowdhury",
        username: "aanyac",
        profileAvatar:
        "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-1_xurao7.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "o5gzWjEeX_",
    firstName: "Aryan",
    lastName: "Iyer",
    password: "iyer123",
    username: "aryani",
    profileAvatar:
    "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-3_jja7xd.jpg",
    bio: "Photographer and Traveler",
    website: "https://aryaniyer.photos",

    backgroundImage:
      "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689787742/socialMedia/bg-image-5_dl5ms6.jpg",
    createdAt: "2019-08-19T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [],
    followers: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Aanya",
        lastName: "Chowdhury",
        username: "aanyac",
        profileAvatar:
        "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-1_xurao7.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "M1NR81Bzlz",
    firstName: "Anaya",
    lastName: "Nair",
    password: "nair456",
    username: "anayan",
    profileAvatar:
    "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-2_vsj3xh.jpg",
    bio: "UX/UI Designer and Movie Buff",
    website: "https://anayanair.com",
    backgroundImage:
      "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689787743/socialMedia/bg-image-6_jnnagl.jpg",
    createdAt: "2021-01-11T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "qq8zWjEeXd",
    firstName: "Avi",
    lastName: "Thakur",
    password: "thakur1@3",
    username: "avit",
    profileAvatar:
    "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-6_yizohm.jpg",
    bio: "Product Manager and Book Lover",
    website: "https://avithakur.io",
    backgroundImage:
      "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689787742/socialMedia/bg-image-7_ztihiz.jpg",
    createdAt: "2020-01-22T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Aanya",
        lastName: "Chowdhury",
        username: "aanyac",
        profileAvatar:
        "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-1_xurao7.jpg",
      },
    ],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "ab8zWjEeXd",
    firstName: "Ayaan",
    lastName: "Ahmed",
    password: "ahmed20",
    username: "ayaan.a",
    profileAvatar:
    "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-8_hsifu9.jpg",
    bio: "Content Creator and Gaming Enthusiast",
    website: "https://ayaanahmed.net",
    backgroundImage:
      "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689787742/socialMedia/bg-image-8_uspifw.jpg",
    createdAt: "2018-05-02T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Aanya",
        lastName: "Chowdhury",
        username: "aanyac",
        profileAvatar:
        "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-1_xurao7.jpg",
      },
    ],
    followers: [
      {
        _id: "1T6Be1QpLm",
        firstName: "Arjun",
        lastName: "Malik",
        username: "arjunm",
        profileAvatar:
        "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689248969/socialMedia/profile-pic-4_ojblhb.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "M1NR81Bert",
    firstName: "Aisha",
    lastName: "Khan",
    password: "khan_99",
    username: "aishak",
    bio: "Artist and Pet Lover",
    website: "https://aishakhanart.com",
    profileAvatar:
      "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689786938/socialMedia/profile-pic-6_yizohm.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689787742/socialMedia/bg-image-9_iavyjp.jpg",
    createdAt: "2020-10-10T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "1NR81Bzmuh",
    firstName: "Adibhan",
    lastName: "Madhav",
    password: "adimad123",
    username: "adi_madhav",
    bio: "An Ambitious Entrepreneur",
    website: "https://fedora.com",
    profileAvatar:
      "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689249218/socialMedia/profile-pic-5_gaqahl.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dd1ynbj52/image/upload/v1689787741/socialMedia/bg-image-10_zcdzvd.jpg",
    createdAt: "2019-04-15T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  }
];
