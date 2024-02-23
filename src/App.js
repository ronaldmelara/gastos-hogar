import logo from './logo.svg';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import './App.css';
import AppRouter from './router/AppRouter';
import { DashboardPage } from './pages/DashboardPage';

function App() {
  return (
   <DashboardPage/>
  );
}

export default App;
