import React, { FC, useState, useRef, useEffect } from 'react';
import { Box, BoxType, Image, Text } from '@app/components/basic';
import { useTheme } from '@theme';

interface AvatarProps extends BoxType {
  src?: string;
  alt?: string;
  size: number;
  isOutline?: boolean;
  isBold?: boolean;
  fontSize?: string;
}

export const Avatar: FC<AvatarProps> = ({
  src,
  p,
  borderWidth,
  isOutline,
  alt,
  size,
  borderColor,
  fontSize,
  isBold,
  ...props
}) => {
  const [loaded, setLoaded] = useState(true);
  const image = useRef<HTMLImageElement>(null);
  const { colors } = useTheme();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const img: HTMLImageElement = new window.Image();
      img.onerror = () => setLoaded(false);
      if (src) {
        img.src = src;
      } else {
        setLoaded(false);
      }
    }
  }, [src]);

  return (
    <Box
      width="auto"
      p={isOutline ? p : '0'}
      borderRadius="50%"
      borderStyle="solid"
      borderWidth={isOutline ? borderWidth : '0'}
      borderColor={borderColor}
      {...props}
    >
      <Box position="relative" width={`${size}px`} height={`${size}px`}>
        <Image
          display={!loaded ? 'none' : 'block'}
          ref={image}
          borderRadius="50%"
          src={src}
          alt={alt}
          onError={() => setLoaded(false)}
        />
        {!loaded && (
          <Box
            borderRadius="50%"
            position="absolute"
            top={0}
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg={colors.blueMain}
          >
            <Text
              fontSize={fontSize || '14px'}
              fontWeight={isBold ? 'bold' : 'normal'}
              color={colors.otherWhite}
            >
              {alt || ''}
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

Avatar.defaultProps = {
  p: '1px',
  borderWidth: '1px',
  borderColor: '#DF3A4D',
};
