export const Filter = ({value, onChange}) => {
    return (
        <label>
            Filter search
            <input type="text" value={value} onChange={onChange}/>
        </label>
    )
}