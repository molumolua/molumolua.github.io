---
layout: about
title: Home
permalink: /
description: Caijun Xu is a Ph.D. researcher at Fudan University and SII working on LLM reasoning, reinforcement learning, and synthetic data.

profile:
  image: prof_pic.jpg
  more_info: >
    <p><i class="ti ti-school"></i><span><small>Affiliation</small>Fudan University &amp; SII</span></p>
    <p><i class="ti ti-users-group"></i><span><small>Research group</small>Alex Research</span></p>
    <p><i class="ti ti-user"></i><span><small>Advisor</small>Prof. Yixin Cao</span></p>

selected_papers: true
social: true

announcements:
  enabled: true
  scrollable: false
  limit: 4
---

<section class="home-section research-agenda" aria-labelledby="agenda-title">
  <div class="section-heading">
    <div>
      <p class="section-index">01 / Research agenda</p>
      <h2 id="agenda-title">Teaching models to reason, recover, and improve.</h2>
    </div>
    <p class="section-aside">Reliable reasoning is not only about finding a correct path—it is about learning what to do when the path goes wrong.</p>
  </div>

  <div class="agenda-grid">
    <article>
      <span class="agenda-number">01</span>
      <h3>Reasoning via RL</h3>
      <p>Designing reinforcement learning objectives that improve exploration, self-correction, and multi-step reasoning.</p>
      <div class="agenda-tags"><span>RLVR</span><span>Self-correction</span></div>
    </article>
    <article>
      <span class="agenda-number">02</span>
      <h3>Synthetic environments</h3>
      <p>Creating scalable learning environments and adaptive task distributions without relying on expensive supervision.</p>
      <div class="agenda-tags"><span>Data synthesis</span><span>Curriculum</span></div>
    </article>
    <article>
      <span class="agenda-number">03</span>
      <h3>Verifier &amp; feedback</h3>
      <p>Studying how imperfect traces, verifiers, and feedback can become useful signals for stronger reasoning policies.</p>
      <div class="agenda-tags"><span>Weak-to-strong</span><span>Feedback</span></div>
    </article>
  </div>
</section>

<section class="featured-research" aria-labelledby="featured-paper-title">
  <div class="feature-rail" aria-hidden="true">
    <span>NEW PREPRINT</span>
    <span>ARXIV:2605.28421</span>
  </div>
  <div class="feature-content">
    <div class="feature-meta">
      <span>02 / Featured research</span>
      <span>May 2026 · Reinforcement Learning</span>
    </div>
    <h2 id="featured-paper-title">DenoiseRL: Bootstrapping Reasoning Models to Recover from Noisy Prefixes</h2>
    <p class="feature-authors">Caijun Xu · Changyi Xiao · Zhongyuan Peng · Yixin Cao</p>
    <p class="feature-summary">
      DenoiseRL turns incorrect traces from weak models into recovery-oriented training signals. Instead of requiring a stronger teacher or a heavily curated hard dataset, the policy learns to continue from noisy reasoning prefixes and recover toward a correct answer.
    </p>

    <div class="recovery-flow" aria-label="DenoiseRL research concept">
      <div class="flow-node noisy">
        <span>01 · Input</span>
        <strong>Weak-model failure</strong>
        <small>incorrect reasoning prefix</small>
      </div>
      <i class="ti ti-arrow-right" aria-hidden="true"></i>
      <div class="flow-node optimize">
        <span>02 · Optimize</span>
        <strong>Recovery-oriented RL</strong>
        <small>learn from the continuation</small>
      </div>
      <i class="ti ti-arrow-right" aria-hidden="true"></i>
      <div class="flow-node recover">
        <span>03 · Outcome</span>
        <strong>Self-correction</strong>
        <small>recover to a correct answer</small>
      </div>
    </div>

    <div class="feature-footer">
      <p><strong>Key idea</strong><span>Use failures as structured perturbations—not discarded samples.</span></p>
      <div>
        <a class="research-button primary" href="https://arxiv.org/abs/2605.28421">Read paper <i class="ti ti-arrow-up-right"></i></a>
        <a class="research-button" href="https://arxiv.org/pdf/2605.28421">PDF <i class="ti ti-file-type-pdf"></i></a>
      </div>
    </div>
  </div>
</section>
