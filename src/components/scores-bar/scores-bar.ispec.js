/* eslint no-undef: 0 */

const customConfig = {
  failureThreshold: 0.01,
  failureThresholdType: 'percent',
};

describe('<ScoresBar /> visually looks correct', () => {
  test('"vs" icon is red for user from red team', async () => {
    await page.goto(
      'http://localhost:9009/iframe.html?path=/story/components-scores-bar--with-opened-cards&knob-User team=red',
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot(customConfig);
  });
  test('"vs" icon is blue for user from blue team', async () => {
    await page.goto(
      'http://localhost:9009/iframe.html?path=/story/components-scores-bar--with-opened-cards&knob-User team=blue',
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot(customConfig);
  });
  test('with 0 opened cards', async () => {
    await page.goto(
      'http://localhost:9009/iframe.html?path=/story/components-scores-bar--no-opened-cards&knob-User team=blue',
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot(customConfig);
  });
  test('with opened cards', async () => {
    await page.goto(
      'http://localhost:9009/iframe.html?path=/story/components-scores-bar--with-opened-cards&knob-User team=blue',
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot(customConfig);
  });
  test('with all opened team cards', async () => {
    await page.goto(
      'http://localhost:9009/iframe.html?path=/story/components-scores-bar--with-all-opened-team-cards&knob-User team=blue',
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot(customConfig);
  });
  test('with all opened cards', async () => {
    await page.goto(
      'http://localhost:9009/iframe.html?path=/story/components-scores-bar--with-all-opened-cards&knob-User team=blue',
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot(customConfig);
  });
});
