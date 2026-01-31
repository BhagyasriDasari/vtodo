📁 Project Structure
src/
├── components/
│   ├── Todo/
│   │   ├── TodoApp.js
│   │   ├── TodoItem.js
│   │   ├── FilterControls.js
│   │   └── todo.css
│   ├── Forms/
│   │   ├── UserForm.js
│   │   └── form.css
│   ├── Progress/
│   │   ├── MultiProgressBar.js
│   │   └── progress.css
│   ├── Timer/
│   │   ├── CountdownTimer.js
│   │   └── timer.css
│   └── Search/
│       ├── SearchList.js
│       └── search.css
├── hooks/
│   └── useLocalStorage.js
├── App.js
├── index.js
└── index.css

✅ Task Breakdown
🔹 Task 1: Todo Application

Features

Add tasks using input

Display tasks using component mapping

Delete tasks

Mark tasks as completed

Filter tasks (All / Active / Completed)

Persist tasks using LocalStorage

Concepts Used

useReducer

useEffect

Controlled inputs

Conditional rendering

🔹 Task 2: Form Handling & Password Toggle

Features

Form fields: Name, Email, ID, Password

Prevent page reload on submit

Inline validation

Email format validation

Show / Hide password toggle

Clear form after submission

Display submitted data

Concepts Used

Controlled components

Form validation

Conditional rendering

🔹 Task 3: Dynamic Progress Bar

Features

Multiple numeric inputs (0–100)

Single progress bar based on average

Prevent invalid values

Animated fill

Color change based on percentage:

Red < 40%

Orange 40–70%

Green > 70%

Concepts Used

Derived state

Inline styles

UI synchronization

🔹 Task 4: Advanced Countdown Timer

Features

Configurable start time (default 10s)

Start / Pause / Resume / Reset controls

Millisecond precision display

Prevent multiple timers

Disable input while running

Concepts Used

setInterval

Cleanup with useEffect

State control

🔹 Task 5: Live Search with Highlighting

Features

Live filtering of list

Case-insensitive search

Highlight matched text

Display result count

Concepts Used

String manipulation

Regex-based highlighting

Dynamic rendering

🎨 Styling & UI

Plain CSS (no Tailwind / Bootstrap)

Light gradient background

Card-based layout

Color-coded buttons

Clear visual hierarchy

Readable fonts and spacing

⚙️ Assumptions & Decisions

The app is frontend-only

LocalStorage is used instead of a backend

CRA is used for stability and evaluation compatibility

Plain CSS is used to demonstrate core styling skills

⚠️ Limitations

No backend or authentication

Data is browser-specific

No accessibility enhancements (can be extended)