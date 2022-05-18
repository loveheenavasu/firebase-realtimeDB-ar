import React from 'react';
import 'w3-css';


const RendererPanel = (props) => {
    return (
        <div className="w3-panel">
            <div className="w3-xlarge w3-wide">Argumented Reality</div>
            <hr />
            <div style={{ margin : '0px', overflow: 'scroll' }}>
                <a-scene embedded arjs>
                    <a-box position='0 0.5 0' material='opacity: 0.5;'></a-box>
                    <a-marker-camera preset='hiro'></a-marker-camera>
                </a-scene>
            </div>
            
        </div>
    )
}
export default RendererPanel;