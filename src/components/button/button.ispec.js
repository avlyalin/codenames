/* eslint no-undef: 0 */

const customConfig = {
  failureThreshold: 0.01,
  failureThresholdType: 'percent',
};

describe('<Button /> visually looks correct', () => {
  describe('size', () => {
    test('small (sm)', async () => {
      await page.goto(
        'http://localhost:9009/iframe.html?path=/story/components-button--common&knob-Rounded=true&knob-Disabled=&knob-Full width=true&knob-Content=Click me&knob-Color=blue&knob-Shadow=true&knob-Size=sm',
      );
      const button = await page.$('button');
      const image = await button.screenshot();
      expect(image).toMatchImageSnapshot(customConfig);
    });
    test('medium (md)', async () => {
      await page.goto(
        'http://localhost:9009/iframe.html?path=/story/components-button--common&knob-Rounded=true&knob-Disabled=&knob-Full width=true&knob-Content=Click me&knob-Color=blue&knob-Shadow=true&knob-Size=md',
      );
      const badge = await page.$('button');
      const image = await badge.screenshot();
      expect(image).toMatchImageSnapshot(customConfig);
    });
    test('large (lg)', async () => {
      await page.goto(
        'http://localhost:9009/iframe.html?path=/story/components-button--common&knob-Rounded=true&knob-Disabled=&knob-Full width=true&knob-Content=Click me&knob-Color=blue&knob-Shadow=true&knob-Size=lg',
      );
      const button = await page.$('button');
      const image = await button.screenshot();
      expect(image).toMatchImageSnapshot(customConfig);
    });
  });

  describe('borders', () => {
    test('rounded', async () => {
      await page.goto(
        'http://localhost:9009/iframe.html?path=/story/components-button--common&knob-Rounded=true&knob-Disabled=&knob-Full width=true&knob-Content=Click me&knob-Color=blue&knob-Shadow=true&knob-Size=md',
      );
      const button = await page.$('button');
      const image = await button.screenshot();
      expect(image).toMatchImageSnapshot(customConfig);
    });
    test('not rounded', async () => {
      await page.goto(
        'http://localhost:9009/iframe.html?path=/story/components-button--common&knob-Rounded=false&knob-Disabled=&knob-Full width=true&knob-Content=Click me&knob-Color=blue&knob-Shadow=true&knob-Size=md',
      );
      const button = await page.$('button');
      const image = await button.screenshot();
      expect(image).toMatchImageSnapshot(customConfig);
    });
  });

  describe('color: common', () => {
    test('common', async () => {
      await page.goto(
        'http://localhost:9009/iframe.html?path=/story/components-button--common&knob-Rounded=true&knob-Disabled=&knob-Full width=true&knob-Content=Click me&knob-Color=common&knob-Shadow=true&knob-Size=md',
      );
      const button = await page.$('button');
      const image = await button.screenshot();
      expect(image).toMatchImageSnapshot(customConfig);
    });
    test('with focus shadow', async () => {
      await page.goto(
        'http://localhost:9009/iframe.html?path=/story/components-button--common&knob-Rounded=true&knob-Disabled=&knob-Full width=true&knob-Content=Click me&knob-Color=common&knob-Shadow=true&knob-Size=md',
      );
      const button = await page.$('button');
      await page.click('button');
      const image = await button.screenshot();
      expect(image).toMatchImageSnapshot(customConfig);
    });
    test('without focus shadow', async () => {
      await page.goto(
        'http://localhost:9009/iframe.html?path=/story/components-button--common&knob-Rounded=true&knob-Disabled=&knob-Full width=true&knob-Content=Click me&knob-Color=common&knob-Shadow=false&knob-Size=md',
      );
      const button = await page.$('button');
      await page.click('button');
      const image = await button.screenshot();
      expect(image).toMatchImageSnapshot(customConfig);
    });
  });

  describe('color: blue', () => {
    test('common', async () => {
      await page.goto(
        'http://localhost:9009/iframe.html?path=/story/components-button--common&knob-Rounded=true&knob-Disabled=&knob-Full width=true&knob-Content=Click me&knob-Color=blue&knob-Shadow=true&knob-Size=md',
      );
      const button = await page.$('button');
      const image = await button.screenshot();
      expect(image).toMatchImageSnapshot(customConfig);
    });
    test('with focus shadow', async () => {
      await page.goto(
        'http://localhost:9009/iframe.html?path=/story/components-button--common&knob-Rounded=true&knob-Disabled=&knob-Full width=true&knob-Content=Click me&knob-Color=blue&knob-Shadow=true&knob-Size=md',
      );
      const button = await page.$('button');
      await page.click('button');
      const image = await button.screenshot();
      expect(image).toMatchImageSnapshot(customConfig);
    });
    test('without focus shadow', async () => {
      await page.goto(
        'http://localhost:9009/iframe.html?path=/story/components-button--common&knob-Rounded=true&knob-Disabled=&knob-Full width=true&knob-Content=Click me&knob-Color=blue&knob-Shadow=false&knob-Size=md',
      );
      const button = await page.$('button');
      await page.click('button');
      const image = await button.screenshot();
      expect(image).toMatchImageSnapshot(customConfig);
    });
  });

  describe('color: red', () => {
    test('common', async () => {
      await page.goto(
        'http://localhost:9009/iframe.html?path=/story/components-button--common&knob-Rounded=true&knob-Disabled=&knob-Full width=true&knob-Content=Click me&knob-Color=red&knob-Shadow=true&knob-Size=md',
      );
      const button = await page.$('button');
      const image = await button.screenshot();
      expect(image).toMatchImageSnapshot(customConfig);
    });
    test('with focus shadow', async () => {
      await page.goto(
        'http://localhost:9009/iframe.html?path=/story/components-button--common&knob-Rounded=true&knob-Disabled=&knob-Full width=true&knob-Content=Click me&knob-Color=red&knob-Shadow=true&knob-Size=md',
      );
      const button = await page.$('button');
      await page.click('button');
      const image = await button.screenshot();
      expect(image).toMatchImageSnapshot(customConfig);
    });
    test('without focus shadow', async () => {
      await page.goto(
        'http://localhost:9009/iframe.html?path=/story/components-button--common&knob-Rounded=true&knob-Disabled=&knob-Full width=true&knob-Content=Click me&knob-Color=red&knob-Shadow=false&knob-Size=md',
      );
      const button = await page.$('button');
      await page.click('button');
      const image = await button.screenshot();
      expect(image).toMatchImageSnapshot(customConfig);
    });
  });
});
