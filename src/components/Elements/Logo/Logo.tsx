import clsx from 'clsx';

import defaultLogo from '@/assets/logo.svg';

export type LogoProps = {
  src?: string;
  spin?: boolean;
  [key: string]: unknown;
};

export const Logo = ({
  src = defaultLogo,
  spin = true,
  ...props
}: LogoProps) => {
  return (
    <img
      src={src}
      className={clsx('pointer-events-none', spin && 'animate-spin-slow')}
      alt='logo'
      {...props}
    />
  );
};
