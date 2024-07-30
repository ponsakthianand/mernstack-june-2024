const ButtonComponent = ({ buttonName, buttonHandler }) => {
  return (
    <div>
      <button onClick={() => buttonHandler()}>
        {buttonName.length ? buttonName : 'No name'}
      </button>
    </div>
  );
};

export default ButtonComponent;
