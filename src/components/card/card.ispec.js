/* eslint no-undef: 0 */

describe('<Card />', () => {
  describe('visually looks correct for common user', () => {
    describe('state: closed', () => {
      test('type: team', async () => {
        await page.goto('http://localhost:9009/iframe.html?id=card--team-card');
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
      });
      test('type: killer', async () => {
        await page.goto(
          'http://localhost:9009/iframe.html?id=card--killer-card',
        );
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
      });
      test('type: citizen', async () => {
        await page.goto(
          'http://localhost:9009/iframe.html?id=card--citizen-card',
        );
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
      });
    });
    describe('state: opened', () => {
      test('type: team', async () => {
        await page.goto(
          'http://localhost:9010/iframe.html?path=/story/card--team-card&knob-Opened=true',
        );
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
      });
      test('type: killer', async () => {
        await page.goto(
          'http://localhost:9010/iframe.html?path=/story/card--killer-card&knob-Opened=true',
        );
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
      });
      test('type: citizen', async () => {
        await page.goto(
          'http://localhost:9010/iframe.html?path=/story/card--citizen-card&knob-Opened=true',
        );
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
      });
    });
  });
  describe('visually looks correct for captain', () => {
    describe('state: closed', () => {
      test('type: team', async () => {
        await page.goto(
          'http://localhost:9009/iframe.html?id=card--team-card&knob-Is captain=true',
        );
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
      });
      test('type: killer', async () => {
        await page.goto(
          'http://localhost:9009/iframe.html?id=card--killer-card&knob-Is captain=true',
        );
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
      });
      test('type: citizen', async () => {
        await page.goto(
          'http://localhost:9009/iframe.html?id=card--citizen-card&knob-Is captain=true',
        );
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
      });
    });
    describe('state: opened', () => {
      test('type: team', async () => {
        await page.goto(
          'http://localhost:9009/iframe.html?id=card--team-card&knob-Is captain=true&knob-Opened=true',
        );
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
      });
      test('type: killer', async () => {
        await page.goto(
          'http://localhost:9009/iframe.html?id=card--killer-card&knob-Is captain=true&knob-Opened=true',
        );
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
      });
      test('type: citizen', async () => {
        await page.goto(
          'http://localhost:9009/iframe.html?id=card--citizen-card&knob-Is captain=true&knob-Opened=true',
        );
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
      });
    });
  });
});
