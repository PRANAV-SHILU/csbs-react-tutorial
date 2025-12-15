# React + Vite

`Mount - npm run dev`

`Mount - When the component is rendered for the first time when window is loaded or refresh happens or mount the componet in DOM again such as conditional rendering (?: , &&).`

`Update - When the component is re-rendered due to state or props change.`

`Unmount - " When the component is removed from the DOM ". in useEffect return statement is used when unmount happens.`

```
1) What is a controlled component?
=> A controlled component is a component in which the form input field values are controlled by React state.
=> Benefits: Validation & manipulation before submitting, dynamic/currently updated values
=> Reference: V21, V22, V23

=> Example :
const [name, setName] = useState("");
<input value={name} onChange={e => setName(e.target.value)} />
```

```
2) What is the use of useEffect hook? what is side effects?
=> To avoid side effect of re-rendering
=> To call once per window loaded , []
=> To use every time after re-rendering
=> To use only when specific state or props changes , [dependencies]
=> We can also use it to re-run something everytime when some props are changed
=> You can use multiple useEffect in a single component.

=> Always use cleanup function , like for timers, event listeners, clearInterval() etc...
=> ex of side effects - A function that is called every time when component re-renders even we dont need to call taht function every time.
=> Reference: V25, V28

=> Example :
useEffect(() => {
  const id = setInterval(tick, 1000); // side effect (timer)
  return () => clearInterval(id);     // cleanup
}, []); // run once on mount
```
