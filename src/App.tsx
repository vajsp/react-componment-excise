import './styles/index.scss';
import Button from './components/Button/button';
import { Menu } from './components/Menu/menu';
import { MenuItem } from './components/Menu/menulItem';
import { SubMenu } from './components/Menu/subMenu';
import Icon from './components/Icon/icon';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

function App() {
  return (
    <div className="App">
      <Icon icon="coffee" theme="danger" size={`10x`}></Icon>

      <Menu
        defaultIndex={'0'}
        onSelect={(index) => {
          alert(index);
        }}
        // mode="vertical"
        defaultOpenSubMenus={['3']}
      >
        <MenuItem>cool link</MenuItem>
        <MenuItem disabled>cool link</MenuItem>
        <MenuItem>cool link</MenuItem>
        <SubMenu title="下拉">
          <MenuItem>cool link1</MenuItem>
          <MenuItem>cool link2</MenuItem>
        </SubMenu>
      </Menu>

      <Button className="nihao" disabled>
        Hello
      </Button>
      <Button
        btnType="primary"
        size="lg"
        autoFocus
        onClick={() => {
          alert(123);
        }}
      >
        Hello
      </Button>
      <Button btnType="link" href="https://www.baidu.com">
        Hello
      </Button>
    </div>
  );
}

export default App;
