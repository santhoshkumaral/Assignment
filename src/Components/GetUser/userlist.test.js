// import React from "react";
// import { mount, shallow } from "enzyme";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import UserList from "./UserList";
configure({ adapter: newAdapter() });
describe("test", () => {
    it("renders", () => {
        constwrapper = shallow(<UserList />);
        expect(
            wrapper.contains(<TableCell align="center">UserName</TableCell>)
        ).toBe(true);
    });
    it("renders table cell", () => {
        constwrapper = shallow(<UserList />);

        constfirstTableRow = wrapper
            .find(Table)
            .find(TableBody)
            .find(TableRow)
            .first();
        consttableCell = firstTableRow.find(TableCell);
    });
});