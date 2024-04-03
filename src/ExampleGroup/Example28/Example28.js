import Heading from './Heading.js';
import Section from './Section.js';
import './Example28.css';

export default function Example28() {
    return (
        <div className="example28">
            <h1>Example 28</h1>
            <Section>
                <Heading level={1}>Title</Heading>
                <Section>
                    <Heading level={2}>Heading</Heading>
                    <Heading level={2}>Heading</Heading>
                    <Heading level={2}>Heading</Heading>
                    <Section>
                        <Heading level={3}>Sub-heading</Heading>
                        <Heading level={3}>Sub-heading</Heading>
                        <Heading level={3}>Sub-heading</Heading>
                        <Section>
                            <Heading level={4}>Sub-sub-heading</Heading>
                            <Heading level={4}>Sub-sub-heading</Heading>
                            <Heading level={4}>Sub-sub-heading</Heading>
                        </Section>
                    </Section>
                </Section>
            </Section>
        </div>
    );
}
