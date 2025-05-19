import React from 'react';

const Loading = () => {
    return (
      <section className='min-h-[calc(100vh-64px)] grid justify-center items-center'>
        <span className="loading loading-spinner text-info"></span>
      </section>
    );
};

export default Loading;