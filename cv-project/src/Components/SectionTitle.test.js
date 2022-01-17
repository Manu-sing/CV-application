import React from "react";
import ReactDOM from "react-dom";
import SectionTitle from "./SectionTitle";


test("it renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SectionTitle />, div);
})