import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    function ButtonVisibility(): void {
        setVisible(!visible);
    }
    return (
        <div>
            <Button onClick={ButtonVisibility}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}
