import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    //how to do enumeration string thingy
    const [Holiday, updateHoliday] = useState<string>("🎄");
    /**
     * alpha()
     * christmas
     * fourth
     * halloween
     * newyears
     * valentines day
     */
    /**
     * date()
     * newyears
     * valentines day
     * fourth
     * halloween
     * christmas
     */
    const alphabetical: Record<string, string> = {
        "🎄": "🎆",
        "🎆": "🎃",
        "🎃": "🍾",
        "🍾": "💖",
        "💖": "🎄"
    };
    const date: Record<string, string> = {
        "🍾": "💖",
        "💖": "🎆",
        "🎆": "🎃",
        "🎃": "🎄",
        "🎄": "🍾"
    };
    return (
        <div>
            <p>Holiday: {Holiday}</p>
            <div>
                <Button
                    onClick={() =>
                        updateHoliday(
                            (currentHoliday) => alphabetical[currentHoliday]
                        )
                    }
                >
                    Advance by Alphabet
                </Button>
            </div>
            <div>
                <Button
                    onClick={() =>
                        updateHoliday((currentHoliday) => date[currentHoliday])
                    }
                >
                    Advance by Year
                </Button>
            </div>
        </div>
    );
}
