import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
import { Header } from '../components'
const changePen = (args) =>{
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
}
const CustomColorPicker = ({ id, mode }) => <ColorPickerComponent id={id} mode={mode} modeSwitcher={false} inline showButtons={false} change={changePen} />;
const ColorPicker = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 dark:bg-secondary-dark-bg bg-white rounded-3xl'>
    <Header category="App" title="Color Picker"/>
    <div className="text-center">
      <div id="preview"/>
      <div className="flex justify-center items-center gap-20 flex-wrap ">
        <div>
          <p className='text-2xl mt-2 mb-4 font-semibold'>Inline Palette</p>
          <CustomColorPicker
            id='inline-palette'
            mode = "Palette"
          />
        </div>
        <div>
          <p className='text-2xl mt-2 mb-4 font-semibold'>Inline Pallete</p>
          <CustomColorPicker
            id='inline-palette'
            mode = "Picker"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default ColorPicker