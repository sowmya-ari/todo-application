import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Enzyme,{shallow} from "enzyme"; 
import Form from "../components/form";
import Customrouter from "../components/customrouter" ;
import Links from "../components/links"
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe("checking whether all the components are rendering or not", ()=> {
    test("renders",()=>{
        const wrapper = shallow(<Form />);
        expect(wrapper.exists()).toBe(true);
    })
    test("renders",()=>{
        const wrapper = shallow(<Customrouter/>);
        expect(wrapper.exists()).toBe(true);
    })
    test("renders",()=>{
        const wrapper = shallow(<Links/>);
        expect(wrapper.exists()).toBe(true);
    })
})
