# Theme Acceptance Checklist

Use this checklist to verify the implementation of the Liquid Glass Theme.

## Visual QA

- [ ] **Background**:
    - [ ] Is the background a subtle gradient? 
    I dont want those to be gradient, make it clear
    - [X] Does it transition smoothly between Light and Dark modes?
- **Glass Effect**:
    - [ ] Do Cards have a translucent background?
    I dont know cause the background is white
    - [ ] Is the background behind the cards blurred (`backdrop-filter`)?
    I dont know cause the background is white
    - [ ] Is there a subtle white border (`border-white/20`) around glass elements?
    I dont know cause the background is white
- **Typography**:
    - [ ] Is the font readable against the glass background?
    I dont know cause the background is white
    - [X] Are headings using the correct hierarchy?
    - [ ] Is the "Lưu Bút" title using the gradient text effect?
    I dont like gradient effect
- **Interactions**:
    - [X] Do buttons have a hover state?
    - [ ] Do cards scale slightly on hover (if interactive)?
    No
    - [ ] Do inputs highlight on focus?
    I dont want focus
- **Dark Mode**:
    - [X] Toggle the theme button in the Header.
    - [X] Does the background change to dark slate/blue?
    - [X] Is text white/light gray?
    - [X] Are glass elements still visible but darker?
## Functional QA

- **Form Submission**:
    - [ ] Fill out the form with valid data.
    - [ ] Click Submit.
    - [ ] Does the loading state appear ("Đang gửi...")?
    - [ ] Does the success view (Letter) appear after submission?
    - [ ] Is the email actually sent (check EmailJS logs or inbox if configured)?
- **Validation**:
    - [ ] Try to submit empty form.
    - [ ] Do error messages appear?
    - [ ] Do error messages disappear when fixed?
- **Music Player**:
    - [ ] Click Play. Does music start?
    - [ ] Click Pause. Does music stop?
    - [ ] Click Replay. Does it restart?
- **Responsiveness**:
    - [ ] Check on Mobile (375px width).
    - [ ] Check on Tablet (768px width).
    - [ ] Check on Desktop (1024px+ width).
    - [ ] Is the layout broken at any breakpoint?

## Code Quality

- [ ] Are there any console errors?
- [ ] Are there any build warnings?
- [ ] Is the code using `shadcn/ui` components?
