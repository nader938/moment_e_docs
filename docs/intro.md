---
id: intro
title: moment·e
slug: /
---

# moment·e

**Research-grade EMA, built for the real world.**

moment·e is a mobile research application for iOS and Android built to support ecological momentary assessment (EMA) studies. It captures real-time data on mental health, behavior, and physiology — wherever participants are in their daily lives.

Developed by the **CUTA Lab at San Diego State University**.

---

## Quick links

| | |
|---|---|
| 📲 **[Install the App](./install)** | Download on iOS or Android |
| 📖 **[Using the App](./using)** | Signing in, completing tasks, notifications |
| 📱 **[App Screens](./screens)** | Visual guide to every button and screen |
| 📚 **[Modules](./modules)** | Distress Tolerance, Mindfulness, and more |
| 🐛 **[Report a Bug](./report)** | Submit an issue on GitHub |

---

## Features

### 📱 iOS & Android

Native apps on both platforms — iPhone, iPad, and Android devices. One unified Flutter codebase.

### 🔒 Encrypted & Secure

All responses, sensor readings, and task results are AES-256 encrypted before upload to AWS S3.

### 🧠 Cognitive Tasks

Validated assessments built in: Flanker, Heartbeat Counting, Scrambled Sentences, Word-Sentence Association.

### ⌚ Apple Watch Required for Sensor Monitoring

Continuous physiological monitoring requires a paired **Apple Watch** (Series 4 or later, watchOS with iOS 13+). The watch streams heart-rate data to the app in real time via HealthKit. Without a paired Apple Watch, all other app features (surveys, cognitive tasks, questionnaires) still work normally.

### 📊 Real-Time Sensor Data

The **Sensor Data** screen displays live and historical readings pulled from the Apple Watch:

| Metric | Description |
|---|---|
| ❤️ **Heart Rate (BPM)** | Beat-by-beat heart rate, updated continuously while the watch is worn |
| 📉 **RR Intervals** | Time between consecutive heartbeats (ms) — the raw signal used for HRV analysis |
| 📊 **HRV — SDNN** | Standard deviation of RR intervals over the past 7 days, a measure of autonomic nervous system activity |

The **Home screen** shows a live BPM reading in the welcome card whenever the Apple Watch is actively syncing. If no reading appears, check that the watch is worn snugly and that Health permissions are granted in iOS Settings → Privacy → Health → moment·e.

### ⏰ EMA Scheduling

Configurable daily prompt windows push notifications at the right moments throughout the day.

### 🏥 Clinical Research

Designed for OCD, GAD, Social Phobia, and related longitudinal mental health studies at SDSU.
