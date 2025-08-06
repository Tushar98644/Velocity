import { RecentSales } from '@/features/overview/components/recent-sales';

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Sales() {
  await delay(3000);
  return <RecentSales />;
}
