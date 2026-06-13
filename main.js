// ===== EDUSECURE APP DATA =====
const GEMINI_API_KEY = typeof CONFIG !== "undefined" && CONFIG.GEMINI_API_KEY ? CONFIG.GEMINI_API_KEY : ""
const APP_DATA = {
  user: {
    name: "John Doe",
    email: "johndoe@example.com",
    badge: "Beginner",
    lessonsCompleted: 2,
    lessonsToNextBadge: 4, // needs 4 total to reach Amateur
    isPremium: false
  },

  grades: [
    { id: "grade-4", label: "Grade 4", desc: "Foundational concepts for curious minds" },
    { id: "grade-5", label: "Grade 5", desc: "Building skills and confidence" },
    { id: "grade-6", label: "Grade 6", desc: "Connecting ideas across subjects" },
    { id: "grade-7", label: "Grade 7", desc: "Junior secondary essentials" },
    { id: "grade-8", label: "Grade 8", desc: "Deepening mastery" },
    { id: "grade-9", label: "Grade 9", desc: "Preparing for senior school" }
  ],

  tracks: [
    { id: "cybersecurity", label: "Cybersecurity", desc: "Stay safe in the digital world", icon: "🛡️", style: "cyber" },
    { id: "ebola", label: "Ebola Crisis", desc: "Awareness saves lives", icon: "⚠️", style: "ebola" }
  ],

  subjects: {
    "grade-4": [
      {
        title: "Numbers",
        lessons: [
          { id: "place-value", title: "Place Value", desc: "Understanding ones, tens, hundreds and thousands.", completed: true },
          { id: "addition-subtraction", title: "Addition & Subtraction", desc: "Adding and subtracting up to 4 digits." }
        ]
      },
      {
        title: "Geometry",
        lessons: [
          { id: "2d-shapes", title: "2D Shapes", desc: "Identifying triangles, squares, circles and rectangles." }
        ]
      },
      {
        title: "Science Basics",
        lessons: [
          { id: "living-nonliving", title: "Living & Non-Living Things", desc: "What makes something alive?" },
          { id: "weather-seasons", title: "Weather & Seasons", desc: "Changes in our environment." }
        ]
      },
      {
        title: "Social Studies",
        lessons: [
          { id: "our-community", title: "Our Community", desc: "Family, school and neighbourhood." },
          { id: "rights-responsibilities", title: "Rights & Responsibilities", desc: "Being a good citizen." }
        ]
      },
      {
        title: "Creative Arts",
        lessons: [
          { id: "drawing-basics", title: "Drawing Basics", desc: "Lines, shapes and shading." }
        ]
      },
      {
        title: "Physical Education",
        lessons: [
          { id: "warmup-exercises", title: "Warm-Up Exercises", desc: "Preparing the body for activity." }
        ]
      },
      {
        title: "ICT",
        lessons: [
          { id: "computer-parts", title: "Parts of a Computer", desc: "Keyboard, mouse, monitor and CPU." },
          { id: "internet-basics", title: "Internet Basics", desc: "What is the internet and how do we use it safely." }
        ]
      },
      {
        title: "Integrated Science",
        lessons: [
          { id: "matter-states", title: "States of Matter", desc: "Solid, liquid and gas." },
          { id: "simple-machines", title: "Simple Machines", desc: "Levers, wheels and pulleys." }
        ]
      }
    ],

    "grade-5": [
      {
        title: "Agriculture",
        lessons: [
          { id: "crop-farming", title: "Crop Farming Basics", desc: "Planting, growing and harvesting." },
          { id: "soil-types", title: "Soil Types", desc: "Sandy, clay and loam soils." }
        ]
      },
      {
        title: "CRE",
        lessons: [
          { id: "creation-story", title: "The Creation Story", desc: "God's creation in the Bible." },
          { id: "christian-values", title: "Christian Values", desc: "Love, honesty and kindness." }
        ]
      },
      {
        title: "Social Studies",
        lessons: [
          { id: "kenya-map", title: "Map of Kenya", desc: "Counties, capital cities and borders." },
          { id: "african-countries", title: "Countries of Africa", desc: "Neighbours and the continent." }
        ]
      },
      {
        title: "Numbers",
        lessons: [
          { id: "fractions", title: "Fractions", desc: "Halves, quarters and thirds." },
          { id: "multiplication", title: "Multiplication", desc: "Times tables up to 12." }
        ]
      },
      {
        title: "English",
        lessons: [
          { id: "grammar-basics", title: "Grammar Basics", desc: "Nouns, verbs and adjectives." },
          { id: "creative-writing", title: "Creative Writing", desc: "Stories with a beginning, middle and end." }
        ]
      }
    ]
  },

  // Grades 6-9 share same subject structure (advanced versions)
  grades69Subjects: [
    {
      title: "Mathematics",
      lessons: [
        { id: "algebra", title: "Algebra", desc: "Solving for unknowns and equations." },
        { id: "statistics", title: "Statistics & Probability", desc: "Data, graphs and chance." },
        { id: "geometry-advanced", title: "Geometry", desc: "Angles, area and volume." }
      ]
    },
    {
      title: "Science",
      lessons: [
        { id: "cells", title: "Cells & Organisms", desc: "The building blocks of life." },
        { id: "forces", title: "Forces & Motion", desc: "Newton's laws and everyday physics." },
        { id: "chemistry-basics", title: "Chemistry Basics", desc: "Elements, compounds and mixtures." }
      ]
    },
    {
      title: "English",
      lessons: [
        { id: "comprehension", title: "Reading Comprehension", desc: "Inferring meaning from texts." },
        { id: "essay-writing", title: "Essay Writing", desc: "Structured arguments and analysis." }
      ]
    },
    {
      title: "Kiswahili",
      lessons: [
        { id: "sarufi", title: "Sarufi", desc: "Kanuni za lugha ya Kiswahili." },
        { id: "insha", title: "Insha", desc: "Kuandika kwa lugha sahihi." }
      ]
    },
    {
      title: "CRE",
      lessons: [
        { id: "new-testament", title: "New Testament", desc: "The Gospels and teachings of Jesus." },
        { id: "christian-living", title: "Christian Living", desc: "Faith in everyday life." }
      ]
    },
    {
      title: "Social Studies",
      lessons: [
        { id: "east-africa", title: "East Africa History", desc: "Pre-colonial and colonial era." },
        { id: "civics", title: "Civics & Governance", desc: "Kenya's constitution and government." }
      ]
    }
  ],

  tracks_subjects: {
    "cybersecurity": [
      {
        title: "Device Protection",
        lessons: [
          { id: "securing-device", title: "Securing Your Device", desc: "Anti-virus, updates, 2FA, remote lock." }
        ]
      },
      {
        title: "Network Security",
        lessons: [
          { id: "firewalls-vpns", title: "Firewalls & VPNs", desc: "Protecting traffic." }
        ]
      },
      {
        title: "Data Security",
        lessons: [
          { id: "phishing-passwords", title: "Phishing & Passwords", desc: "The human firewall." }
        ]
      },
      {
        title: "Incident Response",
        lessons: [
          { id: "detect-respond", title: "Detect, Respond, Recover", desc: "Handling cyber incidents.", premium: true }
        ]
      },
      {
        title: "Governance & Compliance",
        lessons: [
          { id: "iso-nist-gdpr", title: "ISO 27001, NIST, GDPR", desc: "Frameworks and laws.", premium: true }
        ]
      }
    ],
    "ebola": [
      {
        title: "Understanding Ebola",
        lessons: [
          { id: "what-is-ebola", title: "What Is Ebola?", desc: "The virus and its history." },
          { id: "ebola-symptoms", title: "Symptoms & Stages", desc: "Recognising signs early." }
        ]
      },
      {
        title: "Transmission & Prevention",
        lessons: [
          { id: "how-it-spreads", title: "How It Spreads", desc: "Contact, bodily fluids and surfaces." },
          { id: "prevention-tips", title: "Prevention Tips", desc: "Hygiene, PPE and safe practices." }
        ]
      },
      {
        title: "Response & Recovery",
        lessons: [
          { id: "community-response", title: "Community Response", desc: "Reporting and isolation.", premium: true }
        ]
      }
    ]
  },

  lessonContent: {
    default: (title, subject) => `
      <h2>Introduction to ${title}</h2>
      <p>Welcome to this lesson on <strong>${title}</strong>. In this lesson you will learn the key concepts, understand real-world applications, and test your knowledge with a quiz at the end.</p>
      <div class="highlight">💡 <strong>Learning Objective:</strong> By the end of this lesson, you will be able to understand and apply the core ideas of ${title}.</div>
      <h2>Key Concepts</h2>
      <p>This topic is a fundamental part of ${subject}. Let's explore what makes it important and how it connects to the world around you.</p>
      <ul>
        <li>Understanding the basic principles</li>
        <li>Recognising examples in everyday life</li>
        <li>Applying the concept to solve problems</li>
      </ul>
      <h2>Why It Matters</h2>
      <p>Learning about ${title} helps build a strong foundation for more advanced topics. It also develops critical thinking and problem-solving skills you will use throughout your education.</p>
      <h2>Summary</h2>
      <p>You have now covered the essentials of ${title}. Use the key points below as a revision guide, then take the quiz to check your understanding.</p>
      <div class="highlight">📝 <strong>Key Takeaway:</strong> ${title} is an important part of ${subject} that helps you understand the world better.</div>
    `
  }
};

