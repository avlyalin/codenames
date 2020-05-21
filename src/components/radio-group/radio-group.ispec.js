/* eslint no-undef: 0 */

const customConfig = {
  failureThreshold: 0.01,
  failureThresholdType: 'percent',
};

describe('<RadioGroup /> visually looks correct', () => {
  test('color: default', async () => {
    await page.goto(
      'http://localhost:9009/iframe.html?path=/story/components-radio-group--common&knob-Label=Field size&knob-Color=default',
    );
    const radioGroup = await page.$('[data-testid=radio-group]');
    const image = await radioGroup.screenshot();
    expect(image).toMatchImageSnapshot(customConfig);
  });
  test('color: blue', async () => {
    await page.goto(
      'http://localhost:9009/iframe.html?path=/story/components-radio-group--common&knob-Label=Field size&knob-Color=blue',
    );
    const radioGroup = await page.$('[data-testid=radio-group]');
    const image = await radioGroup.screenshot();
    expect(image).toMatchImageSnapshot(customConfig);
  });
  test('color: red', async () => {
    await page.goto(
      'http://localhost:9009/iframe.html?path=/story/components-radio-group--common&knob-Label=Field size&knob-Color=red',
    );
    const radioGroup = await page.$('[data-testid=radio-group]');
    const image = await radioGroup.screenshot();
    expect(image).toMatchImageSnapshot(customConfig);
  });
});
