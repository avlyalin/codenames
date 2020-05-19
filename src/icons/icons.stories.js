import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { containerDecorator } from '_storybook/container';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Icons',
  decorators: [containerDecorator, withKnobs],
  parameters: {
    viewport: { defaultViewport: 'ipad10p' },
  },
};

export const List = () => {
  const icons = [
    'share-alt',
    'crown',
    'running',
    'users',
    'chevron-down',
    'user-plus',
  ];
  const rows = icons.map((icon, index) => (
    <tr key={index}>
      <td className="border px-4 py-2 text-center">{icon}</td>
      <td className="border px-4 py-2 text-center">
        <FontAwesomeIcon icon={icon} size="lg" />
      </td>
      <td className="border px-4 py-2 ">
        {'<FontAwesomeIcon icon="'}
        {icon}
        {'" size="lg" />'}
      </td>
    </tr>
  ));
  return (
    <table className="table-auto">
      <thead className="font-bold">
        <tr>
          <th className="px-4 py-2 text-center">Name</th>
          <th className="px-4 py-2 text-center">Preview</th>
          <th className="px-4 py-2 text-center">JSX</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
