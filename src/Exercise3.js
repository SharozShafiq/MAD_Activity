// Use State hook to manage style of heading and slogan. Heading should be Maroon, slogan should be italic
import {useState} from 'react';

const Header = (props) => {
    const [headingStyle] = useState({ color: 'maroon' });
    const [sloganStyle] = useState({ fontstyle: 'italic'});

    return (
        <div>
            <h1 style={headingStyle}>{props.heading}</h1>
            <h3 style={sloganStyle}>{props.slogan}</h3>
        </div>
    )
}

const Exercise3 = () => {
    return (
        <Header heading="Baham!" slogan="Share Ride Easily with Baham" />
    );
}

export default Exercise3;