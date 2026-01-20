/**
 * PDF Generation Script for Jeffrey Mutchnik Resume
 * Uses Puppeteer to convert HTML resumes to high-quality PDFs
 *
 * Usage: node scripts/generate-pdf.js
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Resume configurations
const resumes = [
  {
    html: 'index.html',
    output: 'Jeffrey_Mutchnik_Resume_MarketingTechnology.pdf',
    name: 'Marketing Technology Manager'
  },
  {
    html: 'variants/marops-revops.html',
    output: 'Jeffrey_Mutchnik_Resume_MarketingOps.pdf',
    name: 'Marketing Operations Manager'
  },
  {
    html: 'variants/demand-gen.html',
    output: 'Jeffrey_Mutchnik_Resume_DemandGen.pdf',
    name: 'Demand Generation Manager'
  },
  {
    html: 'variants/general-marketing.html',
    output: 'Jeffrey_Mutchnik_Resume_Marketing.pdf',
    name: 'Marketing Manager'
  },
  {
    html: 'variants/hubspot-specialist.html',
    output: 'Jeffrey_Mutchnik_Resume_HubSpotAdmin.pdf',
    name: 'HubSpot Administrator'
  },
  {
    html: 'variants/healthcare-marketing.html',
    output: 'Jeffrey_Mutchnik_Resume_HealthcareMarketing.pdf',
    name: 'Healthcare Marketing Manager'
  },
  {
    html: 'variants/ats-optimized.html',
    output: 'Jeffrey_Mutchnik_Resume_ATS.pdf',
    name: 'ATS-Optimized (Single Column)'
  }
];

async function generatePDF(browser, htmlFile, outputName, displayName) {
  const page = await browser.newPage();

  // Get absolute path to HTML file
  const htmlPath = path.resolve(__dirname, '..', htmlFile);
  const outputPath = path.resolve(__dirname, '..', 'output', 'pdf', outputName);

  // Check if HTML file exists
  if (!fs.existsSync(htmlPath)) {
    console.error(`  Error: HTML file not found: ${htmlPath}`);
    await page.close();
    return false;
  }

  console.log(`  Generating: ${displayName}...`);

  try {
    // Load HTML file
    await page.goto(`file://${htmlPath}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Wait for fonts and styles to load
    await page.evaluateHandle('document.fonts.ready');

    // Generate PDF with print-optimized settings
    await page.pdf({
      path: outputPath,
      format: 'Letter',
      printBackground: true,
      margin: {
        top: '0',
        right: '0',
        bottom: '0',
        left: '0'
      },
      preferCSSPageSize: false,
      displayHeaderFooter: false
    });

    console.log(`  ✓ Created: ${outputName}`);
    await page.close();
    return true;

  } catch (error) {
    console.error(`  Error generating ${displayName}: ${error.message}`);
    await page.close();
    return false;
  }
}

async function main() {
  console.log('\n=== Jeffrey Mutchnik Resume PDF Generator ===\n');

  // Ensure output directory exists
  const outputDir = path.resolve(__dirname, '..', 'output', 'pdf');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Launch browser
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu'
    ],
    timeout: 60000
  });

  let successCount = 0;
  let failCount = 0;

  // Generate each PDF
  for (const resume of resumes) {
    const success = await generatePDF(
      browser,
      resume.html,
      resume.output,
      resume.name
    );
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
  }

  // Close browser
  await browser.close();

  // Summary
  console.log('\n=== Generation Complete ===');
  console.log(`  Success: ${successCount}`);
  console.log(`  Failed: ${failCount}`);
  console.log(`  Output: ${outputDir}\n`);

  process.exit(failCount > 0 ? 1 : 0);
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
