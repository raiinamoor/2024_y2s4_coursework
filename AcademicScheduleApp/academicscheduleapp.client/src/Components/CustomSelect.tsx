import Select from "react-select";
import { Option } from "../Interfaces";

export function CustomSelect({options, placeholder, isMulti=false, onChange} : {options:Option[], placeholder:string, isMulti?:boolean, onChange:(choice:any) => any}) {
    return (<Select className="w-full" options={options} placeholder={placeholder} onChange={onChange} isMulti={isMulti} styles={{
        control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? 'grey' : '#3f3f44',
            background: state.isFocused ? '#55555b' : '#3f3f44',
        }),
        menuList: (baseStyles) => ({
            ...baseStyles,
            background: '#55555b'
        }),
        singleValue: (baseStyles) => ({
            ...baseStyles,
            color: 'lightgray',
        }),
        multiValueLabel: (baseStyles) => ({
            ...baseStyles,
            background: 'lightgray',
            color: '#55555b',
        }),
        option: (baseStyles, state) => ({
            ...baseStyles,
            color: 'lightgray',
            background: state.isFocused ? '#55555b' : '#3f3f44',
        }),
        placeholder: (baseStyles) => ({
            ...baseStyles,
            color: 'lightgray'
        }),
        input: (baseStyles) => ({
            ...baseStyles,
            color: 'lightgray'
        }),
    }}/>
    )
}