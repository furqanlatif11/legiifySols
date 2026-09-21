import React from 'react';

interface TechStackTool {
  name: string;
  certified?: boolean;
}

interface TechStackProps {
  tools?: TechStackTool[];
}

// Renders nothing if no real tools are listed.
const TechStack: React.FC<TechStackProps> = ({ tools }) => {
  if (!tools || tools.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-3">
      {tools.map((tool, i) => (
        <li key={i} className="bg-rule text-muted font-semibold text-sm px-4 py-2 rounded-lg">
          {tool.name}{tool.certified ? ' (Certified)' : ''}
        </li>
      ))}
    </ul>
  );
};

export default TechStack;
