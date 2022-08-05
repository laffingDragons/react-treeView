import React, { useState } from 'react';

export default function TreeChild({ treeChild }) {
    const [openChild, setOpenChild]  = useState(false)

    function openChildToggle() {
        setOpenChild(preState=>{
            return !preState;
        })
    }

    return (
        <div className='pointer'>
            {
                <>
                {treeChild && treeChild.children ?
                    <div className='d-flex p-2' onClick={openChildToggle}>
                    <span > = </span>
                        {treeChild.id}
                    </div>
                      : <div className='d-flex p-2'>{treeChild.id}</div>  }
                    {
                        treeChild && treeChild.children && openChild ?
                            treeChild.children.map(child => {
                                return (
                                    <>
                                    <div className='d-flex p-2'>
                                         <TreeChild className='d-flex p-2' key={child.id} treeChild={child} />
                                    </div>
                                    </>
                                )
                            })
                            : ""
                    }
                </>
            }
        </div>
    )
}
