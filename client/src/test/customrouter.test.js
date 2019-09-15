import React from 'react';
import Customrouter from '../components/customrouter';
import Enzyme,{shallow} from "enzyme"; 
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});

let wrapper;
beforeEach(() => {
   wrapper = shallow(<Customrouter/>);
});
describe("testing the customrouter component", ()=> {
    test("testing whether it is rendering or not",()=>{
        expect(wrapper.exists()).toBe(true);
    })
    test("testing whether router class is there or not",()=>{
        expect(wrapper.find('.router')).toBeDefined();
    })
    test(" should render 3 <Route> ", () => {
        expect(wrapper.find('Route')).toHaveLength(3);
    });
})