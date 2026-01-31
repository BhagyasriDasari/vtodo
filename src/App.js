import TodoApp from "./components/Todo/TodoApp";
import UserForm from "./components/Forms/UserForm";
import MultiProgressBar from "./components/Progress/MultiProgressBar";
import CountdownTimer from "./components/Timer/CountdownTimer";
import SearchList from "./components/Search/SearchList";


function App() {
  return (
    <div className="container">
      <h1>TODO APP</h1>
      <TodoApp />
      <UserForm />
      <MultiProgressBar />
      <CountdownTimer />
      <SearchList />
    </div>
  );
}

export default App;
