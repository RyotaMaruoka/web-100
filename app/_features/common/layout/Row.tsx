import React, { CSSProperties, FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  // layout
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  spacing?: number;
};

export const Row: FC<Props> = ({
  children,
  justifyContent = 'center',
  alignItems = 'center',
  spacing = 0,
}) => {
  const containerStyle: CSSProperties = {
    flexDirection: 'row',
    justifyContent,
    alignItems,
  };

  const itemStyle = {
    marginLeft: spacing * 3,
  };

  const childrenArray = React.Children.map(children, (child, index) => {
    return (
      <div key={index} style={index !== 0 ? itemStyle : {}}>
        {child}
      </div>
    );
  });

  return <div style={containerStyle}>{childrenArray}</div>;
};