// ===== STATE =====
const state = {
  completedLessons: JSON.parse(localStorage.getItem('es_completed') || '["place-value"]'),
  quizAnswers: {},
  quizSubmitted: false
};

function saveState() {
  localStorage.setItem('es_completed', JSON.stringify(state.completedLessons));
}

// ===== UTILITIES =====
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

function navigate(page, params = {}) {
  const url = new URL(window.location.href);
  url.searchParams.set('page', page);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  history.pushState({}, '', url);
  renderApp();
  window.scrollTo(0, 0);
}

function getParams() {
  const p = new URLSearchParams(window.location.search);
  return {
    page: p.get('page') || 'dashboard',
    gradeId: p.get('gradeId'),
    trackId: p.get('trackId'),
    lessonId: p.get('lessonId'),
    lessonTitle: p.get('lessonTitle'),
    subject: p.get('subject')
  };
}

window.addEventListener('popstate', () => renderApp());

// ===== NAVBAR =====
function renderNavbar(activePage) {
  const { user } = APP_DATA;
  return `
    <nav class="navbar">
      <a class="navbar-brand" href="#" onclick="navigate('dashboard');return false;">
        <div class="brand-logo">🛡️</div>
        <span class="brand-name">Edu<span>Secure</span></span>
      </a>
      <div class="navbar-nav">
        <a class="nav-link ${activePage==='dashboard'?'active':''}" href="#" onclick="navigate('dashboard');return false;">Dashboard</a>
        <a class="nav-link ${activePage==='premium'?'active':''}" href="#" onclick="navigate('premium');return false;">Premium</a>
        <span class="badge-pill">${user.badge}</span>
        <a class="nav-link" href="#" onclick="navigate('profile');return false;" style="color:var(--gray-700);font-weight:500;">Hi, ${user?.name ? user.name.split(' ')[0].toLowerCase() : 'Guest'} ${user?.name?.split(' ')[1]?.toLowerCase() || ''}</a>
        <button class="logout-btn" title="Log out" onclick="logOut()">⎋</button>
      </div>
    </nav>
  `;
}

