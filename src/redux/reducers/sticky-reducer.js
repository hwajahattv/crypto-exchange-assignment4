const defaultNotes = [
  {
    title: "Remember to take interview",
    description: "Interview to conduct at 3.30PM on Thursday.",
  },
  {
    title: "Learn ReactJS Course",
    description: "Start learning reactjs course for 2 days.",
  },
  {
    title: "Have a coffee with friend",
    description: "Have a coffee at your favourite cafe after dinner.",
  },
  {
    title: "Go for car repairing",
    description: "Visit car showroom to fix brake system issue.",
  },
  {
    title: "Review confluence documents",
    description: "Check documents to learn project",
  },
  {
    title: "Go for car repairing",
    description: "Visit car showroom to fix brake system issue.",
  },
  {
    title: "Remember to take interview",
    description: "Interview to conduct at 3.30PM on Thursday.",
  },
  {
    title: "Review confluence documents",
    description: "Check documents to learn project",
  },
];

const initialState = {
  notes: defaultNotes,
};

const stickyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...state,
        notes: [...state.notes, action.payload?.note],
      };
    case 'REMOVE_NOTE':
      const updatedNotes = [...state.notes];
      updatedNotes.splice(action?.payload?.lindex, 1);
      return {
        ...state,
        notes: updatedNotes,
      };
    default:
      return state;
  }
};

export default stickyReducer;
