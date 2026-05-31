// Theme toggle
const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    setTheme(next);
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
}

// Sample posts content
const posts = [
    {
        title: "The Quiet Power of Boredom",
        date: "May 28, 2026",
        readTime: "8 min read",
        content: `
            <p>In a world obsessed with constant stimulation, boredom has become something we actively avoid. But what if boredom is actually a superpower?</p>
            <p>When we allow our minds to wander without immediate input, something remarkable happens. Our brains start making unexpected connections. Creative ideas emerge from the silence.</p>
            <p>Many of history's greatest thinkers and artists deliberately cultivated boredom. They understood that the space between stimulation is where real thinking occurs.</p>
            <p>Try it for yourself this week. Put your phone in another room for 30 minutes and just sit with whatever comes up. You might be surprised by what your mind has been trying to tell you.</p>
        `
    },
    {
        title: "Why I Deleted All My Social Media Apps",
        date: "May 22, 2026",
        readTime: "12 min read",
        content: `
            <p>Three months ago I deleted every social media app from my phone. Here's what actually happened.</p>
            <p>The first two weeks were uncomfortable. I kept reaching for my phone out of habit. But slowly, something shifted. I started reading more books. I noticed the sky again. My attention span began to return.</p>
            <p>The biggest surprise? My relationships actually improved. Instead of liking someone's post, I sent them a text or called them. Real conversations replaced endless scrolling.</p>
            <p>I'm not saying social media is evil. But for me, removing the constant low-level addiction has been one of the most positive changes I've made in years.</p>
        `
    },
    {
        title: "The Future of Personal Websites",
        date: "May 15, 2026",
        readTime: "6 min read",
        content: `
            <p>Despite the rise of platforms, your own website remains one of the most powerful things you can own online.</p>
            <p>Platforms come and go. Algorithms change. But a website you control is permanent. It's your home on the internet.</p>
            <p>More people are realizing this. We're seeing a quiet renaissance of personal sites — simple, fast, and completely owned by their creators.</p>
            <p>If you don't have one yet, now is a great time to start. It doesn't need to be complicated. Even a single page with your thoughts and contact info is valuable.</p>
        `
    },
    {
        title: "Small Tools That Changed How I Work",
        date: "May 8, 2026",
        readTime: "10 min read",
        content: `
            <p>Sometimes the smallest tools create the biggest impact. Here are five that transformed my daily workflow:</p>
            <p><strong>1. A simple text file</strong> — My daily log. Nothing fancy, just date + what I did.</p>
            <p><strong>2. Keyboard shortcuts everywhere</strong> — Learning a few dozen shortcuts has saved me hours every month.</p>
            <p><strong>3. The "2-minute rule"</strong> — If a task takes less than two minutes, do it immediately.</p>
            <p><strong>4. One browser tab at a time</strong> — Surprisingly effective at reducing context switching.</p>
            <p><strong>5. Weekly review</strong> — 30 minutes every Sunday to look at what worked and what didn't.</p>
        `
    }
];

function showPost(index) {
    const modal = document.getElementById('post-modal');
    const content = document.getElementById('post-content');
    const post = posts[index];

    content.innerHTML = `
        <div class="post-meta">${post.date} • ${post.readTime}</div>
        <h2>${post.title}</h2>
        ${post.content}
    `;

    modal.style.display = 'flex';
}

function closePost() {
    document.getElementById('post-modal').style.display = 'none';
}

// Close modal when clicking outside
document.getElementById('post-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closePost();
    }
});

// Keyboard escape to close
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePost();
    }
});