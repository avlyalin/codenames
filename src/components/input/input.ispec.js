/* eslint no-undef: 0 */

const customConfig = {
  failureThreshold: 0.01,
  failureThresholdType: 'percent',
};

describe('<Input /> visually looks correct', () => {
  test('prop: not disabled', async () => {
    await page.goto(
      'http://localhost:9009/iframe.html?path=/story/components-input--common&knob-Disabled=&knob-Value=Chuck Norris',
    );
    const input = await page.$('input');
    const image = await input.screenshot();
    expect(image).toMatchImageSnapshot(customConfig);
  });
  test('prop: disabled', async () => {
    await page.goto(
      'http://localhost:9009/iframe.html?path=/story/components-input--common&knob-Disabled=true&knob-Value=Chuck Norris',
    );
    const input = await page.$('input');
    const image = await input.screenshot();
    expect(image).toMatchImageSnapshot(customConfig);
  });
});
