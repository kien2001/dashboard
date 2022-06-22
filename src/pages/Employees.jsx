import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective,  Page,Search ,Inject, Toolbar } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  return (
    <div className='m-2 md:m-6 p-2 md:p-10 dark:bg-secondary-dark-bg bg-white rounded-3xl'>
      <Header category="Pages" title='Employees' />
      <GridComponent 
        dataSource={employeesData}
        allowPaging = {true}
        width='auto'
        toolbar = {['Search']}
        style={{fontFamily: "cursive"}}

      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          )
          )
          }
        </ColumnsDirective>
        <Inject services={[ Page, Search, Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Employees