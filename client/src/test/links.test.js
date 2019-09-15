import React from 'react';
import Links from '../components/links';
import Enzyme,{shallow} from "enzyme"; 
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});

let wrapper;
beforeEach(() => {
   wrapper = shallow(<Links/>);
});
describe("testing the link component", ()=> {
    test("testing whether it is rendering or not",()=>{
        expect(wrapper.exists()).toBe(true);
    })
    test("testing whether links class is there or not",()=>{
        expect(wrapper.find('.links')).toBeDefined();
    })
    test(" should render 1 <li> ", () => {
        expect(wrapper.find('li')).toHaveLength(3);
    });
})