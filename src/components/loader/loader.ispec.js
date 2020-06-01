const customConfig = {
  failureThreshold: 0.01,
  failureThresholdType: 'percent',
};

describe('<Loader /> visually looks correct', () => {
  test('prop: is loading', async () => {
    await page.goto(
      'http://localhost:9009/iframe.html?id=components-loader--common&knob-Message=&knob-Animation=false&knob-Is%20loading=true',
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot(customConfig);
  });
  test('prop: not loading', async () => {
    await page.goto(
      'http://localhost:9009/iframe.html?id=components-loader--common&knob-Message=application%20start&knob-Animation=false&knob-Is%20loading=false',
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot(customConfig);
  });
  test('prop: is loading with text', async () => {
    await page.goto(
      'http://localhost:9009/iframe.html?id=components-loader--common&knob-Message=application%20start&knob-Animation=false&knob-Is%20loading=true',
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot(customConfig);
  });
});
