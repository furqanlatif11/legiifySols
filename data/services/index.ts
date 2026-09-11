import { ServicePageConfig } from '../../types';
import { taxPlanningConfig } from './tax-planning';
import { financialAnalysisConfig } from './financial-analysis';
import { virtualCfoConfig } from './virtual-cfo';
import { taxResolutionConfig } from './tax-resolution';
import { successionPlanningConfig } from './succession-planning';

// Single source of truth for service slug -> config, so page titles (e.g. breadcrumbs,
// related-service links) never drift out of sync with each service's own h1/metaTitle.
export const servicePageConfigs: Record<string, ServicePageConfig> = {
  'tax-planning': taxPlanningConfig,
  'financial-analysis': financialAnalysisConfig,
  'virtual-cfo': virtualCfoConfig,
  'tax-resolution': taxResolutionConfig,
  'succession-planning': successionPlanningConfig
};
