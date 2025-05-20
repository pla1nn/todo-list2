import { Input, Label } from "./Filter.styled"

export const Filter = ({value, onChange}) => {
    return (
        <Label>
            Filter search
            <Input type="text" value={value} onChange={onChange}/>
        </Label>
    )
}