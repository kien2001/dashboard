import React, {useEffect} from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  
  return (
    <div className='m-2 md:m-6 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Pages" title='Orders' />
      <GridComponent 
        id='gridcomp'
        dataSource={ordersData}
        allowSorting={true}
        allowPaging = {true}
        style={{fontFamily: "cursive"}}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          )
          )
          }
        </ColumnsDirective>
        <Inject services={[Sort, Resize, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit]}/>
      </GridComponent>
    </div>
  )
}

export default Orders