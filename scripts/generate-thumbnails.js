// -------------------------------------------------------------------
// generate-thumbnails.js
// Generates project thumbnail images using OpenAI image API.
//
// Usage:
//   1. Create .env with:  OPENAI_API_KEY=sk-...
//   2. npm install openai dotenv
//   3. node scripts/generate-thumbnails.js
//
// Images are saved to public/projects/ and referenced by project
// card components automatically.
// -------------------------------------------------------------------

const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  console.error('❌ OPENAI_API_KEY not found in .env file.');
  console.error('   Create .env in the project root with: OPENAI_API_KEY=sk-...');
  process.exit(1);
}

// -------------------------------------------------------------------
// Project thumbnail prompts
// Each prompt is tuned to produce a dark, premium, abstract visual
// that matches the portfolio aesthetic (#0a0b0d bg, gold #c9a24b /
// indigo #5865f2 accents, editorial dark-tech mood).
// -------------------------------------------------------------------

const PROJECTS = [
  {
    id: '01',
    title: 'Traffic Collision Severity Predictor',
    prompt: [
      'Dark abstract data visualization composition.',
      'Warm gold (#c9a24b) glowing nodes and route lines over a near-black (#0a0b0d) field.',
      'Hints of a city grid / street network rendered as thin golden threads.',
      'A single indigo (#5865f2) pulse point or heat cluster suggesting collision prediction.',
      'Cinematic, editorial, minimal -- no text, no people, no cluttered dashboards.',
      '16:10 aspect ratio, premium dark-tech aesthetic, subtle grain texture.',
    ].join(' '),
  },
  {
    id: '02',
    title: 'Live Chat Application',
    prompt: [
      'Abstract network communication visual.',
      'Thin glowing indigo (#5865f2) threads connecting scattered gold (#c9a24b) nodes across a near-black (#0a0b0d) field.',
      'Subtle waveform or signal pulse lines suggesting real-time data flow.',
      'Minimal, cinematic, editorial dark-tech composition.',
      'No text, no device mockups, no people.',
      '16:10 aspect ratio, premium atmosphere, subtle grain.',
    ].join(' '),
  },
  {
    id: '03',
    title: 'Dynamic Memory Allocator',
    prompt: [
      'Abstract systems-programming visual.',
      'A precise geometric grid of near-black (#0a0b0d) blocks with gold (#c9a24b) boundary lines.',
      'A few blocks glowing indigo (#5865f2) as if allocated, the rest dim.',
      'Monospace / terminal DNA hinted through structured rectangular partitions.',
      'Minimal, architectural, dark and precise -- no text, no people.',
      '16:10 aspect ratio, premium editorial mood, subtle grain.',
    ].join(' '),
  },
  {
    id: '04',
    title: 'Producer-Consumer Queue',
    prompt: [
      'Abstract concurrency visual.',
      'A horizontal flow of gold (#c9a24b) glowing tokens passing through a narrow channel or pipeline.',
      'Indigo (#5865f2) thread-like lines converging and diverging around the channel.',
      'Near-black (#0a0b0d) background, the composition feels like synchronized motion frozen in time.',
      'Minimal, precise, dark-tech aesthetic -- no text, no people.',
      '16:10 aspect ratio, premium editorial look, subtle grain texture.',
    ].join(' '),
  },
  {
    id: '05',
    title: "Conway's Game of Life",
    prompt: [
      'Abstract cellular automata visual.',
      'A sparse grid of tiny gold (#c9a24b) squares scattered across a near-black (#0a0b0d) field.',
      'A few clusters of indigo (#5865f2) cells suggesting emergent patterns or gliders.',
      'Thin barely-visible grid lines connecting the cells.',
      'Minimal, mathematical beauty, dark and cinematic -- no text, no people.',
      '16:10 aspect ratio, premium editorial aesthetic, subtle grain.',
    ].join(' '),
  },
];

// -------------------------------------------------------------------
// Image generation
// -------------------------------------------------------------------

async function generateThumbnails() {
  // Dynamic import for ESM-only openai package
  const { default: OpenAI } = await import('openai');

  const openai = new OpenAI({ apiKey });

  const outDir = path.join(__dirname, '..', 'public', 'projects');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  for (const p of PROJECTS) {
    const outPath = path.join(outDir, `${p.id}.png`);
    if (fs.existsSync(outPath)) {
      console.log(`⏭  ${p.id}.png already exists -- skipping`);
      continue;
    }

    console.log(`🎨 Generating ${p.id}: ${p.title}...`);

    try {
      const response = await openai.images.generate({
        model: 'dall-e-3',
        prompt: p.prompt,
        n: 1,
        size: '1792x1024',
        quality: 'hd',
        style: 'vivid',
      });

      const imageUrl = response.data[0]?.url;
      if (!imageUrl) {
        console.error(`  ❌ No image URL returned for ${p.id}`);
        continue;
      }

      // Download the generated image
      console.log(`  📥 Downloading...`);
      const res = await fetch(imageUrl);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(outPath, buffer);
      console.log(`  ✅ Saved ${outPath}`);
    } catch (err) {
      console.error(`  ❌ Failed ${p.id}: ${err.message}`);
    }
  }

  console.log('\n🏁 Done.');
}

generateThumbnails();
