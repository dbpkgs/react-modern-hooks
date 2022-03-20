# `useFullScreen`

Hook to toggle a given HTMLElement to fullscreen and exit fullscreen

## Usage

```jsx
import { useFullScreen } from 'react-modern-hooks';

const App = () => {
  const ref = useRef(null);
  const { fullScreen, open, close, toggle, error } = useFullScreen();

  return (
    <div>
      <div> Other content</div>
      <div ref={ref}>
        <button onClick={() => toggle()}>Toggle fuulscreen</button>
        <h1>Open fullscreen</h1>
      </div>
    </div>
  );
};
```

## References

### Input Variables

`ref` - A HTMLElement ref object to toggle to fullscreen<br/>
`onExit` - A callback function to run when exiting fullscreen

### Output Variables

`fullScreen` - A boolean value to show if fullscreen or not<br/>
`open` - A function to open fullscreen window<br/>
`close` - A function to close/exit fullscreen window<br/>
`toggle` - A function to toggle from open fullscreen and close/exit fullscreen<br/>
`error` - An error message incase something doesn't go right on opening/closing fullscreen
