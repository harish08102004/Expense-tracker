import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function LineGraph({ expenses }) {
  const getParsedData = (_data) => {
    return _data.map((val) => ({
      date: val.date,
      amount: val.amount,
    }));
  };

  return (
    <Box>
      <Box
        bg={"white"}
        width={"647px"}
        p="10px"
        border="2px solid"
        color="black"
      >
        <LineChart
          width={600}
          height={300}
          data={getParsedData(expenses)}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amount" stroke="#8884d8" />
        </LineChart>
      </Box>
    </Box>
  );
}

LineGraph.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      amount: PropTypes.number,
    })
  ),
};
