import * as React from 'react';
import * as ReactDom from 'react-dom';
import FormTest0 from "./FormTest0";

interface Props {

}

interface State {

}

export default class App extends React.Component<Props, State>{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                react component<br />
                <FormTest0/>
            </div>
        );
    }
}

ReactDom.render(<App/> , document.getElementById("app"))
