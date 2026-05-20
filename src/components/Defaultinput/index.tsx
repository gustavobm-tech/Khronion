type DefaultInput = { id: string } & React.ComponentProps<"input">;

export const DefaultInput = ({ id, type }: DefaultInput) => {
  return (
    <>
      <label htmlFor={id}>Task</label>
      <input id={id} type={type}></input>
    </>
  );
};
