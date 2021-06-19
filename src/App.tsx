import './styles/index.scss';
import Button from './components/Button/button';

function App() {
  return (
    <div className="App">
      <Button className="nihao" disabled>Hello</Button>
      <Button btnType='primary' size='lg' autoFocus onClick={() => {
        alert(123)
      }}>
        Hello
      </Button>
      <Button btnType='link' href="https://www.baidu.com">
        Hello
      </Button>
    </div>
  );
}

export default App;
