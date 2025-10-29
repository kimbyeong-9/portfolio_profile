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
    description: "앱 전용이었던 서비스를 웹으로 확장하고 기존 앱의 오류를 개선하여 Data Labs 지원을 위해 제작해 보았습니다.",
    whatIDid: [
      "React + TypeScript로 풀스택 개발 및 PostgreSQL 테이블 설계",
      "Supabase Realtime 실시간 채팅 시스템 구현",
      "Naver Search API 통합 및 CORS 문제 해결",
      "Haversine 공식 기반 거리 계산 알고리즘 구현",
      "Supabase Auth, Storage, RLS 기반 보안 시스템 구축",
      "SPA 라우팅 및 반응형 디자인 구현"
    ],
    stack: "React, TypeScript, Vite, React Router DOM, Styled-Components, Supabase, Supabase Realtime, PostgreSQL, Naver Search API, ESLint"
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
      "Supabase MCP로 38개 RPC 함수 및 테이블 설계 및 구축",
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
    description: "WebRTC와 Supabase를 활용한 실시간 영상통화 및 채팅 플랫폼을 구현했습니다. 브라우저 기반 1:1 영상통화, Supabase Realtime을 활용한 실시간 채팅 및 시그널링 서버, WebRTC API 기반 미디어 스트리밍을 구현해 보았습니다.",
    whatIDid: [
      "WebRTC API를 활용한 P2P 영상통화 시스템 구현",
      "Supabase Realtime을 시그널링 서버로 활용한 Offer/Answer/ICE Candidate 교환 구현",
      "WebRTCManager 클래스 설계 및 PeerConnection 생명주기 관리",
      "Supabase Realtime 기반 실시간 1:1 채팅 시스템 구현",
      "PostgreSQL 테이블 설계 및 Row Level Security(RLS) 정책 구현",
      "온라인 상태 관리 시스템 구축"
    ],
    stack: "React, Vite, React Router DOM, Styled-Components, Supabase(PostgreSQL, Auth, Realtime, Storage, Presence), WebRTC API, MediaDevices API, STUN Server, Row Level Security(RLS), Context API, React Icons, ESLint"
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
    description: "PM 학습 인원과 협업하여 Figma 디자인 기반으로 개발한 블루칼라 전문 채용 플랫폼입니다. 사용자용 채용 정보 페이지와 관리자용 대시보드를 포함한 양방향 웹 애플리케이션으로, 기업 등록, 공고 관리, 이력서 업로드 시스템을 구현해 보았습니다.",
    whatIDid: [
      "React + React Router 7 기반 SPA 구조 설계 및 이중 라우팅 구현",
      "Styled Components를 활용한 재사용 가능한 컴포넌트 설계",
      "Figma 디자인 기반 UI 구현 (무한 슬라이드쇼, 가로 스크롤 네비게이션, 모달/드롭다운)",
      "폼 입력 처리 및 검증 로직 구현",
      "관리자 대시보드 개발 (기업 등록, 공고 관리, 이력서 업로드, 상태 관리 시스템)",
      "Vite 빌드 최적화 및 Vercel 배포"
    ],
    stack: "React, React Router DOM, Styled-Components, Vite, React Icons, ESLint, React Hooks(useState, useEffect, useRef, useNavigate), FileReader API, Vercel"
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
