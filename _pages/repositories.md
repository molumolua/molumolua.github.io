---
layout: page
permalink: /repositories/
title: Open Source
description: Research implementations, experiments, and tools available on GitHub.
nav: true
nav_order: 4
---

{% assign profile = site.data.repositories.github_profile %}
<section class="github-profile-panel" aria-labelledby="github-profile-title">
  <div class="github-profile-identity">
    <img class="github-avatar" src="https://github.com/{{ profile.username }}.png?size=160" alt="{{ profile.name }} on GitHub" width="80" height="80">
    <div>
      <p class="open-source-label">GitHub / Research code</p>
      <h2 id="github-profile-title">{{ profile.name }}</h2>
      <p class="github-handle">@{{ profile.username }}</p>
    </div>
  </div>
  <p class="github-profile-description">{{ profile.description }}</p>
  <div class="github-profile-actions">
    <span><strong>{{ site.data.repositories.github_repos | size | prepend: '0' }}</strong> selected projects</span>
    <a class="research-button" href="{{ profile.url }}">
      View GitHub <i class="ti ti-arrow-up-right" aria-hidden="true"></i>
    </a>
  </div>
  <div class="github-grid-motif" aria-hidden="true">
    {% for i in (1..28) %}<span></span>{% endfor %}
  </div>
</section>

<section class="research-repositories" aria-labelledby="repositories-title">
  <header class="repository-section-header">
    <div>
      <p class="open-source-label">Selected repositories</p>
      <h2 id="repositories-title">Research code</h2>
    </div>
    <span>Live GitHub metrics</span>
  </header>

  <div class="repository-grid">
    {% for repo in site.data.repositories.github_repos %}
      <a
        class="research-repo-card"
        href="{{ repo.url }}"
        data-github-repo="{{ repo.owner }}/{{ repo.name }}"
        aria-label="Open {{ repo.owner }}/{{ repo.name }} on GitHub"
      >
        <div class="repo-card-topline">
          <span><i class="ti ti-point-filled" aria-hidden="true"></i> Public repository</span>
          <i class="ti ti-arrow-up-right" aria-hidden="true"></i>
        </div>
        <div class="repo-card-body">
          <div class="repo-identity">
            <span class="repo-monogram" aria-hidden="true">{{ repo.name | slice: 0 }}</span>
            <span>{{ repo.owner }} /</span>
          </div>
          <h3>{{ repo.name }}</h3>
          <p>{{ repo.description }}</p>
        </div>
        <div class="repo-card-tags">
          {% for tag in repo.tags %}<span>{{ tag }}</span>{% endfor %}
        </div>
        <div class="repo-card-metrics" aria-label="GitHub repository metrics">
          <span title="GitHub stars">
            <i class="ti ti-star" aria-hidden="true"></i>
            <strong data-repo-stars>{{ repo.stars }}</strong>
            <small>Stars</small>
          </span>
          <span title="GitHub forks">
            <i class="ti ti-git-fork" aria-hidden="true"></i>
            <strong data-repo-forks>{{ repo.forks }}</strong>
            <small>Forks</small>
          </span>
          <span class="repo-language" title="Primary language">
            <i aria-hidden="true"></i>
            <strong data-repo-language>{{ repo.tags.first }}</strong>
          </span>
        </div>
      </a>
    {% endfor %}
  </div>
</section>

<script defer src="{{ '/assets/js/repository-metrics.js' | relative_url }}"></script>
