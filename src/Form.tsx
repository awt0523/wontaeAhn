import React, { useState, ChangeEvent } from "react";
interface Props {
  onCreate: OnCreate;
}

function Form({ onCreate }: Props) {
  const [text, setText] = useState("");
  return (
    <form>
      <label>
        <input
          type="text"
          value={text}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
        />
      </label>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          onCreate(text);
          setText("");
        }}
      >
        추가
      </button>
    </form>
  );
}

export default Form;
