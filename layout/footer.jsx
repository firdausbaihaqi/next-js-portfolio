import React, { Component } from "react";

class footer extends Component {
  render() {
    return (
      <footer className="flex justify-center px-4 text-gray-800 dark:text-white">
        <div className="container py-6">
          <hr className="h-px mt-6 border-gray-300 border-none dark:bg-gray-700" />

          <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
            <div>
              <div className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                ReactJS
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default footer;
