import React from 'react';
import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="flex flex-col items-center">
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
      >
        <label className="second-font font-semibold text-base text-gray-700">
          Your AI Prompt
        </label>

        <textarea
          value={post.prompt}
          onChange={(e) => setPost({ ...post, prompt: e.target.value })}
          placeholder="Write your prompt here..."
          required
          className="form_textarea"
        />
        <label className="second-font font-semibold text-base text-gray-700">
          Tag <span>(#webdevelopment, #idea, #product) </span>
        </label>

        <input
          value={post.tag}
          onChange={(e) => setPost({ ...post, tag: e.target.value })}
          placeholder="Write your prompt here..."
          required
          className="form_input mb-3"
        />

        <div className="flex-end mx-3  gap-4">
          <Link
            href="/"
            className="text-gray-500 text-sm text-right transition-all duration-300 hover:text-red-500"
          >
            {' '}
            Cancel
          </Link>
          <button className="create-btn" type="submit" disabled={submitting}>
            {submitting ? `...${type}` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
