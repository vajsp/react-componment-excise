import classNames from 'classnames';
import React, { FunctionComponentElement } from 'react';
import { useContext } from 'react';
import { MenuContext } from './menu';
import { MenuItemProps } from './menulItem';

export interface SubMenuProps {
  index?: number;
  title: string;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = ({
  index,
  title,
  children,
  className,
}) => {
  const context = useContext(MenuContext);
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
  });

  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === 'MenuItem') {
        return childElement;
      } else {
        console.log('这不是MenuItem');
      }
    });

    return <ul className="viking-submenu">{childrenComponent}</ul>;
  };

  return (
    <li key={index} className={classes}>
      <div className="submenu-title">{title}</div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = 'SubMenu';

export { SubMenu };
