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
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot(customConfig);
  });
  test('color: blue', async () => {
    await page.goto(
      'http://localhost:9009/iframe.html?path=/story/components-badge--blue',
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot(customConfig);
  });
  test('color: red', async () => {
    await page.goto(
      'http://localhost:9009/iframe.html?path=/story/components-badge--red',
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot(customConfig);
  });
});
