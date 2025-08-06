import { AreaGraph } from '@/features/overview/components/area-graph';

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function AreaStats() {
  await await delay(2000);
  return <AreaGraph />;
}
