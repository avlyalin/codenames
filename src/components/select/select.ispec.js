/* eslint no-undef: 0 */

const customConfig = {
  failureThreshold: 0.01,
  failureThresholdType: 'percent',
};

describe('<Select /> visually looks correct', () => {
  test('closed', async () => {
    await page.goto(
      'http://localhost:9010/iframe.html?path=/story/components-select--common',
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot(customConfig);
  });

  test('opened', async () => {
    await page.goto(
      'http://localhost:9010/iframe.html?path=/story/components-select--common',
    );
    await page.click('select');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot(customConfig);
  });
});
