import logo from './logo.svg';
import './App.css';
import { ToastWrapper } from './components/ToastWrapper/ToastWrapper';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <div className={`App dark:bg-darkBlack`}>
      <ToastWrapper/>
      <AppRoutes/>
    </div>
  );
}

export default App;
