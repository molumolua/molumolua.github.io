// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
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
