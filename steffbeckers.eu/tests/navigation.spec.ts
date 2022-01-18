import { expect, test } from '@playwright/test';

test('navigation', async ({ page }) => {
  // Go to https://steffbeckers.eu/
  await page.goto('https://steffbeckers.eu/');
  
  await page.screenshot({ path: 'test-results/screenshots/home-page.png' });

  // Click text=Experience
  await page.click('text=Experience');
  await expect(page).toHaveURL('https://steffbeckers.eu/experience');

  // Click text=Projects
  await page.click('text=Projects');
  await expect(page).toHaveURL('https://steffbeckers.eu/projects');
  
  // Click text=Blog
  await page.click('text=Blog');
  await expect(page).toHaveURL('https://steffbeckers.eu/blog');

  // Click text=IIS Express 10 localhost SSL certificate reset
  await page.click('text=IIS Express 10 localhost SSL certificate reset');
  await expect(page).toHaveURL('https://steffbeckers.eu/blog/iis-express-localhost-ssl-certificate-reset');

  // Click text=Contact
  await page.click('text=Contact');
  await expect(page).toHaveURL('https://steffbeckers.eu/contact');

  // Click text=Download CV
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('text=Download CV')
  ]);

  // Close page
  await page1.close();

  // Click text=Hi!
  await page.click('text=Hi!');
  await expect(page).toHaveURL('https://steffbeckers.eu/');
});