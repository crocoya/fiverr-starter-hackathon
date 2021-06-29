import MainRouter from './components/routers/MainRouter';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />

      <MainRouter>
        <div className="App"></div>
      </MainRouter>
    </>
  );
}

export default App;
