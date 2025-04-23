import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css';
import ProtectedRoute from './Componets/ProtectedRoute';

// Lazy load all components
const Homepage = lazy(() => import('../src/Pages/Homepage'));
const Home = lazy(() => import('./Componets/Home'));
const About = lazy(() => import('./Componets/About'));
const Services = lazy(() => import('./Componets/service'));
const Contact = lazy(() => import('./Componets/Contact'));
const Certificate = lazy(() => import('./Componets/certificate'));
const Client = lazy(() => import('./Componets/Client'));
const CertificateDesign = lazy(() => import('./Componets/Certiificatedesign'));
const Dashboard = lazy(() => import('./Pages/Dashboard'));
const Login = lazy(() => import('./Componets/Login'));
const AllCertificates = lazy(() => import('./Componets/AllCertificates'));
const Notfound = lazy(() => import('./Componets/Notfound'));

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/client" element={<Client />} />
        <Route path="/green" element={<CertificateDesign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/all-certificates" element={<AllCertificates />} />
        
        {/* Protected Dashboard Route */}
        <Route 
          path="/dashboard/*" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* 404 route */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
