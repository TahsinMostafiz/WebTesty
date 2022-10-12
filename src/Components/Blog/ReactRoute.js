import React from 'react';
import { Link } from 'react-router-dom';

const ReactRoute = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            <Link
              to="/blog"
              aria-label=""
              className='text-red-600 underline'
            >
              Back to Blog Page
            </Link>
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="70326c9b-4a0f-429b-9c76-792941e326d5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{' '}
            What is React Router?
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          React Router is an API for React applications. Most current code is written with React Router 3, although version 4 has been released. React Router uses dynamic routing.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
              Why use React Router?
              </p>
              <p className="text-gray-700">
              React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
              What happens when you need to navigate TWO routing system?
              </p>
              <p className="text-gray-700">
              An API is any place where a piece of code talks to another piece of code, but we often use it to mean somebody's external resource that gives me values, or our own internal database resources.
                <br />
                <br />
                If you are using a frontend and a backend, and you are potentially writing in multiple languages that don't necessarily have the same routing conventions, don't worry! The backend functions just as an API, and the user really doesn't interact with it at all. The routes that used to manage the user experience and the routes that used to manage queries to the database are not the same.
              </p>
            </div>
            
          </div>
          <div className="space-y-8">
          <div>
              <p className="mb-4 text-xl font-medium">
              Using React Router
              </p>
              <p className="text-gray-700">
              First, install React Router, using either yarn or npm.
              </p>
              <p className='bg-slate-400 p-3'>
                yarn add react-router-dom
                <br />
                npm install react-router-dom
              </p>
              <p className="text-gray-700 mb-2">
              Note that in the documentation and in the API, the actual component is called Browser Router . Some people prefer to simply refer to the component as Router, so you may see it aliased or choose to alias it in code, in which case it will be referred to as 'Router' as long as it as been imported with an alias.
              </p>
              <p className='bg-slate-400 p-4'>
                import  BrowserRouter  from 'react-router-dom'
                <br />
                *alternatively, aliased
                <br />
                import  BrowserRouter as Router from 'react-router-dom'
              </p>
              <p className="text-gray-700 mb-2">
                When not using React Router, App is often the highest parent component in React apps. With React Router, however, the Router component needs to be the highest parent. This just lets all of the component use the power of Router, because as a parent, it passes down all of its props to its children, and thus the entire application.
                <br />
                To set this up most simply, in index.js, include:
              </p>
              <p className='bg-slate-400 p-4'>
              ReactDom.render( router  app router )
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    );
};

export default ReactRoute;