// ===== DASHBOARD PAGE =====
function renderDashboard() {
  const { user, grades, tracks } = APP_DATA;
  const progress = (user.lessonsCompleted / user.lessonsToNextBadge) * 100;

  const gradeCards = grades.map(g => `
    <a class="grade-card" href="#" onclick="navigate('grade',{gradeId:'${g.id}'});return false;">
      <div class="grade-card-top">
        <div class="card-icon">📖</div>
        <span class="arrow-icon">→</span>
      </div>
      <h3>${g.label}</h3>
      <p>${g.desc}</p>
    </a>
  `).join('');

  const trackCards = tracks.map(t => `
    <a class="track-card ${t.style}" href="#" onclick="navigate('track',{trackId:'${t.id}'});return false;">
      <div class="track-icon">${t.icon}</div>
      <div class="track-info">
        <h3>${t.label}</h3>
        <p>${t.desc}</p>
      </div>
      <span class="arrow-icon">→</span>
    </a>
  `).join('');

  return `
    ${renderNavbar('dashboard')}
    <div class="main-content">
      <div class="page-header">
        <h1>Welcome, ${user?.name ? user.name.split(' ')[0] : 'Guest'} ${user?.name?.split(' ')[1]?.toLowerCase() || ''}</h1>
        <p>Pick a learning area to dive in.</p>
      </div>

      <div style="display:grid;grid-template-columns:1fr 320px;gap:24px;align-items:start;margin-bottom:40px;">
        <div class="premium-banner">
          <div class="premium-banner-left">
            <div class="premium-icon">👑</div>
            <div>
              <h3>Go Premium — Unlock everything</h3>
              <p>PDFs, videos, full quizzes &amp; progress tracking. KSh 400/month or 800/year.</p>
            </div>
          </div>
          <a class="btn btn-orange" href="#" onclick="navigate('premium');return false;">Upgrade</a>
        </div>
        <div class="badge-card">
          <div class="badge-header">
            <div class="badge-title"><span>🏆</span> Your Badge</div>
            <span class="badge-pill">${user.badge}</span>
          </div>
          <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
          <div class="progress-label">${user.lessonsCompleted} lessons completed • ${user.lessonsToNextBadge - user.lessonsCompleted} more to reach Amateur</div>
        </div>
      </div>

      <div class="section-title">Grades 4 – 9</div>
      <div class="card-grid">${gradeCards}</div>

      <div class="section-title">Specialised Tracks</div>
      <div class="tracks-grid">${trackCards}</div>
    </div>
  `;
}

