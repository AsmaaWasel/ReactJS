interface Iprops {
  msg: string;
}

const ErrorMessage = ({ msg }: Iprops) => {
  return (
    <span className="block text-red-700 font-semibold text-sm">{msg}</span>
  );
};

export default ErrorMessage;
