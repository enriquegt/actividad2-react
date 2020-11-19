import React from 'react';
import {TrashOutline} from '@graywolfai/react-heroicons';

export default function ContextMenu(props) {
    return (
        <div className="contextual-dropdown">
            <div className="contextual-dropdown__row" onClick={() => props.removeFn(props.index)}>
                  { <div className="tweet-options-menu">
                        <div className="tweet-options-menu__row">
                            <TrashOutline /><span>Borrar este tweet</span>
                        </div>
                    </div> }

                {console.log("eliminar")}
            </div>
        </div>
    )
}