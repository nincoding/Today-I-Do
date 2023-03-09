import DisplayTodos from '../components/DisplayTodos';
import Header from '../components/Header';
import TodaySection from '../components/TodaySection';
import Todos from '../components/Todos';

const Main = () => {
  return (
    <main>
      <Header />
      <TodaySection />
      <Todos />
      <DisplayTodos />
    </main>
  )
}

export default Main;