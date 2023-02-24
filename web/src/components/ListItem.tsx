import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import React, { forwardRef, Ref } from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  children?: React.ReactNode;
  title: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const ListItem = forwardRef<HTMLAnchorElement, Props>(
  ({ className, children, title, ...props }, ref: Ref<HTMLAnchorElement>) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames('ListItemLink', className)}
          {...props}
          ref={ref}
        >
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default ListItem;