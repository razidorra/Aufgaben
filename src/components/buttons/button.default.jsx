export function ButtonDefault({ clickHandler, text, isDisabled = false }) {
  return (
    <button
      className="btn btn-primary"
      onClick={clickHandler}
      disabled={isDisabled}
      type="button"
    >
      {text}
    </button>
  );
}
