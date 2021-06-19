import './styles/index.scss';
import Button, { ButtonType, ButtonSize } from './components/Button/button';


function App() {
  return (
    <div className="App">
      <Button disabled>Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
      <Button btnType={ButtonType.Link} href='https://www.baidu.com' disabled>Hello</Button>
    </div>
  );
}

export default App;
