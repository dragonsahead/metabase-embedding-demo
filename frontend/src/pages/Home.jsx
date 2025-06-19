import React from 'react';
import { ArrowRight, BarChart2, PieChart, AreaChart, ChartBarStacked, ChartCandlestick, ChartColumnStacked, ChartGantt, ChartLine, ChartNetwork } from 'lucide-react';

const Home = () => {
  return (
    <div className="px-6 py-8 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to your application</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          This would be your application, we're not using any embedding of Metabase yet. On the top bar you'll find the links to different embedding methods within Metabase.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 py-8">
        <FeatureCard 
          icon={<BarChart2 className="w-8 h-8 text-blue-500" />}
          title="Interactive embedding"
          description="This is an example of the entire Metabase App being embedded with interactive features."
          link="/interactive_embedding"
        />
        <FeatureCard 
          icon={<PieChart className="w-8 h-8 text-green-500" />}
          title="Static Dashboard"
          description="This is an example of a Metabase dashboard being embedded without any interactivity (only filters)."
          link="/static_dashboard"
        />
        <FeatureCard 
          icon={<AreaChart className="w-8 h-8 text-green-500" />}
          title="Static Question"
          description="This is an example of a Metabase Question being embedded without any interactivity (only filters)."
          link="/static_question"
        />
        <FeatureCard 
          icon={<ChartBarStacked className="w-8 h-8 text-red-500" />}
          title="SDK Static Dashboard"
          description="This is the same dashboard, but embedded using the SDK."
          link="/sdk_static_dashboard"
        />
        <FeatureCard 
          icon={<ChartCandlestick className="w-8 h-8 text-red-500" />}
          title="SDK Interactive Dashboard"
          description="This is the same dashboard, but embedded using the SDK."
          link="/sdk_interactive_dashboard"
        />
        <FeatureCard 
          icon={<ChartColumnStacked className="w-8 h-8 text-red-500" />}
          title="SDK Static Question"
          description="This is the same question, but embedded using the SDK."
          link="/sdk_static_question"
        />
        <FeatureCard 
          icon={<ChartGantt className="w-8 h-8 text-red-500" />}
          title="SDK Interactive Question"
          description="This is the same question, but embedded using the SDK."
          link="/sdk_interactive_question"
        />
        <FeatureCard 
          icon={<ChartLine className="w-8 h-8 text-purple-500" />}
          title="Interactive question builder"
          description="This is an example of Metabase being embedded interactively but controlling where the user can go. In this case, the GUI question builder."
          link="/interactive_question"
        />
        <FeatureCard 
          icon={<ChartNetwork className="w-8 h-8 text-purple-500" />}
          title="SDK Question Builder"
          description="This is an example of Metabase being embedded interactively but controlling where the user can go. In this case, the GUI question builder."
          link="/sdk_query_builder"
        />
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description, link }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="space-y-4">
        <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <a 
          href={link} 
          className="inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          Learn more 
          <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default Home;