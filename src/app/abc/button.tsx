import {create} from "./action";

export const Button = () => {
  return (
    <button
      onClick={async () => {
        await create();
      }}
    >
      button
    </button>
  );
};
