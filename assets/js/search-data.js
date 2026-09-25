// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Peer-reviewed papers and preprints on language model reasoning, reinforcement learning, and knowledge-enhanced systems.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "News",
          description: "Research milestones, paper releases, and selected updates.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-open-source",
          title: "Open Source",
          description: "Research implementations, experiments, and tools available on GitHub.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "news-won-icpc-bronze-medal-xi-an",
          title: '🥉 Won ICPC Bronze Medal (Xi’an).',
          description: "",
          section: "News",},{id: "news-won-ccpc-silver-medal-harbin",
          title: '🥈 Won CCPC Silver Medal (Harbin).',
          description: "",
          section: "News",},{id: "news-won-icpc-bronze-medal-jinan",
          title: '🥉 Won ICPC Bronze Medal (Jinan).',
          description: "",
          section: "News",},{id: "news-exploring-high-order-user-preference-with-knowledge-graph-for-recommendation-accepted-to-cikm-2024-short-paper",
          title: '📄🎉 Exploring High-Order User Preference with Knowledge Graph for Recommendation — accepted to...',
          description: "",
          section: "News",},{id: "news-scaler-synthetic-scalable-adaptive-learning-environment-for-reasoning-accepted-to-acl-2026-findings",
          title: '📄🎉 SCALER: Synthetic Scalable Adaptive Learning Environment for Reasoning — accepted to ACL...',
          description: "",
          section: "News",},{id: "news-new-preprint-denoiserl-bootstrapping-reasoning-models-to-recover-from-noisy-prefixes-learning-to-recover-from-weak-model-failures-without-a-stronger-teacher",
          title: '📄 New preprint: DenoiseRL: Bootstrapping Reasoning Models to Recover from Noisy Prefixes —...',
          description: "",
          section: "News",},{id: "news-scaler-has-been-included-in-hugging-face-s-repo2rlenv",
          title: '🤗 SCALER has been included in Hugging Face’s Repo2RLEnv!',
          description: "",
          section: "News",},{id: "news-we-released-atria-dawn-preview-a-744b-parameter-moe-model-with-a-256k-token-context-window-for-research-and-engineering-combining-tool-use-coding-and-multi-step-experimentation-to-produce-verifiable-reproducible-results-model-weights-technical-report",
          title: '🚀 We released Atria-Dawn Preview, a 744B-parameter MoE model with a 256K-token context...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%78%78%63%61%69%6A%75%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/molumolua", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=YuYQgYsAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
