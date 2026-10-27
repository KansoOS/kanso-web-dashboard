import type { Dictionary } from "../types";

const en: Dictionary = {
  common: {
    appName: "KansoOS",
    loading: "Loading...",
    skipToContent: "Skip to main content",
  },
  auth: {
    login: {
      title: "Log in",
      email: "Email address",
      motDePasse: "Password",
      submit: "Log in",
      submitting: "Logging in...",
      error: "Incorrect email or password.",
    },
    totp: {
      title: "Two-factor verification",
      code: "Authenticator app code",
      submit: "Verify",
      submitting: "Verifying...",
      error: "Invalid code, please try again.",
    },
    signup: {
      title: "Create an account",
      email: "Email address",
      motDePasse: "Password",
      confirmation: "Confirm password",
      submit: "Sign up",
      submitting: "Creating...",
      success: "Account created successfully!",
      errorMismatch: "Passwords do not match.",
      errorGeneric: "Unable to create account. Please try again.",
    },
    switch: {
      toSignup: "No account?",
      toSignupAction: "Create an account",
      toLogin: "Already have an account?",
      toLoginAction: "Log in",
    },
  },
  dashboard: {
    title: "Dashboard",
    greeting: "Logged in as {{email}}!",
  },
  nav: {
    logout: "Log out",
  },
  footer: {
    dataMinimization: "KansoOS never receives the content of your messages, your location, or your browsing data.",
    privacyToggle: "Privacy",
    privacyDetail: "Data controller: the KansoOS project team (Epitech student project). Data collected: your email and encrypted password, a two-factor code if you enable it, the pseudonym and dates of the care space, and the scope and validity period of any mandate you've granted or received. No message content, no location, no browsing data. Legal basis: performance of the contract between you and the service. Retention: your session expires after 12 hours or 30 minutes of inactivity; how long account data is kept after deletion is still to be defined by the project team. You have the right to access, rectify, erase, restrict and port your data (GDPR articles 15 to 21), to be exercised with the project team, and the right to lodge a complaint with the CNIL (cnil.fr).",
    legalToggle: "Legal notice",
    legalDetail: "KansoOS is a project built as part of an Epitech degree. Publisher, editor-in-chief and hosting provider: to be filled in by the project team before any real production use. This notice is a demo template, not a legally binding one.",
    contactToggle: "Contact",
    contactDetail: "A question about your account, a care space, or a mandate? Reach the KansoOS project team through the project's usual channels.",
    copyright: "© {{year}} KansoOS",
  },
  space: {
    idLabel: "Space ID",
    idPlaceholder: "e.g. 3f6a1c2e-...",
    show: "Show",
    change: "Change space",
    notFound: "Space not found.",
    createdAt: "Created on {{date}}",
    mandate: {
      title: "Active mandate",
      scopeTitle: "Scope",
      period: "From {{start}} to {{end}}",
      none: "No active mandate for this space.",
    },
  },
  language: {
    label: "Language",
    fr: "Français",
    en: "English",
  },
};

export default en;
