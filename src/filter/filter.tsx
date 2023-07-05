import {FILTER_TYPE_ALL, FILTER_TYPE_DONE, FILTER_TYPE_UNDONE} from "./filter-types.tsx";

type NewFilterProps =  {
    onChange: (type: string) => void
    filterType: string
}
export function Filter({ onChange, filterType }: NewFilterProps) {
    return (
        <div>
            <label>
                All
                <input
                    type="radio"
                    checked={filterType === FILTER_TYPE_ALL}
                    onChange={() => onChange(FILTER_TYPE_ALL)}
                />
            </label>
            <br />
            <label>
                Done
                <input
                    type="radio"
                    checked={filterType === FILTER_TYPE_DONE}
                    onChange={() => onChange(FILTER_TYPE_DONE)}
                />
            </label>
            <br />
            <label>
                Not Done
                <input
                    type="radio"
                    checked={filterType === FILTER_TYPE_UNDONE}
                    onChange={() => onChange(FILTER_TYPE_UNDONE)}
                />
            </label>
        </div>
    )
}