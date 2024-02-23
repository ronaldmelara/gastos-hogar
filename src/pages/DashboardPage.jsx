import React, { useState, useRef } from 'react';
import { CascadeSelect } from 'primereact/cascadeselect';
import { InputNumber } from 'primereact/inputnumber';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';

import "primeflex/primeflex.css";
export const DashboardPage = () => {

    const [selectedItem, setSelectedItem] = useState(null);
    const [monto, setMonto] = useState(0.0);
    const itemsHome = [
        {
            name: 'Casa',
            code: '1',
            items: [
                {
                    cname: 'New South Wales',
                    code: '5'
                    
                },
                {
                    cname: 'Queensland',
                    code: '6'
                },

            ]
        },
        {
            name: 'Auto',
            code: '2',
            items: [
                {
                    cname: 'Quebec',
                    code: '3'
                },
                {
                    cname: 'Ontario',
                    code: '4'
                },

            ]
        }
    ];

  return (
    <>
    <div className='flex align-items-stretch flex-wrap justify-content-center'>
    <Panel header="Gasto" 
    className='w-full min-w-max min-w-min w-4 col-12'>

            <div class="field grid">
                <label htmlFor="ddlCategory" className='col-12 md:col-9'>Categoría: </label>
            <div className='col-12 md:col-9'>
<CascadeSelect value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={itemsHome} 
                optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['items']}
                className="w-full md:w-14rem" breakpoint="767px" placeholder="Item" style={{ minWidth: '14rem' }}  />
            </div>
            </div>
                
            <div className='field grid'>
                <label htmlFor="ddlCategory" className='col-12 md:col-9'>Monto: </label>
                <div className='col-12 md:col-9'>
                <InputNumber value={monto} onValueChange={(e) => setMonto(e.value)} locale="es-CL" minFractionDigits={0} min={1} max={10000000}
                className='w-full md:w-14rem' />
                    </div>
               
            </div>

            <div className='field grid'>

            <Button label="Guardar" className='w-full md:w-14rem'/>
            </div>
      
        </Panel>
        
    </div>
    
    </>
  )
}

