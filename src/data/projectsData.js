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
    description: "블록체인 기반 NFT 마켓플레이스입니다. 이더리움 Sepolia Testnet의 스마트 컨트랙트와 Toss Payments를 통합하여 NFT이미지 생성, 거래, 결제 시스템을 구현해 보았습니다. IPFS 분산 스토리지와 실시간 ETH/KRW 환율 변환을 지원하여 제작하였습니다.",
    whatIDid: [
      "Solidity로 ERC-721 표준 NFT 스마트 컨트랙트 개발 및 Sepolia Testnet 배포",
      "Wagmi + RainbowKit을 활용한 지갑 연결 및 블록체인 트랜잭션 처리",
      "IPFS(Web3.Storage)를 활용한 분산 스토리지 기반 NFT 메타데이터 관리",
      "Toss Payments API 통합 및 QR 코드 기반 결제 시스템 구현",
      "Supabase MCP로 38개 RPC 함수 및 18개 테이블 설계 및 구축",
      "실시간 ETH/KRW 환율 변환 및 웹훅 기반 환불 시스템 구현"
    ],
    stack: "React, Vite, Styled-Components, Wagmi, RainbowKit, Solidity, Hardhat, OpenZeppelin, Supabase, PostgreSQL, IPFS(Web3.Storage), Toss Payments SDK, Ethereum Sepolia, NFT"
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
    description: "Data Labs 지원을 위해 인터랙티브 포트폴리오 웹사이트를 제작했습니다. Scroll Snap과 Intersection Observer를 활용한 페이지 전환, 키보드 SVG 애니메이션, 실시간 피드백 시스템 등을 구현하여 방문자에게 몰입감 있는 사용자 경험을 제공해보았습니다.",
    whatIDid: [
      "Styled-Components를 활용한 컴포넌트 기반 스타일링 시스템 구축",
      "Intersection Observer API를 활용한 스크롤 기반 애니메이션 구현",
      "Scroll Snap을 활용한 풀페이지 스크롤 네비게이션 구현",
      "재사용 가능한 컴포넌트 구조 설계 (Feedback, Profile 등 8개 이상의 분리된 컴포넌트)",
      "React Router를 활용한 SPA 라우팅 및 페이지 전환 구현",
      "SVG 애니메이션과 Keyframes를 활용한 인터랙티브 UI 개발"
    ],
    stack: "React, Styled-Components, React Router DOM, Intersection Observer API, CSS, Scroll Snap"
  }
];
