const initState = [
  {
    label: "All",
    selected: true
  },
  {
    label: "Completed",
    selected: false
  },
  {
    label: "Active",
    selected: false
  }
];

const filters = (state = initState, action) => {
  switch (action.type) {
    case "SWITCH_FILTER":
      return state.map(item => {
        if (item.label === action.data) {
          return {
            label: item.label,
            selected: true
          };
        }
        return {
          label: item.label,
          selected: false
        };
      });
    default:
      return state;
  }
};

export default filters;
