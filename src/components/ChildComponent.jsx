const ChildComponent = ({ increment }) => {
  return (
    <div>
      <button onClick={increment}>Increment Value</button>
    </div>
  );
};

export default ChildComponent;
