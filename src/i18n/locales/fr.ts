import type { Dictionary } from "../types";

// Source de vérité : libellés repris tels quels de l'UI d'origine (pour ne pas casser les tests).
const fr: Dictionary = {
  common: {
    appName: "KansoOS",
    loading: "Chargement...",
    skipToContent: "Aller au contenu principal",
  },
  auth: {
    login: {
      title: "Connexion",
      email: "Adresse e-mail",
      motDePasse: "Mot de passe",
      submit: "Se connecter",
      submitting: "Connexion...",
      error: "Adresse e-mail ou mot de passe incorrect.",
    },
    totp: {
      title: "Vérification en deux étapes",
      code: "Code de l'application d'authentification",
      submit: "Vérifier",
      submitting: "Vérification...",
      error: "Code invalide, réessayez.",
    },
    signup: {
      title: "Créer un compte",
      email: "Adresse e-mail",
      motDePasse: "Mot de passe",
      confirmation: "Confirmer le mot de passe",
      submit: "S'inscrire",
      submitting: "Création...",
      success: "Compte créé avec succès !",
      errorMismatch: "Les mots de passe ne correspondent pas.",
      errorGeneric: "Impossible de créer le compte. Réessayez.",
    },
    switch: {
      toSignup: "Pas de compte ?",
      toSignupAction: "Créer un compte",
      toLogin: "Déjà un compte ?",
      toLoginAction: "Se connecter",
    },
  },
  dashboard: {
    title: "Dashboard",
    greeting: "Connecté en tant que {{email}} !",
  },
  nav: {
    logout: "Se déconnecter",
  },
  footer: {
    dataMinimization: "KansoOS ne reçoit jamais le contenu de vos messages, votre position, ni vos données de navigation.",
    privacyToggle: "Confidentialité",
    privacyDetail: "Responsable du traitement : l'équipe projet KansoOS (projet étudiant Epitech). Données collectées : votre email et votre mot de passe chiffré, un code d'authentification à deux facteurs si vous l'activez, le pseudonyme et les dates de l'espace d'accompagnement, ainsi que le périmètre et la durée de validité du mandat accordé ou reçu. Aucun contenu de message, aucune position, aucune donnée de navigation. Base légale : l'exécution du contrat qui vous lie au service. Durée de conservation : votre session expire après 12 heures ou 30 minutes d'inactivité ; la durée de conservation des données de compte après suppression reste à définir par l'équipe projet. Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et de portabilité de vos données (articles 15 à 21 du RGPD), à exercer auprès de l'équipe projet, ainsi que du droit de réclamation auprès de la CNIL (cnil.fr).",
    legalToggle: "Mentions légales",
    legalDetail: "KansoOS est un projet réalisé dans le cadre d'un cursus Epitech. Éditeur, directeur de publication et hébergeur : à compléter par l'équipe projet avant toute mise en production réelle. Ces mentions sont un gabarit de démonstration, pas des mentions légales opposables.",
    contactToggle: "Contact",
    contactDetail: "Une question sur votre compte, un espace d'accompagnement ou un mandat ? Contactez l'équipe du projet KansoOS par les canaux habituels du projet.",
    copyright: "© {{year}} KansoOS",
  },
  space: {
    idLabel: "Identifiant de l'espace",
    idPlaceholder: "ex. 3f6a1c2e-...",
    show: "Afficher",
    change: "Changer d'espace",
    notFound: "Espace introuvable.",
    createdAt: "Créé le {{date}}",
    mandate: {
      title: "Mandat en vigueur",
      scopeTitle: "Périmètre",
      period: "Du {{start}} au {{end}}",
      none: "Aucun mandat en vigueur pour cet espace.",
    },
  },
  language: {
    label: "Langue",
    fr: "Français",
    en: "English",
  },
};

export default fr;
