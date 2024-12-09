---
title: "Expo SDK 52"
date: "2024-12-08"
draft: false
---

## The Rollout

- The New Architecture is now enabled by default for all new projects.
- Projects that are upgrading from a previous version of the SDK can opt in to the New Architecture
- Expo Go for SDK 52 and higher will only support the New Architecture.

## The Testing

- Ensure that you use the latest version of all third-party native libraries.
- Run **npx expo-doctor@latest** in your SDK 52 project to find any library incompatibilities that may cause issues when migrating.

## The Sweetness

- iOS deployment target bumped from 13.4 to iOS 15.1.
- Android **minSdkVersion** and **compileSdkVersion** bumped from 23 to 24 and 34 to 35 respectively.
- Stable release of the new **expo-video** library. Added a utility for generating video thumbnails. [expo-video Docs](https://docs.expo.dev/versions/v52.0.0/sdk/video/)
- Beta release of the new **expo-audio** library. [expo-audio Docs](https://docs.expo.dev/versions/v52.0.0/sdk/audio/)
- Beta release of **expo-file-system/next**. This enables synchronous read/write operations, using **SharedObjects** to represent files and directories. [expo-file-system Docs](https://docs.expo.dev/versions/v52.0.0/sdk/filesystem-next/)
- Many improvements to **expo-camera**. Switched to using Swift Concurrency, which improves the camera configuration setup reliability compared to using dispatch queues.
- New **expo-live-photo** library _(iOS only)_. [expo-live-photo Docs](https://docs.expo.dev/versions/v52.0.0/sdk/live-photo/)

[Expo SDK 52 | Expo Changelog](https://expo.dev/changelog/2024/11-12-sdk-52)
