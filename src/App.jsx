import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MriyaBaseCard from './components/cards/MriyaBaseCard';

function App() {
  return (
    <Router>
      <div style={{ 
        backgroundColor: '#000', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center' 
      }}>
        <Routes>
          {/* 동적 경로 설정: /:personId 가 모든 사람을 다 받아줍니다 */}
          <Route path="/:personId" element={<MriyaBaseCard />} />
          
          {/* 기본 경로는 ceo로 강제 이동 */}
          <Route path="/" element={<Navigate to="/ceo" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;