import React from "react";
import ReactDOM from "react-dom";
import SectionButton from "./SectionButton";


test("it renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SectionButton />, div);
})