import * as React from 'react';

interface Props {
  isLoading: boolean;
  incrementPage: () => void;
  hasMore: boolean;
}

export const useInterSectionObserver = ({
  isLoading,
  incrementPage,
  hasMore,
}: Props) => {
  const observer = React.useRef<IntersectionObserver | undefined>(undefined);
  const lastElementRef = React.useCallback(
    node => {
      if (isLoading) {
        return;
      }

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          incrementPage();
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading, hasMore]
  );

  return { lastElementRef };
};
