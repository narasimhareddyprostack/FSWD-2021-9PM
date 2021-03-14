import React from "react";

import { useSelector, useDispatch } from "react-redux";
//use of useDispatch() hook method is -  to dispatch action

//import actions
import { incrAction, decrAction } from "../../redux/Counter/counter.actions";
let Counter = () => {
  let dispatch = useDispatch();

  //reading redux store state value

  let counterValue = useSelector((state) => {
    return state.counter;
  });
  let decrHandler = () => {
    //to Dispatch action
    dispatch(decrAction());
  };
  let incrHandler = () => {
    dispatch(incrAction());
  };
  return (
    <React.Fragment>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                Counter Example
                <pre>{JSON.stringify(counterValue)}</pre>
              </div>

              <div className="card-body">
                <button className="btn btn-success" onClick={decrHandler}>
                  -
                </button>
                Qty: {counterValue.counter.qty}
                <button className="btn btn-primary" onClick={incrHandler}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;
