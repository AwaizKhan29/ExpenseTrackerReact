import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id : 'E1',
      title : "Toilet Paper",
      amount : 94.12,
      date : new Date(2020, 7, 14)
    },
    {
      id : 'E2',
      title : "Shrikhand",
      amount : 84.12,
      date : new Date(2020, 7, 15)
    },
    {
      id : 'E3',
      title : "Pasta",
      amount : 100,
      date : new Date(2020, 7, 18)
    }
  ]
  return (
    <div className="App">
      <ExpenseItem title = {expenses[0].title} amount = {expenses[0].amount} date = {expenses[0].date}></ExpenseItem>
      <ExpenseItem title = {expenses[1].title} amount = {expenses[1].amount} date = {expenses[1].date}></ExpenseItem>
      <ExpenseItem title = {expenses[2].title} amount = {expenses[2].amount} date = {expenses[2].date}></ExpenseItem>
    </div>
  );
}

export default App;
