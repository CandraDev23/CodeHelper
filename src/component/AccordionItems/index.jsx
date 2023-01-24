import { Accordion } from "react-bootstrap";


function AccordionItems(props) {
    return (
        <>
            <Accordion.Header>{props.header}</Accordion.Header>
            <Accordion.Body>
                {props.body}
            </Accordion.Body>
        </>
    );
}

export default AccordionItems;