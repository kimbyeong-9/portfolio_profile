import TrevelAppImage from '../images/TrevelApp.png';
import KeyMintAppImage from '../images/KeyMintApp.png';
import VideoCallAppImage from '../images/VideoCallApp.png';
import BlueColorAppImage from '../images/BiueColorApp.png';
import PortfolioProfileImage from '../images/PortpolioProfile.png';

export const projectsData = [
  {
    id: 1,
    name: "여행대로",
    period: "2025.08 ~ 2025.09",
    github: "https://github.com/kimbyeong-9/Travel_App.git",
    deployUrl: "https://travel-app-sable-three.vercel.app/",
    image: TrevelAppImage,
    isTeamProject: false,
    description: "데이터랩스의 여행대로 앱을 직접 사용하며 느낀 개선점을 바탕으로 제작한 여행 플래너 웹 애플리케이션입니다. 사용자 중심의 UI/UX 개선에 초점을 맞춰 개발했습니다.",
    whatIDid: [
      "React와 Supabase를 활용하여 풀스택 개발",
      "프론트엔드 로그인, 커뮤니티, 찜목록 기능 개발",
      "레이아웃 디자인, 커뮤니티 페이지 디자인 작업"
    ],
    stack: "React, Supabase, Styled-Components"
  },
  {
    id: 2,
    name: "Key_Mint",
    period: "2025.09 ~ 2025.10",
    github: "https://github.com/kimbyeong-9/key-mint.git",
    deployUrl: "https://key-mint.vercel.app/",
    image: KeyMintAppImage,
    isTeamProject: false,
    description: "키보드 커스터마이징 커뮤니티 플랫폼으로, 웹과 모바일 앱을 동시에 제공합니다. Next.js의 SSR을 통해 SEO를 최적화하고, React Native로 크로스 플랫폼 모바일 앱을 구현했습니다.",
    whatIDid: [
      "Next.js를 활용한 서버사이드 렌더링 구현",
      "React Native로 모바일 앱 개발",
      "Supabase를 활용한 실시간 데이터베이스 연동"
    ],
    stack: "Next.js, React Native, Supabase"
  },
  {
    id: 3,
    name: "Video_Call_App",
    period: "2025.07 ~ 2025.08",
    github: "https://github.com/kimbyeong-9/video_call_app.git",
    deployUrl: "https://video-call-app-lime-omega.vercel.app/",
    image: VideoCallAppImage,
    isTeamProject: false,
    description: "WebRTC와 WebSocket을 활용한 실시간 화상 통화 및 채팅 애플리케이션입니다. 백엔드부터 프론트엔드까지 풀스택으로 개발하여 실시간 통신 기술을 학습했습니다.",
    whatIDid: [
      "WebSocket을 활용한 실시간 채팅 기능 구현",
      "Node.js 백엔드 서버 개발",
      "RESTful API 설계 및 구현"
    ],
    stack: "JavaScript, WebSocket, Node.js"
  },
  {
    id: 4,
    name: "Bluecolor_Web",
    period: "2025.04 ~ 2025.05",
    github: "https://github.com/BlueColor-Project/bluecolor-web2.git",
    deployUrl: "https://bluecolor-web2-nm7i.vercel.app/",
    image: BlueColorAppImage,
    isTeamProject: true,
    teamSize: "2명",
    description: "블루칼라 근로자를 위한 구인구직 플랫폼입니다. TypeScript로 타입 안정성을 확보하고, Figma 디자인을 기반으로 협업하여 완성도 높은 서비스를 개발했습니다.",
    whatIDid: [
      "TypeScript를 활용한 타입 안정성 확보",
      "Zustand를 활용한 전역 상태 관리",
      "Figma 디자인을 기반으로 UI/UX 구현"
    ],
    stack: "React, TypeScript, Zustand, Figma"
  },
  {
    id: 5,
    name: "Portfolio_Profile",
    period: "2025.10 ~ 2025.11",
    github: "https://github.com/kimbyeong-9/portfolio_profile.git",
    deployUrl: "https://portfolio-profile-chi-opal.vercel.app/",
    image: PortfolioProfileImage,
    isTeamProject: false,
    description: "개인 포트폴리오 웹사이트입니다. 인터랙티브한 애니메이션과 스크롤 효과를 활용하여 방문자에게 몰입감 있는 경험을 제공하며, 저의 프로젝트와 역량을 효과적으로 전달합니다.",
    whatIDid: [
      "Tailwind CSS를 활용한 반응형 디자인 구현",
      "WebRTC를 활용한 화상 통화 기능 개발",
      "Firebase를 활용한 사용자 인증 시스템 구축"
    ],
    stack: "React, Tailwind CSS, WebRTC, Firebase"
  }
];
