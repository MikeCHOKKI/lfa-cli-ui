# Contributing to LFA CLI UI

Thank you for contributing to the LFA CLI landing page!

## Getting Started

1. Fork the repository
2. Install dependencies: `npm install`
3. Create a feature branch: `git checkout -b feat/my-feature`
4. Start dev server: `npm run dev`
5. Make your changes
6. Build and verify: `npm run build`
7. Commit and open a Pull Request

## Development

```bash
npm install       # Install dependencies
npm run dev       # Dev server (localhost:5173)
npm run build     # Production build → dist/
npm run preview   # Preview production build
```

## Code Standards

- TypeScript strict mode enabled
- No unused locals or parameters
- Components are functional (hooks-based)
- Tailwind CSS for styling
- 2-space indentation

## Commits

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add FAQ section
fix: correct download card links
style: improve hero gradient
docs: update README
chore: remove dead components
```

## Pull Request Process

1. Ensure `npm run build` passes without errors
2. Test responsive layout on mobile/tablet
3. Update CHANGELOG.md if needed
4. Request review

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
