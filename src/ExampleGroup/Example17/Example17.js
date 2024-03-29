import FancyText from './FancyText';
import InspirationGenerator from './InspirationGenerator.js';
import Copyright from './Copyrights.js';

export default function Example17() {
    return (
        <>
            <h1>Example17</h1>
            <FancyText title text="Get Inspired App" />
            <InspirationGenerator>
                <Copyright year={2004} />
            </InspirationGenerator>
        </>
    );
}

