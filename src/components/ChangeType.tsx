import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [QuestionType, settype] = useState<QuestionType>(
        "short_answer_question"
    );
    function ChangeType(): void {
        if (QuestionType === "multiple_choice_question") {
            settype("short_answer_question");
        } else {
            settype("multiple_choice_question");
        }
    }
    return (
        <div>
            <Button onClick={ChangeType}>Change Type</Button>
            <div>
                {QuestionType === "multiple_choice_question" ? (
                    <span> Multiple Choice</span>
                ) : (
                    <span> Short Answer</span>
                )}
            </div>
            {<span>{QuestionType}</span>}
        </div>
    );
}
