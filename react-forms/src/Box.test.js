import Box from "./Box";
import { render } from "@testing-library/react";

describe("Box smoke and snapshot", function() {
    it("renders without crashing", function() {
        render(<Box/>)
    });

    it("matches snapshot", function() {
        const {asFragment} = render(<Box/>);
        expect(asFragment()).toMatchSnapshot();
    });
});