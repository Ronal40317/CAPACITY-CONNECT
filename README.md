# CAPACITY CONNECT

**Digital Capacity Building & Learning Management Portal**  
Smart India Hackathon 2026 · Problem Statement **SIH26075** · Team **Code_404**

CAPACITY CONNECT is a responsive frontend prototype for role-based training, competency development, learning recommendations, trainer matching, assessment, certification, and administrative monitoring.

## Roles

- **Trainee** — profile, competency assessment, skill gaps, recommended learning, courses, resources, trainer matching, assessments, certificates, feedback, notifications.
- **Trainer** — profile, course creation, questionnaires, assessments, assigned trainees, performance monitoring, learning resources, competency mapping, notifications.
- **Admin** — user approval, user/role management, courses, enrollments, certifications, assessments, competency framework/mapping, announcements, reports, statistics, content, notifications.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Browser `localStorage` for prototype state
- No Node/Vite/React dependency is required by the current prototype
- No external API credentials are currently required

## Project Structure

```text
.
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── auth.js
│   ├── state.js
│   ├── data.js
│   └── ...
├── pages/
│   ├── admin/
│   ├── auth/
│   ├── trainee/
│   └── trainer/
├── .env.example
├── .gitignore
├── .gitattributes
└── UI_UX_REDESIGN_REPORT.md
```

## Run Locally

Because this is a static frontend prototype, use a local HTTP server rather than opening `index.html` directly.

### Windows

Run:

```bat
start-local-server.bat
```

Then open the local URL printed by the server.

### Python

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000/
```

## GitHub Pre-Push Checklist

Before pushing:

1. Confirm `.env` is not tracked:
   ```bash
   git status
   git check-ignore .env
   ```
2. Scan the repository for secrets.
3. Open the app in Chrome/Edge/Firefox and check the browser console.
4. Test desktop, tablet, and mobile layouts.
5. Test login/navigation and each role's main workflow.
6. Verify browser `localStorage` state is retained as expected.
7. Confirm no broken local asset links.
8. Review the final diff:
   ```bash
   git diff --check
   git status
   ```
9. Configure Git identity if needed:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "yourmail@example.com"
   ```
10. Commit and push only after reviewing the files:
   ```bash
   git add .
   git commit -m "Prepare CAPACITY CONNECT for GitHub"
   git push
   ```

### Important

This prototype currently contains no production API credentials, database connection strings, or external service secrets. If backend integrations are added later, keep their credentials outside source control and expose only non-secret configuration to the browser.

## Validation

The current repository has been checked for:

- JavaScript syntax errors
- Broken local HTML/CSS/JS references
- Obvious hardcoded secret patterns
- Missing `.gitignore`
- Missing environment template
- Repository metadata/documentation

A production compiler/build step is **not applicable** because the project does not currently use Node, Vite, React, TypeScript, or another compilation-based frontend toolchain.

## Design

The UI redesign uses a consistent responsive design system covering navigation, dashboards, cards, forms, tables, badges, progress indicators, modals, typography, spacing, focus states, and mobile navigation.

See `UI_UX_REDESIGN_REPORT.md` for the detailed design and report.
