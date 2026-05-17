import { useWindowDimensions } from 'react-native';

export function useResponsive() {
  const { width, height } = useWindowDimensions();
  const compact = height < 760;
  const narrow = width < 360;
  const contentWidth = Math.min(width, 390);

  return {
    width,
    height,
    compact,
    narrow,
    contentWidth,
  };
}
