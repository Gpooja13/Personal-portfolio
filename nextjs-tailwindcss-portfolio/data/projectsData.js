import { v4 as uuidv4 } from "uuid";

export const projectsData = [
  {
    id: 1,
    title: "Blockchain based Certification Verification System",
    url: "blockchain-certification-system",
    category: "Web Application",
    img: "/images/blockchain-certification.png",
    ProjectHeader: {
      title:
        "Blockchain-based Certification Verification System for Universities",
      publishDate: "October, 2024",
      tags: "Blockchain / Certification Verification",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Blockchain-based Certification System",
        img: "Blockchain-System-Image-ID",
      },
    ],
    ProjectLinks: {
      liveLink: "https://doccheck.netlify.app/signin",
      githubLink:
        "https://github.com/Gpooja13/Blockchain-based-Document-Verification-App-DocCheck",
    },
    ProjectInfo: {
      ClientHeading: "About the Project",
      CompanyInfo: [
        {
          id: uuidv4(),
          details:
            "This project implements a Blockchain-based Certification/Document Verification System (DocCheck) for universities using Ethereum's decentralized network, enabling secure issuance and verification of academic credentials.",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "To create a decentralized platform for universities to issue and verify academic certifications securely, ensuring immutability, transparency, and security of academic records.",
      Technologies: [
        {
          title: "Tech Stack",
          techs: [
            "Ethereum",
            "Solidity",
            "IPFS",
            "Web3.js",
            "React.js",
            "Firebase",
            "Hardhat",
          ],
        },
      ],
      ProjectDetailsHeading: "Features",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Certificate Issuance: Universities can issue tamper-proof certificates directly on the blockchain.",
        },
        {
          id: uuidv4(),
          details:
            "Certificate Verification: Students and employers can verify certificates using a simple hash lookup on the blockchain.",
        },
        {
          id: uuidv4(),
          details:
            "Decentralized Storage: Academic documents are securely stored on IPFS, with only the document's hash stored on the blockchain.",
        },
        {
          id: uuidv4(),
          details:
            "Smart Contracts: Smart contracts automate the issuance, verification, and revocation processes, ensuring transparency and security.",
        },
        {
          id: uuidv4(),
          details:
            "User Authentication: Firebase Authentication secures user login and registration for students, universities, and employers.",
        },
        {
          id: uuidv4(),
          details:
            "View or find specific issued documents by entering the credentials used at issuance (such as user ID and email). This feature helps users or authorities quickly locate and verify document details on the blockchain for validation purposes.",
        },
      ],
    },
  },
  {
    id: 2,
    title: "WhatsApp Clone",
    url: "whatsapp-clone",
    category: "Web Application",
    img: "/images/whatsapp-clone.png",
    ProjectHeader: {
      title: "WhatsApp Clone",
      publishDate: "March, 2024",
      tags: "Full Stack / Messaging App / Video Calling",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "WhatsApp Clone",
        img: "3HFvEkIMUwU",
      },
    ],
    ProjectLinks: {
      liveLink: "https://whatsapp-clone-peach-nine.vercel.app",
      githubLink: "https://github.com/Gpooja13/Whatsapp-Clone",
    },
    ProjectInfo: {
      ClientHeading: "About the Project",
      CompanyInfo: [
        {
          id: uuidv4(),
          details:
            "This project is a modern, feature-rich WhatsApp clone built with Next.js, offering a seamless messaging experience with voice and video calling capabilities.",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "To replicate the core functionality of the popular messaging application while also providing end to end encryption and seamless voice & video calling capabilities.",
      Technologies: [
        {
          title: "Tech Stack",
          techs: [
            "Next.js",
            "React",
            "Firebase",
            "PostgreSQL",
            "Socket.io",
            "Tailwind CSS",
            "Express.js",
            "ZegoCloud",
          ],
        },
      ],
      ProjectDetailsHeading: "Features",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Authentication: Secure authentication system using Firebase Authentication for user registration and login.",
        },
        {
          id: uuidv4(),
          details:
            "Real-time Chat: Send and receive text messages instantaneously using WebSockets.",
        },
        {
          id: uuidv4(),
          details:
            "End-to-End Encryption: Implement end-to-end encryption for messages to enhance security.",
        },
        {
          id: uuidv4(),
          details: "Media Sharing: Share images within chats.",
        },
        {
          id: uuidv4(),
          details:
            "Voice and Video Calls: Initiate voice and video calls with users, providing a rich communication experience.",
        },
        {
          id: uuidv4(),
          details:
            "Online Status: Display online/offline status of users in the chat.",
        },
        {
          id: uuidv4(),
          details: "Read Receipts: Show when messages have been read.",
        },
        {
          id: uuidv4(),
          details:
            "Search Bar: Manage your contacts and their messages with search functionality.",
        },
        {
          id: uuidv4(),
          details: "Chat History: Access and view past chat conversations.",
        },
        {
          id: uuidv4(),
          details:
            "User Profiles: View and edit your user profile information.",
        },
      ],
    },
  },
  {
    id: 3,
    title: "ShopMe eCommerce",
    url: "shopme-ecommerce",
    category: "Web Application",
    img: "/images/shopme-ecommerce.png",
    ProjectHeader: {
      title: "ShopMe eCommerce",
      publishDate: "January, 2024",
      tags: "Full Stack / eCommerce / Online Shopping",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "ShopMe eCommerce",
        img: "--O8k0X8c3w",
      },
    ],
    ProjectLinks: {
      liveLink: "https://shopping-hyo8rc365-gpooja13s-projects.vercel.app/",
      githubLink: "https://github.com/Gpooja13/shopping-app",
    },
    ProjectInfo: {
      ClientHeading: "About the Project",
      CompanyInfo: [
        {
          id: uuidv4(),
          details:
            "ShopMe eCommerce is an online shopping platform built with React, Node.js, Express.js and MongoDB, providing a seamless shopping experience with product listings, cart functionality, and checkout process.",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "To create a user-friendly and secure online shopping platform with essential eCommerce features like product filtering, payment gateway integration, and order management.",
      Technologies: [
        {
          title: "Tech Stack",
          techs: [
            "React",
            "Node.js",
            "MongoDB",
            "Express.js",
            "Stripe",
            "Tailwind CSS",
            "JWT Authentication",
          ],
        },
      ],
      ProjectDetailsHeading: "Features",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Product Listings: View various products with categories and filters.",
        },
        {
          id: uuidv4(),
          details:
            "Payment Integration: Secure payment using Stripe for online transactions.",
        },
        {
          id: uuidv4(),
          details:
            "Order Management: Users can place, track, and manage orders.",
        },
        {
          id: uuidv4(),
          details:
            "User Authentication: Secure login and registration using JWT.",
        },
        {
          id: uuidv4(),
          details:
            "Server-side rendering (SSR) for improved SEO and performance.",
        },
        {
          id: uuidv4(),
          details: "Responsive design for mobile and desktop devices.",
        },
        {
          id: uuidv4(),
          details:
            "User authentication and authorization along with 'forget your password' feature.",
        },
        {
          id: uuidv4(),
          details:
            "Product filtering on the basis of category, color, size, and price.",
        },
        {
          id: uuidv4(),
          details:
            "Admin Dashboard: Manage products, user accounts, orders, and reports from a centralized dashboard.",
        },
        {
          id: uuidv4(),
          details:
            "Shopping Cart: Add and remove items, view cart contents, and proceed to checkout securely.",
        },
        {
          id: uuidv4(),
          details:
            "User Accounts: Create and manage user accounts, with personalized wishlist and order history.",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Instagram Clone",
    url: "instagram-clone",
    category: "Web Application",
    img: "/images/instagram-clone.png",
    ProjectHeader: {
      title: "Instagram Clone",
      publishDate: "September, 2023",
      tags: "Full Stack / Social Media / Image & Video Sharing",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Instagram Clone",
        img: "f-gndyqoF4U",
      },
    ],
    ProjectLinks: {
      liveLink: "https://instagram-clone-app-mrhb.onrender.com",
      githubLink: "https://github.com/Gpooja13/instagram-clone-app",
    },
    ProjectInfo: {
      ClientHeading: "About the Project",
      CompanyInfo: [
        {
          id: uuidv4(),
          details:
            "An Instagram clone built with React, Node.js, and MongoDB, featuring image posting, liking, commenting, and user interaction functionalities.",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "To replicate the core features of Instagram with image sharing, social interactions, and a user-friendly responsive interface.",
      Technologies: [
        {
          title: "Tech Stack",
          techs: [
            "React",
            "Node.js",
            "MongoDB",
            "Express.js",
            "Cloudinary",
            "JWT Authentication",
            "Tailwind CSS",
          ],
        },
      ],
      ProjectDetailsHeading: "Features",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "User Authentication: Sign up, log in, Google authentication, and forget your password functionalities.",
        },
        {
          id: uuidv4(),
          details: "Responsive design for mobile and desktop devices.",
        },
        {
          id: uuidv4(),
          details: "Upload and share images/videos along with captions.",
        },
        {
          id: uuidv4(),
          details: "Follow other users to see their posts in your feed.",
        },
        {
          id: uuidv4(),
          details: "Discover new accounts and posts through the explore page.",
        },
        {
          id: uuidv4(),
          details:
            "Interact with posts by liking, commenting, and viewing existing comments.",
        },
        {
          id: uuidv4(),
          details: "Search for users based on keywords.",
        },
        {
          id: uuidv4(),
          details:
            "View your posts and manage who you follow and who follows you on the profile page.",
        },
        {
          id: uuidv4(),
          details: "Lazy loading feature for fetching posts.",
        },
      ],
    },
  },
  {
    id: 6,
    title: "News Banana",
    url: "news-banana",
    category: "Front End Application",
    img: "/images/news-banana.png",
    ProjectHeader: {
      title: "News Banana",
      publishDate: "April, 2023",
      tags: "Front End Development / News Aggregator / Search & Pagination",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "News Banana",
        img: "nws-img12345",
      },
    ],
    ProjectLinks: {
      liveLink: "https://gpooja13.github.io/react-news-app/",
      githubLink: "https://github.com/Gpooja13/news-banana-app",
    },
    ProjectInfo: {
      ClientHeading: "About the Project",
      CompanyInfo: [
        {
          id: uuidv4(),
          details:
            "NewsBanana is a modern web application that aggregates news articles from various categories, enabling users to search and navigate through content with auto-pagination functionality for a seamless browsing experience.",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "To deliver an platform for users to access categorized news, search articles, and experience smooth pagination while staying updated with the latest information.",
      Technologies: [
        {
          title: "Tech Stack",
          techs: ["React", "News API", "CSS"],
        },
      ],
      ProjectDetailsHeading: "Features",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Category-Wise News: Browse news updates across categories like Technology, Sports, Entertainment, and more.",
        },
        {
          id: uuidv4(),
          details: "Real-time fetching of news articles from the News API.",
        },
        {
          id: uuidv4(),
          details: "Responsive design for both desktop and mobile devices.",
        },
        {
          id: uuidv4(),
          details:
            "Search Functionality: Quickly search for news articles using keywords.",
        },
        {
          id: uuidv4(),
          details:
            "Auto-Pagination: Smooth scrolling with infinite scroll support to load articles dynamically.",
        },
        {
          id: uuidv4(),
          details:
            "Customizable User Interface: Adjust news preferences by category.",
        },
      ],
    },
  },
];
