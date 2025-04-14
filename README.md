<h1 align="center">
  <!-- Optional logo placeholder -->
  <!-- <img src="logo-placeholder.svg" alt="Project Logo" width="40" /> -->
  QR Code Generator (WIP)
</h1>

<p align="center">
  ⚡️ A lightning-fast, privacy-friendly QR code generator built with <strong>Vite</strong>, <strong>React</strong>, <strong>Tailwind</strong>, and <strong>Shadcn UI</strong>.
</p>

---

## 🚀 Features

- ✅ Instant QR Code generation
- 🎨 Clean, responsive UI
- 🤝 No user tracking
- 🧩 Built with React, Tailwind and Shadcn UI
- ⚡️ Powered by Vite for blazing fast dev experience

---

## 🛠️ Getting Started

### 1. Install [Node.js](https://nodejs.org/)

Make sure you have Node.js installed.

### 2. Clone the repo

```bash
git clone https://github.com/mmarfat/qrhr
cd qrhr
```

### 3. Install the dependencies

```
npm install --legacy-peer-deps
```

ℹ️ --legacy-peer-deps resolves potential peer dependency issues

### 4. Start the development server

```
npm run dev
```

Visit http://localhost:5173 in your browser to view the app.

---

## 🏗️ Production Build

To build and preview the app in production mode:

```
npm run build
npm run preview
```

---

## 💬 Conventional Commits

We use [Conventional Commits](https://www.conventionalcommits.org/) to keep our commit history clean and consistent.

| Type       | Description                                      |
|------------|--------------------------------------------------|
| `feat`       | A new feature                                     |
| `fix`        | A bug fix                                         |
| `docs`       | Documentation-only changes                        |
| `style`      | Changes that do not affect the meaning of the code (e.g., formatting) |
| `refactor`   | A code change that neither fixes a bug nor adds a feature |
| `perf`       | A code change that improves performance           |
| `test`       | Adding missing tests or correcting existing ones  |
| `chore`      | Changes to the build process or auxiliary tools   |
| `ci`         | Changes to CI configuration files and scripts     |
| `revert`     | Reverts a previous commit                         |

Example:
```
feat: add dark mode toggle
```

---

## 📦 Tech Stack

- ⚛️ [React](https://reactjs.org/)
- ⚡ [Vite](https://vitejs.dev/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 🧱 [Shadcn UI](https://ui.shadcn.dev/)
- 📦 [npm](https://www.npmjs.com/)
- 🧪 QR code library TBD

---

## 👨‍💻 Contributing

Pull requests are welcome! Please follow the [Conventional Commits](https://www.conventionalcommits.org/) format and keep changes focused and readable.

To contribute to this project, follow the steps below:

#### 1. Clone the repository:
First, clone the repository and checkout the `dev` branch:

```
git clone https://github.com/mmarfat/qrhr
cd qrhr
git checkout dev
```

#### 2. Create an appropriate branch:
Create a new branch from `dev` with an appropriate name (e.g., `qr-generation-speedup` or `qr-generation-fix`):

```
git checkout -b qr-generation-speedup
```

#### 3. Make your changes:
Implement changes on your branch.

#### 4. ⚠️ Sync your branch with the latest dev:
Before creating a pull request, ensure your branch is up-to-date with the latest changes from `dev`. Follow these steps to sync:

First, checkout `dev` and pull the latest changes:
```
git checkout dev
git pull origin dev
```

Then, switch back to your feature branch and merge the changes from `dev` into your branch:
```
git checkout feature/new-feature
git merge dev
```

Resolve any conflicts that may occur.

#### 5. Create a Pull Request:
Once your changes are ready and you've synced your branch with `dev`, create a pull request (PR) to merge your branch into the `dev` branch. The maintainer will review your PR and merge it if everything looks good.

---

## 📄 License

Apache-2.0

---