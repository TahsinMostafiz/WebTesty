import React from 'react';
import { Link } from 'react-router-dom';

const UseRef = () => {
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
            Guide to useRef() and Refs in React
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          In this post you'll learn how to use React.useRef() hook to create persisted mutable values (also known as references or refs), as well as access DOM elements.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
              React useRef Hook
              </p>
              <p className="text-gray-700">
                The useRef Hook allows you to persist values between renders.
                <br />
                <br />
                It can be used to store a mutable value that does not cause a re-render when updated.
                <br />
                <br />
                It can be used to access a DOM element directly.
                <br />
                <br />
                useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component. 
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                Essentially, useRef is like a “box” that can hold a mutable value in its .current property.

                You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with div ref={'myRef '} , React will set its .current property to the corresponding DOM node whenever that node changes.

                However, useRef() is useful for more than the ref attribute. It's handy for keeping any mutable value around similar to how you'd use instance fields in classes.

                This works because useRef() creates a plain JavaScript object. The only difference between useRef() and creating a {'current : ...'} object yourself is that useRef will give you the same ref object on every render.

                Keep in mind that useRef doesn't notify you when its content changes. Mutating the .current property doesn't cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.

              </p>
              
              
            </div>
            
          </div>
          <div className="space-y-8">
            <div>
            
              
            </div>
            
          </div>
        </div>
      </div>
        </div>
    );
};

export default UseRef;