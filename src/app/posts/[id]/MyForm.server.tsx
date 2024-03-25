export const submitAction = async () => {
  "use server";
  console.log("submitAction");
};

const MyForm = () => {
  return (
    <div className="mt-5">
      <form action={submitAction} className="border rounded px-3 py-2">
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default MyForm;
