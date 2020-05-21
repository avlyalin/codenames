/* eslint no-undef: 0 */

const customConfig = {
  failureThreshold: 0.01,
  failureThresholdType: 'percent',
};

describe('<Badge /> visually looks correct', () => {
  test('color: default', async () => {
    await page.goto(
      'http://localhost:9009/iframe.html?path=/story/components-badge--default',
    );
    const badge = await page.$('[data-testid=badge]');
    const image = await badge.screenshot();
    expect(image).toMatchImageSnapshot(customConfig);
  });
  test('color: blue', async () => {
    await page.goto(
      'http://localhost:9009/iframe.html?path=/story/components-badge--blue',
    );
    const badge = await page.$('[data-testid=badge]');
    const image = await badge.screenshot();
    expect(image).toMatchImageSnapshot(customConfig);
  });
  test('color: red', async () => {
    await page.goto(
      'http://localhost:9009/iframe.html?path=/story/components-badge--red',
    );
    const badge = await page.$('[data-testid=badge]');
    const image = await badge.screenshot();
    expect(image).toMatchImageSnapshot(customConfig);
  });
});
