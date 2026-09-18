import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import { OperationProvider } from '@/lib/OperationContext';

import Layout from './components/layout/Layout';
import CountryRoute from '@/components/CountryRoute';
import OperationSelector from './pages/OperationSelector';
import BrazilLanding from './pages/BrazilLanding';
import UruguayLanding from './pages/UruguayLanding';
import Menu from './pages/Menu';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPost';
import About from './pages/About';
import Franchise from './pages/Franchise';
import Reserve from './pages/Reserve';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#0B0B0B]">
        <div className="w-8 h-8 border-4 border-[#D4AF37]/20 border-t-[#D4AF37] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route path="/" element={<OperationSelector />} />
      <Route element={<Layout />}>
        <Route path="/brasil" element={<BrazilLanding />} />
        <Route path="/uruguai" element={<UruguayLanding />} />
        <Route path="/brasil/menu" element={<CountryRoute country="brasil"><Menu operationOverride="brasil" /></CountryRoute>} />
        <Route path="/brasil/blog" element={<CountryRoute country="brasil"><Blog operationOverride="brasil" /></CountryRoute>} />
        <Route path="/brasil/blog/:slug" element={<CountryRoute country="brasil"><BlogPostPage operationOverride="brasil" /></CountryRoute>} />
        <Route path="/brasil/about" element={<CountryRoute country="brasil"><About operationOverride="brasil" /></CountryRoute>} />
        <Route path="/brasil/franchise" element={<CountryRoute country="brasil"><Franchise operationOverride="brasil" /></CountryRoute>} />
        <Route path="/uruguai/menu" element={<CountryRoute country="uruguai"><Menu operationOverride="uruguai" /></CountryRoute>} />
        <Route path="/uruguai/blog" element={<CountryRoute country="uruguai"><Blog operationOverride="uruguai" /></CountryRoute>} />
        <Route path="/uruguai/blog/:slug" element={<CountryRoute country="uruguai"><BlogPostPage operationOverride="uruguai" /></CountryRoute>} />
        <Route path="/uruguai/about" element={<CountryRoute country="uruguai"><About operationOverride="uruguai" /></CountryRoute>} />
        <Route path="/uruguai/franchise" element={<CountryRoute country="uruguai"><Franchise operationOverride="uruguai" /></CountryRoute>} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/reserve" element={<Reserve />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <OperationProvider>
        <QueryClientProvider client={queryClientInstance}>
          <Router>
            <AuthenticatedApp />
          </Router>
          <Toaster />
        </QueryClientProvider>
      </OperationProvider>
    </AuthProvider>
  )
}

export default App