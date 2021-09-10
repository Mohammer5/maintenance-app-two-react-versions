import React from 'react';
import { Suspense } from 'react';
import lazyLegacyRoot from './lazyLegacyRoot';

// Lazy-load a component from the bundle using legacy React.
const LegacyApp = lazyLegacyRoot(() => import('../legacy/App'));

export default function App() {
  console.log('> React.version', React.version)

  return (
    <Suspense fallback={<Spinner />}>
      <LegacyApp />
    </Suspense>
  );
}

function Spinner() {
  return null;
}