// ===== GRADE / TRACK PAGE =====
function renderCategoryPage(id, isTrack = false) {
  const info = isTrack
    ? APP_DATA.tracks.find(t => t.id === id)
    : APP_DATA.grades.find(g => g.id === id);

  if (!info) return renderDashboard();

  let subjectData;
  if (isTrack) {
    subjectData = APP_DATA.tracks_subjects[id] || [];
  } else if (APP_DATA.subjects[id]) {
    subjectData = APP_DATA.subjects[id];
  } else {
    // grades 6-9 use shared structure
    subjectData = APP_DATA.grades69Subjects;
  }

  const sections = subjectData.map(section => {
    const lessonCards = section.lessons.map(lesson => {
      const isCompleted = state.completedLessons.includes(lesson.id);
      const isPremium = lesson.premium && !APP_DATA.user.isPremium;
      const badge = isCompleted
        ? '<span class="badge-completed">Completed</span>'
        : isPremium
          ? '<span class="badge-premium">🔒 Premium</span>'
          : '<span class="play-icon">▶</span>';

      return `
        <a class="lesson-card" href="#" onclick="${isPremium ? `navigate('premium');` : `navigate('lesson',{lessonId:'${lesson.id}',lessonTitle:encodeURIComponent('${lesson.title}'),subject:encodeURIComponent('${section.title}')});`}return false;">
          <div class="lesson-card-top">
            <div class="card-icon">📖</div>
            ${badge}
          </div>
          <h3>${lesson.title}</h3>
          <p>${lesson.desc}</p>
        </a>
      `;
    }).join('');

    return `
      <div class="subject-section">
        <div class="subject-section-title">${section.title}</div>
        <div class="card-grid card-grid-2">${lessonCards}</div>
      </div>
    `;
  }).join('');

  const backTarget = isTrack ? 'dashboard' : 'dashboard';

  return `
    ${renderNavbar('')}
    <div class="main-content">
      <div class="breadcrumb">
        <a href="#" onclick="navigate('dashboard');return false;">Dashboard</a>
        <span>›</span>
        <span class="current">${info.label}</span>
      </div>
      <div class="page-header">
        <h1>${info.label}</h1>
        <p>${info.desc}</p>
      </div>
      ${sections}
    </div>
  `;
}

