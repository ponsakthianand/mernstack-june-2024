interface buttonPros {
  buttonName?: string
  buttonHandler: () => void
  username?: string
  age?: number
}

const ButtonComponent = (props: buttonPros) => {

  return (
    <div>
      <button onClick={() => props?.buttonHandler()}>
        {props?.buttonName?.length ? props?.buttonName : 'No name'}
      </button>
    </div>
  );
};

export default ButtonComponent;
