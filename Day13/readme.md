### Dynamic Imports:
```// main.js
async function loadModule() {
    const { add } = await import('./mathUtils.js');
    console.log(add(2, 3)); // Output: 5
}

loadModule();```

### Importing with Alisas
```
// main.js
import { add as sum, subtract as diff } from './mathUtils.js';

console.log(sum(2, 3)); // Output: 5
console.log(diff(5, 2)); // Output: 3
```