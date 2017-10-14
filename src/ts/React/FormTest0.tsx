import * as React from 'react';
import Form from "react-jsonschema-form";

interface Props {
    
}

interface State {
    
}

const schema = {
    title: "Todo",
    type: "object",
    required: ["title"],
    properties: {
        title: {type: "string", title: "Title", default: "A new task"},
        done: {type: "boolean", title: "Done?", default: false}
    }
};

export default class FormTest0 extends React.Component<Props, State>{
    constructor(props) {
        super(props);
    }

    render() {
        const log = (type) => console.log.bind(console, type);

        return (
            <div >
                <Form schema={schema}
                      onChange={log("changed")}
                      onSubmit={log("submitted")}
                      onError={log("errors")} />
            </div>
        );
    }
}
