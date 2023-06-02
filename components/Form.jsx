import React from 'react';
import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full">
      <h1 className="head_text">
        <span className="blue_gradient">{type} Post</span>
      </h1>

      <p className="desc mb-10">
        {type} and share prompts with other users. You can also use this site to
        create prompts for gpt chat. Good prompts are the backbone of good
        outputs. This is true for ChatGPT and even more so for AI image
        generation tools. But while ChatGPT provides solid responses even with
        super basic prompts, AI art generators tend to require more attention to
        detail—and more attempts—before you get what you're looking for.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl flex flex-col gap-7 glassmorphism"

      ></form>
    </section>
  );
};

export default Form;
