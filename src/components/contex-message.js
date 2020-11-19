import React from 'react';
import {TrashOutline} from '@graywolfai/react-heroicons';

export default function ContextMessage(props) {
    return (
        <div className="contextual-dropdown">
            <div className="contextual-dropdown__row" onClick={() => props.removeFn(props.index)}>
                  { <div className="message-options-menu">
                        <div className="message-options-menu__row">
                            <TrashOutline /><span>Borrar este Message</span>
                        </div>
                    </div> }

                {console.log("eliminar")}
            </div>
        </div>
    )
}