import { ConsultationPageConfig } from '../../types';
import { strategicAccelerationConfig } from './strategic-acceleration';
import { operationalExcellenceConfig } from './operational-excellence';
import { financialArchitectureConfig } from './financial-architecture';
import { marketDominationConfig } from './market-domination';

// Single source of truth for consultation slug -> config, mirroring data/services/index.ts
// so nav/breadcrumb/related-module labels never drift out of sync with each page's own h1.
export const consultationPageConfigs: Record<string, ConsultationPageConfig> = {
  'strategic-acceleration': strategicAccelerationConfig,
  'operational-excellence': operationalExcellenceConfig,
  'financial-architecture': financialArchitectureConfig,
  'market-domination': marketDominationConfig
};
