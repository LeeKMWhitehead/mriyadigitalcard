







import React from 'react';
import { useParams } from 'react-router-dom';
import { cardData } from '../../data/cardData';
import mriyagpImg from '../../assets/realneoMriya.png';

const MriyaBaseCard = () => {
  const { personId } = useParams();
  const data = cardData[personId] || cardData['ceo'];

  // 모바일 여부 판단 (호버 효과 제어용)
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  // MriyaBaseCard.js 내 name3DStyle 수정

  const name3DStyle = {
    fontSize: '2.5rem',
    margin: '0 0 12px 0',
    fontWeight: '900',
    letterSpacing: '-0.5px',
    lineHeight: '1.1',
    /* 1. 색상 변경: 고급스러운 샴페인 골드 계열 */
    color: '#FFD700', 
    /* 2. 그라데이션 추가: 금속 질감 표현 */
    background: 'linear-gradient(to bottom, #FFE14D 0%, #FFCC00 50%, #E6B800 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
    transition: 'all 0.3s ease',
    /* 3. 입체감 그림자: 골드와 어울리는 짙은 브라운/블랙 톤으로 조정 */
    textShadow: `
      0px 1px 0px #B8860B,
      0px 2px 0px #996515,
      0px 3px 0px #7A5210,
      0px 4px 1px rgba(0,0,0,0.2),
      0px 6px 10px rgba(0,0,0,0.4),
      0px 10px 20px rgba(0,0,0,0.2)
    `,
  };

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${mriyagpImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '"Segoe UI", Roboto, sans-serif',
      overflow: 'hidden'
    }}>
      <div style={{
        width: '85%',
        maxWidth: '380px',
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(12px) saturate(160%)',
        WebkitBackdropFilter: 'blur(12px) saturate(160%)',
        borderRadius: '40px',
        padding: '50px 25px',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
        textAlign: 'center'
      }}>
        <header>
          <div style={{
            fontSize: '1.3rem',
            color: '#E0E6ED',
            letterSpacing: '3px',
            fontWeight: '900',
            marginBottom: '28px',
            textShadow: '0px 3px 6px rgba(0, 0, 0, 0.9), 0px 0px 12px rgba(0, 122, 255, 0.4)',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            width: '100%'
          }}>
            MRIYA GLOBAL PARTNERS
          </div>

          <h1 
            style={name3DStyle}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.textShadow = `
                  0px 1px 0px #E0E0E0, 0px 2px 0px #D0D0D0, 0px 3px 0px #C0C0C0,
                  0px 4px 1px rgba(0,0,0,0.1), 0px 8px 15px rgba(0,0,0,0.4), 0px 15px 25px rgba(0,0,0,0.2)
                `;
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.textShadow = name3DStyle.textShadow;
              }
            }}
          >
            {data.name}
          </h1>

          <div style={{ marginBottom: '40px' }}>
            <div style={{
              fontSize: '1.2rem',
              color: '#fff',
              fontWeight: '700',
              letterSpacing: '1px',
              marginBottom: '6px',
              textShadow: '0px 2px 4px rgba(0,0,0,0.5)'
            }}>
              {data.roleInfo.title}
            </div>

            <div style={{
              color: 'rgba(255, 255, 255, 0.95)',
              fontSize: '0.9rem',
              fontWeight: '600',
              lineHeight: '1.5',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              textShadow: `0px 2px 4px rgba(0, 0, 0, 0.8), 0px 0px 10px rgba(0, 0, 0, 0.5)`
            }}>
              <span>{data.roleInfo.field}</span>
              <span style={{ margin: '0 8px', opacity: 0.5 }}>|</span>
              <span>{data.roleInfo.location}</span>
            </div>
          </div>
        </header>

        {/* 버튼 리스트 영역: 중복 div를 제거하고 하나로 통합 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {data.items.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                padding: '18px 22px',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                borderRadius: '22px',
                borderTop: '1px solid rgba(255, 255, 255, 0.3)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.3)',
                borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
                borderRight: '1px solid rgba(0, 0, 0, 0.2)',
                textDecoration: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                e.currentTarget.style.boxShadow = `0 12px 30px ${item.color}33`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
              }}
            >
              <span style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                width: '32px', 
                height: '32px',
                filter: `drop-shadow(0px 0px 6px ${item.color}cc)` 
              }}>
                <img src={item.icon} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </span>

              <span style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                gap: '2px'
              }}>
                <span style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.8rem',
                  fontWeight: '500',
                  letterSpacing: '0.5px'
                }}>
                  {item.label.split('\n')[0]}
                </span>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '2px', height: '12px', backgroundColor: item.color, borderRadius: '2px' }}></div>
                  <span style={{
                    color: item.color,
                    // 핵심 포인트: 흰색을 20% 섞어 원색 느낌을 뺌
                    fontSize: '1rem',
                    fontWeight: '800',
                    letterSpacing: '0.2px',
                    // 핵심수정: 글로우 효과 최소화 및 선명도 강화
                    textShadow: `0px 0px 1px rgba(255, 255, 255, 0.3), /* 글자 테두리를 아주 얇게 잡아줌 */
                    0px 1px 2px rgba(0, 0, 0, 0.7) /* 어두운 그림자를 깔아 배경과 분리 */` 
                  }}>
                    {item.label.split('\n')[1] || item.label}
                  </span>
                </div>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MriyaBaseCard;