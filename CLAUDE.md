### Design Principles

- Please see `/context/website-inspiration.png` and make it as your design inspiration
- Comprehensive design checklist in `/context/design-principles.md`
- Brand style guide in `/context/style-guide.md`
- When making visual (front-end, UI/UX) changes, always refer to these files for guidance

### Quick Visual Check

IMMEDIATELY after implementing any front-end change:

1. **Identify what changed** - Review the modified components/pages
2. **Navigate to affected pages** - Use `mcp__playwright__browser_navigate` to visit each changed view
3. **Verify design compliance** - Compare against `/context/design-principles.md` and `/context/style-guide.md`
4. **Validate feature implementation** - Ensure the change fulfills the user's specific request
5. **Check acceptance criteria** - Review any provided context files or requirements
6. **Capture evidence** - Take full page screenshot at desktop viewport (1440px) of each changed view
7. **Check for errors** - Run `mcp__playwright__browser_console_messages`

This verification ensures changes meet design standards and user requirements.

### Comprehensive Design Review

Invoke the `@agent-design-review` subagent for thorough design validation when:

- Completing significant UI/UX features
- Before finalizing PRs with visual changes
- Needing comprehensive accessibility and responsiveness testing

### UI Components

- Components in `/src/components/ui`
- Tailwind CSS v4 with CSS variables for theming
- An OSS icon pack throughout
- Do not use Lucide React icons and shadcn

### Key Features

**Paid Job Postings**: Submit a job post that will open a whole page modal like in `/context/submit-a-job-post.png`
**Color Theming**: Modern dark and light theme
**AI Parser**: A switch button to switch the website into a Machine/AI readable site like what is in the bottom-center of the website [parallel.ai](https://parallel.ai/). Read: ( )Human ( )Machine
**Mobile Optimization**: Most job searches happen on mobile - ensure responsive design and fast loading.
**SEO-Friendly URLs**: Critical for organic discovery of job listings.

## Guidance Memories

- Please ask for clarification upfront, upon the initial prompts, when you need more direction.
