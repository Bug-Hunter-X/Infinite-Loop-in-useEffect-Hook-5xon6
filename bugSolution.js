```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The effect now runs only once after the initial render
    console.log('Effect ran only once');
  }, []);

  return <div>Count: {count}</div>;
}
```