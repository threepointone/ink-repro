## reproduction of bug in 4.4.0

```bash
npm install
npm start
```

Expected: (with 4.3.1)

```
1. Press enter
Pressed
2. Press enter
Pressed
3. Press enter
Pressed
We got to the end!
```

Actual (with 4.4.0)

```
1. Press enter
Pressed
2. Press enter
Waiting to Press enter
// exits here
```
