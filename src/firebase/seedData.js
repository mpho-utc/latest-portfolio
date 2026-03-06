import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// --- Your Firebase config ---
const firebaseConfig = {
  apiKey: "AIzaSyAsi0hHi3zhAUC0XEsbOTZfT3iJVoCO5XU",
  authDomain: "my-portfolio-637e8.firebaseapp.com",
  projectId: "my-portfolio-637e8",
  storageBucket: "my-portfolio-637e8.firebasestorage.app",
  messagingSenderId: "521037896961",
  appId: "1:521037896961:web:8f5453fbbaec174531cf00"
};

// --- Initialize Firebase ---
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// --- Posts to seed ---
const posts = [
  {
    author: "Mpho Shabalala",
    category: "AI/coding",
    role: "admin",
    title: "How Can we maximise ai's efficience",
    subtitle: "Correlation between external variables and AI dependence - A deep dive into efficient use of LLMs for coding",
    content: "# Some key environmental factors\n\nTooling & Frameworks: Modern frameworks (React, Django, NestJS) provide abstractions ...\n\n## How this could help AI-assisted development\n\nIf you could quantify environmental factors ...\n\n## Limitations\n\nNot all factors are quantifiable ...\n\n**Conclusion:** Environment influences code volume but human judgment is needed.",
    createdAt: serverTimestamp(),
    images: [{img: "https://hkaift.com/wp-content/uploads/2023/07/iStock-1148091793_edited.jpg", alt: 'image of '}],
    links: ["https://github.com/mpho-shabalala", "https://linkedin.com/in/mpho-shabalala"],
    references: ["https://reference1.com", "https://reference2.com"],
    comments: [
      { message: "I find this really interesting", author: "Mashma Villi", time: new Date() }
    ]
  },
  {
    author: "Mpho Shabalala",
    category: "AI/research",
    role: "admin",
    title: "Why Context Windows Change Problem-Solving",
    subtitle: "Understanding how large context transforms reasoning in LLMs",
    content: "# Context Windows as Cognitive Bandwidth\n\nLarger context windows allow AI models to retain more information...\n\n## Benefits\n- Less hallucination\n- Better long-form reasoning\n- Ability to handle entire codebases\n\n## Limitations\nModel still needs structured prompts to reason well.\n\n**Conclusion:** Bigger context = more capability, but still needs human guidance.",
    createdAt: serverTimestamp(),
    images: [{img:"https://i.imgur.com/6qU7WcE.jpeg", alt: 'image of '}],
    links: ["https://github.com/mpho-shabalala"],
    references: ["https://research1.com"],
    comments: [{ message: "This is a good explanation!", author: "Nathi Big", time: new Date() }]
  },
  {
    author: "Mpho Shabalala",
    category: "coding",
    role: "admin",
    title: "Why Clean Architecture Beats Speed Coding",
    subtitle: "Understanding long-term maintainability",
    content: "# Clean Architecture vs Speed Coding\n\nSpeed coding works for small projects, but breaks at scale.\n\n## Layers Matter\n- Separation of concerns\n- Testability\n- Scalability\n\n**Conclusion:** Clean architecture saves time in the long run.",
    createdAt: serverTimestamp(),
    images: [{img:"https://i.imgur.com/0T3vH9Q.jpeg", alt: 'image of '}],
    links: ["https://linkedin.com/in/mpho-shabalala"],
    references: ["https://martinfowler.com"],
    comments: [{ message: "Architecture first always!", author: "Neo Matlala", time: new Date() }]
  },
  {
    author: "Mpho Shabalala",
    category: "AI/philosophy",
    role: "admin",
    title: "The Psychology of Prompting",
    subtitle: "How your mental model affects AI output",
    content: "# Prompting Is a Psychological Skill\n\nYour internal clarity translates into external clarity for the AI.\n\n## Why It Matters\n- Better prompts = better thinking\n- You learn your own thought structure\n- AI mirrors your cognitive patterns\n\n**Conclusion:** Prompting is self-awareness and logic combined.",
    createdAt: serverTimestamp(),
    images: [{img:"https://i.imgur.com/btiG6q0.jpeg", alt: 'image of '}],
    links: ["https://github.com/mpho-shabalala"],
    references: ["https://cognitive-science.com"],
    comments: [{ message: "Deep and true!", author: "Zama Dress", time: new Date() }]
  },
  {
    author: "Mpho Shabalala",
    category: "coding/education",
    role: "admin",
    title: "Learning Programming Through Projects",
    subtitle: "Why project-based learning accelerates mastery",
    content: "# Project-Based Learning\n\nTheory alone doesn't build skill — execution does.\n\n## Why Projects Help\n- Real-world constraints\n- Unexpected bugs\n- Forced learning\n\n**Conclusion:** Build + break + fix = mastery.",
    createdAt: serverTimestamp(),
    images: [{img:"https://i.imgur.com/OxWzmbg.jpeg", alt: 'image of '}],
    links: ["https://github.com/mpho-shabalala"],
    references: ["https://project-learning.com"],
    comments: [{ message: "I agree 100%!", author: "Kayla M", time: new Date() }]
  },
  {
    author: "Mpho Shabalala",
    category: "AI/coding",
    role: "admin",
    title: "How AI Reduces Cognitive Load for Developers",
    subtitle: "The hidden benefits of outsourcing memory to machines",
    content: "# Cognitive Load & AI\n\nAI acts as external memory, reducing the load on your working memory.\n\n## Benefits\n- More focus on logic\n- Faster context switching\n- Less decision fatigue\n\n**Conclusion:** AI extends your mental RAM.",
    createdAt: serverTimestamp(),
    images: [{img:"https://i.imgur.com/EtCjn6N.jpeg", alt: 'image of '}],
    links: ["https://linkedin.com/in/mpho-shabalala"],
    references: ["https://working-memory.org"],
    comments: [{ message: "So true, I feel this every day.", author: "Phillip", time: new Date() }]
  },
  {
    author: "Mpho Shabalala",
    category: "philosophy",
    role: "admin",
    title: "Why Overthinking Feels Like Insight",
    subtitle: "Understanding the line between analysis and anxiety",
    content: "# The Nature of Overthinking\n\nOverthinking mimics deep thinking but lacks structure.\n\n## How To Know the Difference\n- Insight has direction\n- Overthinking loops\n- Insight feels light\n\n**Conclusion:** Structure your thinking, don’t drown in it.",
    createdAt: serverTimestamp(),
    images: [{img:"https://i.imgur.com/8hU5K6r.jpeg", alt: 'image of '}],
    links: ["https://github.com/mpho-shabalala"],
    references: ["https://psychologytoday.com"],
    comments: [{ message: "Needed this today!", author: "Lerato", time: new Date() }]
  },
  {
    author: "Mpho Shabalala",
    category: "productivity",
    role: "admin",
    title: "Why Your Environment Controls Your Output",
    subtitle: "Understanding environmental influence on coding ability",
    content: "# Environmental Influence\n\nYour physical and digital environment shapes your productivity.\n\n## Key Factors\n- Noise\n- Lighting\n- Mental space\n- UI/UX of tools\n\n**Conclusion:** Clean your environment, clean your code.",
    createdAt: serverTimestamp(),
    images: [{img:"https://i.imgur.com/EefLcHw.jpeg", alt: 'image of '}],
    links: ["https://linkedin.com/in/mpho-shabalala"],
    references: ["https://environmental-design.com"],
    comments: [{ message: "This explains a lot!", author: "Sipho", time: new Date() }]
  },
  {
    author: "Mpho Shabalala",
    category: "motivation",
    role: "admin",
    title: "Why You Don’t Feel Smart (But You Actually Are)",
    subtitle: "The mismatch between internal processing and external results",
    content: "# Feeling vs Reality\n\nSmart people often underestimate themselves.\n\n## Why?\n- You see your own confusion\n- Others only see the results\n- Growth feels chaotic inside\n\n**Conclusion:** Confusion is a sign of learning.",
    createdAt: serverTimestamp(),
    images: [{img:"https://i.imgur.com/38DWlO8.jpeg", alt: 'image of '}],
    links: ["https://github.com/mpho-shabalala"],
    references: ["https://self-perception.org"],
    comments: [{ message: "This hit hard!", author: "Nomvula", time: new Date() }]
  },
  {
    author: "Mpho Shabalala",
    category: "LLMs",
    role: "admin",
    title: "How to Think With an AI Instead of At It",
    subtitle: "Shifting from questioning to collaboration",
    content: "# Collaborative Reasoning with AI\n\nInstead of asking AI for answers, use it to extend your own thought process.\n\n## How\n- Co-build logic\n- Iterate assumptions\n- Validate reasoning\n\n**Conclusion:** AI is a thinking partner, not a calculator.",
    createdAt: serverTimestamp(),
     images: [{img:"https://i.imgur.com/lbvKD1S.jpeg", alt: 'image of '}],
    links: ["https://github.com/mpho-shabalala"],
    references: ["https://ai-collaboration.org"],
    comments: [{ message: "This is the future!", author: "Kaz", time: new Date() }]
  }
];

// --- Seed all posts ---
async function seedAllPosts() {
  try {
    for (const post of posts) {
      const docRef = await addDoc(collection(db, "blogs"), post);
      console.log("Post added with ID:", docRef.id);
    }
    console.log("🔥 All posts seeded successfully!");
  } catch (err) {
    console.error("❌ Error seeding posts:", err);
  }
}

seedAllPosts();
