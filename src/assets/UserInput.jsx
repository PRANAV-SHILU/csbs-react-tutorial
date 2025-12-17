// used in V40 
export default function UserInput(props) {
  return (
    <div>
      <input type="text" ref={props.ref} placeholder="Input field" />
    </div>
  );
}
