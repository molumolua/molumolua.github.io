(() => {
  const cards = document.querySelectorAll("[data-github-repo]");
  if (!cards.length) return;

  const formatCount = new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  });

  cards.forEach(async (card) => {
    const repository = card.dataset.githubRepo;
    const path = repository
      .split("/")
      .map((part) => encodeURIComponent(part))
      .join("/");

    try {
      const response = await fetch(`https://api.github.com/repos/${path}`, {
        headers: { Accept: "application/vnd.github+json" },
      });
      if (!response.ok) return;

      const data = await response.json();
      const stars = card.querySelector("[data-repo-stars]");
      const forks = card.querySelector("[data-repo-forks]");
      const language = card.querySelector("[data-repo-language]");

      if (stars) {
        stars.textContent = formatCount.format(data.stargazers_count);
        stars.closest("span").title = `${data.stargazers_count} GitHub stars`;
      }
      if (forks) {
        forks.textContent = formatCount.format(data.forks_count);
        forks.closest("span").title = `${data.forks_count} GitHub forks`;
      }
      if (language && data.language) language.textContent = data.language;

      card.dataset.metricsLoaded = "true";
    } catch (_) {
      // Static values in the page remain visible when GitHub is unavailable.
    }
  });
})();
