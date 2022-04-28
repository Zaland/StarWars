import { StarWarService } from "./services";

export const App = () => {
  const handleClick = async () => {
    const test = await StarWarService.getPerson(1);
    console.log({ test });
  };
  return <button onClick={handleClick}>Hello</button>;
};
