import React from 'react';
import { Link } from 'react-router-dom';

const ContextApi = () => {
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
            What is Context API?
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
            <br />
            <br />
            Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
              React context API: How it works?
              </p>
              <p className="text-gray-700">
              React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. 
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
              How to use Context API?
              </p>
              <p className="text-gray-700">
              You might think to yourself: "Well, I'm convinced. How do I implement Context API in my app?" First, make sure you need it. Sometimes people use shared state across nested components instead of just passing it as props. And if you do need it you should follow these very few steps:
                <br />
                <br />
                <ul className='text-left'>
                    <li>1. Create a folder under your app root named contexts (not required. just a convention)</li>
                    <li>2. Create a file named 'your context name' Context.js, e.g. userContext.js</li>
                    <li>3. import and create a context like so:</li>
                </ul>
              </p>
              
              <ul className='text-left pt-3'>
                <li>4. Create a component that will wrap the provider named Provider e.g. UserProvider Example using React Hooks:</li>
              </ul>
              
            </div>
            
          </div>
          <div className="space-y-8">
            <div>
            <ul className='text-left '>
                <li>5. Create a higher order component to consume the context named: with e.g. withUser
Example using React Hooks:</li>
                <p className="text-gray-700">The difference between the two options above is if you want the context to be a single nested property by this name, to explode it to its properties (which in my opinion is more convenient).</p>
              </ul>
              
              <ul className='text-left pb-3'>
                <li>6. Finally export them</li>
              </ul>
              
              <ul className='text-left pb-3'>
                <li>6. And use them however you like
                   <br /> For example:</li>
              </ul>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
    );
};

export default ContextApi;