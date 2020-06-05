const customConfig = {
  failureThreshold: 0.01,
  failureThresholdType: 'percent',
};

describe('<FormGroup /> visually looks correct', () => {
  test('without description text', async () => {
    await page.goto(
      'http://localhost:9009/iframe.html?path=/story/components-form-group--without-description&&knob-Description position=end&knob-Label=Your name',
    );
    const formGroup = await page.$('[data-testid=form-group]');
    const image = await formGroup.screenshot();
    expect(image).toMatchImageSnapshot(customConfig);
  });
  test('with description text on left', async () => {
    await page.goto(
      'http://localhost:9009/iframe.html?path=/story/components-form-group--with-description&&knob-Description position=start&knob-Label=Your name',
    );
    const formGroup = await page.$('[data-testid=form-group]');
    const image = await formGroup.screenshot();
    expect(image).toMatchImageSnapshot(customConfig);
  });
  test('with description text on center', async () => {
    await page.goto(
      'http://localhost:9009/iframe.html?path=/story/components-form-group--with-description&&knob-Description position=center&knob-Label=Your name',
    );
    const formGroup = await page.$('[data-testid=form-group]');
    const image = await formGroup.screenshot();
    expect(image).toMatchImageSnapshot(customConfig);
  });
  test('with description text on right', async () => {
    await page.goto(
      'http://localhost:9009/iframe.html?path=/story/components-form-group--with-description&&knob-Description position=end&knob-Label=Your name',
    );
    const formGroup = await page.$('[data-testid=form-group]');
    const image = await formGroup.screenshot();
    expect(image).toMatchImageSnapshot(customConfig);
  });
});
