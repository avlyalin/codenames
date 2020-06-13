import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/styles/styles.css';
import '../src/icons/icons';
import '../src/utils/i18n';

addParameters({
  options: {
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    showRoots: true,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphonex',
  },
});
