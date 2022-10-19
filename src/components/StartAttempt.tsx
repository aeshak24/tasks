import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, updateAttempts] = useState<number>(4);
    const [progress, updateProgress] = useState<boolean>(false);
    function StartQuiz(): void {
        updateProgress(true);
        updateAttempts(attempts - 1);
    }
    function StopQuiz(): void {
        updateProgress(false);
    }
    function Mulligan(): void {
        updateAttempts(attempts + 1);
    }
    return (
        <div>
            <div> Number of attempts: {attempts}</div>
            <Button onClick={StartQuiz} disabled={progress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={StopQuiz} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={Mulligan} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}
