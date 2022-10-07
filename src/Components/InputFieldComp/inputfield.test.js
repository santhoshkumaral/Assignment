
import React from"react";
import { configure, shallow } from "enzyme";
import Adapter from"enzyme-adapter-react-16";
import { useField } from "formik";
import InputFieldComp from"./InputFieldComp";
configure({ adapter: newAdapter() });
jest.mock("formik");
describe("<InputFieldComp/>", () => {
    it("Match Snapshot", () => {
        constmockMeta = {
            touched: false,
            error: "",
            initialError: "",
            initialTouched: false,
            initialValue: "",
            value: "",
        };
        constmockField = {
            value: "",
            checked: false,
            onChange: jest.fn(),
            onBlur: jest.fn(),
            multiple: undefined,
            name: "firstName",
        };
        useField.mockReturnValue([mockField, mockMeta]);
        constmockProps = { ...mockField };
        expect(shallow(<InputFieldComp{...mockProps} />)).toMatchSnapshot();
    });
});





