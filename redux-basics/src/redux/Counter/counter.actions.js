//create action types
const DECR = "DECR";
const INCR = "INCR";
//create actions

let incrAction = () => {
  return { type: INCR };
};

let decrAction = () => {
  return { type: DECR };
};

//export action types and actions.
export { DECR, INCR, incrAction, decrAction };

//objective of action.js ie

/*
    return actionable object {}, it contains one property ie type, payload
*/
