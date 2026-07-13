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
  <div class="github-profile-mark" aria-hidden="true"><i class="fa-brands fa-github"></i></div>
  <div>
    <p class="open-source-label">GitHub profile</p>
    <h2 id="github-profile-title">{{ profile.name }} <span>@{{ profile.username }}</span></h2>
    <p>{{ profile.description }}</p>
  </div>
  <a class="research-button" href="{{ profile.url }}">
    View profile <i class="ti ti-arrow-up-right" aria-hidden="true"></i>
  </a>
</section>

<section class="research-repositories" aria-labelledby="repositories-title">
  <header class="repository-section-header">
    <div>
      <p class="open-source-label">Selected repositories</p>
      <h2 id="repositories-title">Research code</h2>
    </div>
    <span>{{ site.data.repositories.github_repos | size | prepend: '0' }} projects</span>
  </header>

  <div class="repository-grid">
    {% for repo in site.data.repositories.github_repos %}
      <a class="research-repo-card" href="{{ repo.url }}" aria-label="Open {{ repo.owner }}/{{ repo.name }} on GitHub">
        <div class="repo-card-topline">
          <span>{{ repo.owner }}</span>
          <i class="ti ti-arrow-up-right" aria-hidden="true"></i>
        </div>
        <div class="repo-card-body">
          <i class="ti ti-brand-github repo-icon" aria-hidden="true"></i>
          <h3>{{ repo.name }}</h3>
          <p>{{ repo.description }}</p>
        </div>
        <div class="repo-card-tags">
          {% for tag in repo.tags %}<span>{{ tag }}</span>{% endfor %}
        </div>
      </a>
    {% endfor %}
  </div>
</section>
