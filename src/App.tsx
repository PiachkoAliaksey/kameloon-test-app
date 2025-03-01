import './App.css';
import { Routes, Route } from "react-router";
import DashboardPage from './components/pages/Dashboard/DashboardPage';
import WrapperFinResPage from './components/pages/WrapperFinRes/WrapperFinResPage';

function App() {
  return (
    <div className='main'>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/results/:testId" element={<WrapperFinResPage title={'Results'} subtitle={'Order basket redesing'} />} />
        <Route path="/finalize/:testId" element={<WrapperFinResPage title={'Finalize'} subtitle={'Spring promotion'} />} />
      </Routes>
    </div>
  )
}

export default App
