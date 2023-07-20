import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [questions, setQuestions] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((response) => response.json())
    .then((data) =>
      setQuestions(data)
    );
  },[questions]);


  if (!questions)
  {
    return( 
      <section>
        <h1>Quiz Questions</h1>
        <p>Loading...</p>
      </section>
    );
  }else
  {
    return (
      <section>
        <h1>Quiz Questions</h1>
          <ul>{questions.map((q) => 
          <QuestionItem
            key={q.id}
            question={q}
          />)}
          </ul>
      </section>
    );
  }
}

export default QuestionList;
