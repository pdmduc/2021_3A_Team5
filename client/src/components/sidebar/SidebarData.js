import React, { useState } from 'react';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io';

export const SlidebarData = [
  {
    title: 'Strategy Overview',
    path: '/strategyoverview',
    icon: <BsIcons.BsLayersFill />,
    cName: 'sidebar-nav-text',
  },
  {
    title: 'Create New Strategy',
    path: '/createstrategy',
    icon: <IoIcons.IoIosCreate />,
    cName: 'sidebar-nav-text',
  },
  {
    title: 'Saved Strategy',
    path: '/savedstrategy',
    icon: <RiIcons.RiFoldersFill />,
    cName: 'sidebar-nav-text',
  },
];

export default SlidebarData;
