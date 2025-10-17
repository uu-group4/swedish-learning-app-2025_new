
# 🇸🇪 Swedish Learning App 🕰️

Welcome to the Swedish Learning App! This interactive application is designed to help you master the art of telling time in Swedish.

## ✨ Features

*   **Interactive Clock**: A visual clock face to help you learn.
*   **Multiple Choice Questions**: Test your knowledge with card-based quizzes.
*   **Statistics**: Track your progress and see how you're improving.
*   **Modern UI**: A clean and intuitive user interface.

## 🚀 Tech Stack

*   **Frontend**: HTML5, CSS3, JavaScript
*   **Framework**: Vue.js

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need a modern web browser to run this application.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/uu-group4/swedish-learning-app-2025.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd team04
    ```
3.  Open `index.html` in your browser.

## 📂 Folder Structure

```
.
├── app.js              # Main Vue app setup
├── index.html          # Main HTML file
├── index.css           # Global styles
├── index.js            # Main entry point for JS
├── INSTRUCTIONS.md     # Instructions for the project
├── README.md           # This README file
├── assets/
│   └── images/         # Images and assets
│       ├── clock.jpg
│       └── clock-no-hands.png
├── components/         # Vue components
│   ├── cards.js
│   ├── clock.js
│   ├── finishView.js
│   ├── gameView.js
│   ├── navigation.js
│   ├── progressBar.js
│   ├── startView.js
│   └── statistics.js
├── styles/             # Component-specific styles
│   ├── cards.css
│   ├── clock.css
│   ├── finishView.css
│   ├── navigation.css
│   ├── progress.css
│   └── statistics.css
└── utils/              # Utility functions
    └── shuffleQuestions.js
```

## 👨‍💻 Developer Guide

### Quick Setup

1. Serve files via local server (no build step required)
2. Entry point: `index.html`
3. Main app component: `gameView.js`

### Architecture Overview

```text
app/
├── components/
│   └── gameView.js (main game view)
├── index.html
└── styles/ (assumed)
```

### Component Dependencies

* Statistics component (performance tracking)
* Clock component (timer functionality)
* Cards component (main game mechanics)
* Navigation component (routing/menu)

### State Flow

```javascript
// Current pattern
$root.currentView = 'viewName'
// Recommended: implement proper state management
```

### Development Checklist

* [ ] Remove debug button from gameView.js
* [ ] Implement missing child components
* [ ] Add error handling
* [ ] Set up testing framework
* [ ] Configure build system
* [ ] Implement proper state management

## 🚨 Critical Information for Next Team

### What You Should Be Aware Of

**Vue.js Architecture:**

* Uses Vue 3 with ES modules (no build system)
* Component communication via props/emit pattern
* Heavy reliance on `$root` for state management (anti-pattern)
* External dependencies: `window.vocabulary` API and `window.save` localStorage wrapper

**Data Flow:**

```text
startView → app.js → gameView → finishView
    ↓         ↓         ↓         ↓
Level    Current   Game     Results
Select   State     Logic    Summary
```

**Game Mechanics:**

* Fisher-Yates shuffling for questions/options
* Statistics tracking (correct/incorrect/skipped)
* Clock visualization with calculated hand positions
* Progress bar showing completion status

### Technical Debts & Unresolved Issues

**🔴 Critical Issues:**

* `startView.js` contains placeholder text ("xxxxxxxxx") in game instructions
* `statistics.js` only shows static text, no actual statistics display
* Navigation "Level select menu" button is non-functional
* Inline styles in components should be moved to CSS files

**🟡 Architectural Issues:**

* No proper state management (uses `$root` access)
* Missing error handling for API calls
* No responsive design implementation
* Unused jQuery demo code in `index.js`

**🟠 Code Quality Issues:**

* No TypeScript or linting configured
* Missing unit tests
* Inconsistent coding patterns
* No build system for optimization

### Essential Resources for Quick Start

**Critical Dependencies:**

```javascript
// Vocabulary API - loads question data
window.vocabulary.get_team_data(4)

// Save API - localStorage wrapper  
window.save.get/set("team04", data)

// Question data structure
{
  hour: 14, minute: 30,
  option1: "halv tre", option2: "kvart över två",
  option3: "tjugo över två", option4: "halv fyra",
  answer: "halv tre", explanation: "..."
}
```

**Component Communication:**

```javascript
// Current pattern (needs improvement)
this.$root.currentView = 'finish'

// Recommended pattern
this.$emit('navigate', 'finish')
```

### Advice for Week One

#### Day 1-2: Fix Broken Features

1. Replace placeholder text in `startView.js` with real game instructions
2. Implement actual statistics display in `statistics.js`
3. Connect navigation "Level select menu" functionality

#### Day 3-4: Code Quality

1. Move inline styles to proper CSS files
2. Add error handling for vocabulary API calls
3. Remove unused jQuery demo code

#### Day 5-7: Architecture

1. Implement proper state management (consider Vuex/Pinia)
2. Add component testing framework
3. Plan responsive design strategy

**Critical Decision:** The app works but uses anti-patterns. Decide early whether to refactor existing code or build new features on current architecture.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Happy Learning! 🎉
