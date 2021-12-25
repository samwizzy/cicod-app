import React from "react";

function Repository() {
  return (
    <div className="grid">
      <div className="card">
        <h2 className="font-bold text-lg mb-px">Error Boundaries</h2>
        <p>
          Error boundaries are React components that catch JavaScript errors
          anywhere in their child component tree, log those errors, and display
          a fallback UI instead of the component tree that crashed. Error
          boundaries catch errors during rendering, in lifecycle methods, and in
          constructors of the whole tree below them.
        </p>
      </div>
      <div className="card">
        <h2 className="font-bold text-lg mb-px">Higher-Order Components</h2>
        <p>
          A higher-order component (HOC) is an advanced technique in React for
          reusing component logic. HOCs are not part of the React API, per se.
          They are a pattern that emerges from React's compositional nature.
        </p>
      </div>
      <div className="card">
        <h2 className="font-bold text-lg mb-px">Reconciliation</h2>
        <p>
          React provides a declarative API so that you don't have to worry about
          exactly what changes on every update. This makes writing applications
          a lot easier, but it might not be obvious how this is implemented
          within React.
        </p>
      </div>
      <div className="card">
        <h2 className="font-bold text-lg mb-px">The Diffing Algorithm</h2>
        <p>
          When diffing two trees, React first compares the two root elements.
          The behavior is different depending on the types of the root elements.
        </p>
      </div>
      <div className="card">
        <h2 className="font-bold text-lg mb-px">Code-Splitting</h2>
        <p>
          Most React apps will have their files “bundled” using tools like
          Webpack, Rollup or Browserify. Bundling is the process of following
          imported files and merging them into a single file: a “bundle”. This
          bundle can then be included on a webpage to load an entire app at
          once.
        </p>
      </div>
    </div>
  );
}

export default Repository;
