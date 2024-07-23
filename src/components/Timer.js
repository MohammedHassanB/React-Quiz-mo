import { useEffect } from "react";

function Timer({ dispatch, remainigSeconds }) {
  const mins = Math.floor(remainigSeconds / 60);
  const secs = remainigSeconds % 60;
  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "timer" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 ? `0${mins}` : mins}:{secs < 10 ? `0${secs}` : secs}
    </div>
  );
}

export default Timer;
