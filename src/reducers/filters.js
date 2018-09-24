// @flow
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

type State = Array<{
  label: string,
  selected: boolean
}>;

const getFilterResults = (state: State, label: string): State => {
  return state.map(item => {
        if (item.label === label) {
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
}

const filters = (state: State = initState, action: any) => {
  switch (action.type) {
    case "SWITCH_FILTER":
      return getFilterResults(state, action.data);
    default:
      return state;
  }
};

export default filters;
