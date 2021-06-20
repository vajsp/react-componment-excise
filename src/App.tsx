import './styles/index.scss';
import Button from './components/Button/button';
import { Menu } from './components/Menu/menu';
import { MenuItem } from './components/Menu/menulItem';

function App() {
  return (
    <div className="App">
      <Menu
        defaultIndex={0}
        onSelect={(index) => {
          alert(index);
        }}
      >
        <MenuItem index={1}>cool link</MenuItem>
        <MenuItem index={2} disabled>
          cool link
        </MenuItem>
        <MenuItem index={3}>cool link</MenuItem>
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
