import { useState } from 'react';
import { Label, Button } from './Components/index';

const SimpleApp = () => {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Label value={'count:' + count} />
      <div>
        <Button type="button" clickHandler={() => setCount((prev) => prev + 1)} value="+" />
        <Button type="button" clickHandler={() => setCount((prev) => (prev > 0 ? prev - 1 : prev))} value="-" />
      </div>
    </main>
  );
};

export default SimpleApp;
