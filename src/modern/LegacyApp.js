import React from 'react';
import lazyLegacyRoot from './lazyLegacyRoot';

const _LegacyApp = lazyLegacyRoot(() => import('../legacy/App'))

export const LegacyApp = () => {
  // eslint-disable-next-line react/jsx-pascal-case
  return <_LegacyApp />
}
