function FinishScreen({ score, maxScore, highscore, dispatch }) {
  const percentage = (score / maxScore) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{score}</strong> out of {maxScore} (
        {Math.ceil(percentage)}) %
      </p>
      <p className="highscore">High Score: {highscore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
