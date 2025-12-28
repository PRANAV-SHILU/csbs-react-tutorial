`References : `
`forwardRef for react19 - V40`
`useFormStatus - V41`
`useTransition - V42`
`useActionState - V48`
`useId - V49`
`useNavigate V59 - router`
`useParams V62Edit - router`
`context API - V52`
`custome hook - V53`
`useReducer - V67 - use when you need multiple useState - esspecially in form inputs`

`useRef gives you current object so always use ref.current. not ref.`

`API - Application Programming Interface - from V56`

```
1) What is a controlled component?
=> A controlled component is a component in which the form input field values are controlled by React "state".
=> Benefits: Validation & manipulation before submitting, dynamic/currently updated values
=> Reference: V21, V22, V23

=> Example :
const [name, setName] = useState("");
<input value={name} onChange={e => setName(e.target.value)} />
```

```
2)What is an uncontrolled component?
=> An uncontrolled component is a component in which the form input field values are handled by the DOM objects.
=> Even with useRef it is still uncontrolled component because the value is not controlled by React state.
=>Reference: V39
```

```
3) What is the use of useEffect hook? what is side effects?
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

```
4)What is forward ref?
=> forwardRef is a React function that allows you to pass a ref through a component to one of its children means one component to another component.
=> Reference: V40
```

```
5)What is pure component?
=> component that does not change any value whether it is variable or dom, it just works for themselves,
=> if there are any props passed to pure component and if those props are not changing then pure component will not re-render and gives the same output.
```

```
6)What is drived state?
=>State that is calculated or drived from other state values or props within your component
=> drived state can be a variable
=> drived - yes,  derived-no
```
