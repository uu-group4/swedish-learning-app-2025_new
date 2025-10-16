
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

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Happy Learning! 🎉