// ===== LESSON PAGE =====
async function renderLessonPage(lessonId, lessonTitle, subject) {
  const title = decodeURIComponent(lessonTitle);
  const subjectName = decodeURIComponent(subject);
  const isCompleted = state.completedLessons.includes(lessonId);

  // Determine back navigation
  const gradeEntry = Object.entries(APP_DATA.subjects).find(([gid, sections]) =>
    sections.some(s => s.lessons.some(l => l.id === lessonId))
  );
  const trackEntry = Object.entries(APP_DATA.tracks_subjects).find(([tid, sections]) =>
    sections.some(s => s.lessons.some(l => l.id === lessonId))
  );
  const backId = gradeEntry ? gradeEntry[0] : trackEntry ? trackEntry[0] : null;
  const isTrackBack = !!trackEntry;

  const contentHtml = APP_DATA.lessonContent.default(title, subjectName);

  return `
    ${renderNavbar('')}
    <div class="main-content">
      <div class="breadcrumb">
        <a href="#" onclick="navigate('dashboard');return false;">Dashboard</a>
        <span>›</span>
        ${backId ? `<a href="#" onclick="navigate('${isTrackBack?'track':'grade'}',{${isTrackBack?'trackId':'gradeId'}:'${backId}'});return false;">${isTrackBack ? APP_DATA.tracks.find(t=>t.id===backId)?.label : APP_DATA.grades.find(g=>g.id===backId)?.label}</a><span>›</span>` : ''}
        <span class="current">${title}</span>
      </div>

      <div class="lesson-body">
        <div class="page-header">
          <h1>${title}</h1>
          <p>${subjectName}</p>
        </div>

        <div class="lesson-content">${contentHtml}</div>

        <div class="quiz-section">
          <h2>Test Your Knowledge</h2>
          <p class="quiz-subtitle">Answer these questions to check your understanding of ${title}.</p>
          <div id="quiz-container">
            <div class="quiz-loading">
              <div class="spinner"></div>
              <p>Generating quiz questions…</p>
            </div>
          </div>
        </div>

        <div style="display:flex;gap:12px;margin-top:32px;flex-wrap:wrap;">
          ${backId ? `<a class="btn btn-ghost" href="#" onclick="navigate('${isTrackBack?'track':'grade'}',{${isTrackBack?'trackId':'gradeId'}:'${backId}'});return false;">← Back</a>` : ''}
          ${!isCompleted ? `<button class="btn btn-primary" onclick="markLessonComplete('${lessonId}')">Mark as Complete ✓</button>` : '<span class="badge-completed" style="padding:10px 16px;font-size:14px;">✓ Completed</span>'}
        </div>
      </div>
    </div>
  `;
}

function markLessonComplete(lessonId) {
  if (!state.completedLessons.includes(lessonId)) {
    state.completedLessons.push(lessonId);
    APP_DATA.user.lessonsCompleted++;
    saveState();
    showToast('✓ Lesson marked as complete!');
    renderApp();
  }
}

// ===== PREMIUM PAGE =====
function renderPremiumPage() {
  return `
    ${renderNavbar('premium')}
    <div class="main-content">
      <div class="premium-hero">
        <div class="crown">👑</div>
        <h1>Go Premium</h1>
        <p>Unlock every lesson, quiz, PDF and video across all grades and tracks.</p>
      </div>

      <div class="pricing-grid">
        <div class="pricing-card">
          <div class="pricing-period">Monthly</div>
          <div class="pricing-amount"><span class="pricing-currency">KSh</span> 400</div>
          <div class="pricing-per">per month</div>
          <ul class="features-list">
            <li><span class="check">✓</span> All grades unlocked</li>
            <li><span class="check">✓</span> AI-powered quizzes</li>
            <li><span class="check">✓</span> Downloadable PDFs</li>
            <li><span class="check">✓</span> Video lessons</li>
            <li><span class="check">✓</span> Progress tracking</li>
          </ul>
          <button class="btn btn-outline" style="width:100%;justify-content:center;" onclick="showToast('Redirecting to payment…')">Get Monthly</button>
        </div>

        <div class="pricing-card featured">
          <div class="save-badge">Save 17%</div>
          <div class="pricing-period">Yearly</div>
          <div class="pricing-amount"><span class="pricing-currency">KSh</span> 800</div>
          <div class="pricing-per">per year</div>
          <ul class="features-list">
            <li><span class="check">✓</span> All grades unlocked</li>
            <li><span class="check">✓</span> AI-powered quizzes</li>
            <li><span class="check">✓</span> Downloadable PDFs</li>
            <li><span class="check">✓</span> Video lessons</li>
            <li><span class="check">✓</span> Progress tracking</li>
          </ul>
          <button class="btn btn-orange" style="width:100%;justify-content:center;" onclick="showToast('Redirecting to payment…')">Get Yearly — Best Value</button>
        </div>
      </div>

      <p style="text-align:center;color:var(--gray-400);font-size:13px;">Payment via M-Pesa, card or bank transfer. Cancel anytime.</p>
    </div>
  `;
}

