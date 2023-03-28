import React from 'react';
import { BugButton } from 'app/providers/ErrorBoundary';

function MainPage() {
  return (
    <div>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <BugButton />
      MAIN
    </div>
  );
}

export default MainPage;
