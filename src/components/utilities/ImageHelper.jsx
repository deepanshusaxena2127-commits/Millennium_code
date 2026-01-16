import React from 'react';

export const getPageImage = (slug, type) => {
  // Solutions
  if (type === 'solutions') {
    switch (slug) {
      case 'ai-data-annotation':
        return <img alt="Data annotation specialist using bounding box tools on multiple screens" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1493146292226-69676b01caf5" />;
      case 'llm-training':
        return <img alt="Visual representation of neural network nodes being tuned by human feedback" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1700941019917-731dc64ce685" />;
      case 'human-in-the-loop':
        return <img alt="Diverse team of humans working alongside AI interfaces" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1702047063975-0841a0621b5a" />;
      case 'quality-assurance':
        return <img alt="Magnifying glass focusing on data quality metrics dashboard" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1625296276703-3fbc924f07b5" />;
      case 'end-to-end-dev':
        return <img alt="Software engineers coding AI pipelines in a modern office" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1565841327798-694bc2074762" />;
      default:
        return <img alt="Advanced AI technology concept" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1617791160536-598cf32026fb" />;
    }
  }

  // Industries
  if (type === 'industries') {
    switch (slug) {
      case 'automotive':
        return <img alt="Autonomous car sensors viewing the road with lidar visualization" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1697766604566-0c77a8271b96" />;
      case 'healthcare':
        return <img alt="Radiologist reviewing AI-analyzed medical scans" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581595219315-a187dd40c322" />;
      case 'finance':
        return <img alt="Digital financial charts and fraud detection alerts" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620266757065-5814239881fd" />;
      case 'ecommerce':
        return <img alt="Online shopping interface with recommendation engine visualization" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0" />;
      case 'agriculture':
        return <img alt="Drone flying over crop field scanning plant health" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1594795200715-8e15ca7f869e" />;
      case 'retail':
        return <img alt="Heatmap overlay on a retail store floor plan" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1637666495020-0740caec198a" />;
      case 'manufacturing':
        return <img alt="Robotic arm on assembly line with computer vision camera" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1698995474536-a354dc7397d8" />;
      case 'logistics':
        return <img alt="Automated warehouse robots sorting packages" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1699549196390-e31bfc88536d" />;
      case 'security':
        return <img alt="Security monitor wall showing multiple camera feeds with detection boxes" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1702585873324-8780b86fa4e0" />;
      case 'media':
        return <img alt="Video editing timeline with automated tags" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1696389500310-cd6d247cb609" />;
      case 'legal':
        return <img alt="Lawyer reviewing digital contracts with highlighted text" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1592148474062-ef4fe8b88408" />;
      case 'education':
        return <img alt="Student using tablet with adaptive learning software" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1576870397449-6ef1af18beb4" />;
      default:
        return <img alt="Modern industry building" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472223465918-0baab294a3c8" />;
    }
  }

  // Company
  if (type === 'company') {
    switch (slug) {
      case 'about':
        return <img alt="Modern office interior with MillenniumAI branding" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1565262353342-6e919eab5b58" />;
      case 'leadership':
        return <img alt="Diverse group of business leaders in a conference room" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1622675205169-901710ac8643" />;
      case 'global-delivery':
        return <img alt="World map with connected nodes showing global presence" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1585858229735-cd08d8cb510d" />;
      case 'security':
        return <img alt="Cybersecurity shield lock icon with binary code background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1643101450344-f1f3dcde2411" />;
      case 'governance':
        return <img alt="Scales of justice digital concept for AI ethics" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9" />;
      case 'partnerships':
        return <img alt="Two business people shaking hands with digital overlay" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1696861273647-92dfe8bb697c" />;
      case 'careers':
        return <img alt="Happy employees working together in an open plan office" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378" />;
      default:
        return <img alt="Company office building" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1631498539536-54cd61318e4d" />;
    }
  }

  // Insights
  if (type === 'insights') {
    switch (slug) {
      case 'operations':
        return <img alt="Complex data pipeline visualization" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1619107278445-1c70db80eb9d" />;
      case 'llm-best-practices':
        return <img alt="AI researcher working with large language models" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1677691824518-eebbab3a6c6d" />;
      case 'modern-dev':
        return <img alt="Agile kanban board on a digital screen" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1529477134574-5289b7ee6635" />;
      default:
        return <img alt="Abstract technology background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1675361770627-763fd7dc3e6f" />;
    }
  }

  // Work
  if (type === 'work') {
    switch (slug) {
      case 'operations-projects':
        return <img alt="Large scale data center interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1607255443262-d74caab0c945" />;
      case 'llm-work':
        return <img alt="Code on screen being analyzed by AI" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1591206246016-b4355bcd5f93" />;
      case 'end-to-end':
        return <img alt="End to end development lifecycle diagram" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555121638-bb997817a76d" />;
      default:
        return <img alt="Portfolio project showcase" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1688760871131-29afc15029ec" />;
    }
  }

  return <img alt="Default placeholder" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560510368-611be7ca72cd" />;
};
