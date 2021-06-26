import React from 'react';
import {
  cleanup,
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react';
import { Menu, MenuProps } from './menu';
import { MenuItem } from './menulItem';
import { SubMenu } from './subMenu';

const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test',
};

const testVerProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical',
};

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>xyz</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>drop1</MenuItem>
        <MenuItem>cool link2</MenuItem>
      </SubMenu>
    </Menu>
  );
};

const createStyleFile = () => {
  const cssFile: string = `
    .viking-submenu {
      display: none;
    }
    .viking-submenu.menu-opened {
      display:block;
    }
  `;
  const style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = cssFile;
  return style;
};

let wrapper: RenderResult,
  wrapper2: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;

describe('ceshi', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    wrapper.container.append(createStyleFile());
    // wrapper.container.getElementsByClassName
    menuElement = wrapper.getByTestId('test-menu');
    activeElement = wrapper.getByText('active');
    disabledElement = wrapper.getByText('disabled');
  });
  test('ui测试，测试default', () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('viking-menu test');
    // expect(menuElement.getElementsByTagName('li').length).toEqual(3);
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4);
    expect(activeElement).toHaveClass('menu-item is-active');
    expect(disabledElement).toHaveClass('menu-item is-disabled');
  });
  test('行为测试，测试点击改变active和回调执行', () => {
    const thirdItem = wrapper.getByText('xyz');
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass('is-active');
    expect(activeElement).not.toHaveClass('is-active');
    expect(testProps.onSelect).toHaveBeenCalledWith('2');
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass('is-active');
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1');
  });
  test('特殊情况测试,测试vertiacl模式下，mode应该是vertical', () => {
    // 删除多创建额节点
    cleanup();
    const wrapper = render(generateMenu(testVerProps));
    const menuElement = wrapper.getByTestId('test-menu');
    expect(menuElement).toHaveClass('menu-vertical');
  });

  it('测试submenu', async () => {
    expect(wrapper.queryByText('drop1')).not.toBeVisible();
    const dropdownElement = wrapper.getByText('dropdown');
    fireEvent.mouseEnter(dropdownElement);
    await waitFor(() => {
      expect(wrapper.queryByText('drop1')).toBeVisible();
    });
    fireEvent.click(wrapper.getByText('drop1'));
    expect(testProps.onSelect).toHaveBeenCalledWith('3-0');
    fireEvent.mouseLeave(dropdownElement);
    await waitFor(() => {
      expect(wrapper.queryByText('drop1')).not.toBeVisible();
    });
  });
});

describe('test Menu and MenuItem component in vertical mode', () => {
  beforeEach(() => {
    wrapper2 = render(generateMenu(testVerProps));
    wrapper2.container.append(createStyleFile());
  });
  it('should render vertical mode when mode is set to vertical', () => {
    const menuElement = wrapper2.getByTestId('test-menu');
    expect(menuElement).toHaveClass('menu-vertical');
  });
  it('should show dropdown items when click on subMenu for vertical mode', () => {
    const dropDownItem = wrapper2.queryByText('drop1');
    expect(dropDownItem).not.toBeVisible();
    fireEvent.click(wrapper2.getByText('dropdown'));
    expect(dropDownItem).toBeVisible();
  });
  it('should show subMenu dropdown when defaultOpenSubMenus contains SubMenu index', () => {
    expect(wrapper2.queryByText('opened1')).toBeVisible();
  });
});
