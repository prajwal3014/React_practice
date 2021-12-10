import './App.css';
import TodoPage from './Pages/TodoPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Pages/Form';

function App() {
  return (
    <div>
      <Header/>

      <Form/>
      
      <TodoPage/>

      <Footer/>
    </div>
  );
}

export default App;
