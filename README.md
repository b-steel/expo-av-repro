# expo-av-repro

The `onPlaybackStatusUpdate` function should be called every 500ms (default value). When the app is run on an iOS simulator of phone (have not tried on android), with `yarn start`, the count is incremented every time the callback is fired. However, if remote debugging is turned on then the callback is not called.

Steps

1. `yarn install`
2. `yarn start`
3. Press the 'play' button, watch the count increment
4. Turn on remote debugging, refresh app, press 'play', count does not increment except when the butttons are pressed (triggering the callback)
