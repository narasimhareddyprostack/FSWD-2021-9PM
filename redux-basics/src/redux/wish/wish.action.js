//create action types
const GOOD_MORNING = "GOOD_MORNING";
const GOOD_NIGHT = "GOOD_NIGHT";
//create actions
let sayGMAction = () => {
  return {
    type: GOOD_MORNING,
  };
};
let sayGNAction = () => {
  return {
    type: GOOD_NIGHT,
  };
};
//export action types and actions
export { GOOD_MORNING, GOOD_NIGHT, sayGMAction, sayGNAction };

//exported as named ie named export
