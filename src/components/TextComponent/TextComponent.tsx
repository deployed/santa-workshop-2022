type InputTypes = {
  children: number | string;
};

const TextComponent = ({ children }: InputTypes) => {
  return <span>{children}</span>;
};

export default TextComponent;
