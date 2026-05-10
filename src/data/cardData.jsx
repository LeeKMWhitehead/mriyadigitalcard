import phoneIcon from '../assets/icons/phone.svg';
import kakaoIcon from '../assets/icons/kakao.png';
import whatsappIcon from '../assets/icons/whatsapp.svg';
import emailIcon from '../assets/icons/email.svg';

export const cardData = {
  ceo: {
    name: "Ryzhykh Oksana",
    roleInfo: {
      title: "CEO", 
      field: "Integrated Solution Trading", 
      location: "Seoul, Korea" 
    },
    phone: "+82 10-7412-2422",
    email: "leekm1625@naver.com",
    color: "#38bdf8",
    items: [
      { icon: phoneIcon, label: "Direct Call \n+82-10-7412-2422", link: "tel:+821074122422" },
      { icon: kakaoIcon, label: "KakaoTalk Business", link: "https://qr.kakao.com/talk/p/01074122422" },
      { icon: whatsappIcon, label: "WhatsApp Global", link: "https://wa.me/821074122422" },
      { icon: emailIcon, label: "Official Inquiry \nleekm1625@naver.com", link: "mailto:leekm1625@naver.com" },
    ],
  },
  whitehead: {
    name: "Whitehead",
    roleInfo: {
      title: "CTO", 
      field: "닥치고 수학공부 / 머신러닝 수학연구소", 
      location: "Seoul, Korea" 
    },    
    phone: "+82 10-3266-1625",
    email: "leekm1625@naver.com",
    color: "#38bdf8",
    items: [
      { icon: phoneIcon, label: "기술/연구 상담", link: "tel:+821032661625" },
      { icon: kakaoIcon, label: "카카오톡 상담", link: "http://qr.kakao.com/talk/p/01032661625" },
      { icon: whatsappIcon, label: "해외 협력 문의", link: "https://wa.me/821032661625" },
      { icon: emailIcon, label: "이메일 프로젝트 문의", link: "mailto:leekm1625@naver.com" },
    ],
  }
};