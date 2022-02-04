import { useEffect, useState } from 'react';

export type IconLinkProps = {
  src: string;
  alt?: string;
};

export const IconLink = ({ src, alt = 'link' }: IconLinkProps) => {
  const [icon, setIcon] = useState('');
  useEffect(() => {
    try {
      const url = new URL(src);
      setIcon(`${url.origin}/favicon.ico`);
    } catch (err) {
      console.error(err);
    }
  }, [src]);
  return (
    <a href={src} target='_blank' rel='noreferrer'>
      <img src={icon} alt={alt} />
    </a>
  );
};
