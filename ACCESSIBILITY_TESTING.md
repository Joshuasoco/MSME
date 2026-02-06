# Accessibility Testing Checklist

## ✅ WCAG 2.1 Level AA Compliance Testing

### Keyboard Navigation Testing
- [ ] All interactive elements focusable via Tab key
- [ ] Focus order is logical and follows reading order
- [ ] Skip to main content link works (press Tab on page load)
- [ ] No keyboard traps (can exit all components)
- [ ] Enter/Space activates buttons and links
- [ ] Escape key closes modals and menus
- [ ] Arrow keys work in dropdown menus
- [ ] Focus visible on all interactive elements

### Screen Reader Testing
- [ ] Page title reads correctly
- [ ] Heading hierarchy is logical (h1 → h2 → h3)
- [ ] All images have alt text
- [ ] Links have descriptive text (no "click here")
- [ ] Form inputs have associated labels
- [ ] Error messages are announced
- [ ] Loading states are announced
- [ ] Navigation landmarks identified

### Color & Contrast
- [ ] Text contrast ratio minimum 4.5:1 (normal text)
- [ ] Large text contrast ratio minimum 3:1
- [ ] UI components contrast ratio minimum 3:1
- [ ] Information not conveyed by color alone
- [ ] Dark mode maintains contrast ratios

### Touch Targets (Mobile)
- [ ] All buttons minimum 44x44px
- [ ] Links minimum 44x44px with adequate spacing
- [ ] Form controls minimum 44x44px
- [ ] No overlapping touch targets

### Forms & Inputs
- [ ] All inputs have labels
- [ ] Error messages clearly associated with inputs
- [ ] Required fields indicated
- [ ] Help text provided where needed
- [ ] Validation messages accessible

### ARIA Implementation
- [ ] Navigation has role="navigation" and aria-label
- [ ] Buttons have aria-label where needed
- [ ] Accordions use aria-expanded
- [ ] Modals use aria-modal
- [ ] Live regions use aria-live
- [ ] Hidden content uses aria-hidden

### Testing Tools

#### Automated Testing
```bash
# Install axe-core DevTools extension
# Run Lighthouse accessibility audit (Target: 95+)
# Use WAVE browser extension
```

#### Manual Testing
1. **NVDA (Windows)**: Free screen reader
2. **JAWS (Windows)**: Professional screen reader
3. **VoiceOver (Mac/iOS)**: Built-in screen reader
4. **TalkBack (Android)**: Built-in screen reader

### Test Scenarios

#### Scenario 1: Keyboard-Only Navigation
1. Tab through entire homepage
2. Activate all interactive elements with Enter/Space
3. Navigate mobile menu with keyboard
4. Complete form submission with keyboard only
5. Close all modals with Escape

#### Scenario 2: Screen Reader
1. Listen to page structure announcement
2. Navigate by headings (h1-h6)
3. Navigate by landmarks (nav, main, footer)
4. Fill out and submit a form
5. Listen to error messages

#### Scenario 3: Mobile Touch
1. Test all buttons on mobile device
2. Verify spacing between elements
3. Test form inputs on mobile
4. Verify menu interactions
5. Test FAQ accordion

### Common Issues to Check

❌ **Anti-patterns to avoid**:
- Images without alt text
- Links with "click here" text
- Buttons without accessible names
- Form inputs without labels
- Color-only indicators
- Small touch targets (<44x44px)
- Missing skip links
- Poor heading hierarchy
- Unlabeled icons
- No focus indicators

✅ **Best practices**:
- Semantic HTML elements
- Proper ARIA usage
- Keyboard accessibility
- Clear focus indicators
- Sufficient color contrast
- Large touch targets
- Descriptive link text
- Proper form labels
- Loading state announcements
- Error message clarity

### Accessibility Score Targets

| Tool | Target Score | Current Score |
|------|-------------|---------------|
| Lighthouse | 95+ | ⬜ |
| axe DevTools | 0 issues | ⬜ |
| WAVE | 0 errors | ⬜ |

### Quick Test Commands

```bash
# Run development server
npm run dev

# Test with different browsers
# Chrome, Firefox, Safari, Edge

# Test with screen readers
# NVDA (Windows): Ctrl + Alt + N
# JAWS (Windows): Insert + Down Arrow
# VoiceOver (Mac): Cmd + F5
```

### Reporting Issues

When reporting accessibility issues, include:
1. **Issue description**: What's the problem?
2. **Location**: Which page/component?
3. **WCAG criteria**: Which guideline violated?
4. **Severity**: Critical, High, Medium, Low
5. **Steps to reproduce**: How to find the issue?
6. **Suggested fix**: How to resolve it?

### Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Checklist](https://webaim.org/standards/wcag/checklist)
- [A11y Project](https://www.a11yproject.com/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

---

**Last Updated**: February 5, 2026
**Tester**: _____________
**Date Tested**: _____________
