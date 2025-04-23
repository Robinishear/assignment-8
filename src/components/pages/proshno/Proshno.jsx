import React from 'react';

const questionAnswers = [
  {
    question: "1. What is useState and how does it work in React?",
    answer: (
      <>
        <code>useState</code> is a React Hook that lets you add state to functional components. It returns a state
        variable and a function to update it. When you call the update function, React re-renders the component with
        the new value.
        <br />
        <strong>Example:</strong> <code>const [count, setCount] = useState(0)</code>
      </>
    )
  },
  {
    question: "2. What is the purpose of useEffect in React?",
    answer: (
      <>
        <code>useEffect</code> is used to handle side effects like data fetching, subscriptions, timers, and DOM
        manipulation in functional components. It runs after the render and can depend on specific variables or run
        once on mount.
        <br />
        <strong>Example:</strong> <code>useEffect(() =&gt; &#123; fetchData() &#125;, [])</code>
      </>
    )
  },
  {
    question: "3. What is a custom hook in React and when should you use one?",
    answer: (
      <>
        A <strong>custom hook</strong> is a reusable function that starts with <code>use</code> and encapsulates
        logic using built-in hooks like <code>useState</code>, <code>useEffect</code>, etc. Use it to reuse stateful
        logic between components without repeating code.
        <br />
        <strong>Example use case:</strong> Form handling, API requests, or syncing localStorage.
      </>
    )
  },
  {
    question: "4. Difference between controlled and uncontrolled components? Which one is better?",
    answer: (
      <>
        <strong>Controlled Components:</strong> The form input’s value is controlled by React state.
        <br />
        <strong>Uncontrolled Components:</strong> The form input manages its own state via the DOM.
        <br />
        <strong>Which is better?</strong> Controlled components are generally preferred because they allow better
        control, validation, and predictable behavior.
      </>
    )
  },
  {
    question: "5. Tell us something about useFormStatus()",
    answer: (
      <>
        <code>useFormStatus()</code> is a React hook (used with React Server Components and forms) from Next.js 13+.
        It gives information about the form’s current status like whether it's pending (submitting), completed, or
        has errors.
        <br />
        <strong>Use case:</strong> Show a loading spinner or disable submit button while the form is submitting.
      </>
    )
  },
];

const Proshno = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {questionAnswers.map((item, index) => (
        <div key={index} className="text-center bg-blue-50 py-12 my-8 rounded-2xl">
          <h2 className="text-xl font-semibold text-blue-600">{item.question}</h2>
          <p className="mt-2 text-gray-700">{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Proshno;
