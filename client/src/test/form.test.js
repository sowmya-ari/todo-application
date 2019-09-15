import React from 'react';
import Form from '../components/form';
import Enzyme,{shallow} from "enzyme"; 
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});

let wrapper;
beforeEach(() => {
   wrapper = shallow(<Form/>);
});
describe("testing the form component", ()=> {
    test("testing whether it is rendering or not",()=>{
        expect(wrapper.exists()).toBe(true);
    })
    test("testing whether class is there or not",()=>{
        expect(wrapper.find('.inputContainer')).toBeDefined();
    })
    test(" should render 1 <input> ", () => {
        expect(wrapper.find('input')).toHaveLength(1);
    });
})