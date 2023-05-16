import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import LineGraph from "../graph"

export default function ExpenseTracker() {
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    id: "1", // Only one id for the user
    date: "",
    amount: 0,
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  const handleAddExpense = () => {
    const updatedExpenses = [...expenses, newExpense];
    setExpenses(updatedExpenses);
    setNewExpense({
      ...newExpense,
      date: "",
      amount: 0,
      category: "",
    });
    navigate("/graph");
  };

  const handleDeleteExpense = (expenseId) => {
    const expenseIndex = expenses.findIndex(
      (expense) => expense.id === expenseId
    );

    if (expenseIndex !== -1) {
      const updatedExpenses = [...expenses];
      updatedExpenses.splice(expenseIndex, 1);
      setExpenses(updatedExpenses);
    }
  };
  return (
    <Box p={4}>
      <Heading mb={4}>Expense Tracker</Heading>
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Date</FormLabel>
          <Input
            type="date"
            name="date"
            value={newExpense.date}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Amount</FormLabel>
          <Input
            type="number"
            name="amount"
            value={newExpense.amount}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Category</FormLabel>
          <Input
            type="text"
            name="category"
            value={newExpense.category}
            onChange={handleInputChange}
          />
        </FormControl>
        <Button onClick={handleAddExpense} colorScheme="blue">
          Add Expense
        </Button>
        <Box>
          {expenses.map((expense) => (
            <Flex
              key={expense.id}
              alignItems="center"
              justifyContent="space-between"
              borderWidth="1px"
              borderRadius="md"
              p={2}
            >
              <Flex direction="column">
                <Text>Date: {expense.date}</Text>
                <Text>Category: {expense.category}</Text>
                <Text>Amount: ${expense.amount}</Text>
              </Flex>
              <Button
                size="sm"
                colorScheme="red"
                onClick={() => handleDeleteExpense(expense.id)}
              >
                Delete
              </Button>
            </Flex>
          ))}
        </Box>
      </VStack>
      <LineGraph expenses={expenses} />
    </Box>
  );
}
