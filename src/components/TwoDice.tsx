import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [die1, updateDie1] = useState<number>(3);
    const [die2, updateDie2] = useState<number>(4);

    function changeNumbers(): void {
        updateDie1(d6());
    }
    function changeNum(): void {
        updateDie2(d6());
    }
    return (
        <div>
            <Button onClick={changeNumbers}>Roll Left</Button>
            <span data-testid="left-die"> {die1}</span>
            <Button onClick={changeNum}>Roll Right</Button>
            <span data-testid="right-die"> {die2}</span>
            {die1 === 1 && die2 === 1 && <span> Lose </span>}
            {die1 === die2 && die1 != 1 && <span> Win </span>}
        </div>
    );
}
