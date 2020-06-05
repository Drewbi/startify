import { useRouter } from 'next/router';

export interface ParamData {
  seed: number;
  t: number;
}
export const routeParams = (): ParamData => {
  const router = useRouter();

  const { seed, t } = router.query;
  return {
    seed: +seed,
    t: +t,
  };
};
