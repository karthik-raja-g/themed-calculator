const keys = [
  {
    text: "7",
    value: "7",
  },
  {
    text: "8",
    value: "8",
  },
  {
    text: "9",
    value: "9",
  },
  {
    text: "DEL",
    value: "del",
  },
  {
    text: "4",
    value: "4",
  },
  {
    text: "5",
    value: "5",
  },
  {
    text: "6",
    value: "6",
  },
  {
    text: "+",
    value: "plus",
  },
  {
    text: "1",
    value: "",
  },
  {
    text: "2",
    value: "2",
  },
  {
    text: "3",
    value: "3",
  },
  {
    text: "-",
    value: "-",
  },
  {
    text: ".",
    value: ".",
  },
  {
    text: "0",
    value: "0",
  },
  {
    text: "/",
    value: "/",
  },
  {
    text: "x",
    value: "*",
  },
  {
    text: "RESET",
    value: "function",
  },
  {
    text: "=",
    value: "result",
  },
];

const visibleKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const mathOperators = ["*", "/", "+", "-"];
const operationKeys = ["=", "r", "R"];
const clearKeys = ["Backspace", "Delete"];

module.exports = {
  keys,
  visibleKeys,
  operationKeys,
  mathOperators,
  clearKeys
};