// ===== PROFILE PAGE =====
function renderProfilePage() {
  const { user } = APP_DATA;
  const progress = Math.min(100, (user.lessonsCompleted / user.lessonsToNextBadge) * 100);

  return `
    ${renderNavbar('')}
    <div class="main-content">
      <div class="page-header">
        <h1>My Profile</h1>
        <p>Your learning progress and account settings.</p>
      </div>

      <div class="profile-card">
        <div class="profile-avatar">${user.name.charAt(0)}</div>
        <div class="profile-name">${user.name}</div>
        <div class="profile-email">${user.email}</div>

        <div class="stats-row">
          <div class="stat-box">
            <div class="stat-num">${state.completedLessons.length}</div>
            <div class="stat-label">Lessons Done</div>
          </div>
          <div class="stat-box">
            <div class="stat-num">${user.badge}</div>
            <div class="stat-label">Current Badge</div>
          </div>
          <div class="stat-box">
            <div class="stat-num">${user.isPremium ? 'Yes' : 'No'}</div>
            <div class="stat-label">Premium</div>
          </div>
        </div>

        <div style="margin-bottom:8px;font-size:13px;font-weight:600;color:var(--gray-700);">Progress to Amateur</div>
        <div class="progress-bar" style="margin-bottom:8px;"><div class="progress-fill" style="width:${progress}%"></div></div>
        <div class="progress-label">${user.lessonsCompleted} / ${user.lessonsToNextBadge} lessons</div>
      </div>

      <div class="profile-card">
        <h2 style="font-size:17px;font-weight:700;margin-bottom:20px;">Account Settings</h2>
        <div class="form-field">
          <label>Full Name</label>
          <input type="text" value="${user.name}" id="profile-name-input">
        </div>
        <div class="form-field">
          <label>Email Address</label>
          <input type="email" value="${user.email}" id="profile-email-input">
        </div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <button class="btn btn-primary" onclick="saveProfile()">Save Changes</button>
          ${!user.isPremium ? `<a class="btn btn-orange" href="#" onclick="navigate('premium');return false;">Upgrade to Premium 👑</a>` : ''}
        </div>
      </div>
    </div>
  `;
}

function saveProfile() {
  const name = document.getElementById('profile-name-input')?.value.trim();
  const email = document.getElementById('profile-email-input')?.value.trim();
  if (name) APP_DATA.user.name = name;
  if (email) APP_DATA.user.email = email;
  showToast('Profile saved!');
}

// ===== QUIZ ENGINE =====
async function loadQuiz(lessonId, lessonTitle, subject) {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  const title = decodeURIComponent(lessonTitle);
  const subjectName = decodeURIComponent(subject);

  const prompt = `Generate exactly 5 multiple-choice quiz questions for a Kenyan primary/secondary school student learning about "${title}" in ${subjectName}.

Return ONLY a JSON array, no markdown, no explanation. Each item: {"question":"...","options":["A...","B...","C...","D..."],"answer":0} where answer is the 0-based index of the correct option.

Make questions clear, educational and appropriate for Kenyan curriculum. Use Kenyan context where relevant.`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.7, maxOutputTokens: 1000 }
        })
      }
    );

    const data = await response.json();
    const text = data.candidates[0].content.parts[0].text;
    const clean = text.replace(/```json|```/g, '').trim();
    const questions = JSON.parse(clean);

    renderQuiz(container, questions, lessonId);
  } catch (err) {
    container.innerHTML = `
      <div style="text-align:center;padding:32px;color:var(--gray-400);">
        <div style="font-size:32px;margin-bottom:8px;">⚠️</div>
        <p>Could not load quiz. Check your API key or connection and try again.</p>
        <button class="btn btn-ghost" style="margin-top:12px;" onclick="loadQuiz('${lessonId}','${lessonTitle}','${subject}')">Try Again</button>
      </div>
    `;
  }
}

