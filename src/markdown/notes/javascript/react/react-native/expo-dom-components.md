---
title: "Expo Dom Components"
date: "2024-12-11"
draft: false
---

- Safari debug tools for iOS simulator. Found under the **Develop** tab in Safari.
- Shift + M in Expo CLI for **Dev tools**
- **expo-atlas** - useful for checking bundle size and what JavaScript gets compiled to.
- Zero config. Most other configs still just work.

## Lightning Round

Things being done with Expo Dom Components:

- Mdx compatible
- Flow charts with **@xyflow/react**
- Custom emoji picker with **emoji-mart/react**
- Image cropping with **react-mobile-cropper**
- WebGL and 3D with **THREE.js**
- Editing complex text with **@tiptap/react**

## Expo Tree Shaking

Perform a recursive search on all unused dependencies and remove them from the final compiled bundle.

- Unused imports and exports
- Barrel file optimizations
- Module re-exports
- Package.json side-effects
- Platform-specific minification
- Unused server code
- Empty modules
- Side-effecty imports

## Resources

[Web Once, Native Everywhere: Introducing Expo DOM Components — Evan Bacon | RUC 2024](https://www.youtube.com/watch?v=JUOxTLu8ZsM&ab_channel=CallstackEngineers)
