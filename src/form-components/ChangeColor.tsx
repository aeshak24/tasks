import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];
    const DEFAULT_COLOR = COLORS[0];
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    const [color, setColor] = useState<string>(DEFAULT_COLOR);
    function updateColor(event: ChangeEvent) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {COLORS.map((currentColor: string) => (
                    <Form.Check
                        inline
                        key={currentColor}
                        name="colors"
                        type="radio"
                        label={currentColor}
                        value={currentColor}
                        id="color-options-radio-buttons"
                        checked={currentColor === color}
                        onChange={updateColor}
                        style={{ backgroundColor: currentColor }}
                    ></Form.Check>
                ))}
            </div>
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}.
                </span>
            </div>
        </div>
    );
}
