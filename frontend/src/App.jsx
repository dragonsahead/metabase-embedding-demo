import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import InteractiveEmbedding from './pages/InteractiveEmbedding';
import InteractiveQueryBuilder from './pages/InteractiveQueryBuilder';
import StaticDashboard from './pages/StaticDashboard';
import StaticCard from './pages/StaticCard';
import SDKQueryBuilder from './pages/SDKQueryBuilder';
import SDKStaticQuestion from './pages/SDKStaticQuestion';
import SDKInteractiveQuestion from './pages/SDKInteractiveQuestion';
import SDKInteractiveDashboard from './pages/SDKInteractiveDashboard';
import SDKStaticDashboard from './pages/SDKStaticDashboard';
import EmbeddedAnalyticsJS from './pages/EmbeddedAnalyticsJS';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interactive_embedding" element={<InteractiveEmbedding />} />
          <Route path="/static_dashboard" element={<StaticDashboard />} />
          <Route path="/static_question" element={<StaticCard />} />
          <Route path="/sdk_interactive_dashboard" element={<SDKInteractiveDashboard />} />
          <Route path="/sdk_static_dashboard" element={<SDKStaticDashboard />} />
          <Route path="/sdk_interactive_question" element={<SDKInteractiveQuestion />} />
          <Route path="/sdk_static_question" element={<SDKStaticQuestion />} />
          <Route path="/interactive_question_builder" element={<InteractiveQueryBuilder />} />
          <Route path="/sdk_query_builder" element={<SDKQueryBuilder />} />
          <Route path="/embedded_analytics_js" element={<EmbeddedAnalyticsJS />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;