import './styles/index.scss';
import Button, { ButtonType, ButtonSize } from './components/Button/button';

function App() {
  return (
    <div className="App">
      <Button className="nihao" disabled>Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large} autoFocus onClick={() => {
        alert(123)
      }}>
        Hello
      </Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com">
        Hello
      </Button>
    </div>
  );
}

export default App;
