import React from 'react';
import { Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectToughTask, selectEasyTask } from '../redux/actions/index';

const Start = () => {
  const dispatch = useDispatch();

  return (
    <Route
      render={() =>
        (
          <div className="start">
            <h1 className="start__welcome">Welcome!</h1>
            <p className="start__question">So, how are you feeling today?</p>
            <div className="start__btnContainer">
              <Link to="/tasks">
                <button
                  onClick={() => dispatch(selectToughTask())}
                  className="start__choice"
                  type="button"
                >
                  Life is wonderful, but I need enlightment!
                </button>
              </Link>
              <Link to="/tasks">
                <button
                  onClick={() => dispatch(selectEasyTask())}
                  className="start__choice"
                  type="button"
                >
                  I'm sad. Please enlighten me.
                </button>
              </Link>
            </div>
          </div>
        )
      }
    />
  );
};

export default Start;
