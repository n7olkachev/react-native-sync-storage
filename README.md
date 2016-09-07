# react-native-sync-storage

It is simple wrapper around `AsyncStorage` with sync `get`, `set`, `remove` methods and background syncing with `AsyncStorage`.

# Usage

```js
import storage from 'react-native-sync-storage'

...
await storage.init // somewhere where you can wait for loading storage
...
storage.get('property')
storage.set('property', 2333)
storage.remove('property')
```
Note that `set` and `remove` methods return promise which is resolved on syncing with `AsyncStorage`.
