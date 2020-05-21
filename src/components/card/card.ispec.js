/* eslint no-undef: 0 */

const customConfig = {
  failureThreshold: 0.01,
  failureThresholdType: 'percent',
};

describe('<Card />', () => {
  describe('visually looks correct for common user', () => {
    describe('state: closed', () => {
      test('type: team', async () => {
        await page.goto(
          'http://localhost:9009/iframe.html?path=/story/components-card--team-card&knob-Is captain=&knob-Opened=&knob-Color=blue&knob-Word=Библиотека',
        );
        const card = await page.$('[data-testid=card]');
        const image = await card.screenshot();
        expect(image).toMatchImageSnapshot(customConfig);
      });
      test('type: killer', async () => {
        await page.goto(
          'http://localhost:9009/iframe.html?path=/story/components-card--killer-card&knob-Is captain=&knob-Opened=&knob-Color=blue&knob-Word=Библиотека',
        );
        const card = await page.$('[data-testid=card]');
        const image = await card.screenshot();
        expect(image).toMatchImageSnapshot(customConfig);
      });
      test('type: citizen', async () => {
        await page.goto(
          'http://localhost:9009/iframe.html?path=/story/components-card--citizen-card&knob-Is captain=&knob-Opened=&knob-Color=blue&knob-Word=Библиотека',
        );
        const card = await page.$('[data-testid=card]');
        const image = await card.screenshot();
        expect(image).toMatchImageSnapshot(customConfig);
      });
    });
    describe('state: opened', () => {
      test('type: team', async () => {
        await page.goto(
          'http://localhost:9009/iframe.html?path=/story/components-card--team-card&knob-Is captain=&knob-Opened=true&knob-Color=blue&knob-Word=Библиотека',
        );
        const card = await page.$('[data-testid=card]');
        const image = await card.screenshot();
        expect(image).toMatchImageSnapshot(customConfig);
      });
      test('type: killer', async () => {
        await page.goto(
          'http://localhost:9009/iframe.html?path=/story/components-card--killer-card&knob-Is captain=&knob-Opened=true&knob-Color=blue&knob-Word=Библиотека',
        );
        const card = await page.$('[data-testid=card]');
        const image = await card.screenshot();
        expect(image).toMatchImageSnapshot(customConfig);
      });
      test('type: citizen', async () => {
        await page.goto(
          'http://localhost:9009/iframe.html?path=/story/components-card--citizen-card&knob-Is captain=&knob-Opened=true&knob-Color=blue&knob-Word=Библиотека',
        );
        const card = await page.$('[data-testid=card]');
        const image = await card.screenshot();
        expect(image).toMatchImageSnapshot(customConfig);
      });
    });
  });
  describe('visually looks correct for captain', () => {
    describe('state: closed', () => {
      test('type: team', async () => {
        await page.goto(
          'http://localhost:9009/iframe.html?path=/story/components-card--team-card&knob-Is captain=true&knob-Opened=&knob-Color=blue&knob-Word=Библиотека',
        );
        const card = await page.$('[data-testid=card]');
        const image = await card.screenshot();
        expect(image).toMatchImageSnapshot(customConfig);
      });
      test('type: killer', async () => {
        await page.goto(
          'http://localhost:9009/iframe.html?path=/story/components-card--killer-card&knob-Is captain=true&knob-Opened=&knob-Color=blue&knob-Word=Библиотека',
        );
        const card = await page.$('[data-testid=card]');
        const image = await card.screenshot();
        expect(image).toMatchImageSnapshot(customConfig);
      });
      test('type: citizen', async () => {
        await page.goto(
          'http://localhost:9009/iframe.html?path=/story/components-card--citizen-card&knob-Is captain=true&knob-Opened=&knob-Color=blue&knob-Word=Библиотека',
        );
        const card = await page.$('[data-testid=card]');
        const image = await card.screenshot();
        expect(image).toMatchImageSnapshot(customConfig);
      });
    });
    describe('state: opened', () => {
      test('type: team', async () => {
        await page.goto(
          'http://localhost:9009/iframe.html?path=/story/components-card--team-card&knob-Is captain=true&knob-Opened=true&knob-Color=blue&knob-Word=Библиотека',
        );
        const card = await page.$('[data-testid=card]');
        const image = await card.screenshot();
        expect(image).toMatchImageSnapshot(customConfig);
      });
      test('type: killer', async () => {
        await page.goto(
          'http://localhost:9009/iframe.html?path=/story/components-card--killer-card&knob-Is captain=true&knob-Opened=true&knob-Color=blue&knob-Word=Библиотека',
        );
        const card = await page.$('[data-testid=card]');
        const image = await card.screenshot();
        expect(image).toMatchImageSnapshot(customConfig);
      });
      test('type: citizen', async () => {
        await page.goto(
          'http://localhost:9009/iframe.html?path=/story/components-card--citizen-card&knob-Is captain=true&knob-Opened=true&knob-Color=blue&knob-Word=Библиотека',
        );
        const card = await page.$('[data-testid=card]');
        const image = await card.screenshot();
        expect(image).toMatchImageSnapshot(customConfig);
      });
    });
  });
});
