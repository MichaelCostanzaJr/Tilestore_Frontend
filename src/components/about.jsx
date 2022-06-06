import './about.css';
import {useState} from 'react';

const About = () => {
    const [visible,setVisible] = useState(false);

    const showEmail = () => {
        setVisible(true);
    };
    const hideEmail = () => {
        setVisible(false);
    };

    const getContent = () => {
        if(visible) {
            return <div>
                        <h3>Costanzamike96@gmail.com</h3>
                        <button onClick={hideEmail} className="btn btn-info">Hide Info</button>
                    </div>;
        }
        else {
            return <div>
                        <p>Click the button below</p>
                        <button onClick={showEmail} className="btn btn-primary">Show Info</button>
                    </div>
        }
    };

    return (
        <div className="about-page">
            <h1>About Me</h1>
            <h2>Name: Michael James Costanza Jr</h2>
            {getContent()}
        </div>
    );
};


export default About;