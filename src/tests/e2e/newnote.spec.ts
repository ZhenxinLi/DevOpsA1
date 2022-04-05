import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to http://localhost:3000/
  await page.goto('about:blank');

  // Click text=New Note


  // Click [placeholder="Enter Note Title"]


  // Fill [placeholder="Enter Note Title"]


  // Press Tab


  // Fill textarea[name="description"]


  // Click text=Save


  // Click text=Delete


});