function renderQuiz(container, questions, lessonId) {
  const answers = {};
  let submitted = false;

  function buildQuiz() {
    const qHtml = questions.map((q, qi) => {
      const opts = q.options.map((opt, oi) => {
        let cls = 'option-item';
        if (submitted) {
          if (oi === q.answer) cls += ' correct';
          else if (answers[qi] === oi && oi !== q.answer) cls += ' wrong';
        } else if (answers[qi] === oi) {
          cls += ' selected';
        }
        const letter = ['A','B','C','D'][oi];
        return `
          <div class="${cls}" onclick="${submitted ? '' : `selectOption(${qi},${oi})`}">
            <span class="option-letter">${letter}</span>
            ${opt}
          </div>
        `;
      }).join('');

      return `
        <div class="question-block">
          <div class="question-text"><span class="question-num">Q${qi+1}.</span>${q.question}</div>
          <div class="options-list">${opts}</div>
        </div>
      `;
    }).join('');

    let resultHtml = '';
    if (submitted) {
      const score = questions.filter((q, i) => answers[i] === q.answer).length;
      const pct = Math.round((score / questions.length) * 100);
      resultHtml = `
        <div class="quiz-result">
          <div class="quiz-score">${score}/${questions.length}</div>
          <p>You scored ${pct}% — ${pct >= 80 ? 'Excellent work! 🎉' : pct >= 60 ? 'Good effort! Keep practising.' : 'Keep studying and try again.'}</p>
          <div style="display:flex;gap:12px;justify-content:center;">
            <button class="btn btn-ghost" onclick="retryQuiz()">Try Again</button>
            <button class="btn btn-primary" onclick="markLessonComplete('${lessonId}')">Mark Complete ✓</button>
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      ${qHtml}
      <div class="quiz-actions">
        <span style="font-size:13px;color:var(--gray-400);">${Object.keys(answers).length} of ${questions.length} answered</span>
        ${!submitted ? `<button class="btn btn-primary" onclick="submitQuiz()" ${Object.keys(answers).length < questions.length ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>Submit Quiz →</button>` : ''}
      </div>
      ${resultHtml}
    `;
  }

  window.selectOption = (qi, oi) => {
    if (submitted) return;
    answers[qi] = oi;
    buildQuiz();
  };

  window.submitQuiz = () => {
    submitted = true;
    buildQuiz();
  };

  window.retryQuiz = () => {
    submitted = false;
    Object.keys(answers).forEach(k => delete answers[k]);
    buildQuiz();
  };

  buildQuiz();
}

// ===== MAIN RENDER =====
async function renderApp() {
  const app = document.getElementById('app');
  const params = getParams();

  // Restore saved session
  if (typeof auth !== 'undefined') auth.restore();

  const isLoggedIn = typeof auth !== 'undefined' ? auth.isLoggedIn() : true;
  const publicPages = ['login', 'signup'];

  // Redirect to login if not authenticated
  if (!isLoggedIn && !publicPages.includes(params.page)) {
    app.innerHTML = renderLoginPage();
    return;
  }

  if (params.page === 'login') {
    app.innerHTML = renderLoginPage();
  } else if (params.page === 'signup') {
    app.innerHTML = renderSignupPage();
  } else if (params.page === 'grade' && params.gradeId) {
    app.innerHTML = renderCategoryPage(params.gradeId, false);
  } else if (params.page === 'track' && params.trackId) {
    app.innerHTML = renderCategoryPage(params.trackId, true);
  } else if (params.page === 'lesson' && params.lessonId) {
    app.innerHTML = await renderLessonPage(params.lessonId, params.lessonTitle, params.subject);
    loadQuiz(params.lessonId, params.lessonTitle, params.subject);
  } else if (params.page === 'premium') {
    app.innerHTML = renderPremiumPage();
  } else if (params.page === 'profile') {
    app.innerHTML = renderProfilePage();
  } else {
    app.innerHTML = renderDashboard();
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', renderApp);

// ===== AUTH STATE =====
const auth = {
  isLoggedIn: () => !!localStorage.getItem('es_user'),
  logIn: (name, email) => {
    localStorage.setItem('es_user', JSON.stringify({ name, email }));
    APP_DATA.user.name = name;
    APP_DATA.user.email = email;
  },
  restore: () => {
    const stored = localStorage.getItem('es_user');
    if (stored) {
      const { name, email } = JSON.parse(stored);
      APP_DATA.user.name = name;
      APP_DATA.user.email = email;
      return true;
    }
    return false;
  }
};

function logOut() {
  localStorage.removeItem('es_user');
  navigate('login');
  showToast('Logged out successfully.');
}

// ===== LOGIN PAGE =====
function renderLoginPage(errorMsg = '') {
  return `
    <div style="min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;background:var(--gray-50);padding:24px;">
      <a href="#" onclick="navigate('dashboard');return false;" style="display:flex;align-items:center;gap:10px;text-decoration:none;margin-bottom:32px;">
        <div class="brand-logo">&#128737;</div>
        <span class="brand-name">Edu<span>Secure</span></span>
      </a>
      <div style="background:white;border:1px solid var(--gray-200);border-radius:var(--radius);padding:36px 32px;width:100%;max-width:400px;box-shadow:var(--shadow-md);">
        <h1 style="font-size:22px;font-weight:800;margin-bottom:4px;">Welcome back</h1>
        <p style="color:var(--gray-500);font-size:14px;margin-bottom:28px;">Log in to continue learning.</p>
        ${`<div id="login-error" style="display:none;background:#fff1f2;border:1px solid #fecdd3;color:#e11d48;padding:10px 14px;border-radius:var(--radius-sm);font-size:13px;margin-bottom:20px;"></div>`}
        <div class="form-field">
          <label>Full Name</label>
          <input type="text" id="login-name" placeholder="John Doe" />
        </div>
        <div class="form-field">
          <label>Email Address</label>
          <input type="email" id="login-email" placeholder="john@example.com" />
        </div>
        <div class="form-field">
          <label>Password</label>
          <input type="password" id="login-password" placeholder="••••••••" onkeydown="if(event.key==='Enter')handleLogin()" />
        </div>
        <button class="btn btn-primary" style="width:100%;justify-content:center;padding:12px;" onclick="handleLogin()">Log In</button>
        <p style="text-align:center;font-size:13px;color:var(--gray-500);margin-top:20px;">
          Don't have an account?
          <a href="#" onclick="navigate('signup');return false;" style="color:var(--blue);font-weight:600;">Sign up</a>
        </p>
      </div>
    </div>
  `;
}

function showAuthError(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.textContent = '⚠️ ' + msg; el.style.display = 'block'; }
}

function handleLogin() {
  const name = document.getElementById('login-name').value.trim();
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  if (!name || !email || !password) { showAuthError('login-error','Please fill in all fields.'); return; }
  if (!email.includes('@')) { showAuthError('login-error','Enter a valid email address.'); return; }
  if (password.length < 6) { showAuthError('login-error','Password must be at least 6 characters.'); return; }
  auth.logIn(name, email);
  navigate('dashboard');
  showToast('Welcome back, ' + name.split(' ')[0] + '! 👋');
}

// ===== SIGNUP PAGE =====
function renderSignupPage() {
  return `
    <div style="min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;background:var(--gray-50);padding:24px;">
      <a href="#" onclick="navigate('login');return false;" style="display:flex;align-items:center;gap:10px;text-decoration:none;margin-bottom:32px;">
        <div class="brand-logo">&#128737;</div>
        <span class="brand-name">Edu<span>Secure</span></span>
      </a>
      <div style="background:white;border:1px solid var(--gray-200);border-radius:var(--radius);padding:36px 32px;width:100%;max-width:400px;box-shadow:var(--shadow-md);">
        <h1 style="font-size:22px;font-weight:800;margin-bottom:4px;">Create your account</h1>
        <p style="color:var(--gray-500);font-size:14px;margin-bottom:28px;">Start learning for free today.</p>
        <div id="signup-error" style="display:none;background:#fff1f2;border:1px solid #fecdd3;color:#e11d48;padding:10px 14px;border-radius:var(--radius-sm);font-size:13px;margin-bottom:20px;"></div>
        <div class="form-field">
          <label>Full Name</label>
          <input type="text" id="signup-name" placeholder="John Doe" />
        </div>
        <div class="form-field">
          <label>Email Address</label>
          <input type="email" id="signup-email" placeholder="john@example.com" />
        </div>
        <div class="form-field">
          <label>Password</label>
          <input type="password" id="signup-password" placeholder="At least 6 characters" />
        </div>
        <div class="form-field">
          <label>Confirm Password</label>
          <input type="password" id="signup-confirm" placeholder="Repeat your password" onkeydown="if(event.key==='Enter')handleSignup()" />
        </div>
        <button class="btn btn-primary" style="width:100%;justify-content:center;padding:12px;" onclick="handleSignup()">Create Account</button>
        <p style="text-align:center;font-size:13px;color:var(--gray-500);margin-top:20px;">
          Already have an account?
          <a href="#" onclick="navigate('login');return false;" style="color:var(--blue);font-weight:600;">Log in</a>
        </p>
      </div>
    </div>
  `;
}

function handleSignup() {
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value;
  const confirm = document.getElementById('signup-confirm').value;
  if (!name || !email || !password || !confirm) { showAuthError('signup-error','Please fill in all fields.'); return; }
  if (!email.includes('@')) { showAuthError('signup-error','Enter a valid email address.'); return; }
  if (password.length < 6) { showAuthError('signup-error','Password must be at least 6 characters.'); return; }
  if (password !== confirm) { showAuthError('signup-error','Passwords do not match.'); return; }
  auth.logIn(name, email);
  navigate('dashboard');
  showToast('Account created! Welcome, ' + name.split(' ')[0] + '! 🎉');
}

// ===== INITIALIZE APP ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', () => {
  navigate(auth.isLoggedIn() ? 'dashboard' : 'login');
}); 