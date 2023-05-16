import './App.css'
// import LineGraph from './components/graph';
import ExpenseTracker from "./components/pages/ExpenseTrackerPage";
import { BrowserRouter as Router } from "react-router-dom";
// import LineGraph from './components/graph';


export default function App() {
  // const [expenses ,setExpenses] = useState(expensedata.expenses)
  return (
    <>
      <Router>
        <ExpenseTracker />
        {/* <LineGraph /> */}
      </Router>
    </>
  );
}


