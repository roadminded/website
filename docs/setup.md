# Website Setup

1. Create NPX project in the root directory
```
npx create-next-app@latest .
```
- Customise settings:
  - TypeScript? → No (unless you really want it)
  - ESLint? → Yes (linter)
  - React Complier? -> No
  - Tailwind CSS? → Yes
  - src/ directory? → Yes
  - App Router? → Yes
  - Customise import alias (`@/* by default)? -> No

```
npm run dev # http://localhost:3000
```

---

2. Install DaisyUI
```
npm install daisyui
```
- app/globals.css:
```
@import "tailwindcss";
@plugin "daisyui";
```

---

3. Test DaisyUI works
- src/app/page.js:
```
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <button className="btn btn-primary">
        DaisyUI Works!
      </button>
    </div>
  );
}
```

---

4. Project Structure Created
- src/app/ create:
```
services/page.js
about/page.js
contact/page.js
privacy/page.js
```

---

5. Created layout (Navbar + Footer)

```
src/app/layout.js
```

---

6. Commit to github

7. Deploy to Netlify
- Import from GitHub
- Use default build settings:
    - Build command: npm run build
    - Publish directory: .next

---
