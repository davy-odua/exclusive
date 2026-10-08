function ColTitle({heading, paragraph, btn}) {
  return (
    <>
      <div className="col-title">
        <h2>{heading}</h2>
        <p>{paragraph}</p>
        <button>{btn}</button>
      </div>
    </>
  );
}

export default ColTitle;
